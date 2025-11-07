# 🔢 Quick Numbered Bookmarks for VS Code

A clean, fast, and reliable Visual Studio Code extension that lets you **add, remove, and jump to numbered bookmarks (0–9)** with simple keyboard shortcuts — just like in JetBrains Rider.
Perfect for developers who want a **quick and precise way** to mark and navigate important code lines without losing focus.

[![Version](https://img.shields.io/visual-studio-marketplace/v/AlirezaBarzin.quick-number-bookmarks?style=for-the-badge&label=VS%20Code%20Marketplace&color=blue)](https://marketplace.visualstudio.com/items?itemName=AlirezaBarzin.quick-number-bookmarks)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/AlirezaBarzin.quick-number-bookmarks?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=AlirezaBarzin.quick-number-bookmarks)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/AlirezaBarzin.quick-number-bookmarks?style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=AlirezaBarzin.quick-number-bookmarks)

---

## 🚀 Features

✅ **Toggle numbered bookmarks (0–9)** — add or remove with the same shortcut.
✅ **Cross-file support** — each bookmark remembers its file and exact cursor position.
✅ **Persistent per-workspace** — bookmarks are saved automatically.
✅ **Quick navigation** — jump instantly without the command palette.
✅ **Bookmark list** — view all bookmarks and jump to any of them in seconds.

---

## ⌨️ Default Keybindings

| Action              | Windows / Linux           | macOS                    |
| :------------------ | :------------------------ | :----------------------- |
| **Toggle bookmark** | `Ctrl + Shift + <number>` | `Cmd + Shift + <number>` |
| **Go to bookmark**  | `Ctrl + <number>`         | `Cmd + <number>`         |

### Example

* `Ctrl + Shift + 1` → Add or remove bookmark **#1** on current line.
* `Ctrl + 1` → Instantly jump to bookmark **#1**.

You can customize these shortcuts in:
**File → Preferences → Keyboard Shortcuts** → search *Quick Numbered Bookmarks*.

---

## 🧭 Commands

Open **Command Palette (Ctrl + Shift + P)** and type:

* `Quick Numbered Bookmarks: Toggle Bookmark N` → Set or remove bookmark **N**.
* `Quick Numbered Bookmarks: Go To Bookmark N` → Jump to bookmark **N**.
* `Quick Numbered Bookmarks: List Bookmarks` → View all bookmarks in a quick-pick menu.

---

## 🧰 Installation

### 🔹 From VS Code Marketplace (Recommended)

1. Open **VS Code**
2. Go to **Extensions** (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for **"Quick Numbered Bookmarks"**
4. Click **Install**

### 🔹 Quick Install
Press `Ctrl+P` / `Cmd+P` and paste:
```bash
ext install AlirezaBarzin.quick-number-bookmarks
```

### 🔹 From VSIX (Alternative)

1. Download the `.vsix` file from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=AlirezaBarzin.quick-number-bookmarks)
2. Run in VS Code:
   ```bash
   code --install-extension quick-number-bookmarks-*.vsix
   ```
   Or use the **Extensions: Install from VSIX** command.

### 🔹 From Source

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Compile TypeScript:
   ```bash
   npm run compile
   ```
4. Press **F5** to open the Extension Development Host for testing.

---

## ⚙️ Configuration

* Bookmarks are stored **per workspace** (via `workspaceState`).
* To make them **global**, switch to `globalState` in `src/extension.ts`.
* Customize keybindings or add more numbers easily via `package.json`.

---

## 🧩 Example Workflow

1. You set `Ctrl + Shift + 1` at the start of a long function.
2. You add `Ctrl + Shift + 2` at the return statement.
3. You jump between them instantly with `Ctrl + 1` and `Ctrl + 2`.
4. Hit `Ctrl + Shift + 1` again to remove the bookmark when done.

No more losing track or scrolling endlessly.

---

## 📊 Marketplace

**Available on VS Code Marketplace:**
[https://marketplace.visualstudio.com/items?itemName=AlirezaBarzin.quick-number-bookmarks](https://marketplace.visualstudio.com/items?itemName=AlirezaBarzin.quick-number-bookmarks)

⭐ **Love this extension?** Please consider leaving a rating and review on the marketplace!

---

## 🤝 Contributing

Contributions are welcome!
If you have suggestions, bug reports, or want to enhance the experience, open an issue or submit a PR.

**Repository:** [https://github.com/alibarzin/numbered-bookmarks](https://github.com/alibarzin/numbered-bookmarks)

---

## 🪶 License

**MIT License** © 2024 — *Alireza Barzin*

---

## 🔄 Changelog

See the [CHANGELOG.md](CHANGELOG.md) for what's new in each version.

---

⚡ **Quick Numbered Bookmarks** — simple, fast, and built for developers who hate losing their place.