import { getBaseConfig, expert, compare } from "@eodash/eodash/templates";

// Helper to make left-side panels thinner (width 3/3/2) and right-side panels thicker (width 4/4/2) using safe integers
const adjustWidgetLayouts = (widgets) => {
  return widgets.map((w) => {
    // 1. Plain widget objects
    if (w.id) {
      if (w.id === "Tools" || w.id === "Layercontrol" || w.id === "layercontrol" || w.id === "Process") {
        const updated = {
          ...w,
          layout: { ...w.layout, w: "3/3/2" },
        };
        // Extra Tools customization for expert tools
        if (w.id === "Tools") {
          updated.widget = {
            ...updated.widget,
            properties: {
              ...updated.widget.properties,
              layoutTarget: null,
              layoutIcon: null,
            },
          };
        }
        return updated;
      }
      if (w.id === "CompareTools" || w.id === "CompareLayerControl") {
        return {
          ...w,
          layout: { ...w.layout, x: "8/8/10", w: "4/4/2" },
        };
      }
    }

    // 2. Dynamic widget factories (defineWidget functions)
    if (w.defineWidget) {
      const originalDefineWidget = w.defineWidget;
      return {
        ...w,
        defineWidget: (...args) => {
          const result = originalDefineWidget(...args);
          if (result) {
            if (result.id === "Tools" || result.id === "Layercontrol" || result.id === "layercontrol" || result.id === "Process") {
              return {
                ...result,
                layout: { ...result.layout, w: "3/3/2" },
              };
            }
            if (result.id === "Information" || result.id === "Processes" || result.id === "CompareTools" || result.id === "CompareLayerControl" || result.id === "CompareMapProcess") {
              const updated = {
                ...result,
                layout: { ...result.layout, x: "8/8/10", w: "4/4/2" },
              };
              // Customize StacInfo panel to show only title, open description, and assets
              if (result.id === "Information") {
                updated.widget = {
                  ...updated.widget,
                  properties: {
                    ...updated.widget.properties,
                    header: ["title"],
                    tags: [],
                    body: ["description"],
                    footer: [],
                    featured: ["assets"],
                    styleOverride: `
                      main {
                        margin-top: -50px !important;
                      }
                      #body {
                        margin-top: 0px !important;
                        padding-top: 0px !important;
                      }
                      #body ul {
                        margin: 0 !important;
                        padding: 0 !important;
                        list-style: none !important;
                      }
                      #body li {
                        margin: 0 !important;
                        padding: 0 !important;
                      }
                    `
                  }
                };
              }
              return updated;
            }
            if (result.id === "expert-datepicker" || result.id === "expert-Datepicker") {
              return {
                ...result,
                layout: { ...result.layout, x: 3, w: 5 },
              };
            }
          }
          return result;
        },
      };
    }

    return w;
  });
};

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
        btnsPosition: {
          x: "12/8/8",
          y: 1,
          gap: 16,
        },
      },
    },
  },
  widgets: adjustWidgetLayouts(expert.widgets),
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
        btnsPosition: {
          x: "12/8/8",
          y: 1,
          gap: 16,
        },
      },
    },
  },
  widgets: adjustWidgetLayouts(compare.widgets),
};

const config = getBaseConfig({
  id: "Science Hub",
  stacEndpoint:
    //"https://ESA-EarthCODE.github.io/science-hub-catalog/science-hub/catalog.json",
    "http://localhost:9003/science-hub/catalog.json",
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

delete config.templates.lite;
delete config.templates.explore;

export default config;
