---
layout: eodash
---

<script setup>
    import { onMounted, watch } from "vue"
    import { withBase } from 'vitepress'
    import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";
    import dashboardConfig from "./public/configs/dashboard-config.js";

    const configFn = () => dashboardConfig;
function waitForEodashStore(callback) {
    const interval = setInterval(() => {
        if (window.eodashStore) {
            clearInterval(interval)
            callback(window.eodashStore)
            const dash = document.querySelector("eo-dash");
            const style = document.createElement("style");
            style.textContent = `
                .map-buttons-container {
                margin-top: 64px !important;
                }
                .ol-mouse-position {
                font-size: 10px;
                }
                #cursor-coordinates {
                padding: 0px 8px;
                }
                .eodash-overlay p {
                bottom: -4px!important;
                }
                .datePicker {
                    opacity: 0 !important;
                }
                .text-right{
                    display: none !important;
                }
            `;
            dash.shadowRoot.appendChild(style);

            // Inject grid styles into dynamically rendered eox-jsonform components
            const observer = new MutationObserver(() => {
                const jsonForm = dash.shadowRoot.querySelector("eox-jsonform");
                if (jsonForm && jsonForm.shadowRoot && !jsonForm.shadowRoot.querySelector("#custom-grid-style")) {
                    const formStyle = document.createElement("style");
                    formStyle.id = "custom-grid-style";
                    formStyle.textContent = `
                        .grid {
                            display: flex !important;
                            flex-wrap: wrap !important;
                            margin-left: -4px !important;
                            margin-right: -4px !important;
                        }
                        .grid > div {
                            box-sizing: border-box !important;
                            padding: 4px !important;
                        }
                        .s12 { width: 100% !important; }
                        .m3, .l3 { width: 25% !important; }
                        .m6, .l6 { width: 50% !important; }
                    `;
                    jsonForm.shadowRoot.appendChild(formStyle);
                }
            });
            observer.observe(dash.shadowRoot, { childList: true, subtree: true });
        }
    }, 100)
}
        waitForEodashStore((eodashStore) => {
            const indicatorRef = eodashStore?.states?.indicator
            watch(indicatorRef, (newVal, oldVal) => {
                if (newVal && newVal !== "") {
                    trackEvent(['indicators', 'select_indicator', newVal]);
                }
            }, { immediate: true })
            const poiRef = eodashStore?.states?.poi
            watch(poiRef, (newVal, oldVal) => {
                if (newVal && newVal !== "") {
                    trackEvent(['features', 'select_feature', newVal]);
                }
            }, { immediate: true })
        })
        })
</script>

<eo-dash :config="configFn"/>

<style>
eo-dash {
  display: block;
  height: calc(100dvh - var(--vp-nav-height));
  width: 100%;
}
.VPPage:has(eo-dash) {
  padding: 0;
  max-width: unset;
}
</style>
