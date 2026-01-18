import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
metadata: {
    favicon: "/pay.png", 
  },
  theme: {
    light: {
      background: "oklch(100% 0 none)",
      foreground: "oklch(14.1% 0.004 286)",
      card: "oklch(100% 0 none)",
      cardForeground: "oklch(14.1% 0.004 286)",
      popover: "oklch(100% 0 none)",
      popoverForeground: "oklch(14.1% 0.004 286)",
      primary: "oklch(62.7% 0.17 149)",
      primaryForeground: "oklch(97% 0.015 12.4)",
      secondary: "oklch(96.8% 0.001 286)",
      secondaryForeground: "oklch(21% 0.006 286)",
      muted: "oklch(96.8% 0.001 286)",
      mutedForeground: "oklch(55.2% 0.014 286)",
      accent: "oklch(96.8% 0.001 286)",
      accentForeground: "oklch(21% 0.006 286)",
      destructive: "oklch(63.7% 0.208 25.3)",
      destructiveForeground: "oklch(98.5% 0 none)",
      border: "oklch(92% 0.004 286)",
      input: "oklch(92% 0.004 286)",
      ring: "oklch(62.7% 0.17 149)"
    },
    dark: {
      background: "oklch(14.7% 0.004 49.3)",
      foreground: "oklch(96.2% 0 none)",
      popover: "oklch(20.4% 0 none)",
      popoverForeground: "oklch(96.2% 0 none)",
      card: "oklch(21.6% 0.006 56)",
      cardForeground: "oklch(96.2% 0 none)",
      primary : "oklch(72.3% 0.192 150)",
      primaryForeground: "oklch(26.6% 0.063 153)",
      secondary: "oklch(27.4% 0.005 286)",
      secondaryForeground: "oklch(98.5% 0 none)",
      muted: "oklch(27% 0 none)",
      mutedForeground: "oklch(71.2% 0.013 286)",
      accent: "oklch(26.9% 0.006 34.3)",
      accentForeground: "oklch(98.5% 0 none)",
      destructive: "oklch(39.6% 0.133 25.7)",
      destructiveForeground: "oklch(97.1% 0.013 17.4)",
      border: "oklch(27.4% 0.005 286)",
      input: "oklch(27.4% 0.005 286)",
      ring    : "oklch(52.7% 0.137 150)"
    } 
  },


  site: {
    logo: {
      src: { light: "/pay.png", dark: "/pay.png" },
      alt: "PayMaster Logo",
      width: "300%",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "category",
          label: "Getting Started",
          icon: "sparkles",
          items: [
            "/introduction",
            {
              type: "link",
              icon: "folder-cog",
              badge: {
                label: "New",
                color: "purple",
              },
              label: "API Reference",
              to: "/api",
            },
          ],
        },
        {
          type: "category",
          label: "Modules",
          icon: "box",
          items: [
            "/store-management",
            "/product-management"
          ]
        },
        {
          type: "category",
          label: "Useful Links",
          collapsible: false,
          icon: "link",
          items: [
            {
              type: "link",
              icon: "book",
                label: "PayMaster API",
                to: "https://paymasterafrica.com/",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.bundled.json",
      path: "/api",
    },
  ],
};

export default config;