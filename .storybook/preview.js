import './tailwind.css'
import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    dark: themes.dark,
    light: themes.normal,
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
  layout: 'centered',
}
