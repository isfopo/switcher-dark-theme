import { Colors, THEME, transparency } from '../colors'
import { alpha, token } from '../utils'

/**
 * TODO
 * - Blockquote
 * - Image
 * - Table
 */
export const markdown = [
  // Base color
  token('meta.paragraph.markdown', Colors.schemes[THEME].onSurface),

  // Code comments
  token('comment.block.html', Colors.schemes[THEME].onSurfaceVariant),

  // Headers
  token('entity.name.section.markdown', Colors.schemes[THEME].onPrimaryContainer, 'bold'),
  token(
    'punctuation.definition.heading.markdown',
    Colors.schemes[THEME].onPrimaryContainer,
    'bold',
  ),

  // Code block
  token('markup.inline.raw.string.markdown', Colors.schemes[THEME].onTertiaryContainer), // ` punctuation
  token('punctuation.definition.raw.markdown', Colors.schemes[THEME].onTertiaryContainer), // text

  // Fenced code block (w/out syntax)
  token(
    'markup.fenced_code.block.markdown',
    alpha(Colors.schemes[THEME].onTertiaryContainer, transparency.TEXT),
  ),

  // Horizontal rule
  token('meta.separator.markdown', Colors.schemes[THEME].onSurfaceVariant),

  // Anchors
  token('meta.link.inline.markdown', Colors.schemes[THEME].primary), // base anchor color
  token('markup.underline.link', Colors.schemes[THEME].primary, 'italic'), // link href
  token(
    'meta.link.inline.markdown punctuation.definition.string',
    Colors.schemes[THEME].primary,
  ), // []

  // Anchor definitions
  token('constant.other.reference.link', Colors.schemes[THEME].primary), // text
  token(
    'meta.link.reference.def markup.underline.link',
    Colors.schemes[THEME].primary,
    'italic',
  ), // link href
  token(
    'meta.link.reference.def punctuation.definition.constant',
    Colors.schemes[THEME].primary,
  ), // []

  // Lists
  token('punctuation.definition.list.begin', Colors.schemes[THEME].onPrimaryContainer),

  // Bold
  token('markup.bold.markdown', Colors.schemes[THEME].onSecondaryContainer, 'bold'),

  // Italic
  token('markup.italic.markdown', Colors.schemes[THEME].onSecondaryContainer, 'italic'),
  token(
    'markup.italic.markdown punctuation.definition',
    Colors.schemes[THEME].onSecondaryContainer,
    'italic',
  ),
]
