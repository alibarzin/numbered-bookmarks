import * as vscode from 'vscode';
import * as path from 'path';

type Bookmark = { uri: string; line: number; character: number };
const STORAGE_KEY = 'numberedBookmarks';

export function activate(context: vscode.ExtensionContext) {
	// create decoration types for 0..9 using resources/bookmark-0.svg ... bookmark-9.svg
	const decorations: vscode.TextEditorDecorationType[] = [];
	for (let i = 0; i <= 9; i++) {
		const iconPath = vscode.Uri.file(path.join(context.extensionPath, 'resources', `bookmark-${i}.svg`));
		decorations[i] = vscode.window.createTextEditorDecorationType({
			gutterIconPath: iconPath,
			gutterIconSize: 'contain'
		});
		context.subscriptions.push(decorations[i]);
	}

	// ensure storage exists
	(async () => {
		const state = context.workspaceState;
		if (!state.get(STORAGE_KEY)) {
			const empty: (Bookmark | null)[] = new Array(10).fill(null);
			await state.update(STORAGE_KEY, empty);
		}
		await refreshDecorations(context, decorations);
	})();

	// register toggle and goto commands for 0..9
	for (let i = 0; i <= 9; i++) {
		const toggleCmd = `numberedBookmarks.toggle${i}`;
		const gotoCmd = `numberedBookmarks.goto${i}`;

		const toggleDisposable = vscode.commands.registerCommand(toggleCmd, async () => {
			const editor = vscode.window.activeTextEditor;
			if (!editor) {
				vscode.window.showWarningMessage('No active editor to toggle a bookmark.');
				return;
			}

			const state = context.workspaceState;
			const pos = editor.selection.active;
			const uriStr = editor.document.uri.toString();

			const bookmarks = (state.get(STORAGE_KEY) as (Bookmark | null)[]) || new Array(10).fill(null);

			// If the same-number bookmark exists at the same file+line -> remove it (toggle off)
			const existingSame = bookmarks[i];
			if (existingSame && existingSame.uri === uriStr && existingSame.line === pos.line) {
				bookmarks[i] = null;
				await state.update(STORAGE_KEY, bookmarks);
				vscode.window.showInformationMessage(`Removed bookmark ${i}`);
				await refreshDecorations(context, decorations);
				return;
			}

			// Otherwise: remove any other bookmark that exists at the same file+line
			for (let j = 0; j <= 9; j++) {
				if (j === i) continue;
				const b = bookmarks[j];
				if (b && b.uri === uriStr && b.line === pos.line) {
					bookmarks[j] = null; // remove other bookmark on this line
				}
			}

			// Set/overwrite bookmark i
			bookmarks[i] = { uri: uriStr, line: pos.line, character: pos.character };
			await state.update(STORAGE_KEY, bookmarks);
			vscode.window.showInformationMessage(`Added bookmark ${i} → ${editor.document.fileName}:${pos.line + 1}`);
			await refreshDecorations(context, decorations);
		});
		context.subscriptions.push(toggleDisposable);

		const gotoDisposable = vscode.commands.registerCommand(gotoCmd, async () => {
			const state = context.workspaceState;
			const bookmarks = (state.get(STORAGE_KEY) as (Bookmark | null)[]) || new Array(10).fill(null);
			const bm = bookmarks[i];
			if (!bm) {
				vscode.window.showWarningMessage(`No bookmark set for ${i}.`);
				return;
			}
			try {
				const uri = vscode.Uri.parse(bm.uri);
				const doc = await vscode.workspace.openTextDocument(uri);
				const e = await vscode.window.showTextDocument(doc);
				const pos = new vscode.Position(bm.line, Math.max(0, bm.character));
				e.selection = new vscode.Selection(pos, pos);
				e.revealRange(new vscode.Range(pos, pos), vscode.TextEditorRevealType.InCenter);
			} catch (err) {
				vscode.window.showErrorMessage(`Failed to open bookmark ${i}: ${String(err)}`);
			}
		});
		context.subscriptions.push(gotoDisposable);
	}

	// list command
	const listDisposable = vscode.commands.registerCommand('numberedBookmarks.list', async () => {
		const state = context.workspaceState;
		const bookmarks = (state.get(STORAGE_KEY) as (Bookmark | null)[]) || new Array(10).fill(null);
		const items = bookmarks.map((b, idx) => ({
			label: `${idx}`,
			description: b ? `${vscode.Uri.parse(b!.uri).fsPath}:${b!.line + 1}` : '—'
		}));
		const pick = await vscode.window.showQuickPick(items, { placeHolder: 'Numbered bookmarks' });
		if (!pick) return;
		const idx = Number(pick.label);
		await vscode.commands.executeCommand(`numberedBookmarks.goto${idx}`);
	});
	context.subscriptions.push(listDisposable);

	// refresh when editor changes or document edits happen
	vscode.window.onDidChangeActiveTextEditor(() => refreshDecorations(context, decorations), null, context.subscriptions);
	vscode.workspace.onDidChangeTextDocument(() => refreshDecorations(context, decorations), null, context.subscriptions);
}

async function refreshDecorations(context: vscode.ExtensionContext, decorations: vscode.TextEditorDecorationType[]) {
	const editor = vscode.window.activeTextEditor;
	if (!editor) return;

	// clear all decorations first for the visible editor
	for (let i = 0; i <= 9; i++) {
		editor.setDecorations(decorations[i], []);
	}

	const bookmarks = (context.workspaceState.get(STORAGE_KEY) as (Bookmark | null)[]) || [];

	for (let i = 0; i <= 9; i++) {
		const bm = bookmarks[i];
		if (bm && bm.uri === editor.document.uri.toString()) {
			const pos = new vscode.Position(bm.line, 0);
			editor.setDecorations(decorations[i], [{ range: new vscode.Range(pos, pos) }]);
		}
	}
}

export function deactivate() { }
