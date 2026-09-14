/**
 * EagleSoft Pvt Ltd - Centralized Theme Configuration
 * All colors and design tokens are defined here.
 * DO NOT hardcode arbitrary colors in components.
 */

export const theme = {
  colors: {
    primaryDark: "#0288d1",
    primary: "#03a9f4",
    primaryLight: "#b3e5fc",
    accent: "#448aff",
    primaryText: "#212121",
    white: "#FFFFFF",
    background: "#ffffff",
    backgroundAlt: "#f8fafc",
    backgroundSubtle: "#f0f9ff",
    foreground: "#212121",
    muted: "#64748b",
    mutedLight: "#94a3b8",
    border: "#e2e8f0",
    borderLight: "#edf2f7",
    cardBg: "#ffffff",
    cardBorder: "#e2e8f0",
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Inter, system-ui, sans-serif",
  },
  layout: {
    containerMaxWidth: "1280px",
  },
} as const;

export type ThemeColors = typeof theme.colors;
