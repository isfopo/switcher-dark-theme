import { Colors, THEME } from '../colors'
import { token } from '../utils'

export const yaml = [
  // Property keys
  token('entity.name.tag.yaml', Colors.schemes[THEME].primary, 'bold'),

  // Property values (sting and unquoted)
  token('source.yaml string', Colors.schemes[THEME].secondary),

  // Punctuation (sequence -> yaml arrays)
  token(
    'source.yaml punctuation.separator, source.yaml punctuation.definition.sequence',
    Colors.schemes[THEME].onTertiaryContainer,
  ),
]
