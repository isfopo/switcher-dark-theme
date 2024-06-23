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

  token('meta.attribute.python', Colors.schemes[THEME].primary, 'italic'),

  token('entity.name.type.class.python', Colors.schemes[THEME].primary, 'bold'),
]
