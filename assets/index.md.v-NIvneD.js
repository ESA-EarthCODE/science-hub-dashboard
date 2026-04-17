import{p as m,a as u,o as f,g as _,j as h,e as x,m as c}from"./chunks/framework.BX_mSSZJ.js";const r=i=>{_paq.push(["trackEvent",...i])},g=["config"],k=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"eodash"},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),v={name:"index.md"},w=Object.assign(v,{setup(i){function d(t){const n=setInterval(()=>{if(window.eodashStore){clearInterval(n),t(window.eodashStore);const o=document.querySelector("eo-dash"),a=document.createElement("style");a.textContent=`
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
                `,o.shadowRoot.appendChild(a)}},100)}m(()=>{d(t=>{var a,s;const n=(a=t==null?void 0:t.states)==null?void 0:a.indicator;c(n,(e,l)=>{e&&e!==""&&r(["indicators","select_indicator",e])},{immediate:!0});const o=(s=t==null?void 0:t.states)==null?void 0:s.poi;c(o,(e,l)=>{e&&e!==""&&r(["features","select_feature",e])},{immediate:!0})})});const p=`?t=${new Date().getTime()}`;return(t,n)=>(f(),u("div",null,[_("eo-dash",{config:h(x)(`/configs/dashboard-config.js${p}`)},null,8,g)]))}});export{k as __pageData,w as default};
