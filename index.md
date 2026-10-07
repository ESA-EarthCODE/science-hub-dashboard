---
layout: eodash
---

<script setup>
    import { onMounted, watch, shallowRef } from "vue"
    import { withBase } from 'vitepress'
    import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

    const dashboardConfig = shallowRef(null);
    const configFn = () => dashboardConfig.value;
function waitForEodashStore(callback) {
    const interval = setInterval(() => {
        if (window && window.eodashStore) {
            clearInterval(interval)
            callback(window.eodashStore)
            const dash = document.querySelector("eo-dash");
            const style = document.createElement("style");
            style.textContent = `
                .map-buttons-container {
                margin-top: 20px !important;
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

            // Inject grid styles into dynamically rendered eox-jsonform components (using deep shadow DOM traversal)
            const querySelectorAllDeep = (selector, root) => {
                const results = [];
                const search = (node) => {
                    if (!node) return;
                    if (node.querySelectorAll) {
                        node.querySelectorAll(selector).forEach(el => {
                            if (!results.includes(el)) results.push(el);
                        });
                    }
                    if (node.shadowRoot) {
                        search(node.shadowRoot);
                    }
                    const children = node.children || node.childNodes;
                    if (children) {
                        for (let i = 0; i < children.length; i++) {
                            search(children[i]);
                        }
                    }
                };
                search(root);
                return results;
            };

            const isInsideLayerControl = (el) => {
                let current = el;
                while (current) {
                    if (current.tagName === "EOX-LAYERCONTROL" || current.tagName === "EODASH-LAYERCONTROL") {
                        return true;
                    }
                    current = current.parentElement || (current.getRootNode && current.getRootNode().host);
                }
                return false;
            };

            // Periodically check and inject styles to all deep components
            setInterval(() => {
                // 1. Inject styles into all deep eox-jsonform components
                const jsonForms = querySelectorAllDeep("eox-jsonform", document.body);
                jsonForms.forEach((jsonForm) => {
                    const targetRoot = jsonForm.shadowRoot || jsonForm;
                    if (targetRoot && !targetRoot.querySelector("#custom-grid-style")) {
                        const formStyle = document.createElement("style");
                        formStyle.id = "custom-grid-style";
                        
                        if (isInsideLayerControl(jsonForm)) {
                            // Only apply the padding fix for Layer Control forms, leaving their original layout intact
                            formStyle.textContent = `
                                .form-container {
                                    padding-right: 10px !important;
                                    box-sizing: border-box !important;
                                }
                            `;
                            console.log("[Dynamic Injection] Injected LayerControl padding style into:", jsonForm);
                        } else {
                            // Apply custom grid styles strictly to the Processes form
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
                            console.log("[Dynamic Injection] Injected Processes grid style into:", jsonForm);
                        }
                        
                        targetRoot.appendChild(formStyle);
                    }
                });

                // 2. Inject styles into all deep eox-stacinfo components to shift description up
                const stacInfos = querySelectorAllDeep("eox-stacinfo", document.body);
                stacInfos.forEach((stacInfo) => {
                    const targetRoot = stacInfo.shadowRoot || stacInfo;
                    if (targetRoot && !targetRoot.querySelector("#custom-stac-style")) {
                        const stacStyle = document.createElement("style");
                        stacStyle.id = "custom-stac-style";
                        stacStyle.textContent = `
                            main {
                                margin-top: -10px !important;
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
                        `;
                        targetRoot.appendChild(stacStyle);
                        console.log("[Dynamic Injection] Injected custom-stac-style into eox-stacinfo:", stacInfo);
                    }
                });
            }, 300);
        }
    }, 100)
}
    onMounted(async () => {
        const configModule = await import("./public/configs/dashboard-config.js");
        dashboardConfig.value = configModule.default;
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



<eo-dash v-if="dashboardConfig" :config="configFn"/>


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
