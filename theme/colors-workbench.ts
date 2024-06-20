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

import { Colors, THEME } from './colors'
import { alpha } from './utils'

//
// Theme colors
//

// --- Theme colors

const PRIMARY = Colors.schemes[THEME].primary
const SECONDARY = Colors.schemes[THEME].secondary
const PRIMARY_HOVER = Colors.schemes[THEME].primaryFixedDim
const SECONDARY_HOVER = Colors.schemes[THEME].secondaryFixedDim

// --- Backgrounds

const PRIMARY_BACKGROUND = Colors.schemes[THEME].surfaceContainerHigh
const LIGHT_BACKGROUND = Colors.schemes[THEME].surfaceContainer
const ANOTHER_BACKGROUND = Colors.schemes[THEME].surfaceDim

// Semi-transparent widget background
const BACKGROUND_WIDGET = alpha(Colors.schemes[THEME].surface, 0.9)
// Drag and drop background for theme, used primarily in list views
const BACKGROUND_DRAG_DROP = alpha(PRIMARY, 0.6)

const INLAYS = Colors.schemes[THEME].surfaceVariant

// --- Borders

const BORDERS = '#0000'

// --- Highlighting

const HIGHLIGHT_CURRENT_LINE = Colors.schemes[THEME].tertiary
const HIGHLIGHT_RANGE = Colors.schemes[THEME].tertiary
const HIGHLIGHT_CURRENT_SELECTION = Colors.schemes[THEME].tertiary
const HIGHLIGHT_CURRENT_SELECTION_MATCH_BORDER = '#ffffff'
const HIGHLIGHT_MATCH = '#ffffff'
const HIGHLIGHT_ADDL_MATCH = '#ffffff'
const HIGHLIGHT_READ_ACCESS = '#ffffff'
const HIGHLIGHT_WRITE_ACCESS = '#ffffff'

// --- Git colors

const DIFF_ADDED = '#ffffff'
const DIFF_REMOVED = '#ffffff'
const MERGE_CURRENT = '#ffffff'
const MERGE_INCOMING = '#ffffff'
const MERGE_COMMON = '#ffffff'

const GIT_ADDED = '#ffffff'
const GIT_MODIFIED = '#ffffff'
const GIT_DELETED = '#ffffff'
const GIT_UNTRACKED = '#ffffff'
const GIT_IGNORED = '#ffffff'
const GIT_CONFLICTING = '#ffffff'
const GIT_SUBMODULE = '#ffffff'

// --- Status colors

const INFO = Colors.schemes[THEME].tertiary
const WARNING = '#ffffff'
const ERROR = Colors.schemes[THEME].error

// Transparent
const TRANSPARENT = '#0000'

// Shadows are show by items that are scrolled and under widgets
const SHADOW = alpha(PRIMARY, 0.5)

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
  foreground: Colors.schemes[THEME].tertiary,
  // Background for text selection inside of inputs and textareas
  // (Type into the find input and then select some text)
  'selection.background': alpha(Colors.schemes[THEME].primary, 0.1),
  // Incoming/Current merge conflict labels use this
  descriptionForeground: INFO,
  // Repro: Search for something with no matches using the find widget
  errorForeground: ERROR,
}

//
// Text
//

const text = {
  'textBlockQuote.background': Colors.schemes[THEME].surfaceDim,
  'textBlockQuote.border': Colors.schemes[THEME].surfaceDim,
  // Only showing inside of hover widget for code snippets (eg hover over chroma.hex())
  // It would be awesome if this showed inside READMEs code blocks...
  'textCodeBlock.background': Colors.schemes[THEME].surfaceDim,
  // Includes link hover state
  'textLink.foreground': SECONDARY,
  'textLink.activeForeground': SECONDARY_HOVER,
  // Monospace font texts
  'textPreformat.foreground': PRIMARY,
  'textSeparator.foreground': null, // unknown
}

//
// Buttons
//

// Same as badges, but with hover
const button = {
  'button.background': PRIMARY,
  'button.foreground': Colors.schemes[THEME].onPrimary,
  'button.hoverBackground': PRIMARY_HOVER,
  // 'button.secondaryForeground',
  // 'button.secondaryBackground',
  // 'button.secondaryHoverBackground',
  // 'checkbox.background'
  // 'checkbox.foreground'
  // 'checkbox.border'
}

//
// Dropdowns
//

const dropdown = {
  'dropdown.background': ANOTHER_BACKGROUND,
  'dropdown.listBackground': BACKGROUND_WIDGET,
  'dropdown.foreground': Colors.schemes[THEME].onSurface,
  'dropdown.border': BORDERS,
}

//
// Scroll bar controls
//

const scrollBarControl = {
  'scrollbar.shadow': SHADOW,
  // Scroll bar is primary with decreasing opacity
  'scrollbarSlider.background': alpha(PRIMARY, 0.1),
  'scrollbarSlider.hoverBackground': alpha(PRIMARY, 0.25),
  'scrollbarSlider.activeBackground': alpha(PRIMARY, 0.4),
}

//
// Badges
//

// Same as buttons
const badge = {
  'badge.background': Colors.schemes[THEME].primary,
  'badge.foreground': Colors.schemes[THEME].onPrimary,
}

//
// Progress bar
//

const progressBar = {
  'progressBar.background': Colors.schemes[THEME].surfaceDim,
}

//
// Lists and trees
//

const listsTrees = {
  // Mouse hover
  'list.hoverBackground': alpha(PRIMARY, 0.05),
  'list.hoverForeground': Colors.schemes[THEME].onPrimary,
  // Keyboard focus - using slightly higher alpha to make selection more obvious,
  // this helps UX for things like project and command dropdown selection with
  // the keyboard
  'list.focusBackground': alpha(PRIMARY, 0.2),
  'list.focusForeground': Colors.schemes[THEME].onPrimary,
  // Selected item when the list container is in focus
  'list.activeSelectionBackground': alpha(PRIMARY, 0.1),
  'list.activeSelectionForeground': Colors.schemes[THEME].onPrimary,
  // Selected item when the list container is NOT in focus. (Currently assuming
  // this really only applies to file explorer view, where having the last file
  // that was selected have a background is distracting, especially if you don't
  // have VSCode focus the file you're viewing when you change files)
  'list.inactiveSelectionBackground': PRIMARY_BACKGROUND,
  'list.inactiveSelectionForeground': Colors.schemes[THEME].onPrimary,
  // Focused item when the list container is NOT in focus
  'list.inactiveFocusBackground': null, // unknown
  // Drag and drop background, shows when you hover a drag item over a droppable area
  'list.dropBackground': BACKGROUND_DRAG_DROP,
  // The text that matches a search term inside of lists
  'list.highlightForeground': Colors.schemes[THEME].onPrimary,
  'list.errorForeground': ERROR,
  'list.warningForeground': WARNING,
  'list.invalidItemForeground': null,

  // Vertical lines in tree view shown for open directories
  'tree.indentGuidesStroke': BORDERS,
}

//
// Inputs
//

const input = {
  'input.background': LIGHT_BACKGROUND,
  'input.border': BORDERS,
  'input.foreground': Colors.schemes[THEME].onSurface,
  'input.placeholderForeground': Colors.schemes[THEME].onSurface,
  // The controls inside of the input for setting search constraints
  'inputOption.activeBorder': BORDERS,
  'inputOption.activeBackground': alpha(PRIMARY, 0.15),
  'inputValidation.errorBackground': ERROR,
  'inputValidation.errorBorder': ERROR,
  'inputValidation.infoBackground': INFO,
  'inputValidation.infoBorder': INFO,
  'inputValidation.warningBackground': WARNING,
  'inputValidation.warningBorder': WARNING,
}

// ========================================================
// Editor, Editor Groups and Editor Tabs
// ========================================================

// Editor groups contain editor instances, and each editor instance is
// represented by a tab
const editorGroup = {
  // Border applies to multiple editor groups
  'editorGroup.border': BORDERS,
  'editorGroup.dropBackground': BACKGROUND_DRAG_DROP,
  // When all tabs are closed the editorGroup is empty, you would see this on
  // opening VSCode without a previous project, eg cmd+shift+n
  'editorGroup.emptyBackground': null,
  'editorGroup.focusedEmptyBorder': TRANSPARENT,
  // If you're not using tabs, show regular background, can't think of a better
  // color for that display
  'editorGroupHeader.noTabsBackground': null,
  'editorGroupHeader.tabsBackground': PRIMARY_BACKGROUND,
  'editorGroupHeader.tabsBorder': BORDERS,
  'editorGroupHeader.border': BORDERS,
}

// Editor tabs
const tab = {
  // Border is *between* tabs, set to background so there isn't a border
  'tab.border': PRIMARY_BACKGROUND,
  'tab.activeBorder': TRANSPARENT,
  'tab.activeBorderTop': BORDERS,
  'tab.activeBackground': PRIMARY_BACKGROUND,
  'tab.activeForeground': Colors.schemes[THEME].onSurface,
  'tab.inactiveBackground': PRIMARY_BACKGROUND,
  'tab.inactiveForeground': Colors.schemes[THEME].onSurface,
  // --- Hover
  'tab.hoverBackground': null,
  'tab.hoverBorder': Colors.schemes[THEME].onSurface,
  // --- Unfocused editor group tabs
  // default styles slightly darken tab colors and look good 👍
  'tab.unfocusedActiveBorder': null,
  'tab.unfocusedActiveBorderTop': null,
  'tab.unfocusedActiveForeground': null,
  'tab.unfocusedHoverBackground': null,
  'tab.unfocusedHoverBorder': null,
  'tab.unfocusedInactiveForeground': null,
}

const editor = {
  'editor.background': LIGHT_BACKGROUND,
  // The editor default foreground shows up in widgets, is the color of the
  // separators in merge conflicts
  'editor.foreground': Colors.schemes[THEME].onPrimary,

  // --- Line number colors
  'editorLineNumber.foreground': Colors.schemes[THEME].onSurface,
  'editorLineNumber.activeForeground': Colors.schemes[THEME].onSurface,

  // Editor highlighting (#highlighting)
  // ------------------------------------
  // Highlighting is not exclusive, the highlighting features often overlay each
  // other.

  // --- Current line (#current_line_highlight)
  // nb: Current line is highlighted only when cursor focus is on that line, so
  // actions like switching to find widget removes current line highlight. The
  // highlight is also removed when making a selection.
  'editor.lineHighlightBackground': alpha(HIGHLIGHT_CURRENT_LINE, 0.07),
  'editor.lineHighlightBorder': TRANSPARENT, // ETOOMUCHBORDER

  // --- Range highlight (#current_range_highlight)
  // Highlights ranges of current matches, including the currently selected
  // match for find and currently selected symbol in Go to symbol. No border
  // because range highlight can match multiple lines for go to symbol and each
  // line gets a border ETOOMUCHCOLOR
  'editor.rangeHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.07),
  'editor.rangeHighlightBorder': TRANSPARENT, // ETOOMUCHBORDER

  // --- Current selection (#current_selection_highlight)
  // nb: The additional matches of the current selection highlight border is an
  // opaque color because it is frequently overlain by the symbol access borders
  // and using an opaque color provides a better base for multiple highlights
  'editor.selectionBackground': alpha(HIGHLIGHT_CURRENT_SELECTION, 0.3),
  'editor.selectionForeground': null, // For high contrast themes
  'editor.inactiveSelectionBackground': null, // Default opacity adjust is 👍
  // Themes highlight of text matching the current selection, include a border
  // to make matches more obvious b/c they're frequently important!
  'editor.selectionHighlightBackground': alpha(HIGHLIGHT_CURRENT_SELECTION, 0.1),
  'editor.selectionHighlightBorder': HIGHLIGHT_CURRENT_SELECTION_MATCH_BORDER,

  // --- Find (#find_highlight)
  // The find editor widget and find panel both use these values, and can both
  // appear at the same time for different searches. The `findMatch` is the
  // currently selected find match, which is automatically selected when using
  // the find widget, but must actively be selected when using the find panel.
  'editor.findMatchBackground': TRANSPARENT,
  'editor.findMatchBorder': alpha(HIGHLIGHT_MATCH, 0.55),
  'editor.findMatchHighlightBackground': TRANSPARENT,
  'editor.findMatchHighlightBorder': alpha(HIGHLIGHT_ADDL_MATCH, 0.8),
  // (select text and type alt+cmd+L to toggle)
  'editor.findRangeHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.07),
  'editor.findRangeHighlightBorder': null, // ETOOMUCHBORDER

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
  'editorCursor.foreground': PRIMARY,

  // --- Editor links colors
  // Links are active when holding cmd on top of them, note that the hover
  // background also shows at this time. Using a bright teal to contrast more
  // with the translucent purple hover
  'editorLink.activeForeground': '#43fdd5',

  // --- Inlay hints
  'editorInlayHint.background': TRANSPARENT,
  'editorInlayHint.foreground': INLAYS,

  // --- Whitespace color
  'editorWhitespace.foreground': null, // Default gray color is muted enough 👍

  // --- Indent guides
  'editorIndentGuide.background': null, // Default gray color is muted enough 👍
  'editorIndentGuide.activeBackground': BACKGROUND_DRAG_DROP, // Mirror rulers

  // --- Ruler color
  'editorRuler.foreground': BACKGROUND_DRAG_DROP,

  // --- Code lens
  'editorCodeLens.foreground': alpha(Colors.schemes[THEME].tertiary, 0.5),

  // --- Bracket match
  'editorBracketMatch.background': null,
  'editorBracketMatch.border': Colors.schemes[THEME].tertiary,

  // --- Unused source code
  // (Ref: Create a fn with parameters that aren't used)
  // Dim opacity on unused code, but don't add a border as this is often done by
  // linters and we don't want to double up
  'editorUnnecessaryCode.border': null,
  'editorUnnecessaryCode.opacity': '#0000006e',

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
  'editor.snippetTabstopHighlightBorder': Colors.schemes[THEME].primaryFixedDim,
  'editor.snippetFinalTabstopHighlightBackground': alpha(PRIMARY, 0.1),
  'editor.snippetFinalTabstopHighlightBorder': Colors.schemes[THEME].primaryFixed,
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
  'editorWidget.border': Colors.schemes[THEME].onSurface,
  'editorWidget.resizeBorder': PRIMARY_HOVER,
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
  // 'minimap.background': PRIMARY_BACKGROUND,
  'minimap.findMatchHighlight': alpha(HIGHLIGHT_MATCH, 0.75),
  'minimapGutter.addedBackground': GIT_ADDED,
  'minimapGutter.modifiedBackground': GIT_MODIFIED,
  'minimapGutter.deletedBackground': GIT_DELETED,
}

//
// Peek View
//

const peekView = {
  'peekView.border': Colors.schemes[THEME].onPrimary,
  'peekViewEditor.background': PRIMARY_BACKGROUND,
  'peekViewEditorGutter.background': PRIMARY_BACKGROUND,
  'peekViewEditor.matchHighlightBackground': alpha(Colors.schemes[THEME].onPrimary, 0.15),
  'peekViewEditor.matchHighlightBorder': '#0000',
  'peekViewResult.background': PRIMARY_BACKGROUND,
  'peekViewResult.fileForeground': Colors.schemes[THEME].onSurface,
  'peekViewResult.lineForeground': Colors.schemes[THEME].onSurface,

  // The background of all matches in the peek sidebar
  'peekViewResult.matchHighlightBackground': alpha(HIGHLIGHT_RANGE, 0.2),

  // The background and foreground color for the entire line of the current
  // match selection in the peek sidebar
  'peekViewResult.selectionBackground': alpha(HIGHLIGHT_RANGE, 0.1),
  'peekViewResult.selectionForeground': SECONDARY,

  'peekViewTitle.background': PRIMARY_BACKGROUND,
  'peekViewTitleLabel.foreground': SECONDARY,
  'peekViewTitleDescription.foreground': Colors.schemes[THEME].onSurface,
}

//
// Activity Bar
//

const activityBar = {
  'activityBar.background': PRIMARY_BACKGROUND,
  'activityBar.dropBackground': BACKGROUND_DRAG_DROP,
  'activityBar.border': BORDERS,
  'activityBar.foreground': Colors.schemes[THEME].onPrimary,
  'activityBar.inactiveForeground': alpha(Colors.schemes[THEME].onPrimary, 0.6),
  'activityBar.activeBorder': Colors.schemes[THEME].onPrimary,
  // Badges
  'activityBarBadge.background': badge['badge.background'],
  'activityBarBadge.foreground': badge['badge.foreground'],
}

//
// Panel
//

// Panels are shown below the editor area and contain views like Output and
// Integrated Terminal.
const panel = {
  'panel.background': PRIMARY_BACKGROUND,
  'panel.border': BORDERS,
  'panel.dropBackground': BACKGROUND_DRAG_DROP,
  // Panel title
  'panelTitle.activeBorder': PRIMARY,
  'panelTitle.activeForeground': Colors.schemes[THEME].onSurface,
  'panelTitle.inactiveForeground': Colors.schemes[THEME].onSurface,
}

//
// Sidebar
//

// Contains the Explore/Debug/Extension/etc. views
const sideBar = {
  'sideBar.background': PRIMARY_BACKGROUND,
  'sideBar.foreground': Colors.schemes[THEME].onSurface,
  'sideBar.border': BORDERS,
  'sideBar.dropBackground': BACKGROUND_DRAG_DROP,
  // The title for the entire side bar, eg 'EXPLORER' or 'DEBUG'
  'sideBarTitle.foreground': Colors.schemes[THEME].onSurface,
  // Side bar sections for features
  'sideBarSectionHeader.background': PRIMARY_BACKGROUND, // same bg for subtler headers
  'sideBarSectionHeader.foreground': Colors.schemes[THEME].onSurface,
  'sideBarSectionHeader.border': TRANSPARENT, // ?? Maybe add a color here ??
}

//
// Status Bar
//

// Bar at bottom of application with current statuses and info
const statusBar = {
  'statusBar.background': PRIMARY_BACKGROUND,
  'statusBar.foreground': Colors.schemes[THEME].onSurface,
  'statusBar.border': BORDERS,
  // DEBUGGING MODE
  'statusBar.debuggingBackground': PRIMARY_BACKGROUND,
  'statusBar.debuggingForeground': SECONDARY,
  'statusBar.debuggingBorder': PRIMARY,
  // NO FOLDER MODE
  'statusBar.noFolderBackground': Colors.schemes[THEME].surfaceBright,
  'statusBar.noFolderForeground': Colors.schemes[THEME].onSurface,
  'statusBar.noFolderBorder': Colors.schemes[THEME].onPrimary,
  // ℹ️ You can only style the background of status bar items
  'statusBarItem.prominentBackground': Colors.schemes[THEME].onPrimary,
  'statusBarItem.prominentHoverBackground': Colors.schemes[THEME].onPrimaryFixedVariant,
  'statusBarItem.hoverBackground': alpha(Colors.schemes[THEME].secondary, 0.2),
  'statusBarItem.activeBackground': Colors.schemes[THEME].onPrimary,
}

//
// Title Bar
//

// Bar at top of application with title of project
const titleBar = {
  'titleBar.activeBackground': Colors.schemes[THEME].primary,
  'titleBar.activeForeground': Colors.schemes[THEME].onPrimary,
  'titleBar.border': BORDERS,
  // Title bar is slightly darkened on blur by default and looks good
  'titleBar.inactiveBackground': null,
  'titleBar.inactiveForeground': null,
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
  'extensionButton.prominentForeground': SECONDARY,
  'extensionButton.prominentBackground': PRIMARY,
  'extensionButton.prominentHoverBackground': PRIMARY_HOVER,
}

//
// Quick Input
//

const quickInput = {
  'pickerGroup.border': BORDERS,
  'pickerGroup.foreground': SECONDARY,
  // Add a fun widget background style to the quick input which opens on go to
  // file, go to symbol, etc.
  'quickInput.background': BACKGROUND_WIDGET,
  'quickInput.foreground': Colors.schemes[THEME].onSurface,
  // 'quickInputTitle.background' ???
  'quickInput.list.focusBackground': alpha(PRIMARY, 0.2),
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
  // Shows when connected to a debug session and an exception is encounered
  'debugExceptionWidget.background': alpha(GIT_CONFLICTING, 0.45), // #ff428a73
  'debugExceptionWidget.border': ERROR,
}

//
// Welcome page
//

const welcomePage = {
  'welcomePage.buttonBackground': Colors.schemes[THEME].surfaceBright,
  'welcomePage.buttonHoverBackground': Colors.schemes[THEME].surfaceDim,
  'walkThrough.embeddedEditorBackground': Colors.schemes[THEME].surface,
}

//
// Breadcrumbs
//

// By default breadcrumbs look good, they have the foreground gray with the
// alpha mito purple and primary accent colors
const breadcrumbs = {
  'breadcrumb.background': PRIMARY_BACKGROUND,
  'breadcrumb.foreground': Colors.schemes[THEME].tertiary,
  // When a breadcrumb is hovered or focused with 'Focus breadcrumbs' command,
  // this will apply
  'breadcrumb.focusForeground': SECONDARY,
  // After a focused breadcrumb has been opened to show the picker, it is active
  // and this will apply
  'breadcrumb.activeSelectionForeground': SECONDARY,
  // Dropdown triggered when you click a breadcrum
  'breadcrumbPicker.background': BACKGROUND_WIDGET,
}

// --------------------------------------------------------
// TERMINAL

const terminal = {
  'terminal.background': PRIMARY_BACKGROUND,
  'terminal.foreground': '#A8D2D4',
  // Border between multiple terminals
  'terminal.border': BORDERS,

  'terminal.selectionBackground': '#874df84d',

  'terminalCursor.background': '#ff428e',
  'terminalCursor.foreground': '#defff7',

  'terminal.ansiBlack': '#30317D',
  'terminal.ansiBrightBlack': '#391AB5',

  'terminal.ansiBlue': '#7DD9E4',
  'terminal.ansiBrightBlue': '#84F9FE',

  'terminal.ansiMagenta': '#fa61b8',
  'terminal.ansiBrightMagenta': '#d5358f',

  'terminal.ansiRed': '#FF5395',
  'terminal.ansiBrightRed': '#FF427B',

  'terminal.ansiGreen': '#D8FF4E',
  'terminal.ansiBrightGreen': '#C8FF00',

  'terminal.ansiYellow': '#FFFC7E',
  'terminal.ansiBrightYellow': '#F8D846',

  'terminal.ansiCyan': '#A8FFEF',
  'terminal.ansiBrightCyan': '#83FEE8',

  'terminal.ansiWhite': '#cff0e8',
  'terminal.ansiBrightWhite': '#cbfff2',
}

//
// Gitlens
//

const gitLens = {
  'gitlens.trailingLineBackgroundColor': null,
  'gitlens.trailingLineForegroundColor': '#F425FC59', // 35%
  'gitlens.lineHighlightBackgroundColor': '#F425FC26', // 20%
  'gitlens.lineHighlightOverviewRulerColor': '#F425FC80', // 50%
  'gitlens.gutterBackgroundColor': PRIMARY_BACKGROUND,
  'gitlens.gutterForegroundColor': '#c6d2d1',
  'gitlens.gutterUncommittedForegroundColor': '#85a5a0',
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
