import { Colors, THEME } from '../colors'
import { token } from '../utils'

export const javascript = [
  // --------------------------------------------------------
  // Constants

  // Boolean values, eg: true
  token('constant.language.boolean', Colors.schemes[THEME].onTertiaryContainer),

  // Null values, eg: null
  token('constant.language.null', Colors.schemes[THEME].error),

  // --------------------------------------------------------
  // Keywords

  // keywords, eg: return, if
  token('keyword.control.flow', Colors.schemes[THEME].onTertiaryContainer, 'bold'),

  // export keyword
  token('keyword.control.export', Colors.schemes[THEME].onTertiaryContainer),

  // keywords import and from in: import someModule from 'some-module'
  token(
    'keyword.control.import, keyword.control.from',
    Colors.schemes[THEME].onSurfaceVariant,
  ),

  // operators, eg = in: const rad = 'radical', ===
  token('keyword.operator', Colors.schemes[THEME].onSurfaceVariant, 'bold'),

  // function in: function radical () {}
  token('storage.type.function', Colors.schemes[THEME].onPrimaryContainer),
  token('storage.type.function.arrow', Colors.schemes[THEME].onPrimaryContainer),

  // --------------------------------------------------------
  // Strings

  // Template strings, eg: `radical-${status}`
  token('string.template', Colors.schemes[THEME].primary),
]
