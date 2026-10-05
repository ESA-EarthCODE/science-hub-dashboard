import { getBaseConfig, expert, compare } from "@eodash/eodash/templates";

// Customise the expert template to disable layout switching and map buttons
const customExpert = {
  ...expert,
  background: {
    ...expert.background,
    widget: {
      ...expert.background.widget,
      properties: {
        ...expert.background.widget.properties,
        btns: {
          ...expert.background.widget.properties.btns,
          enableGlobe: false,
          enableSearch: false,
          enableGeolocation: false,
        },
      },
    },
  },
  widgets: expert.widgets.map((w) => {
    if (w.id === "Tools") {
      return {
        ...w,
        widget: {
          ...w.widget,
          properties: {
            ...w.widget.properties,
            layoutTarget: null,
            layoutIcon: null,
          },
        },
      };
    }
    return w;
  }),
};

// Customise the compare template to disable map buttons
const customCompare = {
  ...compare,
  background: {
    ...compare.background,
    widget: {
      ...compare.background.widget,
      properties: {
        ...compare.background.widget.properties,
        btns: {
          enableGlobe: false,
          enableSearch: false,
          enableGeolocation: false,
        },
      },
    },
  },
};

export default getBaseConfig({
  id: "Science Hub",
  stacEndpoint:
    "https://ESA-EarthCODE.github.io/science-hub-catalog/science-hub/catalog.json",
    //"http://localhost:8000/science-hub/catalog.json",
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
    expert: customExpert,
    compare: customCompare,
  },
});
