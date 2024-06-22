import { Colors, THEME } from '../colors'
import { token } from '../utils'

export const react = [
  // JSX component names, eg <Radical
  token('support.class.component', Colors.schemes[THEME].onPrimaryContainer, 'bold'),

  // JSX HTML names, eg <div
  token('entity.name.tag', Colors.schemes[THEME].onPrimaryContainer),

  // JSX attribute names, eg someProp=
  token('entity.other.attribute-name', Colors.schemes[THEME].secondary, 'italic'),

  // JSX tags punctuation, eg: </
  token('punctuation.definition.tag', Colors.schemes[THEME].onPrimaryContainer),
]
