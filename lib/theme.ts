import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

interface stylesType {
  global: (props: GlobalStyleProps) => {
    body: {
      bg: string;
      textShadow: string;
    };
  };
}

const styles: stylesType = {
  global: (props) => ({
    body: {
      bg: mode("#944342", "#944342")(props),
      textShadow: mode("", "0px 0px 3px #202023")(props),
      color: "#f0e7db",
    },
  }),
};

const components = {
  Divider: {
    baseStyle: (props: GlobalStyleProps) => ({
      borderColor: mode("#202023", "inherit")(props),
    }),
  },
  Input: {
    baseStyle: {
      /**
       * Styles set within { variants } will override base styles
       * Styles set within { sizes } will override base styles
       * The Input component uses "md" size and "outline" variant by default.
       *
       * You can unset those defaults by using null in defaultProps:
       *    defaultProps: {
       *      size: null,
       *      variant: null
       *    },
       *
       * You will lose all default styles this way, including things like focus.
       */

      field: {
        backgroundColor: "#F5E1CC",
        border: "#6C3D2A",
        color: "#6C3D2A",
        placeholder: "Find",
        _placeholder: {
          color: "#6C3D2A",
        },
        _active: {
          borderColor: "#6C3D2A",
        },
        // Add custom base styles here
      },
    },
    sizes: {
      /**
       * Input component will receive "md" styles by default
       * Styles set within { variants } will override styles at all sizes
       *
       * The styles below are what Chakra will use unless replaced.
       */
      xs: {
        field: {
          borderRadius: "md",
          fontSize: "sm",
          height: 8,
          paddingX: 2,
          paddingRight: 7,
          _placeholder: {
            fontSize: "xs",
          },
        },
      },
      sm: {
        field: {
          borderRadius: "sm",
          fontSize: "sm",
          height: 8,
          paddingLeft: 3,
          paddingRight: 7,
          _placeholder: {
            fontSize: "sm",
          },
        },
      },
      md: {
        field: {
          borderRadius: "md",
          fontSize: "md",
          height: 10,
          paddingLeft: 4,
          paddingRight: 8,
          _placeholder: {
            fontSize: "md",
          },
        },
      },
      lg: {
        field: {
          borderRadius: "md",
          fontSize: "lg",
          height: 12,
          paddingLeft: 4,
          paddingRight: 8,
          _placeholder: {
            fontSize: "lg",
          },
        },
      },
    },
    variants: {
      /**
       * Input component will use "outline" styles by default.
       * Styles set here will override anything in { baseStyle } and { sizes }
       *
       * The styles below are what Chakra will use unless replaced.
       */
      outline: (props: GlobalStyleProps) => ({
        field: {
          background: "inherit",
          border: "1px solid",
          borderColor: mode("#6C3D2A", "inherit")(props),
          _focus: {
            zIndex: 1,
            borderColor: "#6C3D2A",
            boxShadow: `0 0 0 1px #6C3D2A`,
          },
          _hover: { borderColor: "#6C3D2A" },
        },
      }),
      filled: {
        field: {
          background: "gray.100",
          border: "2px solid",
          borderColor: "transparent",
          _focus: {
            background: "transparent",
            borderColor: "periwinkle",
          },
          _hover: {
            background: "gray.300",
          },
        },
      },
      flushed: {
        field: {
          background: "transparent",
          borderBottom: "1px solid",
          borderColor: "#6C3D2A",
          borderRadius: 0,
          paddingX: 0,
          _focus: {
            borderColor: "#6C3D2A",
            boxShadow: "0 1px 0 #6C3D2A",
          },
        },
      },
      unstyled: {
        field: {
          background: "transparent",
          borderRadius: "md",
          height: "auto",
          paddingX: 0,
        },
      },
    },
    defaultProps: {
      /**
       * Set either or both of these to null to use only what's in { baseStyle }
       */
      size: "md",
      variant: "outline",
    },
  },
};

const colors = {
  MutedRed: "#944342",
  DarkBrown: "#6C3D2A",
  Cream: "#F5E1CC",
  light: "#f0e7db",
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
});

export default theme;
