import { getBaseConfig } from "@eodash/eodash/templates";

export default getBaseConfig({
  id: "Science Hub",
  stacEndpoint:
    "https://ESA-EarthCODE.github.io/science-hub-catalog/science-hub/catalog.json",
  brand: {
    noLayout: true,
    name: "Science Hub",
    theme: {
      colors: {
        primary: "#003247",
        secondary: "#00ae92",
        surface: "#ffff",
      },
      variables: {
        "surface-opacity": 0.85,
        "primary-opacity": 0.85,
      },
      // Bank-Wong palette
      collectionsPalette: [
        "#009E73",
        "#E69F00",
        "#56B4E9",
        "#599111",
        "#F0E442",
        "#0072B2",
        "#D55E00",
        "#CC79A7",
        "#994F00",
      ],
    },
    footerText: "",
  },
  templates: {
    expert: {
      background: {
        widget: {
          properties: {
            btns: {
              enableGlobe: false,
              enableSearch: false,
              enableGeolocation: false,
            },
          },
        },
      },
    },
    compare: {
      background: {
        widget: {
          properties: {
            btns: {
              enableGlobe: false,
              enableSearch: false,
              enableGeolocation: false,
            },
          },
        },
      },
    },
  },
});
