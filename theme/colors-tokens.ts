import { Colors, THEME, transparency } from './colors'
import { alpha, token } from './utils'

// The generic syntax tokens are themed here according to the Textmate naming
// convention and the package color semantics.
// See: http://manual.macromates.com/en/language_grammars#naming_conventions.html

//
// Generic syntax tokens
//

export const tokenColors = [
  // ℹ️ No color for generic <meta>, see naming conventions for details
  token('comment', alpha(Colors.schemes[THEME].onSurface, transparency.TEXT), 'italic'),
  // Booleans are constants (Uppercase "constants" are actually variables)
  token('constant', Colors.schemes[THEME].onPrimaryContainer),
  // Entities end up being a lot of things, most noticeably class names, method names
  token('entity', Colors.schemes[THEME].secondary, 'bold'),
  token('invalid', Colors.schemes[THEME].onErrorContainer, 'italic bold underline'),
  // Language keywords like `export` or `return`
  token('keyword', Colors.schemes[THEME].primary),
  // Generic for markup content
  token('markup', Colors.schemes[THEME].onSurface),
  // Includes variable declarations
  token('storage', Colors.schemes[THEME].onSurface),
  token('string', Colors.schemes[THEME].tertiary, 'italic'),
  // Support is meant to be things provided by external frameworks or libraries
  token('support', Colors.schemes[THEME].onSurface),
  token('variable', Colors.schemes[THEME].onPrimaryContainer, 'bold'),
  token('variable.other.constant', Colors.schemes[THEME].tertiary),

  // --- TYPES
  {
    // General type match
    scope: 'support.type',
    settings: {
      foreground: Colors.schemes[THEME].primary,
    },
  },
  {
    // Highlight type assertions - TS "as"
    scope: 'keyword.control.as',
    settings: {
      fontStyle: 'italic',
      foreground: Colors.schemes[THEME].onSurfaceVariant,
    },
  },
  {
    // TS function assertions
    scope: 'keyword.operator.type.asserts, keyword.operator.expression.is',
    settings: {
      foreground: Colors.schemes[THEME].primary,
      fontStyle: 'italic',
    },
  },
  {
    // Named types - covers type aliases, interfaces, and parameters
    scope: 'entity.name.type',
    settings: {
      foreground: Colors.schemes[THEME].onPrimaryContainer,
      fontStyle: 'italic',
    },
  },
]
