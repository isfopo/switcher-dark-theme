import { Colors, THEME } from '../colors'
import { token } from '../utils'

export const html = [
  // Match "=" from JSX for HTML attributes
  token('punctuation.separator.key-value.html', Colors.schemes[THEME].secondary),
  token(
    'meta.tag.structure.any.html, meta.tag.inline.any.html',
    Colors.schemes[THEME].primary,
  ),
]
