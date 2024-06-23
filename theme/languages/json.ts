import { Colors, THEME, transparency } from '../colors'
import { alpha, token } from '../utils'

export const json = [
  // Property keys
  token('support.type.property-name.json', Colors.schemes[THEME].primary, 'bold'),

  // Property values
  token('source.json string', Colors.schemes[THEME].secondary),

  // Punctuation (Object and Array)
  token(
    'source.json punctuation.separator, source.json punctuation.definition.dictionary, source.json punctuation.definition.array',
    alpha(Colors.schemes[THEME].primary, transparency.INACTIVE),
  ),
]
