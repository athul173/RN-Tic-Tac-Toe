import { palette } from "./palette";

const defaultTheme = {
  color: {
    appBackground: palette.white82,
    cardBackground: palette.purple,
    cardBackgroundColor: palette.black,
    contentScreen: palette.purple,
    primary: palette.primary,
    grey: palette.grey,
    transparent: palette.transparent,
    black: palette.black,
  },
  spacing: {
    S: 8,
    M: 12,
    L: 16,
  },
};

export const useTheme = () => defaultTheme;
