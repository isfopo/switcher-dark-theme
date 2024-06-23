/**
 * Switcher Theme Color Variables
 *
 * Theming with color variables should be handled by element groups. For example the
 * background value shouldn't be set individually for each option, instead theme
 * elements like 'Wells' should be identified, the variables for those elements
 * assigned here, and then the element theming variables should be used throughout
 * the theme, eg: `$wellBackground`.
 *
 * Ideally it should be possible to see the overall theming for everything in this
 * file and only this file would be updated when changing theme color values.
 *
 * Theme Reference: https://code.visualstudio.com/docs/getstarted/theme-color-reference
 * Typings: https://github.com/Microsoft/vscode/blob/main/src/vs/platform/theme/common/colorRegistry.ts
 */

import { Colors, THEME, transparency } from './colors'
import { TRANSPARENT, alpha, brighten } from './utils'

//
// Theme colors
//

// --- Theme colors

const PRIMARY = Colors.schemes[THEME].primary

// --- Backgrounds

const PRIMARY_BACKGROUND = Colors.schemes[THEME].surfaceContainerHigh

// Semi-transparent widget background
const BACKGROUND_WIDGET = alpha(Colors.schemes[THEME].surfaceContainerHighest, 0.9)
// Drag and drop background for theme, used primarily in list views
const BACKGROUND_DRAG_DROP = alpha(Colors.schemes[THEME].surfaceTint, transparency.DROP)

// --- Borders

const BORDERS = '#0000'

// --- Highlighting

const HIGHLIGHT_CURRENT_LINE = Colors.schemes[THEME].tertiary
const HIGHLIGHT_RANGE = Colors.schemes[THEME].tertiary
const HIGHLIGHT_CURRENT_SELECTION = alpha(Colors.schemes[THEME].tertiary, 0.1)
const HIGHLIGHT_MATCH = Colors.schemes[THEME].tertiary
const HIGHLIGHT_READ_ACCESS = Colors.schemes[THEME].tertiary
const HIGHLIGHT_WRITE_ACCESS = Colors.schemes[THEME].tertiary

// --- Git colors

const DIFF_ADDED = Colors.schemes[THEME].confirm
const DIFF_REMOVED = Colors.schemes[THEME].error
const MERGE_CURRENT = Colors.schemes[THEME].primary
const MERGE_INCOMING = Colors.schemes[THEME].secondary
const MERGE_COMMON = Colors.schemes[THEME].tertiary

const GIT_ADDED = Colors.schemes[THEME].confirm
const GIT_MODIFIED = Colors.schemes[THEME].onSecondaryContainer
const GIT_DELETED = Colors.schemes[THEME].error
const GIT_UNTRACKED = alpha(Colors.schemes[THEME].onSurface, transparency.DISABLED)
const GIT_IGNORED = alpha(Colors.schemes[THEME].onSurface, transparency.DISABLED)
const GIT_CONFLICTING = Colors.schemes[THEME].error
const GIT_SUBMODULE = Colors.schemes[THEME].tertiary

// --- Status colors

const INFO = Colors.schemes[THEME].tertiary
const WARNING = Colors.schemes[THEME].onErrorContainer
const ERROR = Colors.schemes[THEME].error

//
// High contrast
//

// This theme is not high contrast
const contrast = {
  contrastActiveBorder: null,
  contrastBorder: null,
}

//
// Base colors
//

const base = {
  focusBorder: TRANSPARENT, // Default to not showing focus borders
  foreground: Colors.schemes[THEME].onSurface,
  disabledForeground: alpha(Colors.schemes[THEME].onSurface, transparency.DISABLED),
  // Background for text selection inside of inputs and textareas
  // (Type into the find input and then select some text)
  'selection.background': alpha(Colors.schemes[THEME].primary, transparency.BACKGROUND),
  'icon.foreground': Colors.schemes[THEME].onSurface,
  'widget.border': TRANSPARENT,
  // Incoming/Current merge conflict labels use this
  descriptionForeground: INFO,
  // Repro: Search for something with no matches using the find widget
  errorForeground: ERROR,
}

//
// Text
//

const text = {
  'textBlockQuote.background': Colors.schemes[THEME].surfaceContainerHigh,
  'textBlockQuote.border': Colors.schemes[THEME].surfaceContainerHigh,
  // Only showing inside of hover widget for code snippets (eg hover over chroma.hex())
  // It would be awesome if this showed inside READMEs code blocks...
  'textCodeBlock.background': Colors.schemes[THEME].surfaceContainerHigh,
  // Includes link hover state
  'textLink.foreground': Colors.schemes[THEME].onSurface,
  'textLink.activeForeground': Colors.schemes[THEME].surfaceContainerHigh,
  // Monospace font texts
  'textPreformat.foreground': Colors.schemes[THEME].onSurface,
  'textSeparator.foreground': null, // unknown
}

//
// Buttons
//

// Same as badges, but with hover
const button = {
  'button.background': Colors.schemes[THEME].primary,
  'button.foreground': Colors.schemes[THEME].onPrimary,
  'button.hoverBackground': brighten(Colors.schemes[THEME].primary, 0.3),
  'button.separator': TRANSPARENT,
  'button.secondaryForeground': Colors.schemes[THEME].onSecondary,
  'button.secondaryBackground': Colors.schemes[THEME].secondary,
  'button.secondaryHoverBackground': brighten(Colors.schemes[THEME].secondary, 0.3),
  'checkbox.background': Colors.schemes[THEME].primary,
  'checkbox.foreground': Colors.schemes[THEME].onPrimary,
  'checkbox.border': Colors.schemes[THEME].primary,
}

//
// Dropdowns
//

const dropdown = {
  'dropdown.background': Colors.schemes[THEME].surfaceContainerHighest,
  'dropdown.listBackground': BACKGROUND_WIDGET,
  'dropdown.foreground': Colors.schemes[THEME].onSurface,
  'dropdown.border': TRANSPARENT,
}

//
// Scroll bar controls
//

const scrollBarControl = {
  'scrollbar.shadow': Colors.schemes[THEME].shadow,
  // Scroll bar is primary with decreasing opacity
  'scrollbarSlider.background': alpha(Colors.schemes[THEME].primary, 0.1),
  'scrollbarSlider.hoverBackground': alpha(Colors.schemes[THEME].primary, 0.25),
  'scrollbarSlider.activeBackground': alpha(Colors.schemes[THEME].primary, 0.4),
}

//
// Badges
//

const badge = {
  'badge.background': Colors.schemes[THEME].primary,
  'badge.foreground': Colors.schemes[THEME].onPrimary,
}

//
// Progress bar
//

const progressBar = {
  'progressBar.background': Colors.schemes[THEME].surfaceContainer,
}

//
// Lists and trees
//

const listsTrees = {
  // Mouse hover
  'list.hoverBackground': alpha(Colors.schemes[THEME].secondary, 0.05),
  'list.hoverForeground': Colors.schemes[THEME].onSecondaryContainer,
  // Keyboard focus - using slightly higher alpha to make selection more obvious,
  // this helps UX for things like project and command dropdown selection with
  // the keyboard
  'list.focusBackground': alpha(Colors.schemes[THEME].secondary, 0.2),
  'list.focusForeground': Colors.schemes[THEME].onSecondaryContainer,
  // Selected item when the list container is in focus
  'list.activeSelectionBackground': alpha(Colors.schemes[THEME].secondary, 0.1),
  'list.activeSelectionForeground': Colors.schemes[THEME].onSecondaryContainer,
  // Selected item when the list container is NOT in focus. (Currently assuming
  // this really only applies to file explorer view, where having the last file
  // that was selected have a background is distracting, especially if you don't
  // have VSCode focus the file you're viewing when you change files)
  'list.inactiveSelectionBackground': Colors.schemes[THEME].surfaceContainer,
  'list.inactiveSelectionForeground': Colors.schemes[THEME].onSurface,
  // Focused item when the list container is NOT in focus
  'list.inactiveFocusBackground': null, // unknown
  // Drag and drop background, shows when you hover a drag item over a droppable area
  'list.dropBackground': alpha(
    Colors.schemes[THEME].secondaryContainer,
    transparency.DROP,
  ),
  // The text that matches a search term inside of lists
  'list.highlightForeground': Colors.schemes[THEME].onSecondaryContainer,
  'list.errorForeground': ERROR,
  'list.warningForeground': WARNING,
  'list.invalidItemForeground': null,

  // Vertical lines in tree view shown for open directories
  'tree.indentGuidesStroke': alpha(Colors.schemes[THEME].secondary, transparency.GUIDES),
}

//
// Inputs
//

const input = {
  'input.background': Colors.schemes[THEME].surfaceContainerHighest,
  'input.border': TRANSPARENT,
  'input.foreground': Colors.schemes[THEME].onSurface,
  'input.placeholderForeground': alpha(
    Colors.schemes[THEME].onSurface,
    transparency.DISABLED,
  ),
  // The controls inside of the input for setting search constraints
  'inputOption.activeBorder': TRANSPARENT,
  'inputOption.activeBackground': alpha(
    Colors.schemes[THEME].secondary,
    transparency.BACKGROUND_HOVER,
  ),
  'inputValidation.errorBackground': Colors.schemes[THEME].error,
  'inputValidation.errorForeground': Colors.schemes[THEME].onError,
  'inputValidation.errorBorder': TRANSPARENT,
  'inputValidation.infoBackground': Colors.schemes[THEME].tertiaryContainer,
  'inputValidation.infoBorder': TRANSPARENT,
  'inputValidation.warningBackground': WARNING,
  'inputValidation.warningBorder': WARNING,
}

// ========================================================
// Editor, Editor Groups and Editor Tabs
// ========================================================

// Editor groups contain editor instances, and each editor instance is
// represented by a tab
const editorGroup = {
  'editorGroup.border': alpha(Colors.schemes[THEME].secondary, transparency.BORDER),
  'editorGroup.dropBackground': BACKGROUND_DRAG_DROP,
  'editorGroup.emptyBackground': Colors.schemes[THEME].surfaceContainer,
  'editorGroup.focusedEmptyBorder': TRANSPARENT,
  'editorGroupHeader.noTabsBackground': Colors.schemes[THEME].surfaceContainer,
  'editorGroupHeader.tabsBackground': Colors.schemes[THEME].surfaceContainer,
  'editorGroupHeader.tabsBorder': TRANSPARENT,
  'editorGroupHeader.border': TRANSPARENT,
}

// Editor tabs
const tab = {
  // Border is *between* tabs, set to background so there isn't a border
  'tab.border': TRANSPARENT,
  'tab.activeBorder': TRANSPARENT,
  'tab.activeBorderTop': TRANSPARENT,
  'tab.activeBackground': Colors.schemes[THEME].surfaceContainerHigh,
  'tab.activeForeground': Colors.schemes[THEME].onSurface,
  'tab.inactiveBackground': Colors.schemes[THEME].surfaceContainer,
  'tab.inactiveForeground': Colors.schemes[THEME].onSurface,
  // --- Hover
  'tab.hoverBackground': Colors.schemes[THEME].surfaceContainerHighest,
  'tab.hoverForeground': Colors.schemes[THEME].onSurfaceVariant,
  // --- Unfocused editor group tabs
  'tab.unfocusedActiveBorder': null,
  'tab.unfocusedActiveBorderTop': null,
  'tab.unfocusedActiveForeground': null,
  'tab.unfocusedHoverBackground': null,
  'tab.unfocusedHoverBorder': null,
  'tab.unfocusedInactiveForeground': null,
}

const editor = {
  'editor.background': Colors.schemes[THEME].surfaceContainerHigh,
  // The editor default foreground shows up in widgets, is the color of the
  // separators in merge conflicts
  'editor.foreground': Colors.schemes[THEME].onSurface,

  // --- Line number colors
  'editorLineNumber.foreground': alpha(
    Colors.schemes[THEME].onSurface,
    transparency.INACTIVE,
  ),
  'editorLineNumber.activeForeground': Colors.schemes[THEME].onPrimaryContainer,

  // Editor highlighting (#highlighting)
  // ------------------------------------
  // Highlighting is not exclusive, the highlighting features often overlay each
  // other.

  // --- Current line (#current_line_highlight)
  // nb: Current line is highlighted only when cursor focus is on that line, so
  // actions like switching to find widget removes current line highlight. The
  // highlight is also removed when making a selection.
  'editor.lineHighlightBackground': alpha(HIGHLIGHT_CURRENT_LINE, 0.07),
  'editor.lineHighlightBorder': TRANSPARENT,

  // --- Range highlight (#current_range_highlight)
  // Highlights ranges of current matches, including the currently selected
  // match for find and currently selected symbol in Go to symbol. No border
  // because range highlight can match multiple lines for go to symbol and each
  'editor.rangeHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.07),
  'editor.rangeHighlightBorder': TRANSPARENT,

  // --- Current selection (#current_selection_highlight)
  // nb: The additional matches of the current selection highlight border is an
  // opaque color because it is frequently overlain by the symbol access borders
  // and using an opaque color provides a better base for multiple highlights
  'editor.selectionBackground': alpha(HIGHLIGHT_CURRENT_SELECTION, 0.3),
  'editor.selectionForeground': null, // For high contrast themes
  'editor.inactiveSelectionBackground': null, // Default opacity adjust is 👍
  // Themes highlight of text matching the current selection, include a border
  // to make matches more obvious b/c they're frequently important!
  'editor.selectionHighlightBackground': HIGHLIGHT_CURRENT_SELECTION,
  'editor.selectionHighlightBorder': HIGHLIGHT_CURRENT_SELECTION,

  // --- Find (#find_highlight)
  // The find editor widget and find panel both use these values, and can both
  // appear at the same time for different searches. The `findMatch` is the
  // currently selected find match, which is automatically selected when using
  // the find widget, but must actively be selected when using the find panel.
  'editor.findMatchBackground': TRANSPARENT,
  'editor.findMatchBorder': TRANSPARENT,
  'editor.findMatchHighlightBackground': TRANSPARENT,
  'editor.findMatchHighlightBorder': TRANSPARENT,
  // (select text and type alt+cmd+L to toggle)
  'editor.findRangeHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.07),
  'editor.findRangeHighlightBorder': TRANSPARENT,

  // --- Symbol access (#symbol_access_highlight)
  // Symbol (and word) access highlighting is shown when the cursor is inside a
  // symbol (although this seems to be mistakenly removed when keyboard is
  // used inside word).
  // nb: highlight is with opacity, this highlight shows up fairly often for
  // mouse users and overlays the other highights. Stronger theming adds a lot
  // of noise to the editor (overlays current line, current selection and find
  // highlights)
  'editor.wordHighlightBackground': alpha(HIGHLIGHT_READ_ACCESS, 0.05),
  'editor.wordHighlightBorder': alpha(HIGHLIGHT_READ_ACCESS, 0.25),
  'editor.wordHighlightStrongBackground': alpha(HIGHLIGHT_WRITE_ACCESS, 0.05),
  'editor.wordHighlightStrongBorder': alpha(HIGHLIGHT_WRITE_ACCESS, 0.25),

  // -- Symbol hover (#symbol_hover_highlight)
  // Highlights a symbol when hovering over it for intellisense
  'editor.hoverHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.25),

  // Editor decorations
  // ------------------------------------

  // --- Editor cursor
  // Cursor: background styles the text underneath the cursor, which we leave as
  // is so regular token colors are applied. Foreground styles the cursor line
  // and cursor background which is really confusing (aka these are flipped to
  // what you would guess they are)
  'editorCursor.background': null,
  'editorCursor.foreground': Colors.schemes[THEME].primary,
  'editorMultiCursor.secondary.foreground': alpha(Colors.schemes[THEME].primary, 0.6),

  // --- Editor links colors
  // Links are active when holding cmd on top of them, note that the hover
  // background also shows at this time. Using a bright teal to contrast more
  // with the translucent purple hover
  'editorLink.activeForeground': Colors.schemes[THEME].primary,

  // --- Inlay hints
  'editorInlayHint.background': TRANSPARENT,
  'editorInlayHint.foreground': alpha(Colors.schemes[THEME].onSurface, 0.5),

  // --- Whitespace color
  'editorWhitespace.foreground': null, // Default gray color is muted enough 👍

  // --- Indent guides
  'editorIndentGuide.background': null, // Default gray color is muted enough 👍
  'editorIndentGuide.activeBackground1': BACKGROUND_DRAG_DROP, // Mirror rulers

  // --- Ruler color
  'editorRuler.foreground': BACKGROUND_DRAG_DROP,

  // --- Code lens
  'editorCodeLens.foreground': alpha(Colors.schemes[THEME].tertiary, 0.5),

  // --- Unused source code
  // (Ref: Create a fn with parameters that aren't used)
  // Dim opacity on unused code, but don't add a border as this is often done by
  // linters and we don't want to double up
  'editorUnnecessaryCode.border': null,
  'editorUnnecessaryCode.opacity': alpha(
    Colors.schemes[THEME].onSurface,
    transparency.DISABLED,
  ),

  // --- Gutter colors
  'editorGutter.background': null, // Defaults to editor bg
  'editorGutter.addedBackground': GIT_ADDED,
  'editorGutter.modifiedBackground': GIT_MODIFIED,
  'editorGutter.deletedBackground': GIT_DELETED,

  // --- Status decorations
  'editorError.foreground': ERROR,
  'editorError.border': null,
  'editorWarning.foreground': WARNING,
  'editorWarning.border': null,
  'editorInfo.foreground': INFO,
  'editorInfo.border': null,
  'editorHint.foreground': null, // unknown
  'editorHint.border': null,

  // --- Snippets
  // Decorations show anytime a snippet with tabstops is triggered
  'editor.snippetTabstopHighlightBackground': alpha(PRIMARY, 0.1),
  'editor.snippetTabstopHighlightBorder': TRANSPARENT,
  'editor.snippetFinalTabstopHighlightBackground': alpha(PRIMARY, 0.1),
  'editor.snippetFinalTabstopHighlightBorder': Colors.schemes[THEME].primaryFixed,
}

const brackets = {
  'editorBracketHighlight.foreground1': Colors.schemes[THEME].onPrimaryContainer,
  'editorBracketHighlight.foreground2': Colors.schemes[THEME].onSecondaryContainer,
  'editorBracketHighlight.foreground3': Colors.schemes[THEME].onTertiaryContainer,
  'editorBracketHighlight.foreground4': Colors.extendedColors[0].color,
  'editorBracketMatch.background': alpha(
    Colors.schemes[THEME].secondaryContainer,
    transparency.INACTIVE,
  ),
  'editorBracketMatch.border': TRANSPARENT,
}

// Overview ruler - located beneath scroll bar on right edge of editor and contains an
// overview of all editor decorations
const editorOverviewRuler = {
  'editorOverviewRuler.border': BORDERS,
  'editorOverviewRuler.findMatchForeground': null,
  'editorOverviewRuler.rangeHighlightForeground': null,
  'editorOverviewRuler.selectionHighlightForeground': null,
  'editorOverviewRuler.wordHighlightForeground': null,
  'editorOverviewRuler.wordHighlightStrongForeground': null,
  'editorOverviewRuler.bracketMatchForeground': null,
  // Status decorations (includes linter)
  'editorOverviewRuler.errorForeground': ERROR,
  'editorOverviewRuler.warningForeground': WARNING,
  'editorOverviewRuler.infoForeground': INFO,
  // Git decorations
  'editorOverviewRuler.modifiedForeground': GIT_MODIFIED,
  'editorOverviewRuler.addedForeground': GIT_ADDED,
  'editorOverviewRuler.deletedForeground': GIT_DELETED,
}

// Editor widgets
const editorWidget = {
  'editorWidget.background': BACKGROUND_WIDGET,
  'editorWidget.border': alpha(Colors.schemes[THEME].onSurface, transparency.BORDER),
  'editorWidget.resizeBorder': Colors.schemes[THEME].secondary,
  // Suggest widget falls back to editor widget values which look good.
  'editorSuggestWidget.background': null,
  'editorSuggestWidget.border': null,
  'editorSuggestWidget.foreground': null,
  'editorSuggestWidget.highlightForeground': null,
  'editorSuggestWidget.selectedBackground': null,
  'editorHoverWidget.background': null,
  'editorHoverWidget.border': null,
  // Widget that shows when navigating between errors/warnings
  'editorMarkerNavigation.background': BACKGROUND_WIDGET,
  // These actually style the borders of the marker navigation
  'editorMarkerNavigationError.background': ERROR,
  'editorMarkerNavigationWarning.background': WARNING,
  'editorMarkerNavigationInfo.background': INFO,
}

// Minimap
const minimap = {
  'minimap.background': alpha(
    Colors.schemes[THEME].surfaceContainerLow,
    transparency.SHADOW,
  ),
  'minimap.findMatchHighlight': alpha(HIGHLIGHT_MATCH, 0.75),
  'minimapGutter.addedBackground': GIT_ADDED,
  'minimapGutter.modifiedBackground': GIT_MODIFIED,
  'minimapGutter.deletedBackground': GIT_DELETED,
}

//
// Peek View
//

const peekView = {
  'peekView.border': Colors.schemes[THEME].tertiary,
  'peekViewEditor.background': Colors.schemes[THEME].surfaceContainer,
  'peekViewEditorGutter.background': Colors.schemes[THEME].surfaceContainerLow,
  'peekViewEditor.matchHighlightBackground': alpha(Colors.schemes[THEME].onPrimary, 0.15),
  'peekViewEditor.matchHighlightBorder': TRANSPARENT,
  'peekViewResult.background': Colors.schemes[THEME].surfaceContainer,
  'peekViewResult.fileForeground': Colors.schemes[THEME].onSurface,
  'peekViewResult.lineForeground': Colors.schemes[THEME].onSurface,

  // The background of all matches in the peek sidebar
  'peekViewResult.matchHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.2),

  // The background and foreground color for the entire line of the current
  // match selection in the peek sidebar
  'peekViewResult.selectionBackground': alpha(HIGHLIGHT_RANGE, 0.1),
  'peekViewResult.selectionForeground': Colors.schemes[THEME].secondary,

  'peekViewTitle.background': PRIMARY_BACKGROUND,
  'peekViewTitleLabel.foreground': Colors.schemes[THEME].secondary,
  'peekViewTitleDescription.foreground': Colors.schemes[THEME].onSurface,
}

//
// Activity Bar
//

const activityBar = {
  'activityBar.background': Colors.schemes[THEME].surfaceContainerLow,
  'activityBar.foreground': Colors.schemes[THEME].secondary,
  'activityBar.border': TRANSPARENT,
  'activityBar.inactiveForeground': alpha(
    Colors.schemes[THEME].secondary,
    transparency.INACTIVE,
  ),
  'activityBar.activeBorder': Colors.schemes[THEME].secondary,
  // Badges
  'activityBarBadge.background': Colors.schemes[THEME].onSecondaryContainer,
  'activityBarBadge.foreground': Colors.schemes[THEME].secondaryContainer,
}

//
// Panel
//

// Panels are shown below the editor area and contain views like Output and
// Integrated Terminal.
const panel = {
  'panel.background': Colors.schemes[THEME].surfaceContainerHigh,
  'panel.border': alpha(Colors.schemes[THEME].secondary, transparency.BORDER),
  // Panel title
  'panelTitle.activeBorder': alpha(Colors.schemes[THEME].secondary, transparency.BORDER),
  'panelTitle.activeForeground': Colors.schemes[THEME].onSurface,
  'panelTitle.inactiveForeground': alpha(
    Colors.schemes[THEME].onSurface,
    transparency.INACTIVE,
  ),
}

//
// Sidebar
//

// Contains the Explore/Debug/Extension/etc. views
const sideBar = {
  'sideBar.background': Colors.schemes[THEME].surfaceContainer,
  'sideBar.foreground': Colors.schemes[THEME].onSurfaceVariant,
  'sideBar.border': BORDERS,
  'sideBar.dropBackground': Colors.schemes[THEME].secondary,
  // The title for the entire side bar, eg 'EXPLORER' or 'DEBUG'
  'sideBarTitle.foreground': Colors.schemes[THEME].onSurface,
  // Side bar sections for features
  'sideBarSectionHeader.background': Colors.schemes[THEME].surfaceContainer, // same bg for subtler headers
  'sideBarSectionHeader.foreground': Colors.schemes[THEME].onSurface,
  'sideBarSectionHeader.border': TRANSPARENT,
  'sideBarStickyScroll.border': TRANSPARENT,
}

//
// Status Bar
//

// Bar at bottom of application with current statuses and info
const statusBar = {
  'statusBar.background': Colors.schemes[THEME].surfaceContainerLow,
  'statusBar.foreground': Colors.schemes[THEME].onSecondaryContainer,
  'statusBar.border': BORDERS,
  // DEBUGGING MODE
  'statusBar.debuggingBackground': Colors.schemes[THEME].secondary,
  'statusBar.debuggingForeground': Colors.schemes[THEME].onSecondary,
  'statusBar.debuggingBorder': null,
  // NO FOLDER MODE
  'statusBar.noFolderBackground': Colors.schemes[THEME].surfaceContainer,
  'statusBar.noFolderForeground': Colors.schemes[THEME].onSurface,
  'statusBar.noFolderBorder': Colors.schemes[THEME].onSecondary,
  // ℹ️ You can only style the background of status bar items
  'statusBarItem.prominentBackground': Colors.schemes[THEME].onSecondary,
  'statusBarItem.prominentHoverBackground': Colors.schemes[THEME].onSecondaryFixedVariant,
  'statusBarItem.hoverBackground': alpha(
    Colors.schemes[THEME].secondary,
    transparency.BACKGROUND_HOVER,
  ),
  'statusBarItem.activeBackground': Colors.schemes[THEME].onSecondary,
}

//
// Title Bar
//

// Bar at top of application with title of project
const titleBar = {
  'titleBar.activeBackground': Colors.schemes[THEME].secondary,
  'titleBar.activeForeground': Colors.schemes[THEME].onSecondary,
  'titleBar.border': TRANSPARENT,
  // Title bar is slightly darkened on blur by default and looks good
  'titleBar.inactiveBackground': Colors.schemes[THEME].surfaceContainerLow,
  'titleBar.inactiveForeground': Colors.schemes[THEME].onSurface,
}

//
// Menu bar
//

const menuBar = {
  'menubar.selectionForeground': null,
  'menubar.selectionBackground': null,
  'menubar.selectionBorder': null,
  'menu.foreground': null,
  'menu.background': null,
  'menu.selectionForeground': null,
  'menu.selectionBackground': null,
  'menu.selectionBorder': null,
}

//
// Extensions
//

const extension = {
  'extensionButton.foreground': Colors.schemes[THEME].onSecondary,
  'extensionButton.background': Colors.schemes[THEME].secondary,
  'extensionButton.hoverBackground': brighten(Colors.schemes[THEME].secondary, 0.3),
  'extensionButton.prominentForeground': Colors.schemes[THEME].onPrimary,
  'extensionButton.prominentBackground': Colors.schemes[THEME].primary,
  'extensionButton.prominentHoverBackground': brighten(
    Colors.schemes[THEME].primary,
    0.3,
  ),
  'extensionButton.separator': TRANSPARENT,
  'extensionIcon.verifiedForeground': alpha(Colors.schemes[THEME].confirm, 0.9),
}

//
// Quick Input
//

const quickInput = {
  'pickerGroup.border': TRANSPARENT,
  'pickerGroup.foreground': Colors.schemes[THEME].secondary,
  // Add a fun widget background style to the quick input which opens on go to
  // file, go to symbol, etc.
  'quickInput.background': BACKGROUND_WIDGET,
  'quickInput.foreground': Colors.schemes[THEME].onSurface,
}

//
// Git
//

const gitDecoration = {
  'gitDecoration.addedResourceForeground': GIT_ADDED,
  'gitDecoration.modifiedResourceForeground': GIT_MODIFIED,
  'gitDecoration.deletedResourceForeground': GIT_DELETED,
  'gitDecoration.untrackedResourceForeground': GIT_UNTRACKED,
  'gitDecoration.ignoredResourceForeground': GIT_IGNORED,
  'gitDecoration.conflictingResourceForeground': GIT_CONFLICTING,
  'gitDecoration.submoduleResourceForeground': GIT_SUBMODULE,
}

//
// Diff editor
//

const diffEditor = {
  // nb: diff borders get added to every line and are too noisy
  'diffEditor.insertedTextBackground': alpha(DIFF_ADDED, 0.09),
  'diffEditor.insertedTextBorder': null, // ETOOMUCHBORDER
  'diffEditor.removedTextBackground': alpha(DIFF_REMOVED, 0.09),
  'diffEditor.removedTextBorder': null, // ETOOMUCHBORDER
  'diffEditor.border': BORDERS,
}

//
// Merge conflicts
//

const mergeConflicts = {
  'merge.currentHeaderBackground': alpha(MERGE_CURRENT, 0.2),
  'merge.currentContentBackground': alpha(MERGE_CURRENT, 0.075),
  'merge.incomingHeaderBackground': alpha(MERGE_INCOMING, 0.2),
  'merge.incomingContentBackground': alpha(MERGE_INCOMING, 0.075),
  'merge.border': BORDERS,
  'merge.commonContentBackground': alpha(MERGE_COMMON, 0.075),
  'merge.commonHeaderBackground': alpha(MERGE_COMMON, 0.2),
  'editorOverviewRuler.currentContentForeground': alpha(MERGE_CURRENT, 0.3),
  'editorOverviewRuler.incomingContentForeground': alpha(MERGE_INCOMING, 0.3),
  'editorOverviewRuler.commonContentForeground': alpha(MERGE_COMMON, 0.3),
}

//
// Debug
//

const debug = {
  // --- Debug status toolbar
  'debugToolBar.background': alpha(Colors.schemes[THEME].surfaceBright, 0.87),
  'debugToolBar.border': TRANSPARENT,

  // --- Breakpoint highlighting
  // Highlight shows on breakpoint stop line
  'editor.stackFrameHighlightBackground': alpha(HIGHLIGHT_READ_ACCESS, 0.12),
  // Highlight shows when selecting frame in stack trace after stopping on breakpoint
  'editor.focusedStackFrameHighlightBackground': alpha(HIGHLIGHT_WRITE_ACCESS, 0.1),

  // --- Debug exception widget
  // Shows when connected to a debug session and an exception is encountered
  'debugExceptionWidget.background': alpha(
    Colors.schemes[THEME].error,
    transparency.BACKGROUND,
  ),
  'debugExceptionWidget.border': TRANSPARENT,
  'debugIcon.breakpointForeground': Colors.schemes[THEME].error,
}

//
// Welcome page
//

const welcomePage = {
  'walkThrough.embeddedEditorBackground': Colors.schemes[THEME].surface,
}

//
// Breadcrumbs
//

const breadcrumbs = {
  'breadcrumb.background': Colors.schemes[THEME].surfaceContainerHigh,
  'breadcrumb.foreground': alpha(Colors.schemes[THEME].onSurface, 0.8),
  // When a breadcrumb is hovered or focused with 'Focus breadcrumbs' command,
  // this will apply
  'breadcrumb.focusForeground': Colors.schemes[THEME].onSurface,
  // After a focused breadcrumb has been opened to show the picker, it is active
  // and this will apply
  'breadcrumb.activeSelectionForeground': Colors.schemes[THEME].onSurface,
  // Dropdown triggered when you click a breadcrum
  'breadcrumbPicker.background': Colors.schemes[THEME].surfaceContainerHigh,
}

// --------------------------------------------------------
// TERMINAL

const terminal = {
  'terminal.background': Colors.schemes[THEME].surfaceContainerHigh,
  'terminal.foreground': Colors.schemes[THEME].onSurface,
  // Border between multiple terminals
  'terminal.border': TRANSPARENT,

  'terminal.selectionBackground': HIGHLIGHT_CURRENT_SELECTION,

  'terminalCursor.background': Colors.schemes[THEME].secondaryContainer,
  'terminalCursor.foreground': Colors.schemes[THEME].onSecondaryContainer,

  'terminal.ansiBlack': Colors.schemes[THEME].surface,
  'terminal.ansiBrightBlack': Colors.schemes[THEME].surfaceBright,

  'terminal.ansiBlue': Colors.schemes[THEME].secondary,
  'terminal.ansiBrightBlue': Colors.schemes[THEME].onSecondaryContainer,

  'terminal.ansiMagenta': '#fa61b8',
  'terminal.ansiBrightMagenta': '#d5358f',

  'terminal.ansiRed': Colors.schemes[THEME].error,
  'terminal.ansiBrightRed': Colors.schemes[THEME].onErrorContainer,

  'terminal.ansiGreen': Colors.schemes[THEME].tertiary,
  'terminal.ansiBrightGreen': Colors.schemes[THEME].onTertiaryContainer,

  'terminal.ansiYellow': '#FFFC7E',
  'terminal.ansiBrightYellow': '#F8D846',

  'terminal.ansiCyan': Colors.schemes[THEME].tertiary,
  'terminal.ansiBrightCyan': Colors.schemes[THEME].onTertiaryContainer,

  'terminal.ansiWhite': Colors.schemes[THEME].onSurfaceVariant,
  'terminal.ansiBrightWhite': Colors.schemes[THEME].onSurface,
}

//
// Gitlens
//

const gitLens = {
  'gitlens.trailingLineBackgroundColor': null,
  'gitlens.trailingLineForegroundColor': alpha(
    Colors.schemes[THEME].onSurface,
    transparency.INACTIVE,
  ),
  'gitlens.lineHighlightBackgroundColor': alpha(
    Colors.schemes[THEME].primary,
    transparency.BACKGROUND,
  ),
  'gitlens.lineHighlightOverviewRulerColor': alpha(
    Colors.schemes[THEME].primary,
    transparency.BACKGROUND,
  ),
  'gitlens.gutterBackgroundColor': PRIMARY_BACKGROUND,
  'gitlens.gutterForegroundColor': Colors.schemes[THEME].onSurfaceVariant,
  'gitlens.gutterUncommittedForegroundColor': Colors.schemes[THEME].onSecondaryContainer,
}

export const workbenchColors = {
  ...activityBar,
  ...badge,
  ...base,
  ...button,
  ...contrast,
  ...diffEditor,
  ...dropdown,
  ...editor,
  ...editorGroup,
  ...brackets,
  ...editorOverviewRuler,
  ...editorWidget,
  ...minimap,
  ...extension,
  ...quickInput,
  ...gitDecoration,
  ...input,
  ...listsTrees,
  ...mergeConflicts,
  ...menuBar,
  ...panel,
  ...peekView,
  ...progressBar,
  ...scrollBarControl,
  ...sideBar,
  ...statusBar,
  ...tab,
  ...text,
  ...titleBar,
  ...debug,
  ...welcomePage,
  ...breadcrumbs,
  ...gitLens,
  ...terminal,
}

export { BORDERS, PRIMARY, PRIMARY_BACKGROUND }
