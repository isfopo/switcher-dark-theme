import { Colors, THEME } from '../colors'
import { token } from '../utils'

export const csharp = [
  // Match "=" from JSX for HTML attributes
  token('entity.name.type.cs', Colors.schemes[THEME].secondary, 'italic'),
  token('entity.name.type.class.cs', Colors.schemes[THEME].secondary, 'bold'),

  token('storage.modifier.public.cs', Colors.schemes[THEME].primary),

  token('variable.language.this.cs', Colors.schemes[THEME].secondary, 'italic'),
  token('variable.other.object.property.cs', Colors.schemes[THEME].primary),
]
