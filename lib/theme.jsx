import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#e9eaf5", "#0b0b0e")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#3d7aed", "#5680ce")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  body: `'Raleway', sans-serif`,
};

const colors = {
  grassTeal: "#88ccca",
  blue500: "#2B6CB0",
  isnBlue: "#2D4ABF",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const borderRadius = {
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  ...borderRadius,
});
export default theme;
