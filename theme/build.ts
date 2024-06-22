import { promises as fs } from 'node:fs'
import path from 'node:path'

import { tokenColors } from './colors-tokens'
import { workbenchColors } from './colors-workbench'
import { comment } from './languages/comment'
import { extensions } from './languages/extensions'
import { yaml } from './languages/yaml'

const theme = {
  $schema: 'vscode://schemas/color-theme',
  author: 'Isaac Poole',
  name: 'Switcher',
  colorSpaceName: 'sRGB',
  semanticClass: 'theme.dark.switcher',
  colors: workbenchColors,
  tokenColors: [
    ...tokenColors,
    ...comment,
    // ...go,
    // ...html,
    // ...markdown,
    // ...javascript,
    // ...json,
    // ...react,
    ...yaml,
    ...extensions,
  ],
} as const

// Delete any editor color definition whose value is null - as a convention this
// lets us track that all theme variables are being set by assigning values to
// all of them
Object.entries(theme.colors).forEach(([key, value]) => {
  // @ts-expect-error -- Haven't gone to the trouble of typing the string index access yet
  if (value === null) delete theme.colors[key]
})

// 🚀 Write to dist
fs.writeFile(
  path.resolve(process.cwd(), 'dist/Switcher.json'),
  JSON.stringify(theme, null, 2),
)
  .then(() => console.log('Build finished'))
  .catch((err) => console.warn(err))
