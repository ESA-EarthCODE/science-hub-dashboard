import{bC as A,bO as D,aJ as F,aK as z,z as K,as as U,k as q,aV as M,a$ as G,bN as $,af as H,aj as Q,bJ as W,y as X,v as Y}from"./stac-BF3OjDTt.DKGPmzpE.js";import{_ as Z,a as P}from"./eo-dash.fmPrCnYS.js";import{e as ee,k as te,u as ae}from"./async-Do8yLIwe.Cq-nOSJu.js";import{i as B,u as oe,h as se}from"./handling-ptr_rQVm.AmvvrW0k.js";import re from"./EodashChart-C7Jc5g6u.BmLAHvo6.js";import ne,{t as ie,n as le}from"./ProcessList-BdM_djCy.wPxm82I3.js";import"./main.D9bYSKzy.js";import"./main.DEDpOjj1.js";import"./main.CMkhlnek.js";import{aF as de,aK as I,a6 as y,l as S,i as ce,q as pe,as as _,k as C,j,aP as J,p as N,ab as x,h as R,a2 as me,P as T,a4 as ue}from"./framework.BUYfUh-_.js";import"./commonjsHelpers.C4iS2aBk.js";import"./main.Orm3-MGU.js";import"./lit-element.BMPlKsWQ.js";import"./ops.Dvd5kCCh.js";import"./intersectsextent.CQxxizfz.js";import"./XYZ.C5uy7IIY.js";import"./GeoJSON.jQLIH_fT.js";import"./getElement.COiK8z0h.js";import"./addCommonStyleSheet.CWRJVm6L.js";import"./utils.DwtP9_Dv.js";import"./index.BlRfQdx3.js";import"./tooltip-ImOw2NTt.Bq4TItGN.js";import"./VTooltip-CjtN_9DM.c0tj-Rqu.js";import"./forwardRefs-Bd1rMXYk.76l1gquw.js";import"./transition-Cjjybgfp.CcpJyfkE.js";import"./sequential.DMX7fi97.js";import"./orient2d.DArCjZZA.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./when.BR7zwNJC.js";import"./WKT.41Egj0ys.js";import"./browser.lJZNoZcz.js";import"./toolcool-range-slider.min.BBXDELo7.js";import"./index.qjY-G9Oq.js";var fe=({selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:c,isPolling:m,mapElement:o})=>{me(async()=>{var s;await B({enableCompare:((s=o.value)==null?void 0:s.id)==="compare",selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:c,isPolling:m,mapElement:o.value})}),$(async s=>{var b,k,v;const d=((b=o.value)==null?void 0:b.id)==="compare",f=d?"compareLayers:updated":"layers:updated";if((d?["compareLayertime:updated","compareTime:updated"]:["layertime:updated","time:updated"]).includes(s)){const u=await oe({jsonformSchema:a.value,newLayers:d?H():Q(),enableCompare:d,mapElement:o.value});u&&(Object.values(u.properties??{}).some(h=>{var g,E;return(E=(g=h==null?void 0:h.options)==null?void 0:g.drawtools)==null?void 0:E.layerId})&&!((v=(k=o.value)==null?void 0:k.selectInteractions)!=null&&v.SelectLayerClickInteraction)&&(a.value=null,await T()),a.value=u)}s===f&&await B({enableCompare:d,selectedStac:r,jsonformSchema:a,isProcessed:i,processResults:l,loading:c,isPolling:m,mapElement:o.value})})};function ve(r,a,i,l){const c=W(()=>l(),200);I(i,o=>{var s;r.value=((s=o==null?void 0:o.options)==null?void 0:s.execute)||!1});const m=I([r,a],async([o,s],[d,f])=>{f&&f.removeEventListener("change",c),o&&s&&(s.removeEventListener("change",c),await T(),s.addEventListener("change",c))},{immediate:!0});ue(()=>{a.value&&a.value.removeEventListener("change",c),m()})}var he="eox-jsonform{flex-shrink:0;min-height:0;padding:0 12px}.bg-surface:has(.eodash-process-container){height:calc(100% - 30px);overflow:hidden}.eodash-process-container{flex-direction:column;height:100%;display:flex;overflow:hidden}.eodash-process-content{flex-direction:column;flex-grow:1;display:flex;overflow-y:auto}.eodash-process-actions{text-align:right;background:inherit;border-top:1px solid #0000001a;flex-shrink:0;padding:4px 12px}",ye={ref:"container",class:"eodash-process-container"},xe={class:"eodash-process-content"},be=[".schema"],ge={key:0,class:"eodash-process-actions"},tt=Z({__name:"index",props:{enableCompare:{type:Boolean,default:!1},vegaEmbedOptions:{type:Object,default(){return{actions:!0}}}},setup(r){const a=x(!1),i=x(null),l=de("jsonformEl");I(l,e=>{if(e&&e.shadowRoot){const t="eodash-drawtools-inline-style";if(!e.shadowRoot.getElementById(t)){const n=document.createElement("style");n.id=t,n.textContent=`
        /* Compact standard form elements */
        .form-control, .form-group {
          margin-bottom: 8px !important;
        }
        .form-control > label, .form-group > label {
          margin-bottom: 2px !important;
          font-size: 0.9em;
        }
        
        /* Specific layout for drawtools */
        .form-control:has(eox-drawtools) {
          position: relative;
          padding: 8px 12px !important;
          border: none !important;
          background: transparent !important;
          margin-bottom: 8px !important;
        }
        .form-control:has(eox-drawtools) > label {
          position: absolute;
          left: 12px;
          top: 8px;
          margin: 0 !important;
          width: calc(100% - 180px); /* Give label maximum available width */
          line-height: 1.2;
          display: flex;
          align-items: flex-start;
          padding-top: 8px;
          pointer-events: none; /* Let clicks pass through to buttons if they overlap slightly */
        }
        .form-control:has(eox-drawtools) > eox-drawtools {
          display: block;
          width: 100%;
        }
      `,e.shadowRoot.appendChild(n)}const p=()=>{var w;const n=(w=e==null?void 0:e.shadowRoot)==null?void 0:w.querySelector("eox-drawtools");if(n&&n.shadowRoot&&!n.shadowRoot.getElementById("eodash-drawtools-indent-style")){const L=document.createElement("style");return L.id="eodash-drawtools-indent-style",L.textContent=`
            eox-drawtools-controller {
              display: flex;
              justify-content: flex-end; /* Push buttons to the right */
              min-height: 40px;
              width: 100%;
            }
            eox-drawtools-list {
              display: block;
              margin-top: 10px;
              width: 100%;
            }
          `,n.shadowRoot.appendChild(L),!0}return!1};if(!p()){const n=new MutationObserver(()=>{p()&&n.disconnect()});n.observe(e.shadowRoot,{childList:!0,subtree:!0})}}});const c=R(()=>{var e;return(e=b.value)==null?void 0:e.links.filter(t=>t.endpoint==="eoxhub_workspaces").length}),m=x(!1),o=x(!1),s=x(!1),d=x([]),f=R(()=>!o.value&&!!i.value&&!!l.value),{selectedStac:b,selectedCompareStac:k}=A(D()),v=r.enableCompare?k:b,u=r.enableCompare?F:z,h=r.enableCompare?K:U,g=r.enableCompare?ie:le,E=R(()=>{var e;return h.value+((e=u.value)==null?void 0:e.id)+JSON.stringify(i.value)});fe({selectedStac:v,mapElement:u,jsonformSchema:i,isProcessed:a,processResults:d,loading:m,isPolling:s});const V=()=>{d.value.forEach(e=>{var p;if(!e)return;let t="";typeof e=="string"?(t=e.includes("/")?e.split("/").pop()??"":e,t=t.includes("?")?t.split("?")[0]:t):t=((p=v.value)==null?void 0:p.id)+"_process_results.json",ee(t,e)})},O=async()=>{var t;if(te(i.value).some(p=>{var n,w;return Array.isArray((n=l.value)==null?void 0:n.value[p])&&!((w=l.value)!=null&&w.value[p].length)})){a.value=!1;const p=r.enableCompare?X:Y;p.value=null;return}const e=(t=l.value)==null?void 0:t.editor.validate();if(e!=null&&e.length){console.warn("[eodash] Form validation failed",e);return}d.value=[],await se({jobs:g,selectedStac:v,jsonformEl:l,jsonformSchema:i,loading:m,isPolling:s,processResults:d,mapElement:u.value}),a.value=!0,c.value&&ae(g,h.value)};return ve(o,l,i,O),(e,t)=>(y(),S("div",ye,[ce("div",xe,[pe(ne,{"map-element":_(u),"enable-compare":r.enableCompare},null,8,["map-element","enable-compare"]),i.value?(y(),S("eox-jsonform",{key:E.value,ref_key:"jsonformEl",ref:l,".schema":i.value},null,40,be)):C("v-if",!0),_(q)?C("v-if",!0):(y(),j(re,{key:1,"vega-embed-options":r.vegaEmbedOptions,"enable-compare":r.enableCompare},null,8,["vega-embed-options","enable-compare"]))]),f.value||d.value.length&&a.value&&!c.value?(y(),S("div",ge,[f.value?(y(),j(P,{key:0,loading:m.value,style:{"margin-right":"8px"},"append-icon":[_(M)],density:"comfortable",size:"small",onClick:O},{default:J(()=>[...t[0]||(t[0]=[N(" Execute ",-1)])]),_:1},8,["loading","append-icon"])):C("v-if",!0),d.value.length&&a.value&&!c.value?(y(),j(P,{key:1,color:"primary",style:{"margin-right":"8px"},"append-icon":[_(G)],size:"small",density:"comfortable",onClick:V},{default:J(()=>[...t[1]||(t[1]=[N(" Download ",-1)])]),_:1},8,["append-icon"])):C("v-if",!0)])):C("v-if",!0)],512))}},[["styles",[he]]]);export{tt as default};
