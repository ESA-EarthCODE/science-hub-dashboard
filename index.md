---
layout: eodash
---

<script setup>
    import { onMounted, watch } from "vue"
    import { withBase } from 'vitepress'
    import { trackEvent } from "@eox/pages-theme-eox/src/helpers.js";

    function waitForEodashStore(callback) {
        const interval = setInterval(() => {
            if (window.eodashStore) {
                clearInterval(interval)
                callback(window.eodashStore)
                const dash = document.querySelector("eo-dash");
                const style = document.createElement("style");
                style.textContent = `
                    .map-buttons-container {
                    margin-top: 80px !important;
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
            }
        }, 100)
    }

    onMounted(() => {
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
    const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp for cache busting
</script>

<eo-dash :config="withBase(`/configs/dashboard-config.js${cacheBuster}`)"/>

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
