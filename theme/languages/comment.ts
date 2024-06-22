import { Colors, THEME, transparency } from '../colors'
import { alpha, token } from '../utils'

export const comment = [
  // Documentation comment blocks
  token(
    'comment.block.documentation',
    alpha(Colors.schemes[THEME].onSurface, transparency.TEXT),
  ),
  token(
    'string.quoted.docstring',
    alpha(Colors.schemes[THEME].onSurface, transparency.TEXT),
    'italic',
  ), // same for Python

  // @tags for JSDoc
  token(
    'comment.block.documentation storage',
    alpha(Colors.schemes[THEME].onPrimaryContainer, transparency.TEXT),
  ),

  // {type} for JSDoc
  token(
    'comment.block.documentation entity',
    alpha(Colors.schemes[THEME].onSurface, transparency.TEXT),
  ),

  // name of JSDoc variables documentation
  token(
    'variable.other.jsdoc',
    alpha(Colors.schemes[THEME].onSecondaryContainer, transparency.TEXT),
  ),
]
