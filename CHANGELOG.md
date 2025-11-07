## [1.0.0] - 2025-11-07

### 🚀 Initial Release

**Quick Numbered Bookmarks** - A clean, fast, and reliable Visual Studio Code extension that lets you add, remove, and jump to numbered bookmarks (0–9) with simple keyboard shortcuts.

### ✅ Features Added

- **Toggle numbered bookmarks (0–9)** - Add or remove with the same shortcut
- **Cross-file support** - Each bookmark remembers its file and exact cursor position
- **Persistent per-workspace** - Bookmarks are saved automatically via `workspaceState`
- **Quick navigation** - Jump instantly without the command palette
- **Bookmark list command** - View all bookmarks and jump to any of them

### ⌨️ Keybindings Implemented

| Action              | Windows / Linux           | macOS                    |
| :------------------ | :------------------------ | :----------------------- |
| **Toggle bookmark** | `Ctrl + Shift + <number>` | `Cmd + Shift + <number>` |
| **Go to bookmark**  | `Ctrl + <number>`         | `Cmd + <number>`         |

### 🧭 Commands Available

- `Quick Numbered Bookmarks: Toggle Bookmark N` - Set or remove bookmark N (0-9)
- `Quick Numbered Bookmarks: Go To Bookmark N` - Jump to bookmark N (0-9)  
- `Quick Numbered Bookmarks: List Bookmarks` - View all bookmarks in quick-pick menu

### 🔧 Technical Details

- Built with TypeScript for reliability and maintainability
- Compatible with VS Code 1.70.0 and later
- Proper error handling and state management
- Lightweight and fast performance
- Cross-platform keybinding support

### 📦 Installation Options

- **From VSIX**: Package and install via `vsce package`
- **From Source**: Clone, compile with TypeScript, and test in Extension Development Host

---

*This project follows [Semantic Versioning](https://semver.org/).*

---

**Quick Numbered Bookmarks** - Simple, fast, and built for developers who hate losing their place. ⚡
