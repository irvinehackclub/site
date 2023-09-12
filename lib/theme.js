import baseTheme from '@hackclub/theme'

baseTheme.mode = "light";
baseTheme.colors.primary = '#375F3D';
baseTheme.colors.secondary = '#8BCCEE';

baseTheme.colors.green = '#46764D';

baseTheme.fonts = {
  heading: "\"Space Grotesk\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
  body: "system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif",
  monospace: "\"SF Mono\", \"Roboto Mono\", Menlo, Consolas, monospace"
};

baseTheme.config.useColorSchemeMediaQuery = false;

baseTheme.text.ultratitle.fontFamily = '"Phantom Sans"';
baseTheme.text.title.fontFamily = '"Phantom Sans"';

export const theme = baseTheme;
export default theme;