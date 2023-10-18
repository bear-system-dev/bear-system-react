import React from 'react'
import { ThemeContext } from './useTheme.tsx'

export enum Theme {
  Dark = 'dark',
  Light = 'light',
  Bear = 'bear',
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('How cannot use theme without a theme provider')
  }
  return context
}
