// https://vitepress.dev/guide/custom-theme
import ESA from "@eox/pages-theme-esa";
import Layout from "./Layout.vue";

export default {
  extends: ESA,
  Layout,
  async enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      await import("./style.css");
      await import("@eodash/eodash/webcomponent");
      if(!customElements.get('eox-storytelling')) await import("@eox/storytelling");
      await import("@eox/layout");
      await import("@eox/itemfilter");
      await import ("@eox/map");
      await import ("@eox/map/src/plugins/advancedLayersAndSources");
      await import ("@eox/chart");
      await import ("@eox/drawtools");

      // 1. Inject flatpickr stylesheet
      if (!document.getElementById("flatpickr-css")) {
        const link = document.createElement("link");
        link.id = "flatpickr-css";
        link.rel = "stylesheet";
        link.href = "https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css";
        document.head.appendChild(link);
      }

      // 2. Load flatpickr dynamically & setup interceptor
      if (!window.flatpickr) {
        try {
          const flatpickrModule = await import(/* @vite-ignore */ "https://esm.sh/flatpickr");
          const flatpickr = flatpickrModule.default || flatpickrModule;

          window.flatpickr = function(element, config) {
            const modifiedConfig = { ...config };

            // Enable altInput for custom/localized formats while submitting Y-m-d to backend
            modifiedConfig.altInput = true;
            if (!modifiedConfig.altFormat) {
              modifiedConfig.altFormat = "d.m.Y"; // standard European format (DD.MM.YYYY)
            }
            modifiedConfig.dateFormat = "Y-m-d";

            // Safeguard & auto-correct min/max dates from HTML attributes (handles schema min/max)
            if (element && element instanceof HTMLElement) {
              const minAttr = element.getAttribute("min");
              const maxAttr = element.getAttribute("max");
              if (minAttr && !modifiedConfig.minDate) {
                modifiedConfig.minDate = minAttr;
              }
              if (maxAttr && !modifiedConfig.maxDate) {
                modifiedConfig.maxDate = maxAttr;
              }
            }

            return flatpickr(element, modifiedConfig);
          };

          Object.assign(window.flatpickr, flatpickr);
        } catch (e) {
          console.error("Failed to load flatpickr dynamically:", e);
        }
      }

      await import ("@eox/jsonform");

      // 3. Patch eox-jsonform so that any date or date-time schema property automatically gets flatpickr options
      const EOxJSONFormClass = customElements.get("eox-jsonform");
      if (EOxJSONFormClass) {
        const originalSchemaDescriptor = Object.getOwnPropertyDescriptor(EOxJSONFormClass.prototype, "schema") || {
          get() { return this._schema; },
          set(val) { this._schema = val; }
        };

        Object.defineProperty(EOxJSONFormClass.prototype, "schema", {
          get() {
            return originalSchemaDescriptor.get ? originalSchemaDescriptor.get.call(this) : this._schema;
          },
          set(val) {
            if (val) {
              const ensureFlatpickrOptions = (obj) => {
                if (!obj || typeof obj !== "object") return;
                if (obj.properties) {
                  for (const key in obj.properties) {
                    const prop = obj.properties[key];
                    if (prop && typeof prop === "object") {
                      if ((prop.format === "date" || prop.format === "date-time") && prop.type === "string") {
                        prop.options = prop.options || {};
                        prop.options.flatpickr = prop.options.flatpickr || {};
                      }
                      ensureFlatpickrOptions(prop);
                    }
                  }
                }
                if (obj.items) ensureFlatpickrOptions(obj.items);
                if (Array.isArray(obj.anyOf)) obj.anyOf.forEach(ensureFlatpickrOptions);
                if (Array.isArray(obj.allOf)) obj.allOf.forEach(ensureFlatpickrOptions);
                if (Array.isArray(obj.oneOf)) obj.oneOf.forEach(ensureFlatpickrOptions);
              };
              ensureFlatpickrOptions(val);
            }
            if (originalSchemaDescriptor.set) {
              originalSchemaDescriptor.set.call(this, val);
            } else {
              this._schema = val;
            }
          },
          configurable: true,
          enumerable: true
        });
      }

      await import ("@eox/stacinfo");
      await import ("@eox/layercontrol");
      await import ("color-legend-element");
      await import ("@eox/timecontrol");
      await import ("@eox/ui");
    }
  },
};
