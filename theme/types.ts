export type FontStyle =
  | 'italic'
  | 'bold'
  | 'underline'
  | 'italic bold'
  | 'italic bold underline'

export interface Theme {
  seed: string
  coreColors: CoreColors
  extendedColors: ExtendedColor[]
  schemes: Schemes
  palettes: Palettes
}

export interface CoreColors {
  primary: string
  secondary: string
  tertiary: string
  neutral: string
  neutralVariant: string
}

export interface ExtendedColor {
  name: string
  color: string
  description: string
  harmonized: boolean
}

export interface Palettes {
  primary: Palette
  secondary: Palette
  tertiary: Palette
  neutral: Palette
  'neutral-variant': Palette
}

export interface Schemes {
  light: Scheme
  'light-medium-contrast': Scheme
  'light-high-contrast': Scheme
  dark: Scheme
  'dark-medium-contrast': Scheme
  'dark-high-contrast': Scheme
}

export interface Palette {
  '0': string
  '5': string
  '10': string
  '15': string
  '20': string
  '25': string
  '30': string
  '35': string
  '40': string
  '50': string
  '60': string
  '70': string
  '80': string
  '90': string
  '95': string
  '98': string
  '99': string
  '100': string
}

export interface Scheme {
  primary: string
  surfaceTint: string
  onPrimary: string
  primaryContainer: string
  onPrimaryContainer: string
  secondary: string
  onSecondary: string
  secondaryContainer: string
  onSecondaryContainer: string
  tertiary: string
  onTertiary: string
  tertiaryContainer: string
  onTertiaryContainer: string
  error: string
  onError: string
  errorContainer: string
  onErrorContainer: string
  confirm: string
  onConfirm: string
  confirmContainer: string
  onConfirmContainer: string
  background: string
  onBackground: string
  surface: string
  onSurface: string
  surfaceVariant: string
  onSurfaceVariant: string
  outline: string
  outlineVariant: string
  shadow: string
  scrim: string
  inverseSurface: string
  inverseOnSurface: string
  inversePrimary: string
  primaryFixed: string
  onPrimaryFixed: string
  primaryFixedDim: string
  onPrimaryFixedVariant: string
  secondaryFixed: string
  onSecondaryFixed: string
  secondaryFixedDim: string
  onSecondaryFixedVariant: string
  tertiaryFixed: string
  onTertiaryFixed: string
  tertiaryFixedDim: string
  onTertiaryFixedVariant: string
  surfaceDim: string
  surfaceBright: string
  surfaceContainerLowest: string
  surfaceContainerLow: string
  surfaceContainer: string
  surfaceContainerHigh: string
  surfaceContainerHighest: string
}
