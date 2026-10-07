const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/dashboard-config.Cf5Z09Lm.js","assets/chunks/stac-BF3OjDTt.DKGPmzpE.js","assets/chunks/framework.BUYfUh-_.js","assets/chunks/commonjsHelpers.C4iS2aBk.js","assets/chunks/main.Orm3-MGU.js","assets/chunks/lit-element.BMPlKsWQ.js","assets/chunks/ops.Dvd5kCCh.js","assets/chunks/intersectsextent.CQxxizfz.js","assets/chunks/XYZ.C5uy7IIY.js","assets/chunks/GeoJSON.jQLIH_fT.js","assets/chunks/getElement.COiK8z0h.js","assets/chunks/addCommonStyleSheet.CWRJVm6L.js"])))=>i.map(i=>d[i]);
import{a2 as E,_ as R,a6 as g,l as y,k as b,aj as v,aK as h}from"./chunks/framework.BUYfUh-_.js";const x=f=>{_paq.push(["trackEvent",...f])},N=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"eodash"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),C={name:"index.md"},O=Object.assign(C,{setup(f){const p=v(null),_=()=>p.value;function w(c){const a=setInterval(()=>{if(window&&window.eodashStore){clearInterval(a),c(window.eodashStore);const m=document.querySelector("eo-dash"),l=document.createElement("style");l.textContent=`
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
            `,m.shadowRoot.appendChild(l);const s=(o,n)=>{const e=[],i=t=>{if(!t)return;t.querySelectorAll&&t.querySelectorAll(o).forEach(r=>{e.includes(r)||e.push(r)}),t.shadowRoot&&i(t.shadowRoot);const u=t.children||t.childNodes;if(u)for(let r=0;r<u.length;r++)i(u[r])};return i(n),e},d=o=>{let n=o;for(;n;){if(n.tagName==="EOX-LAYERCONTROL"||n.tagName==="EODASH-LAYERCONTROL")return!0;n=n.parentElement||n.getRootNode&&n.getRootNode().host}return!1};setInterval(()=>{s("eox-jsonform",document.body).forEach(e=>{const i=e.shadowRoot||e;if(i&&!i.querySelector("#custom-grid-style")){const t=document.createElement("style");t.id="custom-grid-style",d(e)?(t.textContent=`
                                .form-container {
                                    padding-right: 10px !important;
                                    box-sizing: border-box !important;
                                }
                            `,console.log("[Dynamic Injection] Injected LayerControl padding style into:",e)):(t.textContent=`
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
                            `,console.log("[Dynamic Injection] Injected Processes grid style into:",e)),i.appendChild(t)}}),s("eox-stacinfo",document.body).forEach(e=>{const i=e.shadowRoot||e;if(i&&!i.querySelector("#custom-stac-style")){const t=document.createElement("style");t.id="custom-stac-style",t.textContent=`
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
                        `,i.appendChild(t),console.log("[Dynamic Injection] Injected custom-stac-style into eox-stacinfo:",e)}})},300)}},100)}return E(async()=>{const c=await R(()=>import("./chunks/dashboard-config.Cf5Z09Lm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));p.value=c.default,w(a=>{var s,d;const m=(s=a==null?void 0:a.states)==null?void 0:s.indicator;h(m,(o,n)=>{o&&o!==""&&x(["indicators","select_indicator",o])},{immediate:!0});const l=(d=a==null?void 0:a.states)==null?void 0:d.poi;h(l,(o,n)=>{o&&o!==""&&x(["features","select_feature",o])},{immediate:!0})})}),(c,a)=>(g(),y("div",null,[p.value?(g(),y("eo-dash",{key:0,config:_})):b("",!0)]))}});export{N as __pageData,O as default};
