/**
 * Default color palette used across the app.
 * Supports both light and dark themes.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#888",
    tabIconSelected: tintColorDark,
  },
};
