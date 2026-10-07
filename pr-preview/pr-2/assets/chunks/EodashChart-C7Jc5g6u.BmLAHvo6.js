import{am as D,k as l,x as F,u as H,y as N,v as q,aP as P,aQ as Q}from"./stac-BF3OjDTt.DKGPmzpE.js";import{_ as U}from"./eo-dash.fmPrCnYS.js";import{o as z}from"./handling-ptr_rQVm.AmvvrW0k.js";import{T as j}from"./tooltip-ImOw2NTt.Bq4TItGN.js";import"./main.D9bYSKzy.js";import{aK as E,aF as J,a2 as K,Y as $,a6 as c,l as h,aQ as X,as as u,i as S,k as I,Q as b,V as A,an as B,h as i,ab as m,P as Y}from"./framework.BUYfUh-_.js";import"./commonjsHelpers.C4iS2aBk.js";import"./main.Orm3-MGU.js";import"./lit-element.BMPlKsWQ.js";import"./ops.Dvd5kCCh.js";import"./intersectsextent.CQxxizfz.js";import"./XYZ.C5uy7IIY.js";import"./GeoJSON.jQLIH_fT.js";import"./getElement.COiK8z0h.js";import"./addCommonStyleSheet.CWRJVm6L.js";import"./async-Do8yLIwe.Cq-nOSJu.js";import"./utils.DwtP9_Dv.js";import"./index.BlRfQdx3.js";import"./VTooltip-CjtN_9DM.c0tj-Rqu.js";import"./forwardRefs-Bd1rMXYk.76l1gquw.js";import"./transition-Cjjybgfp.CcpJyfkE.js";import"./sequential.DMX7fi97.js";import"./orient2d.DArCjZZA.js";var G=".bg-surface:has(.eodash-chart-wrapper){flex-direction:column;height:100%;display:flex}",Z=".eodash-chart-wrapper[data-v-e61d9ec8]{flex-direction:column;flex-grow:1;height:100%;min-height:180px;display:flex;position:relative}.eodash-chart-wrapper.fit-x-layout[data-v-e61d9ec8]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized[data-v-e61d9ec8]{background:#00000008;align-items:center;padding:16px 10%;overflow-y:auto}.chart-frame[data-v-e61d9ec8]{flex-direction:column;flex-grow:1;min-height:180px;display:flex;position:relative}.chart-frame.fit-x-layout[data-v-e61d9ec8]{height:auto!important}.eodash-chart-wrapper.fit-x-maximized .chart-frame[data-v-e61d9ec8]{background:#fff;border-radius:8px;width:100%;max-width:900px;box-shadow:0 4px 15px #0000001a}eox-chart[data-v-e61d9ec8]{flex-grow:1;min-height:0}eox-chart.fit-x-layout[data-v-e61d9ec8]{height:var(--fit-height)!important}.chart-toggle[data-v-e61d9ec8]{z-index:2;cursor:pointer;position:absolute;top:8px;right:46px}",ee={viewBox:"0 0 20 20",width:"20",height:"20","aria-hidden":"true"},te=["d"],ae=[".spec",".dataValues",".opt"],Ee=U({__name:"EodashChart",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(f){const d=i(()=>f.enableCompare?F.value:H.value),n=i(()=>f.enableCompare?N.value:q.value);function M(t){var e;return t?t.mark==="image"||((e=t.mark)==null?void 0:e.type)==="image"?!0:Array.isArray(t.layer)?t.layer.some(a=>{var r;return a.mark==="image"||((r=a.mark)==null?void 0:r.type)==="image"}):!1:!1}const O=i(()=>M(n.value)),o=i(()=>{var e;const t=n.value;return t?(t.autosize==="fit-x"||((e=t.autosize)==null?void 0:e.type)==="fit-x")&&O.value:!1}),W=i(()=>{const t=n.value;if(!t)return!1;let e=!1;const a=r=>{if(!(e||!r||typeof r!="object")){if("bind"in r&&typeof r.bind=="object"&&r.bind!==null&&"input"in r.bind){e=!0;return}Object.values(r).forEach(a)}};return a(t),e}),p=m(null);function R(t,e){let a=_(t);return a||e&&e.data&&Array.isArray(e.data.values)&&(a=_(e.data.values),a)?a:null}function _(t){if(!Array.isArray(t)||t.length===0)return null;const e=t[0];if(!e||typeof e!="object")return null;for(const a of Object.keys(e)){const r=e[a];if(typeof r=="string"&&(r.startsWith("http")||r.startsWith("/")))return r}return null}const v=m(1.414),C=m(400);E([d,n],([t,e])=>{const a=R(t,e);if(!a)return;const r=new Image;r.onload=()=>{r.naturalWidth>0&&r.naturalHeight>0&&(v.value=r.naturalHeight/r.naturalWidth)},r.src=a},{immediate:!0});const g=i(()=>Math.round(C.value*v.value));function x(){const t=k.value;if(t){const e=t.querySelector(".chart-frame");C.value=(e?e.clientWidth:t.clientWidth)||400}}E([n,v],([t])=>{if(!t){p.value=null;return}const e=JSON.parse(JSON.stringify(t));e.width="container";const a=t;o.value?e.height=g.value:typeof a.height=="number"?e.height=a.height:e.height="container",Y(()=>{p.value=e,y.value=Math.random(),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},150)})},{immediate:!0});const y=m(0),k=J("container");let s=null,w=null;K(()=>{const t=k.value;if(!t)return;x(),window.addEventListener("resize",x),w=window.setInterval(()=>{if(t){const a=t.querySelector("eox-chart");if(a&&a.shadowRoot&&!a.shadowRoot.querySelector("#eodash-chart-styles")){const r=document.createElement("style");r.id="eodash-chart-styles",r.innerHTML=`
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
          `,a.shadowRoot.appendChild(r)}}},200);const e=D(t);e&&(s=new MutationObserver(async()=>{getComputedStyle(e).display!=="none"&&(y.value=Math.random())}),s.observe(e,{attributes:!0,attributeFilter:["style","class"]}))}),$(()=>{window.removeEventListener("resize",x),s==null||s.disconnect(),w&&window.clearInterval(w)});const T=i(()=>o.value?{"--fit-height":`${g.value}px`,height:`${g.value}px`,width:"100%"}:{height:"100%",width:"100%"}),L=i(()=>l.value?P:Q);function V(){l.value=!l.value}return(t,e)=>(c(),h("div",{ref:"container",class:b(["eodash-chart-wrapper",{"fit-x-layout":o.value,maximized:u(l),"fit-x-maximized":o.value&&u(l)}])},[d.value&&n.value?X((c(),h("button",{key:0,class:"chart-toggle",onClick:V},[(c(),h("svg",ee,[S("path",{d:L.value},null,8,te)]))])),[[j,u(l)?"Minimize":"Maximize"]]):I("v-if",!0),S("div",{class:b(["chart-frame",{"fit-x-layout":o.value}]),style:A({paddingBottom:W.value?"25px":"0px"})},[d.value&&p.value?(c(),h("eox-chart",{key:y.value,".spec":B(p.value),".dataValues":B(d.value),style:A(T.value),class:b({"fit-x-layout":o.value}),".opt":f.vegaEmbedOptions,"onClick:item":e[0]||(e[0]=(...a)=>u(z)&&u(z)(...a))},null,46,ae)):I("v-if",!0)],6)],2))}},[["styles",[G,Z]],["__scopeId","data-v-e61d9ec8"]]);export{Ee as default};
