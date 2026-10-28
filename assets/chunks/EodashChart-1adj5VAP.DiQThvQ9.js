import{an as D,j as l,w as F,t as H,x as N,u as j,aQ as q,aR as Q}from"./stac-BSKKZxTO.Dj1D-GOD.js";import{_ as U}from"./eo-dash.Bh9TeTZj.js";import{o as z}from"./handling-DC-8T0hW.nRlQtBYG.js";import{T as J}from"./tooltip-BbcyEw-0.qkUQYzCS.js";import"./main.DnqBt4sf.js";import{aK as E,aF as K,a2 as P,Y as $,a6 as h,l as m,aQ as X,as as u,i as S,k as I,Q as _,V as M,an as A,h as i,ab as c,P as Y}from"./framework.By6MUPDF.js";import"./commonjsHelpers.C4iS2aBk.js";import"./main.DX06sAna.js";import"./lit-element.BMPlKsWQ.js";import"./WMTS.BiC_8zSJ.js";import"./intersectsextent.C_jsbJlI.js";import"./util.Dhne-uB2.js";import"./XYZ.Z_8-pYmn.js";import"./GeoJSON.l-3d6_RN.js";import"./getElement.COiK8z0h.js";import"./addCommonStyleSheet.Dtx_fKOg.js";import"./async-97afytvP.yflCiq_f.js";import"./utils.DwtP9_Dv.js";import"./index.BlRfQdx3.js";import"./VTooltip-CDWvPXrc.CF0bLXWm.js";import"./forwardRefs-DuxpMa3C.B1kUVFDn.js";import"./transition-kTN22ujO.DpIbuqCZ.js";import"./sequential.DMX7fi97.js";var G=".bg-surface:not(:has(.eodash-process-container)):has(.eodash-chart-wrapper){flex-direction:column;height:100%;display:flex}",Z=".eodash-chart-wrapper[data-v-13b57997]{flex-direction:column;flex-grow:1;height:100%;min-height:180px;display:flex;position:relative}.eodash-chart-wrapper.fit-x-layout[data-v-13b57997]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized[data-v-13b57997]{background:#00000008;align-items:center;padding:16px 10%;overflow-y:auto}.chart-frame[data-v-13b57997]{flex-direction:column;flex-grow:1;min-height:180px;display:flex;position:relative}.chart-frame.fit-x-layout[data-v-13b57997]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized .chart-frame[data-v-13b57997]{background:#fff;border-radius:8px;width:100%;max-width:900px;box-shadow:0 4px 15px #0000001a}eox-chart[data-v-13b57997]{flex-grow:1;min-height:0}eox-chart.fit-x-layout[data-v-13b57997]{height:var(--fit-height)!important}.chart-toggle[data-v-13b57997]{z-index:2;cursor:pointer;position:absolute;top:8px;right:46px}",tt={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},et=["d"],at=[".spec",".dataValues",".opt"],Et=U({__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(f){const d=i(()=>f.enableCompare?F.value:H.value),n=i(()=>f.enableCompare?N.value:j.value);function B(e){var t;return e?e.mark==="image"||((t=e.mark)==null?void 0:t.type)==="image"?!0:Array.isArray(e.layer)?e.layer.some(a=>{var r;return a.mark==="image"||((r=a.mark)==null?void 0:r.type)==="image"}):!1:!1}const O=i(()=>B(n.value)),o=i(()=>{var t;const e=n.value;return e?(e.autosize==="fit-x"||((t=e.autosize)==null?void 0:t.type)==="fit-x")&&O.value:!1}),W=i(()=>{const e=n.value;if(!e)return!1;let t=!1;const a=r=>{if(!(t||!r||typeof r!="object")){if("bind"in r&&typeof r.bind=="object"&&r.bind!==null&&"input"in r.bind){t=!0;return}Object.values(r).forEach(a)}};return a(e),t}),p=c(null);function R(e,t){let a=C(e);return a||t&&t.data&&Array.isArray(t.data.values)&&(a=C(t.data.values),a)?a:null}function C(e){if(!Array.isArray(e)||e.length===0)return null;const t=e[0];if(!t||typeof t!="object")return null;for(const a of Object.keys(t)){const r=t[a];if(typeof r=="string"&&(r.startsWith("http")||r.startsWith("/")))return r}return null}const v=c(1.414),g=c(400);E([d,n],([e,t])=>{const a=R(e,t);if(!a)return;const r=new Image;r.onload=()=>{r.naturalWidth>0&&r.naturalHeight>0&&(v.value=r.naturalHeight/r.naturalWidth)},r.src=a},{immediate:!0});const x=i(()=>Math.round(g.value*v.value));function y(){const e=k.value;if(e){const t=e.querySelector(".chart-frame"),a=Math.round((t?t.clientWidth:e.clientWidth)||400);Math.abs(g.value-a)>2&&(g.value=a)}}E([n,v],([e])=>{if(!e){p.value=null;return}const t=JSON.parse(JSON.stringify(e));t.width="container";const a=e;o.value?t.height=x.value:typeof a.height=="number"?t.height=a.height:t.height="container",Y(()=>{p.value=t,b.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const b=c(0),k=K("container");let s=null,w=null;P(()=>{const e=k.value;if(!e)return;y(),window.addEventListener("resize",y),w=window.setInterval(()=>{if(e){const a=e.querySelector("eox-chart");if(a&&a.shadowRoot&&!a.shadowRoot.querySelector("#eodash-chart-styles")){const r=document.createElement("style");r.id="eodash-chart-styles",r.innerHTML=`
            * {
              box-sizing: border-box !important;
            }
            #vis {
              min-height: 100px !important;
              flex: 1 1 auto !important;
            }
            :host, .vega-embed {
              display: flex !important;
              flex-direction: column !important;
              height: 100% !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            .vega-bindings {
              flex: 0 0 auto !important;
              display: flex !important;
              flex-wrap: wrap;
              gap: 2px !important;
              background: rgba(255, 255, 255, 0.85);
              padding: 6px 12px !important;
              border-radius: 6px;
              box-shadow: 0 2px 5px rgba(0,0,0,0.15);
              margin: 0 !important;
              margin-top: -10px !important;
              z-index: 10;
            }
            .vega-bindings:empty {
              display: none !important;
            }
            .vega-embed > canvas, .vega-embed > svg {
              height: 100% !important;
              max-width: 100% !important;
              object-fit: contain;
            }
            .vega-bind {
              display: flex;
              align-items: center;
              gap: 6px;
              margin-bottom: 0 !important;
            }
          `,a.shadowRoot.appendChild(r)}}},200);const t=D(e);t&&(s=new MutationObserver(async()=>{getComputedStyle(t).display!=="none"&&(b.value=Math.random())}),s.observe(t,{attributes:!0,attributeFilter:["style","class"]}))}),$(()=>{window.removeEventListener("resize",y),s==null||s.disconnect(),w&&window.clearInterval(w)});const T=i(()=>o.value?{"--fit-height":`${x.value}px`,height:`${x.value}px`,width:"100%"}:{height:"100%",width:"100%"}),L=i(()=>l.value?q:Q);function V(){l.value=!l.value}return(e,t)=>(h(),m("div",{ref:"container",class:_(["eodash-chart-wrapper",{"fit-x-layout":o.value,maximized:u(l),"fit-x-maximized":o.value&&u(l)}])},[d.value&&n.value?X((h(),m("button",{key:0,class:"chart-toggle",onClick:V},[(h(),m("svg",tt,[S("path",{d:L.value},null,8,et)]))])),[[J,u(l)?"Minimize":"Maximize"]]):I("v-if",!0),S("div",{class:_(["chart-frame",{"fit-x-layout":o.value}]),style:M({paddingBottom:W.value?"25px":"0px"})},[d.value&&p.value?(h(),m("eox-chart",{key:b.value,".spec":A(p.value),".dataValues":A(d.value),style:M(T.value),class:_({"fit-x-layout":o.value}),".opt":f.vegaEmbedOptions,"onClick:item":t[0]||(t[0]=(...a)=>u(z)&&u(z)(...a))},null,46,at)):I("v-if",!0)],6)],2))}},[["styles",[G,Z]],["__scopeId","data-v-13b57997"]]);export{Et as default};
