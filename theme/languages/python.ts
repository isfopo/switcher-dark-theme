import { Colors, THEME } from '../colors'
import { token } from '../utils'

export const python = [
  // --------
  // Keywords
  // --------

  // "import"
  token('keyword.control.import.python', Colors.schemes[THEME].primary),

  // "self"
  token(
    'variable.language.special.self.python',
    Colors.schemes[THEME].secondary,
    'italic',
  ),

  token(
    'variable.parameter.function.language.special.self.python',
    Colors.schemes[THEME].secondary,
    'italic',
  ),

  token('keyword.control.flow.python', Colors.schemes[THEME].tertiary, ''),

  token('meta.attribute.python', Colors.schemes[THEME].primary, 'italic'),

  token('support.type.exception.python', Colors.schemes[THEME].error, 'bold'),

  token('entity.name.type.class.python', Colors.schemes[THEME].primary, 'bold'),

  token('constant.other.caps.python', Colors.schemes[THEME].tertiary, 'bold'),
]
