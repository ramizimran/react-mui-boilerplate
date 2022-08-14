import {
  createTheme,
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import PropTypes from "prop-types";
import { useMemo } from "react";

import { breakpoints, palette, typography } from "themes/config";
import componentsOverride from "./overrides";

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      breakpoints,
      typography,
    }),
    []
  );
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeConfig.propTypes = {
  children: PropTypes.node,
};
