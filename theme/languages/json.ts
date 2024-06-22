import { Colors, THEME, transparency } from '../colors'
import { alpha, token } from '../utils'

export const json = [
  // Property keys
  token('support.type.property-name.json', Colors.schemes[THEME].primary, ''),

  // Property values
  token('source.json string', Colors.schemes[THEME].onPrimaryContainer),

  // Punctuation (Object and Array)
  token(
    'source.json punctuation.separator, source.json punctuation.definition.dictionary, source.json punctuation.definition.array',
    alpha(Colors.schemes[THEME].primary, transparency.INACTIVE),
  ),
]
