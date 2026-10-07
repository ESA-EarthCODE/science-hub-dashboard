var mo=Object.defineProperty;var vi=e=>{throw TypeError(e)};var yo=(e,t,n)=>t in e?mo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ze=(e,t,n)=>yo(e,typeof t!="symbol"?t+"":t,n),ln=(e,t,n)=>t.has(e)||vi("Cannot "+n);var F=(e,t,n)=>(ln(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?vi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ne=(e,t,n,i)=>(ln(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),R=(e,t,n)=>(ln(e,t,"access private method"),n);import{a as re,A as xe,b as C}from"./lit-element.BMPlKsWQ.js";import{o as It}from"./map.DiiNQ3pp.js";import{n as I}from"./when.BR7zwNJC.js";import{e as bo,a as vo}from"./addCommonStyleSheet.CWRJVm6L.js";import{d as k}from"./dayjs.min.CtYFkxwS.js";import{_ as Nt}from"./index.CmRAAlwx.js";import{s as He,u as wi}from"./static.BLGvt9Xq.js";import{c as wo}from"./repeat.BH3fx7cN.js";import{o as wt}from"./unsafe-html.WWnMP6dQ.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{e as Pn,c as xi,a as Je,l as In,b as xo}from"./index.mXKpAVQA.js";import{a as _o,m as Ao,l as Co}from"./index.BlRfQdx3.js";import{a as Pi,c as we}from"./commonjsHelpers.C4iS2aBk.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.DDXwWjbG.js";import"./orient2d.DArCjZZA.js";const Mo=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  height: 100%;
  overflow: hidden;
}
details {
  width: 100%;
}
`;vo();const Nn=`
${bo}
.field {
  margin-block-end: 0;
}
.field>:is(input,textarea,select) {
  width: 100%;
}
.field.small>:is(input,textarea,select) {
  font-size: 0.75rem;
}

:host, :root {
  --primary-color: var(--primary);
  --secondary-color: var(--secondary);
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--surface) 80%,
    transparent
  );
  --item-select-color: var(--surface-variant);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --_background-color: var(--background-color, var(--eox-background-color, transparent));
  --_padding: var(--padding, 0.5rem);
  --_padding-vertical: var(--padding-vertical, 0.25rem);
  --_list-padding: var(--list-padding, 2rem);
  --_text-transform: var(--text-transform, capitalize);
  --_form-flex-direction: var(--form-flex-direction, column);
  --_filter-display: var(--filter-display, block);
  background-color: var(--_background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--_form-flex-direction);
  margin-top: 0;
}
eox-itemfilter-container {
  min-width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  height: 100%;
}
eox-itemfilter-results {
  flex-grow: 1;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
eox-itemfilter-results button.chip {
  pointer-events: none;
}
.list li {
  padding: 0 var(--_padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--_text-transform);
}
.title.highlight-enabled {
  text-transform: inherit;
}
.subtitle {
  opacity: .7;
}
.image {
  object-fit: cover;
  overflow: hidden;
}
.title-container {
  display: flex;
  flex-direction: column;
}
eox-itemfilter-expandcontainer {
  max-height: 400px;
  width: 100%;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
}
form#itemfilter.inline eox-itemfilter-expandcontainer {
  max-height: none;
}
form#itemfilter.inline eox-itemfilter-expandcontainer > [data-type=filter] {
  height: auto;
  overflow: visible;
}
[data-type=filter] .title,
details summary {
  text-transform: var(--_text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--_padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
summary > * {
  pointer-events: all;
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--_list-padding) !important;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
#container-results {
  border-radius: none;
}
.no-results {
  padding-left: var(--_padding);
  padding-right: var(--_padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
}
eox-layout {
  padding: var(--_padding-vertical) var(--_padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
  transition: var(--card-transition);
  box-shadow: var(--card-box-shadow);
}
eox-layout-item:hover {
  transform: var(--card-hover-transform);
}
eox-layout-item > span {
  display: block;
  height: 100%;
}
eox-layout-item .image {
  width: 100%;
  height: 100%;
  transition: filter .3s ease-in-out;
  margin: 0;
}
eox-layout-item:hover .image {
  filter: brightness(.5);
}
eox-layout-item nav {
  height: 100%;
}
eox-layout-item .title-container {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    transparent
  );
  padding-top: 25px;
}
eox-layout-item .title {
  font-weight: bold;
  font-family: var(--card-title-font);
}
eox-layout-item .result-action {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ffffffbb;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
ul#results eox-layout-item.highlighted .result-action > * {
  filter: none;
}
section {
  position: relative;
  background-color: var(--_background-color);
}
nav.title-nav {
  padding-left: var(--_padding);
  padding-right: var(--_padding);
}
eox-itemfilter-range {
  display: block;
  margin-left: var(--_list-padding);
  padding-right: var(--_padding);
}
.range-wrapper {
  margin-left: var(--_list-padding);
  padding-right: var(--_padding);
}
tc-range-slider {
  width: 100%;
  --width: 100%;
}
.range-labels {
  display: flex;
  justify-content: space-between;
}
.range-before,
.range-after {
  font-size: x-small;
}

.inline-content {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 8px;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
  height: var(--inline-container-height, auto);
}
.inline-container {
  position: relative;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  overflow-x: auto;
  overflow-y: hidden;
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
-container-results::-webkit-scrollbar,
.inline-container::-webkit-scrollbar,
.inline-content::-webkit-scrollbar,
form#itemfilter > div::-webkit-scrollbar {
  inline-size: 0.4rem;
  block-size: 0.4rem;
}
-container-results::-webkit-scrollbar-thumb,
.inline-container::-webkit-scrollbar-thumb,
.inline-content::-webkit-scrollbar-thumb,
form#itemfilter > div::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 1rem;
  cursor: default;
}
.inline-container:is(:hover,:focus)::-webkit-scrollbar-thumb,
.inline-content:is(:hover,:focus)::-webkit-scrollbar-thumb,
form#itemfilter > div:is(:hover,:focus)::-webkit-scrollbar-thumb {
  background: var(--outline);
}
form#itemfilter > div::-webkit-scrollbar-thumb {
  background: transparent; 
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
}
.autocomplete-container .field input,
.text-container .field input {
  background: none !important;
  border-block-end-color: var(--outline);
  border-radius: 0 !important;
  box-shadow: none !important;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li,
.multiselect li,
eox-itemfilter-results li {
  border-radius: .5rem !important;
  display: flex;
  justify-content: space-between;
  min-block-size: 32px !important;
  height: auto;
}
.select li label,
.multiselect li label {
  min-width: 0;
  max-width: 100%;
}
.select li label .title,
.multiselect li label .title {
  flex: 1;
  min-width: 0;
  max-width: 100%;
  width: 100%;
  overflow: visible;
}
.select li label .title .title-text,
.multiselect li label .title .title-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  max-width: 100%;
  width: 100%;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover,
details summary:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  background: var(--item-select-color);
}
mark.highlight {
  all: inherit;
  display: inline;
  background: yellow;
  color: black;
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
  max-width: 170px;
}
.select-overflow {
  max-height: calc(32px * var(--select-filter-max-items));
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
  align-items: center;
  height: var(--inline-container-height, auto);
}
.chip {
  white-space: nowrap;
  max-height: calc(var(--inline-container-height, auto) - .5rem);
}
.input-container.field {
  min-width: 10rem;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: #ba1a1a !important;
  font-size: x-small;
}
.row {
  display: flex;
  flex-direction: row;
  gap: 8px;
}
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--_background-color);
}
`;var jt,Ii;class $o extends re{constructor(){super();U(this,jt);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return C`
      <style>
        ${!this.unstyled&&Nn}
      </style>

      ${I(this.filterObject.featured,()=>C`<slot name="filter"></slot>`,()=>C`<details
            @toggle="${R(this,jt,Ii)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||xe}
          >
            <summary class="square">
              <nav class="responsive tiny-space">
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-right</title>
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </i>
                <span
                  class="title max"
                  style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
                >
                  ${this.filterObject.title||this.filterObject.key||"Filter"}
                </span>
                <slot name="reset-button"></slot>
              </nav>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}jt=new WeakSet,Ii=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",$o);function Ae(e){return Array.isArray?Array.isArray(e):Hi(e)==="[object Array]"}function So(e){if(typeof e=="string")return e;if(typeof e=="bigint")return e.toString();const t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function gn(e){return e==null?"":So(e)}function q(e){return typeof e=="string"}function At(e){return typeof e=="number"}function Lo(e){return e===!0||e===!1||Ro(e)&&Hi(e)=="[object Boolean]"}function Ni(e){return typeof e=="object"}function Ro(e){return Ni(e)&&e!==null}function Z(e){return e!=null}function xt(e){return!e.trim().length}function Hi(e){return e==null?e===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const ko="Incorrect 'index' type",mn="Invalid doc index: must be a non-negative integer within the bounds of the docs array",To=e=>`Invalid value for key ${e}`,Eo=e=>`Pattern length exceeds max of ${e}.`,Do=e=>`Missing ${e} property in key`,jo=e=>`Property 'weight' in key '${e}' must be a positive integer`,Oo="Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.",_i=Object.prototype.hasOwnProperty;var Bo=class{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach(n=>{const i=Fi(n);this._keys.push(i),this._keyMap[i.id]=i,t+=i.weight}),this._keys.forEach(n=>{n.weight/=t})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}};function Fi(e){let t=null,n=null,i=null,r=1,o=null;if(q(e)||Ae(e))i=e,t=Ai(e),n=Ct(e);else{if(!_i.call(e,"name"))throw new Error(Do("name"));const a=e.name;if(i=a,_i.call(e,"weight")&&e.weight!==void 0&&(r=e.weight,r<=0))throw new Error(jo(Ct(a)));t=Ai(a),n=Ct(a),o=e.getFn??null}return{path:t,id:n,weight:r,src:i,getFn:o}}function Ai(e){return Ae(e)?e:e.split(".")}function Ct(e){return Ae(e)?e.join("."):e}function Po(e,t){const n=[];let i=!1;const r=(o,a,c,u)=>{if(Z(o))if(!a[c])n.push(u!==void 0?{v:o,i:u}:o);else{const h=o[a[c]];if(!Z(h))return;if(c===a.length-1&&(q(h)||At(h)||Lo(h)||typeof h=="bigint"))n.push(u!==void 0?{v:gn(h),i:u}:gn(h));else if(Ae(h)){i=!0;for(let f=0,p=h.length;f<p;f+=1)r(h[f],a,c+1,f)}else a.length&&r(h,a,c+1,u)}};return r(e,q(t)?t.split("."):t,0),i?n:n[0]}const Io={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},No={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1},Ho={location:0,threshold:.6,distance:100},Fo={useExtendedSearch:!1,useTokenSearch:!1,tokenize:void 0,tokenMatch:"any",getFn:Po,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1},M=Object.freeze({...No,...Io,...Ho,...Fo});function zo(e){return e>=9&&e<=13||e===32||e===160}function qo(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(r){let o=0,a=!1;for(let u=0;u<r.length;u++)zo(r.charCodeAt(u))?a=!1:a||(o++,a=!0);if(o===0&&(o=1),n.has(o))return n.get(o);const c=Math.round(i/Math.pow(o,.5*e))/i;return n.set(o,c),c},clear(){n.clear()}}}var Hn=class{constructor({getFn:e=M.getFn,fieldNormWeight:t=M.fieldNormWeight}={}){this.norm=qo(t,3),this.getFn=e,this.isCreated=!1,this.docs=[],this.keys=[],this._keysMap={},this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((t,n)=>{this._keysMap[t.id]=n})}create(){if(this.isCreated||!this.docs.length)return;this.isCreated=!0;const e=this.docs.length;this.records=new Array(e);let t=0;if(q(this.docs[0]))for(let n=0;n<e;n++){const i=this._createStringRecord(this.docs[n],n);i&&(this.records[t++]=i)}else for(let n=0;n<e;n++)this.records[t++]=this._createObjectRecord(this.docs[n],n);this.records.length=t,this.norm.clear()}add(e,t){if(!Number.isInteger(t)||t<0)throw new Error(mn);if(q(e)){const i=this._createStringRecord(e,t);return i&&this.records.push(i),i}const n=this._createObjectRecord(e,t);return this.records.push(n),n}removeAt(e){if(!Number.isInteger(e)||e<0)throw new Error(mn);for(let t=0,n=this.records.length;t<n;t+=1)if(this.records[t].i===e){this.records.splice(t,1);break}for(let t=0,n=this.records.length;t<n;t+=1)this.records[t].i>e&&(this.records[t].i-=1)}removeAll(e){const t=new Set;for(const i of e)Number.isInteger(i)&&i>=0&&t.add(i);if(t.size===0)return;this.records=this.records.filter(i=>!t.has(i.i));const n=Array.from(t).sort((i,r)=>i-r);for(const i of this.records){let r=0,o=n.length;for(;r<o;){const a=r+o>>>1;n[a]<i.i?r=a+1:o=a}i.i-=r}}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_createStringRecord(e,t){return!Z(e)||xt(e)?null:{v:e,i:t,n:this.norm.get(e)}}_createObjectRecord(e,t){const n={i:t,$:{}};for(let i=0,r=this.keys.length;i<r;i++){const o=this.keys[i],a=o.getFn?o.getFn(e):this.getFn(e,o.path);if(Z(a)){if(Ae(a)){const c=[];for(let u=0,h=a.length;u<h;u+=1){const f=a[u];if(Z(f)){if(q(f)){if(!xt(f)){const p={v:f,i:u,n:this.norm.get(f)};c.push(p)}}else if(Z(f.v)){const p=q(f.v)?f.v:gn(f.v);if(!xt(p)){const g={v:p,i:f.i,n:this.norm.get(p)};c.push(g)}}}}n.$[i]=c}else if(q(a)&&!xt(a)){const c={v:a,n:this.norm.get(a)};n.$[i]=c}}}return n}toJSON(){return{keys:this.keys.map(({getFn:e,...t})=>t),records:this.records}}};function zi(e,t,{getFn:n=M.getFn,fieldNormWeight:i=M.fieldNormWeight}={}){const r=new Hn({getFn:n,fieldNormWeight:i});return r.setKeys(e.map(Fi)),r.setSources(t),r.create(),r}function Ko(e,{getFn:t=M.getFn,fieldNormWeight:n=M.fieldNormWeight}={}){const{keys:i,records:r}=e,o=new Hn({getFn:t,fieldNormWeight:n});return o.setKeys(i),o.setIndexRecords(r),o}function Uo(e=[],t=M.minMatchCharLength){const n=[];let i=-1,r=-1,o=0;for(let a=e.length;o<a;o+=1){const c=e[o];c&&i===-1?i=o:!c&&i!==-1&&(r=o-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[o-1]&&o-i>=t&&n.push([i,o-1]),n}function Wo(e,t,n,{location:i=M.location,distance:r=M.distance,threshold:o=M.threshold,findAllMatches:a=M.findAllMatches,minMatchCharLength:c=M.minMatchCharLength,includeMatches:u=M.includeMatches,ignoreLocation:h=M.ignoreLocation}={}){if(t.length>32)throw new Error(Eo(32));const f=t.length,p=e.length,g=Math.max(0,Math.min(i,p));let m=o,v=g;const b=(E,P)=>{const W=E/f;if(h)return W;const $e=Math.abs(g-P);return r?W+$e/r:$e?1:W},A=c>1||u,_=A?Array(p):[];let S;for(;(S=e.indexOf(t,v))>-1;){const E=b(0,S);if(m=Math.min(E,m),v=S+f,A){let P=0;for(;P<f;)_[S+P]=1,P+=1}}v=-1;let L=[],j=1,Q=0,N=f+p;const ge=1<<f-1;for(let E=0;E<f;E+=1){let P=0,W=N;for(;P<W;)b(E,g+W)<=m?P=W:N=W,W=Math.floor((N-P)/2+P);N=W;let $e=Math.max(1,g-W+1);const Ge=a?p:Math.min(g+W,p)+f,me=Array(Ge+2);me[Ge+1]=(1<<E)-1;for(let J=Ge;J>=$e;J-=1){const Ye=J-1,Gt=n[e[Ye]];if(me[J]=(me[J+1]<<1|1)&Gt,E&&(me[J]|=(L[J+1]|L[J])<<1|1|L[J+1]),me[J]&ge&&(j=b(E,Ye),j<=m)){if(m=j,v=Ye,Q=E,v<=g)break;$e=Math.max(1,2*g-v)}}if(b(E+1,g)>m)break;L=me}if(A&&v>=0){const E=Math.min(p-1,v+f-1+Q);for(let P=v;P<=E;P+=1)n[e[P]]&&(_[P]=1)}const se={isMatch:v>=0,score:Math.max(.001,j)};if(A){const E=Uo(_,c);E.length?u&&(se.indices=E):se.isMatch=!1}return se}function Vo(e){const t={};for(let n=0,i=e.length;n<i;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<i-n-1}return t}function Fn(e){if(e.length<=1)return e;e.sort((n,i)=>n[0]-i[0]||n[1]-i[1]);const t=[e[0]];for(let n=1,i=e.length;n<i;n+=1){const r=t[t.length-1],o=e[n];o[0]<=r[1]+1?r[1]=Math.max(r[1],o[1]):t.push(o)}return t}const qi={ł:"l",Ł:"L",đ:"d",Đ:"D",ø:"o",Ø:"O",ħ:"h",Ħ:"H",ŧ:"t",Ŧ:"T",ı:"i",ß:"ss"},Go=new RegExp("["+Object.keys(qi).join("")+"]","g"),et=typeof String.prototype.normalize=="function"?e=>e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,"").replace(Go,t=>qi[t]):e=>e;var zn=class{constructor(e,{location:t=M.location,threshold:n=M.threshold,distance:i=M.distance,includeMatches:r=M.includeMatches,findAllMatches:o=M.findAllMatches,minMatchCharLength:a=M.minMatchCharLength,isCaseSensitive:c=M.isCaseSensitive,ignoreDiacritics:u=M.ignoreDiacritics,ignoreLocation:h=M.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:o,minMatchCharLength:a,isCaseSensitive:c,ignoreDiacritics:u,ignoreLocation:h},e=c?e:e.toLowerCase(),e=u?et(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const f=(g,m)=>{this.chunks.push({pattern:g,alphabet:Vo(g),startIndex:m})},p=this.pattern.length;if(p>32){let g=0;const m=p%32,v=p-m;for(;g<v;)f(this.pattern.substr(g,32),g),g+=32;if(m){const b=p-32;f(this.pattern.substr(b),b)}}else f(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i}=this.options;if(e=t?e:e.toLowerCase(),e=n?et(e):e,this.pattern===e){if(e.length<this.options.minMatchCharLength)return{isMatch:!1,score:1};const v={isMatch:!0,score:0};return i&&(v.indices=[[0,e.length-1]]),v}const{location:r,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,ignoreLocation:h}=this.options,f=[];let p=0,g=!1;this.chunks.forEach(({pattern:v,alphabet:b,startIndex:A})=>{const{isMatch:_,score:S,indices:L}=Wo(e,v,b,{location:r+A,distance:o,threshold:a,findAllMatches:c,minMatchCharLength:u,includeMatches:i,ignoreLocation:h});_&&(g=!0),p+=S,_&&L&&f.push(...L)});const m={isMatch:g,score:g?p/this.chunks.length:1};return g&&i&&(m.indices=Fn(f)),m}};const Yo=new Set(["fuzzy","include"]);function Xo(e){return e.startsWith("inverse")}const yn=[{type:"exact",multiRegex:/^="(.*)"$/,singleRegex:/^=(.*)$/,create:e=>({type:"exact",search(t){const n=t===e;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"include",multiRegex:/^'"(.*)"$/,singleRegex:/^'(.*)$/,create:e=>({type:"include",search(t){let n=0,i;const r=[],o=e.length;for(;(i=t.indexOf(e,n))>-1;)n=i+o,r.push([i,n-1]);const a=!!r.length;return{isMatch:a,score:a?0:1,indices:r}}})},{type:"prefix-exact",multiRegex:/^\^"(.*)"$/,singleRegex:/^\^(.*)$/,create:e=>({type:"prefix-exact",search(t){const n=t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}})},{type:"inverse-prefix-exact",multiRegex:/^!\^"(.*)"$/,singleRegex:/^!\^(.*)$/,create:e=>({type:"inverse-prefix-exact",search(t){const n=!t.startsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"inverse-suffix-exact",multiRegex:/^!"(.*)"\$$/,singleRegex:/^!(.*)\$$/,create:e=>({type:"inverse-suffix-exact",search(t){const n=!t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"suffix-exact",multiRegex:/^"(.*)"\$$/,singleRegex:/^(.*)\$$/,create:e=>({type:"suffix-exact",search(t){const n=t.endsWith(e);return{isMatch:n,score:n?0:1,indices:[t.length-e.length,t.length-1]}}})},{type:"inverse-exact",multiRegex:/^!"(.*)"$/,singleRegex:/^!(.*)$/,create:e=>({type:"inverse-exact",search(t){const n=t.indexOf(e)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}})},{type:"fuzzy",multiRegex:/^"(.*)"$/,singleRegex:/^(.*)$/,create:(e,t={})=>{const n=new zn(e,{location:t.location??M.location,threshold:t.threshold??M.threshold,distance:t.distance??M.distance,includeMatches:t.includeMatches??M.includeMatches,findAllMatches:t.findAllMatches??M.findAllMatches,minMatchCharLength:t.minMatchCharLength??M.minMatchCharLength,isCaseSensitive:t.isCaseSensitive??M.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics??M.ignoreDiacritics,ignoreLocation:t.ignoreLocation??M.ignoreLocation});return{type:"fuzzy",search(i){return n.searchIn(i)}}}}],Ci=yn.length,Qo="\0",Zo="|";function Jo(e){const t=[],n=e.length;let i=0;for(;i<n;){for(;i<n&&e[i]===" ";)i++;if(i>=n)break;let r=i;for(;r<n&&e[r]!==" "&&e[r]!=='"';)r++;if(r<n&&e[r]==='"'){for(r++;r<n;){if(e[r]==='"'){const o=r+1;if(o>=n||e[o]===" "){r++;break}if(e[o]==="$"&&(o+1>=n||e[o+1]===" ")){r+=2;break}}r++}t.push(e.substring(i,r)),i=r}else{for(;r<n&&e[r]!==" ";)r++;t.push(e.substring(i,r)),i=r}}return t}function Mi(e,t){const n=e.match(t);return n?n[1]:null}function ea(e,t={}){return e.replace(/\\\|/g,Qo).split(Zo).map(n=>{const i=Jo(n.replace(/\u0000/g,"|").trim()).filter(o=>o&&!!o.trim()),r=[];for(let o=0,a=i.length;o<a;o+=1){const c=i[o];let u=!1,h=-1;for(;!u&&++h<Ci;){const f=yn[h],p=Mi(c,f.multiRegex);p&&(r.push(f.create(p,t)),u=!0)}if(!u)for(h=-1;++h<Ci;){const f=yn[h],p=Mi(c,f.singleRegex);if(p){r.push(f.create(p,t));break}}}return r})}var ta=class{constructor(e,{isCaseSensitive:t=M.isCaseSensitive,ignoreDiacritics:n=M.ignoreDiacritics,includeMatches:i=M.includeMatches,minMatchCharLength:r=M.minMatchCharLength,ignoreLocation:o=M.ignoreLocation,findAllMatches:a=M.findAllMatches,location:c=M.location,threshold:u=M.threshold,distance:h=M.distance}={}){this.query=null,this.options={isCaseSensitive:t,ignoreDiacritics:n,includeMatches:i,minMatchCharLength:r,findAllMatches:a,ignoreLocation:o,location:c,threshold:u,distance:h},e=t?e:e.toLowerCase(),e=n?et(e):e,this.pattern=e,this.query=ea(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i,ignoreDiacritics:r}=this.options;e=i?e:e.toLowerCase(),e=r?et(e):e;let o=0;const a=[];let c=0,u=!1;for(let h=0,f=t.length;h<f;h+=1){const p=t[h];a.length=0,o=0,u=!1;for(let g=0,m=p.length;g<m;g+=1){const v=p[g],{isMatch:b,indices:A,score:_}=v.search(e);if(b)o+=1,c+=_,Xo(v.type)&&(u=!0),n&&(Yo.has(v.type)?a.push(...A):a.push(A));else{c=0,o=0,a.length=0,u=!1;break}}if(o){const g={isMatch:!0,score:c/o};return u&&(g.hasInverse=!0),n&&(g.indices=Fn(a)),g}}return{isMatch:!1,score:1}}};const bn=[];function qn(...e){bn.push(...e)}function Mt(e,t){for(let n=0,i=bn.length;n<i;n+=1){const r=bn[n];if(r.condition(e,t))return new r(e,t)}return new zn(e,t)}const $t={AND:"$and",OR:"$or"},vn={PATH:"$path",PATTERN:"$val"},wn=e=>!!(e[$t.AND]||e[$t.OR]),na=e=>!!e[vn.PATH],ia=e=>!Ae(e)&&Ni(e)&&!wn(e),$i=e=>({[$t.AND]:Object.keys(e).map(t=>({[t]:e[t]}))});function Ki(e,t,{auto:n=!0}={}){const i=r=>{if(q(r)){const u={keyId:null,pattern:r};return n&&(u.searcher=Mt(r,t)),u}const o=Object.keys(r),a=na(r);if(!a&&o.length>1&&!wn(r))return i($i(r));if(ia(r)){const u=a?r[vn.PATH]:o[0],h=a?r[vn.PATTERN]:r[u];if(!q(h))throw new Error(To(u));const f={keyId:Ct(u),pattern:h};return n&&(f.searcher=Mt(h,t)),f}const c={children:[],operator:o[0]};return o.forEach(u=>{const h=r[u];Ae(h)&&h.forEach(f=>{c.children.push(i(f))})}),c};return wn(e)||(e=$i(e)),i(e)}function xn(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){let n=1;return e.forEach(({key:i,norm:r,score:o})=>{const a=i?i.weight:null;n*=Math.pow(o===0&&a?Number.EPSILON:o,(a||1)*(t?1:r))}),n}function ra(e,{ignoreFieldNorm:t=M.ignoreFieldNorm}){e.forEach(n=>{n.score=xn(n.matches,{ignoreFieldNorm:t})})}var sa=class{constructor(e,t){this.limit=e,this.heap=[],this.comparator=t}get size(){return this.heap.length}insert(e){this.size<this.limit?(this.heap.push(e),this._bubbleUp(this.size-1)):this.comparator(e,this.heap[0])<0&&(this.heap[0]=e,this._sinkDown(0))}extractSorted(){return this.heap.sort(this.comparator)}_bubbleUp(e){const t=this.heap;for(;e>0;){const n=e-1>>1;if(this.comparator(t[e],t[n])<=0)break;const i=t[e];t[e]=t[n],t[n]=i,e=n}}_sinkDown(e){const t=this.heap,n=t.length;let i=e;do{e=i;const r=2*e+1,o=2*e+2;if(r<n&&this.comparator(t[r],t[i])>0&&(i=r),o<n&&this.comparator(t[o],t[i])>0&&(i=o),i!==e){const a=t[e];t[e]=t[i],t[i]=a}}while(i!==e)}};function oa(e){const t=[];return e.matches.forEach(n=>{if(!Z(n.indices)||!n.indices.length)return;const i={indices:n.indices,value:n.value};n.key&&(i.key=n.key.id),n.idx>-1&&(i.refIndex=n.idx),t.push(i)}),t}function aa(e,t,{includeMatches:n=M.includeMatches,includeScore:i=M.includeScore}={}){return e.map(r=>{const{idx:o}=r,a={item:t[o],refIndex:o};return n&&(a.matches=oa(r)),i&&(a.score=r.score),a})}const la=/[\p{L}\p{M}\p{N}_]+/gu,Si=new WeakSet;function ca(e){Si.has(e)||(Si.add(e),console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`))}function ua(e){if(typeof e=="function"){let t=!1;return n=>{const i=e(n);if(!t&&(t=!0,!Array.isArray(i)||i.some(r=>typeof r!="string")))throw new Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(i)?"array containing non-strings":typeof i}.`);return i}}return e instanceof RegExp?(e.global||ca(e),t=>t.match(e)||[]):t=>t.match(la)||[]}function _n({isCaseSensitive:e=!1,ignoreDiacritics:t=!1,tokenize:n}={}){const i=ua(n);return{tokenize(r){return e||(r=r.toLowerCase()),t&&(r=et(r)),i(r)}}}var ha=class{static condition(e,t){return t.useTokenSearch}constructor(e,t){this.options=t,this.analyzer=_n({isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,tokenize:t.tokenize});const n=this.analyzer.tokenize(e),{df:i,fieldCount:r}=t._invertedIndex;this.termSearchers=[],this.idfWeights=[];for(const o of n){this.termSearchers.push(new zn(o,{location:t.location,threshold:t.threshold,distance:t.distance,includeMatches:t.includeMatches,findAllMatches:t.findAllMatches,minMatchCharLength:t.minMatchCharLength,isCaseSensitive:t.isCaseSensitive,ignoreDiacritics:t.ignoreDiacritics,ignoreLocation:!0}));const a=i.get(o)||0,c=Math.log(1+(r-a+.5)/(a+.5));this.idfWeights.push(c)}this.combineAll=t.tokenMatch==="all",this.numTerms=this.termSearchers.length,this.useMask=this.numTerms<=31}searchIn(e){if(!this.termSearchers.length)return{isMatch:!1,score:1};const t=[];let n=0,i=0,r=0,o=0;const a=this.combineAll&&!this.useMask?new Set:null;for(let h=0;h<this.termSearchers.length;h++){const f=this.termSearchers[h].searchIn(e),p=this.idfWeights[h];i+=p,f.isMatch&&(r++,n+=p*(1-f.score),f.indices&&t.push(...f.indices),this.combineAll&&(this.useMask?o|=1<<h:a.add(h)))}if(r===0)return{isMatch:!1,score:1};const c=i>0?1-n/i:0,u={isMatch:!0,score:Math.max(.001,c)};return this.options.includeMatches&&t.length&&(u.indices=Fn(t)),this.combineAll&&(this.useMask?u.matchedMask=o:u.matchedTerms=a,u.termCount=this.numTerms),u}};function cn(e,t,n,i){const r=i.tokenize(t);if(!r.length)return;e.fieldCount++,e.docFieldCount.set(n,(e.docFieldCount.get(n)||0)+1);const o=new Set(r);let a=e.docTermFieldHits.get(n);a||(a=new Map,e.docTermFieldHits.set(n,a));for(const c of o)a.set(c,(a.get(c)||0)+1),e.df.set(c,(e.df.get(c)||0)+1)}function Ui(e,t,n,i){const{i:r,v:o,$:a}=t;if(o!==void 0){cn(e,o,r,i);return}if(a)for(let c=0;c<n;c++){const u=a[c];if(u)if(Array.isArray(u))for(const h of u)cn(e,h.v,r,i);else cn(e,u.v,r,i)}}function fa(e,t,n){const i={fieldCount:0,df:new Map,docFieldCount:new Map,docTermFieldHits:new Map};for(const r of e)Ui(i,r,t,n);return i}function da(e,t,n,i){Ui(e,t,n,i)}function pa(e,t){const n=e.docFieldCount.get(t);if(n===void 0)return;e.fieldCount-=n,e.docFieldCount.delete(t);const i=e.docTermFieldHits.get(t);if(i){for(const[r,o]of i){const a=(e.df.get(r)||0)-o;a<=0?e.df.delete(r):e.df.set(r,a)}e.docTermFieldHits.delete(t)}}function Li(e,t){if(t.length===0)return;const n=Array.from(new Set(t)).sort((c,u)=>c-u);for(const c of n)pa(e,c);const i=c=>{let u=0,h=n.length;for(;u<h;){const f=u+h>>>1;n[f]<c?u=f+1:h=f}return c-u},r=n[0],o=new Map;for(const[c,u]of e.docFieldCount)o.set(c>r?i(c):c,u);e.docFieldCount=o;const a=new Map;for(const[c,u]of e.docTermFieldHits)a.set(c>r?i(c):c,u);e.docTermFieldHits=a}var Ce=class{constructor(e,t,n){this.options={...M,...t},this.options.useExtendedSearch,this.options.useTokenSearch,this._keyStore=new Bo(this.options.keys),this._docs=e,this._myIndex=null,this._invertedIndex=null,this.setCollection(e,n),this._lastQuery=null,this._lastSearcher=null}_getSearcher(e){if(this._lastQuery===e)return this._lastSearcher;const t=Mt(e,this._invertedIndex?{...this.options,_invertedIndex:this._invertedIndex}:this.options);return this._lastQuery=e,this._lastSearcher=t,t}setCollection(e,t){if(this._docs=e,t&&!(t instanceof Hn))throw new Error(ko);if(this._myIndex=t||zi(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight}),this.options.useTokenSearch){const n=_n({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});this._invertedIndex=fa(this._myIndex.records,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}add(e){if(!Z(e))return;this._docs.push(e);const t=this._myIndex.add(e,this._docs.length-1);if(this._invertedIndex&&t){const n=_n({isCaseSensitive:this.options.isCaseSensitive,ignoreDiacritics:this.options.ignoreDiacritics,tokenize:this.options.tokenize});da(this._invertedIndex,t,this._myIndex.keys.length,n)}this._invalidateSearcherCache()}remove(e=()=>!1){const t=[],n=[];for(let i=0,r=this._docs.length;i<r;i+=1)e(this._docs[i],i)&&(t.push(this._docs[i]),n.push(i));if(n.length){this._invertedIndex&&Li(this._invertedIndex,n);const i=new Set(n);this._docs=this._docs.filter((r,o)=>!i.has(o)),this._myIndex.removeAll(n),this._invalidateSearcherCache()}return t}removeAt(e){if(!Number.isInteger(e)||e<0||e>=this._docs.length)throw new Error(mn);this._invertedIndex&&Li(this._invertedIndex,[e]);const t=this._docs.splice(e,1)[0];return this._myIndex.removeAt(e),this._invalidateSearcherCache(),t}_invalidateSearcherCache(){this._lastQuery=null,this._lastSearcher=null}getIndex(){return this._myIndex}_normalizedKeys(){return this._myIndex.keys.map(e=>this._keyStore.get(e.id)||e)}search(e,t){const{limit:n=-1}=t||{},{includeMatches:i,includeScore:r,shouldSort:o,sortFn:a,ignoreFieldNorm:c}=this.options;if(q(e)&&!e.trim()){let g=this._docs.map((m,v)=>({item:m,refIndex:v}));return At(n)&&n>-1&&(g=g.slice(0,n)),g}const u=o&&At(n)&&n>0&&q(e),h=a,f=(g,m)=>h(g,m)||g.idx-m.idx;let p;if(u){const g=new sa(n,f);q(this._docs[0])?this._searchStringList(e,{heap:g,ignoreFieldNorm:c}):this._searchObjectList(e,{heap:g,ignoreFieldNorm:c}),p=g.extractSorted()}else p=q(e)?q(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e),ra(p,{ignoreFieldNorm:c}),o&&p.sort(q(e)?f:h),At(n)&&n>-1&&(p=p.slice(0,n));return aa(p,this._docs,{includeMatches:i,includeScore:r})}_searchStringList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=t?null:[];return o.forEach(({v:c,i:u,n:h})=>{if(!Z(c))return;const f=i.searchIn(c);if(f.isMatch){const p={score:f.score,value:c,norm:h,indices:f.indices};r&&(p.matchedMask=f.matchedMask,p.matchedTerms=f.matchedTerms,p.termCount=f.termCount);const g=[p];if(!r||this._coversAllTokens(g)){const m={item:c,idx:u,matches:g};t?(m.score=xn(m.matches,{ignoreFieldNorm:n}),t.insert(m)):a.push(m)}}}),a}_searchLogical(e){const t=Ki(e,this.options),n=this._normalizedKeys(),i=(c,u,h)=>{if(!("children"in c)){const{keyId:m,searcher:v}=c;let b;return m===null?(b=[],n.forEach((A,_)=>{b.push(...this._findMatches({key:A,value:u[_],searcher:v}))})):b=this._findMatches({key:this._keyStore.get(m),value:this._myIndex.getValueForItemAtKeyId(u,m),searcher:v}),b&&b.length?[{idx:h,item:u,matches:b}]:[]}const{children:f,operator:p}=c,g=[];for(let m=0,v=f.length;m<v;m+=1){const b=f[m],A=i(b,u,h);if(A.length)g.push(...A);else if(p===$t.AND)return[]}return g},r=this._myIndex.records,o=new Map,a=[];return r.forEach(({$:c,i:u})=>{if(Z(c)){const h=i(t,c,u);h.length&&(o.has(u)||(o.set(u,{idx:u,item:c,matches:[]}),a.push(o.get(u))),h.forEach(({matches:f})=>{o.get(u).matches.push(...f)}))}}),a}_searchObjectList(e,{heap:t,ignoreFieldNorm:n}={}){const i=this._getSearcher(e),r=this.options.useTokenSearch&&this.options.tokenMatch==="all",{records:o}=this._myIndex,a=this._normalizedKeys(),c=t?null:[];return o.forEach(({$:u,i:h})=>{if(!Z(u))return;const f=[];let p=!1,g=!1;if(a.forEach((m,v)=>{const b=this._findMatches({key:m,value:u[v],searcher:i});b.length?(f.push(...b),b[0].hasInverse&&(g=!0)):p=!0}),!(g&&p)&&f.length&&(!r||this._coversAllTokens(f))){const m={idx:h,item:u,matches:f};t?(m.score=xn(m.matches,{ignoreFieldNorm:n}),t.insert(m)):c.push(m)}}),c}_findMatches({key:e,value:t,searcher:n}){if(!Z(t))return[];const i=[];if(Ae(t))t.forEach(({v:r,i:o,n:a})=>{if(!Z(r))return;const c=n.searchIn(r);if(c.isMatch){const u={score:c.score,key:e,value:r,idx:o,norm:a,indices:c.indices,hasInverse:c.hasInverse};c.termCount!==void 0&&(u.matchedMask=c.matchedMask,u.matchedTerms=c.matchedTerms,u.termCount=c.termCount),i.push(u)}});else{const{v:r,n:o}=t,a=n.searchIn(r);if(a.isMatch){const c={score:a.score,key:e,value:r,norm:o,indices:a.indices,hasInverse:a.hasInverse};a.termCount!==void 0&&(c.matchedMask=a.matchedMask,c.matchedTerms=a.matchedTerms,c.termCount=a.termCount),i.push(c)}}return i}_coversAllTokens(e){const t=e.length?e[0].termCount:void 0;if(t===void 0)return!0;if(t<=31){let i=0;for(let r=0;r<e.length;r++)i|=e[r].matchedMask||0;return i===2**t-1}const n=new Set;for(let i=0;i<e.length;i++){const r=e[i].matchedTerms;if(r)for(const o of r)n.add(o)}return n.size===t}};Ce.version="7.5.0";Ce.createIndex=zi;Ce.parseIndex=Ko;Ce.config=M;Ce.match=function(e,t,n){if(n&&n.useTokenSearch)throw new Error(Oo);return Mt(e,{...M,...n}).searchIn(t)};Ce.parseQuery=Ki;qn(ta);qn(ha);Ce.use=function(...e){e.forEach(t=>qn(t))};var Kn=Ce;function Wi(e,t){const n=new Kn(t.filterProperties,{keys:["title"]});if(!(e.target instanceof HTMLInputElement))return;const i=e.target.value,o=n.search(i).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(t.filters).forEach(a=>{t.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!i?"":"none"})}function ga(e,t){if(!(e.target instanceof HTMLElement))return;const n=e.target.getAttribute("data-close").replace("|","-");t.querySelector(`#filter-${n}`).reset(),t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}const An=Math.min,Fe=Math.max,St=Math.round,_t=Math.floor,fe=e=>({x:e,y:e});function ma(e,t){return typeof e=="function"?e(t):e}function ya(e){return e.split("-")[0]}function ba(e){return e.split("-")[1]}function va(e){return e==="x"?"y":"x"}function wa(e){return e==="y"?"height":"width"}function Vi(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function xa(e){return va(Vi(e))}function _a(e){var t,n,i,r;return{top:(t=e.top)!=null?t:0,right:(n=e.right)!=null?n:0,bottom:(i=e.bottom)!=null?i:0,left:(r=e.left)!=null?r:0}}function Aa(e){return typeof e!="number"?_a(e):{top:e,right:e,bottom:e,left:e}}function Lt(e){const{x:t,y:n,width:i,height:r}=e;return{width:i,height:r,top:n,left:t,right:t+i,bottom:n+r,x:t,y:n}}function Ri(e,t,n){let{reference:i,floating:r}=e;const o=Vi(t),a=xa(t),c=wa(a),u=ya(t),h=o==="y",f=i.x+i.width/2-r.width/2,p=i.y+i.height/2-r.height/2,g=i[c]/2-r[c]/2;let m;switch(u){case"top":m={x:f,y:i.y-r.height};break;case"bottom":m={x:f,y:i.y+i.height};break;case"right":m={x:i.x+i.width,y:p};break;case"left":m={x:i.x-r.width,y:p};break;default:m={x:i.x,y:i.y}}const v=ba(t);return v&&(m[a]+=g*(v==="end"?1:-1)*(n&&h?-1:1)),m}async function Ca(e,t){var n;t===void 0&&(t={});const{x:i,y:r,platform:o,rects:a,elements:c,strategy:u}=e,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:p="floating",altBoundary:g=!1,padding:m=0}=ma(t,e),v=Aa(m),A=c[g?p==="floating"?"reference":"floating":p],_=Lt(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(A)))==null||n?A:A.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:h,rootBoundary:f,strategy:u})),S=p==="floating"?{x:i,y:r,width:a.floating.width,height:a.floating.height}:a.reference,L=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),j=await(o.isElement==null?void 0:o.isElement(L))&&await(o.getScale==null?void 0:o.getScale(L))||{x:1,y:1},Q=Lt(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:S,offsetParent:L,strategy:u}):S);return{top:(_.top-Q.top+v.top)/j.y,bottom:(Q.bottom-_.bottom+v.bottom)/j.y,left:(_.left-Q.left+v.left)/j.x,right:(Q.right-_.right+v.right)/j.x}}const Ma=50,$a=async(e,t,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:o=[],platform:a}=n,c=a.detectOverflow?a:{...a,detectOverflow:Ca},u=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:e,floating:t,strategy:r}),{x:f,y:p}=Ri(h,i,u),g=i,m=0;const v={};for(let b=0;b<o.length;b++){const A=o[b];if(!A)continue;const{name:_,fn:S}=A,{x:L,y:j,data:Q,reset:N}=await S({x:f,y:p,initialPlacement:i,placement:g,strategy:r,middlewareData:v,rects:h,platform:c,elements:{reference:e,floating:t}});f=L??f,p=j??p,v[_]={...v[_],...Q},N&&m<Ma&&(m++,typeof N=="object"&&(N.placement&&(g=N.placement),N.rects&&(h=N.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:r}):N.rects),{x:f,y:p}=Ri(h,g,u)),b=-1)}return{x:f,y:p,placement:g,strategy:r,middlewareData:v}};function Ht(){return typeof window<"u"}function Ue(e){return Gi(e)?(e.nodeName||"").toLowerCase():"#document"}function X(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function pe(e){var t;return(t=(Gi(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Gi(e){return Ht()?e instanceof Node||e instanceof X(e).Node:!1}function ne(e){return Ht()?e instanceof Element||e instanceof X(e).Element:!1}function Me(e){return Ht()?e instanceof HTMLElement||e instanceof X(e).HTMLElement:!1}function ki(e){return!Ht()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof X(e).ShadowRoot}function Ft(e){const{overflow:t,overflowX:n,overflowY:i,display:r}=ie(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+n)&&r!=="inline"&&r!=="contents"}function Sa(e){return/^(table|td|th)$/.test(Ue(e))}function zt(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const La=/transform|translate|scale|rotate|perspective|filter/,Ra=/paint|layout|strict|content/,ke=e=>!!e&&e!=="none";let un;function Un(e){const t=ne(e)?ie(e):e;return ke(t.transform)||ke(t.translate)||ke(t.scale)||ke(t.rotate)||ke(t.perspective)||!Wn()&&(ke(t.backdropFilter)||ke(t.filter))||La.test(t.willChange||"")||Ra.test(t.contain||"")}function ka(e){let t=Ee(e);for(;Me(t)&&!tt(t);){if(Un(t))return t;if(zt(t))return null;t=Ee(t)}return null}function Wn(){return un==null&&(un=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),un}function tt(e){return/^(html|body|#document)$/.test(Ue(e))}function ie(e){return X(e).getComputedStyle(e)}function qt(e){return ne(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ee(e){if(Ue(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ki(e)&&e.host||pe(e);return ki(t)?t.host:t}function Yi(e){const t=Ee(e);return tt(t)?(e.ownerDocument||e).body:Me(t)&&Ft(t)?t:Yi(t)}function nt(e,t,n){var i;t===void 0&&(t=[]),n===void 0&&(n=!0);const r=Yi(e),o=r===((i=e.ownerDocument)==null?void 0:i.body),a=X(r);if(o){const c=Cn(a);return t.concat(a,a.visualViewport||[],Ft(r)?r:[],c&&n?nt(c):[])}else return t.concat(r,nt(r,[],n))}function Cn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Xi(e){const t=ie(e);let n=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const r=Me(e),o=r?e.offsetWidth:n,a=r?e.offsetHeight:i,c=St(n)!==o||St(i)!==a;return c&&(n=o,i=a),{width:n,height:i,$:c}}function Vn(e){return ne(e)?e:e.contextElement}function ze(e){const t=Vn(e);if(!Me(t))return fe(1);const n=t.getBoundingClientRect(),{width:i,height:r,$:o}=Xi(t);let a=(o?St(n.width):n.width)/i,c=(o?St(n.height):n.height)/r;return(!a||!Number.isFinite(a))&&(a=1),(!c||!Number.isFinite(c))&&(c=1),{x:a,y:c}}const Ta=fe(0);function Qi(e){const t=X(e);return!Wn()||!t.visualViewport?Ta:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ea(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===X(e)}function De(e,t,n,i){t===void 0&&(t=!1),n===void 0&&(n=!1);const r=e.getBoundingClientRect(),o=Vn(e);let a=fe(1);t&&(i?ne(i)&&(a=ze(i)):a=ze(e));const c=Ea(o,n,i)?Qi(o):fe(0);let u=(r.left+c.x)/a.x,h=(r.top+c.y)/a.y,f=r.width/a.x,p=r.height/a.y;if(o&&i){const g=X(o),m=ne(i)?X(i):i;let v=g,b=Cn(v);for(;b&&m!==v;){const A=ze(b),_=b.getBoundingClientRect(),S=ie(b),L=_.left+(b.clientLeft+parseFloat(S.paddingLeft))*A.x,j=_.top+(b.clientTop+parseFloat(S.paddingTop))*A.y;u*=A.x,h*=A.y,f*=A.x,p*=A.y,u+=L,h+=j,v=X(b),b=Cn(v)}}return Lt({width:f,height:p,x:u,y:h})}function Kt(e,t){const n=qt(e).scrollLeft;return t?t.left+n:De(pe(e)).left+n}function Zi(e,t){const n=e.getBoundingClientRect(),i=n.left+t.scrollLeft-Kt(e,n),r=n.top+t.scrollTop;return{x:i,y:r}}function Da(e){let{elements:t,rect:n,offsetParent:i,strategy:r}=e;const o=r==="fixed",a=pe(i),c=t?zt(t.floating):!1;if(i===a||c&&o)return n;let u={scrollLeft:0,scrollTop:0},h=fe(1);const f=fe(0),p=Me(i);if((p||!o)&&((Ue(i)!=="body"||Ft(a))&&(u=qt(i)),p)){const m=De(i);h=ze(i),f.x=m.x+i.clientLeft,f.y=m.y+i.clientTop}const g=a&&!p&&!o?Zi(a,u):fe(0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-u.scrollLeft*h.x+f.x+g.x,y:n.y*h.y-u.scrollTop*h.y+f.y+g.y}}function ja(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Oa(e){const t=qt(e),n=e.ownerDocument.body,i=Fe(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=Fe(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let o=-t.scrollLeft+Kt(e);const a=-t.scrollTop;return ie(n).direction==="rtl"&&(o+=Fe(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:o,y:a}}const Ba=25;function Pa(e,t,n){n===void 0&&(n="viewport");const i=n==="layoutViewport",r=X(e),o=pe(e),a=r.visualViewport;let c=o.clientWidth,u=o.clientHeight,h=0,f=0;if(a){const g=!Wn()||t==="fixed";i?g||(h=-a.offsetLeft,f=-a.offsetTop):(c=a.width,u=a.height,g&&(h=a.offsetLeft,f=a.offsetTop))}if(Kt(o)<=0){const g=o.ownerDocument,m=g.body,v=getComputedStyle(m),b=g.compatMode==="CSS1Compat"&&parseFloat(v.marginLeft)+parseFloat(v.marginRight)||0,A=Math.abs(o.clientWidth-m.clientWidth-b),_=getComputedStyle(o).scrollbarGutter==="stable both-edges"?A/2:A;_<=Ba&&(c-=_)}return{width:c,height:u,x:h,y:f}}function Ia(e,t){const n=De(e,!0,t==="fixed"),i=n.top+e.clientTop,r=n.left+e.clientLeft,o=ze(e),a=e.clientWidth*o.x,c=e.clientHeight*o.y,u=r*o.x,h=i*o.y;return{width:a,height:c,x:u,y:h}}function Ti(e,t,n){let i;if(t==="viewport"||t==="layoutViewport")i=Pa(e,n,t);else if(t==="document")i=Oa(pe(e));else if(ne(t))i=Ia(t,n);else{const r=Qi(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return Lt(i)}function Na(e,t){const n=t.get(e);if(n)return n;let i=nt(e,[],!1).filter(c=>ne(c)&&Ue(c)!=="body"),r=null;const o=ie(e).position==="fixed";let a=o?Ee(e):e;for(;ne(a)&&!tt(a);){const c=ie(a),u=Un(a),h=r?r.position:o?"fixed":"";!u&&(h==="fixed"||h==="absolute"&&c.position==="static")?i=i.filter(p=>p!==a):r=c,a=Ee(a)}return t.set(e,i),i}function Ha(e){let{element:t,boundary:n,rootBoundary:i,strategy:r}=e;const a=[...n==="clippingAncestors"?zt(t)?[]:Na(t,this._c):[].concat(n),i],c=Ti(t,a[0],r);let u=c.top,h=c.right,f=c.bottom,p=c.left;for(let g=1;g<a.length;g++){const m=Ti(t,a[g],r);u=Fe(m.top,u),h=An(m.right,h),f=An(m.bottom,f),p=Fe(m.left,p)}return{width:h-p,height:f-u,x:p,y:u}}function Fa(e){const{width:t,height:n}=Xi(e);return{width:t,height:n}}function za(e,t,n){const i=Me(t),r=pe(t),o=n==="fixed",a=De(e,!0,o,t);let c={scrollLeft:0,scrollTop:0};const u=fe(0);if((i||!o)&&((Ue(t)!=="body"||Ft(r))&&(c=qt(t)),i)){const g=De(t,!0,o,t);u.x=g.x+t.clientLeft,u.y=g.y+t.clientTop}!i&&r&&(u.x=Kt(r));const h=r&&!i&&!o?Zi(r,c):fe(0),f=a.left+c.scrollLeft-u.x-h.x,p=a.top+c.scrollTop-u.y-h.y;return{x:f,y:p,width:a.width,height:a.height}}function hn(e){return ie(e).position==="static"}function Ei(e,t){if(!Me(e)||ie(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return pe(e)===n&&(n=n.ownerDocument.body),n}function Ji(e,t){const n=X(e);if(zt(e))return n;if(!Me(e)){let r=Ee(e);for(;r&&!tt(r);){if(ne(r)&&!hn(r))return r;r=Ee(r)}return n}let i=Ei(e,t);for(;i&&Sa(i)&&hn(i);)i=Ei(i,t);return i&&tt(i)&&hn(i)&&!Un(i)?n:i||ka(e)||n}const qa=async function(e){const t=this.getOffsetParent||Ji,n=this.getDimensions,i=await n(e.floating);return{reference:za(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Ka(e){return ie(e).direction==="rtl"}const Ua={convertOffsetParentRelativeRectToViewportRelativeRect:Da,getDocumentElement:pe,getClippingRect:Ha,getOffsetParent:Ji,getElementRects:qa,getClientRects:ja,getDimensions:Fa,getScale:ze,isElement:ne,isRTL:Ka};function er(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Wa(e,t,n){let i=null,r;const o=pe(e);function a(){var f;clearTimeout(r),(f=i)==null||f.disconnect(),i=null}function c(f,p){f===void 0&&(f=!1),p===void 0&&(p=1),a();const g=e.getBoundingClientRect(),{left:m,top:v,width:b,height:A}=g;if(f||t(),!b||!A)return;const _=_t(v),S=_t(o.clientWidth-(m+b)),L=_t(o.clientHeight-(v+A)),j=_t(m),N={rootMargin:-_+"px "+-S+"px "+-L+"px "+-j+"px",threshold:Fe(0,An(1,p))||1};let ge=!0;function se(E){const P=E[0].intersectionRatio;if(!er(g,e.getBoundingClientRect()))return c();if(P!==p){if(!ge)return c();P?c(!1,P):r=setTimeout(()=>{c(!1,1e-7)},1e3)}ge=!1}try{i=new IntersectionObserver(se,{...N,root:o.ownerDocument})}catch{i=new IntersectionObserver(se,N)}i.observe(e)}const u=X(e),h=()=>c(n);return u.addEventListener("resize",h),c(!0),()=>{u.removeEventListener("resize",h),a()}}function Va(e,t,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:u=!1}=i,h=Vn(e),f=r||o?[...h?nt(h):[],...t?nt(t):[]]:[];f.forEach(_=>{r&&_.addEventListener("scroll",n),o&&_.addEventListener("resize",n)});const p=h&&c?Wa(h,n,o):null;let g=-1,m=null;a&&(m=new ResizeObserver(_=>{let[S]=_;S&&S.target===h&&m&&t&&(m.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var L;(L=m)==null||L.observe(t)})),n()}),h&&!u&&m.observe(h),t&&m.observe(t));let v,b=u?De(e):null;u&&A();function A(){const _=De(e);b&&!er(b,_)&&n(),b=_,v=requestAnimationFrame(A)}return n(),()=>{var _;f.forEach(S=>{r&&S.removeEventListener("scroll",n),o&&S.removeEventListener("resize",n)}),p==null||p(),(_=m)==null||_.disconnect(),m=null,u&&cancelAnimationFrame(v)}}const Ga=(e,t,n)=>{const i=new Map,r=n??{},o={...Ua,...r.platform,_c:i};return $a(e,t,{...r,platform:o})};function Ya(e){const t=e.renderRoot.querySelector(".inline-container-wrapper"),n=e.renderRoot.querySelector("[popover]");return Va(t,n,()=>{n.matches(":popover-open")&&Ga(t,n,{strategy:"fixed"}).then(({x:r,y:o})=>{Object.assign(n.style,{left:`${r}px`,top:`${o}px`,width:`${t.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function tr(e){e.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Wi({target:{value:""}},e)}function Xa(e,t){t.inlineMode&&e.stopPropagation()}function Qa(e){e.inlineMode&&(e.showDropdown=!0)}function Za(e,t){t.inlineMode&&(e.stopPropagation(),t.showDropdown=!0)}function Ja(e,t){t.inlineMode&&e.key==="Escape"&&t.showDropdown&&(tr(t),t.showDropdown=!1)}function el(e,t){t.inlineMode&&e.target instanceof HTMLElement&&e.target.tagName!=="DROPDOWN-FORM"&&e.target.tagName!=="EOX-ITEMFILTER"&&t.showDropdown&&(tr(t),t.showDropdown=!1)}function Mn(e,t={}){const n=Pn(e);switch(!t.properties&&e.type==="Feature"&&(t.properties=e.properties),n.type){case"Polygon":return tl(n,t);case"MultiPolygon":return nl(n,t);default:throw new Error("invalid poly")}}function tl(e,t={}){const i=Pn(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{};return nr(i,r)}function nl(e,t={}){const i=Pn(e).coordinates,r=t.properties?t.properties:e.type==="Feature"?e.properties:{},o=[];return i.forEach(a=>{o.push(nr(a,r))}),_o(o)}function nr(e,t){return e.length>1?Ao(e,t):Co(e[0],t)}function il(e,t,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let i=!0;return xi(e,r=>{xi(t,o=>{if(i===!1)return!1;i=rl(r.geometry,o.geometry,n)})}),i}function rl(e,t,n){switch(e.type){case"Point":switch(t.type){case"Point":return!ll(e.coordinates,t.coordinates);case"LineString":return!Rt(t,e);case"Polygon":return!Je(e,t)}break;case"LineString":switch(t.type){case"Point":return!Rt(e,t);case"LineString":return!sl(e,t,n);case"Polygon":return!Di(t,e,n)}break;case"Polygon":switch(t.type){case"Point":return!Je(t,e);case"LineString":return!Di(e,t,n);case"Polygon":return!ol(t,e,n)}}return!1}function Rt(e,t){for(let n=0;n<e.coordinates.length-1;n++)if(al(e.coordinates[n],e.coordinates[n+1],t.coordinates))return!0;return!1}function sl(e,t,n){if(In(e,t,{ignoreSelfIntersections:n}).features.length>0)return!0;for(const r of e.coordinates)if(Rt(t,{coordinates:r}))return!0;for(const r of t.coordinates)if(Rt(e,{coordinates:r}))return!0;return!1}function Di(e,t,n){for(const r of t.coordinates)if(Je(r,e))return!0;return In(t,Mn(e),{ignoreSelfIntersections:n}).features.length>0}function ol(e,t,n){for(const r of e.coordinates[0])if(Je(r,t))return!0;for(const r of t.coordinates[0])if(Je(r,e))return!0;return In(Mn(e),Mn(t),{ignoreSelfIntersections:n}).features.length>0}function al(e,t,n){const i=n[0]-e[0],r=n[1]-e[1],o=t[0]-e[0],a=t[1]-e[1];return i*a-r*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?e[0]<=n[0]&&n[0]<=t[0]:t[0]<=n[0]&&n[0]<=e[0]:a>0?e[1]<=n[1]&&n[1]<=t[1]:t[1]<=n[1]&&n[1]<=e[1]}function ll(e,t){return e[0]===t[0]&&e[1]===t[1]}function cl(e,t,{ignoreSelfIntersections:n=!0}={}){return!il(e,t,{ignoreSelfIntersections:n})}var ul=cl;function hl(e,t){return xo(t,e)}var fl=hl;const dl=(e,t)=>t?ul(e,t):!0,pl=(e,t)=>t?fl(e,t):!0;function gl(e,t="highlight",n="title"){const i=(r,o=[])=>{let a="",c=0,u=0;return o.forEach((h,f)=>{const p=h[1]+1;f&&u>h[0]||(u=h[1],a+=[r.substring(c,h[0]),`<mark class="${t}">`,r.substring(h[0],p),"</mark>"].join(""),c=p)}),a+=r.substring(c),a};return e.filter(({matches:r})=>r&&r.length).map(({item:r,matches:o})=>{const a={...r};return o.forEach(c=>{if(c.key!==n)return;const u=i(kt(c.value),xl(c.indices));a.highlightedText=u}),a})}let ir;const ml=(e,t)=>{ir=new Kn(e,{threshold:.4,distance:50,ignoreLocation:!0,includeMatches:!0,useExtendedSearch:!0,...t})},yl=async(e,t,n)=>{const i=Object.entries(t).filter(([,c])=>c.type==="text"||c.type==="select"||c.type==="multiselect").reduce((c,[u,h])=>{const f="$or",p=[],g=(m,v)=>{const b={};h.type==="text"?b[m]=`${v}`:b[u]=`="${m}"`,p.push(b)};return Object.entries(h.state).filter(([,m])=>m).forEach(([m,v])=>g(m,v)),p.length>0&&c.push({[f]:p}),c},[]);let r;if(!(i.length>0)&&n.matchAllWhenEmpty!==!1)r=e;else{const c={$and:[...i]},u=ir.search(c);r=n.enableHighlighting?gl(u,"highlight",n.titleProperty):u.map(h=>h.item)}const o=Object.entries(t).filter(([,c])=>c.type==="range").reduce((c,[u,h])=>{const f=p=>h.format==="date"?k(p).valueOf():parseFloat(p);return c[u]={min:f(h.state.min),max:f(h.state.max),format:h.format},c},{});if(Object.keys(o).length>0){const c=[];for(let u=0;u<r.length;u++){const h={};for(const[f,p]of Object.entries(o)){const g=v=>p.format==="date"?k(v).valueOf():parseFloat(v),m=z(f,r[u]);m?Array.isArray(m)?h[f]=o[f].min<=g(m[1])&&g(m[0])<=o[f].max:g(m)>=o[f].min&&g(m)<=o[f].max?h[f]=!0:h[f]=!1:h[f]=!0}Object.values(h).every(f=>!!f)&&c.push(r[u])}r=[...c]}const a=Object.entries(t).filter(([,c])=>c.type==="spatial").reduce((c,[u,h])=>(c[u]={geometry:h.state.geometry,mode:h.state.mode},c),{});if(Object.values(a).map(c=>c.geometry).filter(c=>!!c).length>0){const c=[];for(let u=0;u<r.length;u++){const h={};for(const f of Object.keys(a)){const p=z(f,r[u]),g=a[f].mode||"within";p&&(g==="within"?pl(p,a[f].geometry):dl(p,a[f].geometry))?h[f]=!0:h[f]=!1}Object.values(h).every(f=>!!f)&&c.push(r[u])}r=[...c]}return r};function bl(e,t){return[{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}},{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...e&&{format:"GeoJSON"},...e&&{url:t}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]}]}function Ut(e){if(!e.dirty)return null;switch(e.type){case"multiselect":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"range":e.state.min=e.min,e.state.max=e.max;break;case"select":for(const n in e.state)e.state.hasOwnProperty(n)&&(e.state[n]=!1);break;case"spatial":e.state.geometry=void 0;break;case"text":e.keys.forEach(n=>{e.state[n]=void 0});break}return delete e.stringifiedState,delete e.dirty,e}function ji(e,t){return e*2+t}function vl(e){return Object.keys(e).map(t=>({title:C`${e[t].title||e[t].key}:
      ${e[t].stringifiedState}`,key:t})).filter(t=>e[t.key].dirty)}function $n(e){return Object.values(e).map(t=>t.dirty).filter(t=>t).length>0}async function wl(e,t,n){const i=n.externalFilter(e,t),r=typeof i=="string"||i instanceof String?i:i.url,o=typeof i=="object"&&"fetchFn"in i?await i.fetchFn(r):await fetch(r).then(async a=>await a.json());return i.key?z(i.key,o):o}function rr(e,t,n){let i;if(e.detail?i=e.detail.target:i=e.target,i!=null&&i.classList.contains("details-filter")){if(!i.open||t!=null&&t.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(r=>{const o=r.shadowRoot.querySelector(".details-filter");o&&o!==i&&o.removeAttribute("open")})}else{if(!(i!=null&&i.open)||t!=null&&t.expandMultipleResults)return;n.querySelectorAll("details").forEach(r=>{r!==i&&r.removeAttribute("open")})}}function z(e,t){return typeof e=="function"?e(t):e!=null&&e.includes(".")?e.split(".").reduce((n,i)=>n&&n[i],t):t[e]}function kt(e){return e.split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function xl(e,{mergeAdjacent:t=!1}={}){if(!Array.isArray(e))return[];const n=e.map(([r,o])=>r<=o?[r,o]:[o,r]).sort((r,o)=>r[0]-o[0]||r[1]-o[1]),i=[];for(const[r,o]of n){if(i.length===0){i.push([r,o]);continue}const a=i[i.length-1];(t?r<=a[1]+1:r<=a[1])?o>a[1]&&(a[1]=o):i.push([r,o])}return i}function Tt(e){return e.format==="date"}var T,sr,Sn,Ln,or,Rn,kn,ar,Tn,lr,cr;class _l extends re{constructor(){super();U(this,T);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=R(this,T,or).bind(this),this._handleKeyDown=R(this,T,Rn).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&R(this,T,Sn).call(this)}disconnectedCallback(){this.inlineMode&&R(this,T,Ln).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?R(this,T,Sn).call(this):R(this,T,Ln).call(this))}render(){return C`
      <style>
        ${!this.unstyled&&Nn}
      </style>
      ${this.inlineMode?C`
            <div
              class="inline-container-wrapper"
              @click="${R(this,T,kn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${vl(this.filters)}
                      .controller=${{remove:n=>R(this,T,lr).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${I($n(this.filters),()=>C`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":C`
                              <i class="small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <title>close</title>
                                  <path
                                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                  />
                                </svg>
                              </i>
                            `}
                      </button>
                    `)}
                </div>
                <div
                  class="input-container field no-margin ${$n(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${R(this,T,kn)}"
                    @focus="${R(this,T,ar)}"
                    @input="${R(this,T,cr)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div
                popover="manual"
                class="square surface-container-lowest small-elevate"
              >
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${R(this,T,Rn)}"
                  @click="${R(this,T,Tn)}"
                  @focus="${R(this,T,Tn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:C`<slot name="section"></slot>`}
    `}}T=new WeakSet,sr=function(){setTimeout(()=>this._overlayCleanup=Ya(this))},Sn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),R(this,T,sr).call(this)},Ln=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},or=function(n){el(n,this)},Rn=function(n){Ja(n,this)},kn=function(n){Za(n,this)},ar=function(){Qa(this)},Tn=function(n){Xa(n,this)},lr=function(n){ga(n,this)},cr=function(n){Wi(n,this)};customElements.define("eox-itemfilter-container",_l);function Al(e){const t=e.renderRoot.querySelector("input[type='text']");t.value="",Ut(e.filterObject),e.requestUpdate()}function Cl(e){const t=e.renderRoot.querySelector("input[type='text']");e.isValid=t.checkValidity(),e.filterObject.keys.forEach(n=>{e.filterObject.state[n]=t.value}),e.filterObject.dirty=!0,e.filterObject.stringifiedState=t.value,e.dispatchEvent(new CustomEvent("filter")),t.value===""&&e.reset()}const Ml=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,resultSorting:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),fn=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","resultSorting","expandMultipleFilters","expandResults","expandMultipleResults","items"],qe="YYYY-MM-DD";function $l(e){if(Ut(e.filterObject),e.filterObject){const t=e.filterObject.min,n=e.filterObject.max,i=e.querySelector("eox-timecontrol");i&&i.dateChange([k(t).format(),k(n).format()],i);const r=e.querySelector("tc-range-slider");r&&(r.value1!==t&&(r.value1=t),r.value2!==n&&(r.value2=n))}e.requestUpdate()}function Oi(e,t){const n=m=>Tt(t.filterObject)?k(m).valueOf():parseFloat(m),i=n(e.detail.values[0]),r=n(e.detail.values[1]),o=n(t.filterObject.state.min),a=n(t.filterObject.state.max),c=n(t.filterObject.min),u=n(t.filterObject.max);let h,f,p,g;Tt(t.filterObject)?(h=k(i).isSame(k(c),"day"),f=k(r).isSame(k(u),"day"),p=k(i).isSame(k(o),"day"),g=k(r).isSame(k(a),"day")):(h=i===c,f=r===u,p=i===o,g=r===a),!(p&&g)&&([t.filterObject.state.min,t.filterObject.state.max]=[i,r],h&&f?(delete t.filterObject.dirty,delete t.filterObject.stringifiedState):t.filterObject.dirty=!0,t.filterObject.dirty&&(t.filterObject.stringifiedState=t.filterObject.format==="date"?`${k(i).format(qe)} - ${k(r).format(qe)}`:`${i} - ${r}`),t.dispatchEvent(new CustomEvent("filter")),h&&f?t.reset():t.requestUpdate())}function Sl(e,t,n){const i=n.filterObject.state[e],r=Tt(n.filterObject)?k(i).format(qe):i;return C`<div class="range-${t}">${r}</div>`}function Ll(e){Rl(-1,e),Ut(e.filterObject),e.requestUpdate()}function Rl(e,t){t.selectedItems=[],Gn(t),hr(t)}function ur(e,t){const n=t.selectedItems.indexOf(e);n>=0?t.selectedItems=t.selectedItems.filter((i,r)=>r!==n):t.type==="multiselect"?t.selectedItems=[...t.selectedItems,e]:(t.selectedItems=[e],t.showSuggestions=!1),Gn(t),hr(t)}function kl(e,t){e.target instanceof HTMLInputElement&&(t.query=e.target.value,t.showSuggestions=!0)}function Tl(e,t){switch(e.key){case"ArrowDown":t.highlightedIndex=Math.min(t.highlightedIndex+1,t.filteredSuggestions.length-1);break;case"ArrowUp":t.highlightedIndex=Math.max(t.highlightedIndex-1,0);break;case"Enter":t.highlightedIndex>=0&&ur(t.filteredSuggestions[t.highlightedIndex],t);break;case"Escape":t.showSuggestions=!1;break}}function El(e,t){(e.has("suggestions")||e.has("query"))&&Gn(t)}function Dl(e,t){var i;const n=((i=e.filterObject)==null?void 0:i.sort)||((r,o)=>r.toString().localeCompare(o.toString(),void 0,{numeric:!0}));return t.sort(n).map(r=>r)}function Gn(e){var i,r,o;const t=(((i=e.filterObject)==null?void 0:i.filterKeys)||e.suggestions).map(a=>`${a}`);let n=t;e.query&&(n=new Kn(t,{threshold:.4,ignoreLocation:!0}).search(e.query).map(c=>c.item)),e.filteredSuggestions=(r=e.filterObject)!=null&&r.filterKeys?n:Dl(e,n),(o=e.filterObject)!=null&&o.filterKeys&&(e.filterObject.state=t.reduce((a,c)=>(c in a||(a[c]=void 0),a),e.filterObject.state)),e.highlightedIndex=-1}function hr(e){Object.keys(e.filterObject.state).forEach(t=>{e.filterObject.state[t]=e.selectedItems.includes(t)}),e.filterObject.stringifiedState=Object.keys(e.filterObject.state).filter(t=>e.filterObject.state[t]).join(", ")||"",e.filterObject.dirty=e.filterObject.stringifiedState.length>0,e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}function jl(e){Ut(e.filterObject),e.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),e.requestUpdate()}function Ol(e){e.renderRoot.querySelector("#eox-map").innerHTML="",fr(e)}function Bl(e,t){t.filterObject.state.mode=e;const n=new CustomEvent("filter",{detail:{[t.filterObject.key]:{}}});t.dispatchEvent(n)}function fr(e){const t=e.renderRoot.querySelector("#eox-map");t.innerHTML===""&&(t.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=e.geometry&&Pl(e.geometry),i=bl(e.geometry,n);e.eoxMap=e.renderRoot.querySelector("eox-map"),setTimeout(()=>{e.eoxMap.layers=i;const r=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});e.dispatchEvent(a)};e.eoxMap.interactions.drawInteraction.on("drawend",o=>{r(o.feature),e.eoxMap.removeInteraction("drawInteraction")}),e.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{r(o.features.getArray()[0])})},1e3)}function Pl(e){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:e}]}))}`}var rt,Ot;class Il extends re{constructor(){super();U(this,rt,()=>{Cl(this)});U(this,Ot,n=>{n.key==="Enter"&&n.target.value&&this.results&&this.results.length===1&&(this.dispatchEvent(new CustomEvent("result",{detail:this.results[0]})),n.target.value="",F(this,rt).call(this))});Ze(this,"debouncedInputHandler",Nt(F(this,rt),500,{leading:!0}));this.filterObject={},this.results=null,this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},results:{state:!0,type:Array},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Al(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return C`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--_list-padding)"
          >
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${i=>i.stopPropagation()}
              @keydown=${F(this,Ot)}
            />
          </div>
        </div>
        <small
          class="error-validation"
          style="margin-left: var(--_list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}rt=new WeakMap,Ot=new WeakMap;customElements.define("eox-itemfilter-text",Il);function Nl(e,t,n){if(!t||typeof t=="string"&&t.trim()==="")return[];const i=n.config.aggregateResults;return t==="No category"?e.filter(r=>{const o=r[i];return Array.isArray(o)?o.filter(Boolean).length===0:!o}):e.filter(r=>{const o=r[i];if(Array.isArray(o)){if(o.filter(Boolean).length===0)return!1}else if(!o)return!1;let a;return n.filters[i]&&(a=Object.keys(n.filters[i]).filter(u=>n.filters[i].state[u])),(a!=null&&a.length?a.includes(t):!0)&&Array.isArray(o)?o.includes(t):o===t})}function Hl(e,t){return C`
    <details
      class="details-results"
      @toggle=${t.handleAccordion}
      ?open=${t.config.expandResults||xe}
    >
      <summary class="square">
        <nav class="responsive tiny-space">
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </i>
          <span class="title"> ${e} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${t.aggregateResults(t.results,e).length}
          </button>
        </nav>
      </summary>
      <div>
        ${dr(t,e)}
      </div>
    </details>
  `}function dr(e,t){const n=e.results,i=t?e.aggregateResults(n,t):n,r=e.config,o=a=>{var c;return((c=e.selectedResult)==null?void 0:c[r.idProperty])===a[r.idProperty]?"highlighted":xe};return wi`
    ${e.resultType==="cards"?He("<eox-layout fill-grid>"):He('<ul id="results" class="list no-space" part="results">')}
      ${wo(i,a=>a.id,a=>{var h;const c=((h=z(r.titleProperty,a))==null?void 0:h.toString())||"",u=a.highlightedText?c:kt(c);return wi`
        ${e.resultType==="cards"?He("<eox-layout-item"):He("<li")}
            class="${o(a)}"
            title="${u}"
            @click=${()=>{e.selectedResult===a?e.selectedResult=null:e.selectedResult=a,e.dispatchEvent(new CustomEvent("result",{detail:e.selectedResult}))}}
            @mouseenter=${()=>{e.dispatchEvent(new CustomEvent("mouseenter:result",{detail:a}))}}
            @mouseleave=${()=>{e.dispatchEvent(new CustomEvent("mouseleave:result",{detail:a}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${I(r.subTitleProperty||r.imageProperty,()=>C`
                  ${I(e.resultType==="cards",()=>z(r.imageProperty,a)?C`
                            <img
                              loading="lazy"
                              fetchpriority="low"
                              class="image"
                              src="${z(r.imageProperty,a)}"
                            />
                          `:C`
                            <svg
                              class="image"
                              width="100%"
                              height="100%"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill="var(--primary-color)"
                              />
                            </svg>
                          `,()=>C`
                      <i class="small">
                        ${z(r.imageProperty,a)?C`
                              <img
                                loading="lazy"
                                fetchpriority="low"
                                class="image"
                                src="${z(r.imageProperty,a)}"
                              />
                            `:C`
                              <svg
                                class="image"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="var(--primary-color)"
                                />
                              </svg>
                            `}
                      </i>
                    `)}
                  <div class="title-container small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      title="${u}"
                      >${wt(a.highlightedText||z(r.titleProperty,a).toString())}</span
                    >
                    ${I(!!z(r.subTitleProperty,a),()=>C`
                        <small class="subtitle no-line truncate"
                          >${wt(z(r.subTitleProperty,a).toString())}</small
                        >
                      `)}
                  </div>
                `,()=>C`
                  <div class="small-line max truncate">
                    <span
                      class="title truncate ${a.highlightedText?"highlight-enabled":""}"
                      title="${u}"
                      >${wt(a.highlightedText||a[r.titleProperty])}</span
                    >
                  </div>
                `)}
              ${I(e.enableResultAction,()=>C`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${f=>{f.stopPropagation(),e.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${wt(e.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `})}
    ${e.resultType==="cards"?He("</eox-layout>"):He("</ul>")}
  `}var de,En,pr,gr;class Fl extends re{constructor(){super();U(this,de);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,i){return Nl(n,i,this)}createRenderRoot(){return this}handleAccordion(n){rr(n,this.config,this)}render(){return C`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${I(this.results.length<1,()=>C`<small class="no-results">No matching items</small>`,()=>xe)}
          ${I(this.config.aggregateResults,()=>It(R(this,de,gr).call(this),n=>C`${I(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>C`<div style="margin-left: -8px">
                        ${R(this,de,En).call(this,n)}
                      </div>`,()=>R(this,de,pr).call(this,n))}`),()=>R(this,de,En).call(this))}
        </div>
      </section>
    `}}de=new WeakSet,En=function(n){return dr(this,n)},pr=function(n){return Hl(n,this)},gr=function(){const n=this.resultAggregation.filter(r=>this.aggregateResults(this.results,r).length);return this.aggregateResults(this.results,"No category").length>0&&n.push("No category"),n};customElements.define("eox-itemfilter-results",Fl);var _e,yr,br,vr;class mr extends re{constructor(){super();U(this,_e);Ze(this,"debouncedInputHandler",Nt(R(this,_e,vr),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){n.has("filterObject")&&this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(i=>this.filterObject.state[i]?i:null).filter(i=>!!i)),El(n,this)}reset(){Ll(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",i=this.filteredSuggestions.length>5?"select-overflow scroll":xe;return C`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${I((this.filterObject.filterKeys||this.suggestions).length>=10,()=>C`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--_list-padding)"
            >
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||"Find..."}"
                @input=${R(this,_e,yr)}
                @keydown=${R(this,_e,br)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${i}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(r=>C`
              <li
                data-identifier="${r.toString().toLowerCase()}"
                data-title="${r}"
              >
                <label
                  class="${n} small max"
                  title="${kt(r.toString())}"
                >
                  <input
                    type="${n}"
                    name=${r}
                    .checked=${this.selectedItems.includes(r)}
                    @change=${()=>this.debouncedInputHandler(r)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(r)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span
                    class="title small-line"
                    title="${kt(r.toString())}"
                  >
                    <span class="title-text">${r}</span>
                  </span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}_e=new WeakSet,yr=function(n){kl(n,this)},br=function(n){Tl(n,this)},vr=function(n){ur(n,this)},Ze(mr,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",mr);var Oe,xr,Dn;class wr extends re{constructor(){super();U(this,Oe);this.filterObject={},this.suggestions=[],this.tabIndex=0,this.inlineMode=!1,this.inputHandler=R(this,Oe,xr).bind(this),this.debouncedInputHandler=Nt(this.inputHandler,500,{leading:!1})}reset(){$l(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>C`
        ${I(Tt(this.filterObject),()=>C`
            <eox-timecontrol
              .controlValues=${[{id:this.filterObject.key,title:this.filterObject.title||"Filter",timeControlValues:(this.filterObject.filterKeys||this.suggestions||[]).map(n=>typeof n=="object"?n:{date:n})}]}
              .initDate=${[k(this.filterObject.state.min||this.filterObject.min).format(),k(this.filterObject.state.max||this.filterObject.max).format()]}
              @select=${n=>Oi(new CustomEvent("values",{detail:{values:[k(n.detail.date[0]).valueOf(),k(n.detail.date[1]).valueOf()]}}),this)}
            >
              <eox-timecontrol-date
                .format=${qe}
              ></eox-timecontrol-date>
              <eox-timecontrol-picker
                style="${this.inlineMode?"margin-bottom: 1rem; display: block;":""}"
                ?popup=${!this.inlineMode}
                range
                show-dots
                .position=${["bottom","left"]}
              ></eox-timecontrol-picker>
            </eox-timecontrol>
          `,()=>C`
            <div style="display: flex; gap: .5rem; align-items: center;">
              ${R(this,Oe,Dn).call(this,"min","before")}
              <tc-range-slider
                min="${this.filterObject.min}"
                max="${this.filterObject.max}"
                value1="${this.filterObject.state.min||this.filterObject.min}"
                value2="${this.filterObject.state.max||this.filterObject.max}"
                step="${this.filterObject.step||1}"
                @change=${this.debouncedInputHandler}
              ></tc-range-slider>
              ${R(this,Oe,Dn).call(this,"max","after")}
            </div>
          `)}
      `)}}Oe=new WeakSet,xr=function(n){Oi(n,this)},Dn=function(n,i){return Sl(n,i,this)},Ze(wr,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-range",wr);var Bt,_r;class zl extends re{constructor(){super();U(this,Bt);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){jl(this)}createRenderRoot(){return this}render(){return I(this.filterObject,()=>{var n;return C`
        <div
          style="margin-left: var(--_list-padding); padding-right: var(--_padding)"
        >
          <nav class="no-margin wrap">
            ${It(["intersects","within"],i=>C`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===i||xe}"
                    value="${i}"
                    @click=${()=>R(this,Bt,_r).call(this,i)}
                  />
                  <span style="font-size: x-small">${i} geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
            @filter="${i=>{this.filterObject.state.geometry=i.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial-filter>
        </div>
      `})}}Bt=new WeakSet,_r=function(n){Bl(n,this)};customElements.define("eox-itemfilter-spatial",zl);var Pt,Ar;class ql extends re{constructor(){super();U(this,Pt);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){R(this,Pt,Ar).call(this)}reset(){Ol(this)}render(){return C`<div id="eox-map"></div>`}}Pt=new WeakSet,Ar=function(){fr(this)};customElements.define("eox-itemfilter-spatial-filter",ql);function Kl(e,t){t.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),e.target instanceof HTMLElement&&e.target.classList.add("highlighted"),t.requestUpdate()}function Ul(e,t){const{code:n,target:i}=e;i instanceof HTMLElement&&i.id!=="eox-itemfilter-input-search"||t.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&e.preventDefault(),["Escape","Space","Enter"].includes(n)||e.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&Wl(n,e.target.value??"",t))}function Wl(e,t,n){const i=n.renderRoot.querySelector(".chip.highlighted");if((e==="Escape"||t)&&i&&i.classList.remove("highlighted"),e==="Backspace"&&!t){if(n.items.length){i&&(i.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(i),1));const r=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];r.classList.contains("highlighted")||r.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((e==="ArrowLeft"||e==="ArrowRight")&&!t){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let r=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(r=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),r=r+(e==="ArrowLeft"?-1:1),e==="ArrowLeft"&&r<0&&(r=n.renderRoot.querySelectorAll(".chip").length-1),e==="ArrowRight"&&r>n.renderRoot.querySelectorAll(".chip").length-1&&(r=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[r].classList.add("highlighted")}}var Be,jn,Cr;class Vl extends re{constructor(){super();U(this,Be);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",R(this,Be,jn).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",R(this,Be,jn).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return C`
      <span class="chip-container">
        ${It(this.items,n=>C`
            <span class="chip tiny-margin" @click=${R(this,Be,Cr).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${i=>{i.stopPropagation(),this.controller.remove(i),this.requestUpdate()}}
                ></span>
              </span>
            </span>
          `)}
      </span>
    `}}Be=new WeakSet,jn=function(n){Ul(n,this)},Cr=function(n){Kl(n,this)};customElements.define("eox-itemfilter-chips",Vl);var Gl=200,Yn="__lodash_hash_undefined__",Yl=1/0,Xl="[object Function]",Ql="[object GeneratorFunction]",Zl=/[\\^$.*+?()[\]{}|]/g,Jl=/^\[object .+?Constructor\]$/,ec=typeof we=="object"&&we&&we.Object===Object&&we,tc=typeof self=="object"&&self&&self.Object===Object&&self,Xn=ec||tc||Function("return this")();function nc(e,t){var n=e?e.length:0;return!!n&&rc(e,t,0)>-1}function ic(e,t,n,i){for(var r=e.length,o=n+-1;++o<r;)if(t(e[o],o,e))return o;return-1}function rc(e,t,n){if(t!==t)return ic(e,sc,n);for(var i=n-1,r=e.length;++i<r;)if(e[i]===t)return i;return-1}function sc(e){return e!==e}function oc(e,t){return e.has(t)}function ac(e,t){return e==null?void 0:e[t]}function lc(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}function Mr(e){var t=-1,n=Array(e.size);return e.forEach(function(i){n[++t]=i}),n}var cc=Array.prototype,uc=Function.prototype,$r=Object.prototype,dn=Xn["__core-js_shared__"],Bi=function(){var e=/[^.]+$/.exec(dn&&dn.keys&&dn.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Sr=uc.toString,Qn=$r.hasOwnProperty,hc=$r.toString,fc=RegExp("^"+Sr.call(Qn).replace(Zl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),dc=cc.splice,pc=Zn(Xn,"Map"),pn=Zn(Xn,"Set"),it=Zn(Object,"create");function je(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function gc(){this.__data__=it?it(null):{}}function mc(e){return this.has(e)&&delete this.__data__[e]}function yc(e){var t=this.__data__;if(it){var n=t[e];return n===Yn?void 0:n}return Qn.call(t,e)?t[e]:void 0}function bc(e){var t=this.__data__;return it?t[e]!==void 0:Qn.call(t,e)}function vc(e,t){var n=this.__data__;return n[e]=it&&t===void 0?Yn:t,this}je.prototype.clear=gc;je.prototype.delete=mc;je.prototype.get=yc;je.prototype.has=bc;je.prototype.set=vc;function We(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function wc(){this.__data__=[]}function xc(e){var t=this.__data__,n=Wt(t,e);if(n<0)return!1;var i=t.length-1;return n==i?t.pop():dc.call(t,n,1),!0}function _c(e){var t=this.__data__,n=Wt(t,e);return n<0?void 0:t[n][1]}function Ac(e){return Wt(this.__data__,e)>-1}function Cc(e,t){var n=this.__data__,i=Wt(n,e);return i<0?n.push([e,t]):n[i][1]=t,this}We.prototype.clear=wc;We.prototype.delete=xc;We.prototype.get=_c;We.prototype.has=Ac;We.prototype.set=Cc;function Ve(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var i=e[t];this.set(i[0],i[1])}}function Mc(){this.__data__={hash:new je,map:new(pc||We),string:new je}}function $c(e){return Vt(this,e).delete(e)}function Sc(e){return Vt(this,e).get(e)}function Lc(e){return Vt(this,e).has(e)}function Rc(e,t){return Vt(this,e).set(e,t),this}Ve.prototype.clear=Mc;Ve.prototype.delete=$c;Ve.prototype.get=Sc;Ve.prototype.has=Lc;Ve.prototype.set=Rc;function Et(e){var t=-1,n=e?e.length:0;for(this.__data__=new Ve;++t<n;)this.add(e[t])}function kc(e){return this.__data__.set(e,Yn),this}function Tc(e){return this.__data__.has(e)}Et.prototype.add=Et.prototype.push=kc;Et.prototype.has=Tc;function Wt(e,t){for(var n=e.length;n--;)if(Nc(e[n][0],t))return n;return-1}function Ec(e){if(!Lr(e)||Bc(e))return!1;var t=Hc(e)||lc(e)?fc:Jl;return t.test(Pc(e))}function Dc(e,t,n){var i=-1,r=nc,o=e.length,a=!0,c=[],u=c;if(o>=Gl){var h=jc(e);if(h)return Mr(h);a=!1,r=oc,u=new Et}else u=c;e:for(;++i<o;){var f=e[i],p=f;if(f=f!==0?f:0,a&&p===p){for(var g=u.length;g--;)if(u[g]===p)continue e;c.push(f)}else r(u,p,n)||(u!==c&&u.push(p),c.push(f))}return c}var jc=pn&&1/Mr(new pn([,-0]))[1]==Yl?function(e){return new pn(e)}:Fc;function Vt(e,t){var n=e.__data__;return Oc(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Zn(e,t){var n=ac(e,t);return Ec(n)?n:void 0}function Oc(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function Bc(e){return!!Bi&&Bi in e}function Pc(e){if(e!=null){try{return Sr.call(e)}catch{}try{return e+""}catch{}}return""}function Ic(e){return e&&e.length?Dc(e):[]}function Nc(e,t){return e===t||e!==e&&t!==t}function Hc(e){var t=Lr(e)?hc.call(e):"";return t==Xl||t==Ql}function Lr(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Fc(){}var zc=Ic;const On=Pi(zc);var Dt={exports:{}};Dt.exports;(function(e,t){var n=200,i="Expected a function",r="__lodash_hash_undefined__",o=1,a=2,c=9007199254740991,u="[object Arguments]",h="[object Array]",f="[object Boolean]",p="[object Date]",g="[object Error]",m="[object Function]",v="[object GeneratorFunction]",b="[object Map]",A="[object Number]",_="[object Object]",S="[object Promise]",L="[object RegExp]",j="[object Set]",Q="[object String]",N="[object Symbol]",ge="[object WeakMap]",se="[object ArrayBuffer]",E="[object DataView]",P="[object Float32Array]",W="[object Float64Array]",$e="[object Int8Array]",Ge="[object Int16Array]",me="[object Int32Array]",J="[object Uint8Array]",Ye="[object Uint8ClampedArray]",Gt="[object Uint16Array]",Tr="[object Uint32Array]",Er=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Dr=/^\w*$/,jr=/^\./,Or=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Br=/[\\^$.*+?()[\]{}|]/g,Pr=/\\(\\)?/g,Ir=/^\[object .+?Constructor\]$/,Nr=/^(?:0|[1-9]\d*)$/,D={};D[P]=D[W]=D[$e]=D[Ge]=D[me]=D[J]=D[Ye]=D[Gt]=D[Tr]=!0,D[u]=D[h]=D[se]=D[f]=D[E]=D[p]=D[g]=D[m]=D[b]=D[A]=D[_]=D[L]=D[j]=D[Q]=D[ge]=!1;var Jn=typeof we=="object"&&we&&we.Object===Object&&we,Hr=typeof self=="object"&&self&&self.Object===Object&&self,ye=Jn||Hr||Function("return this")(),ei=t&&!t.nodeType&&t,ti=ei&&!0&&e&&!e.nodeType&&e,Fr=ti&&ti.exports===ei,ni=Fr&&Jn.process,ii=function(){try{return ni&&ni.binding("util")}catch{}}(),ri=ii&&ii.isTypedArray;function zr(s,l){for(var d=-1,y=s?s.length:0,x=Array(y);++d<y;)x[d]=l(s[d],d,s);return x}function qr(s,l){for(var d=-1,y=l.length,x=s.length;++d<y;)s[x+d]=l[d];return s}function Kr(s,l){for(var d=-1,y=s?s.length:0;++d<y;)if(l(s[d],d,s))return!0;return!1}function Ur(s){return function(l){return l==null?void 0:l[s]}}function Wr(s,l){for(var d=-1,y=Array(s);++d<s;)y[d]=l(d);return y}function Vr(s){return function(l){return s(l)}}function Gr(s,l){return s==null?void 0:s[l]}function Yt(s){var l=!1;if(s!=null&&typeof s.toString!="function")try{l=!!(s+"")}catch{}return l}function Yr(s){var l=-1,d=Array(s.size);return s.forEach(function(y,x){d[++l]=[x,y]}),d}function Xr(s,l){return function(d){return s(l(d))}}function Qr(s){var l=-1,d=Array(s.size);return s.forEach(function(y){d[++l]=y}),d}var Zr=Array.prototype,Jr=Function.prototype,ot=Object.prototype,Xt=ye["__core-js_shared__"],si=function(){var s=/[^.]+$/.exec(Xt&&Xt.keys&&Xt.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),oi=Jr.toString,oe=ot.hasOwnProperty,Pe=ot.toString,es=RegExp("^"+oi.call(oe).replace(Br,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),at=ye.Symbol,ai=ye.Uint8Array,ts=ot.propertyIsEnumerable,ns=Zr.splice,li=at?at.isConcatSpreadable:void 0,is=Xr(Object.keys,Object),Qt=Ie(ye,"DataView"),Xe=Ie(ye,"Map"),Zt=Ie(ye,"Promise"),Jt=Ie(ye,"Set"),en=Ie(ye,"WeakMap"),Qe=Ie(Object,"create"),rs=Le(Qt),ss=Le(Xe),os=Le(Zt),as=Le(Jt),ls=Le(en),lt=at?at.prototype:void 0,tn=lt?lt.valueOf:void 0,ci=lt?lt.toString:void 0;function Se(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var y=s[l];this.set(y[0],y[1])}}function cs(){this.__data__=Qe?Qe(null):{}}function us(s){return this.has(s)&&delete this.__data__[s]}function hs(s){var l=this.__data__;if(Qe){var d=l[s];return d===r?void 0:d}return oe.call(l,s)?l[s]:void 0}function fs(s){var l=this.__data__;return Qe?l[s]!==void 0:oe.call(l,s)}function ds(s,l){var d=this.__data__;return d[s]=Qe&&l===void 0?r:l,this}Se.prototype.clear=cs,Se.prototype.delete=us,Se.prototype.get=hs,Se.prototype.has=fs,Se.prototype.set=ds;function ae(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var y=s[l];this.set(y[0],y[1])}}function ps(){this.__data__=[]}function gs(s){var l=this.__data__,d=ut(l,s);if(d<0)return!1;var y=l.length-1;return d==y?l.pop():ns.call(l,d,1),!0}function ms(s){var l=this.__data__,d=ut(l,s);return d<0?void 0:l[d][1]}function ys(s){return ut(this.__data__,s)>-1}function bs(s,l){var d=this.__data__,y=ut(d,s);return y<0?d.push([s,l]):d[y][1]=l,this}ae.prototype.clear=ps,ae.prototype.delete=gs,ae.prototype.get=ms,ae.prototype.has=ys,ae.prototype.set=bs;function le(s){var l=-1,d=s?s.length:0;for(this.clear();++l<d;){var y=s[l];this.set(y[0],y[1])}}function vs(){this.__data__={hash:new Se,map:new(Xe||ae),string:new Se}}function ws(s){return ht(this,s).delete(s)}function xs(s){return ht(this,s).get(s)}function _s(s){return ht(this,s).has(s)}function As(s,l){return ht(this,s).set(s,l),this}le.prototype.clear=vs,le.prototype.delete=ws,le.prototype.get=xs,le.prototype.has=_s,le.prototype.set=As;function ct(s){var l=-1,d=s?s.length:0;for(this.__data__=new le;++l<d;)this.add(s[l])}function Cs(s){return this.__data__.set(s,r),this}function Ms(s){return this.__data__.has(s)}ct.prototype.add=ct.prototype.push=Cs,ct.prototype.has=Ms;function ce(s){this.__data__=new ae(s)}function $s(){this.__data__=new ae}function Ss(s){return this.__data__.delete(s)}function Ls(s){return this.__data__.get(s)}function Rs(s){return this.__data__.has(s)}function ks(s,l){var d=this.__data__;if(d instanceof ae){var y=d.__data__;if(!Xe||y.length<n-1)return y.push([s,l]),this;d=this.__data__=new le(y)}return d.set(s,l),this}ce.prototype.clear=$s,ce.prototype.delete=Ss,ce.prototype.get=Ls,ce.prototype.has=Rs,ce.prototype.set=ks;function Ts(s,l){var d=ue(s)||sn(s)?Wr(s.length,String):[],y=d.length,x=!!y;for(var w in s)oe.call(s,w)&&!(x&&(w=="length"||di(w,y)))&&d.push(w);return d}function ut(s,l){for(var d=s.length;d--;)if(mi(s[d][0],l))return d;return-1}var Es=Ys(Os);function Ds(s,l,d,y,x){var w=-1,$=s.length;for(d||(d=to),x||(x=[]);++w<$;){var O=s[w];d(O)?qr(x,O):x[x.length]=O}return x}var js=Xs();function Os(s,l){return s&&js(s,l,yt)}function ui(s,l){l=ft(l,s)?[l]:hi(l);for(var d=0,y=l.length;s!=null&&d<y;)s=s[dt(l[d++])];return d&&d==y?s:void 0}function Bs(s){return Pe.call(s)}function Ps(s,l){return s!=null&&l in Object(s)}function nn(s,l,d,y,x){return s===l?!0:s==null||l==null||!gt(s)&&!mt(l)?s!==s&&l!==l:Is(s,l,nn,d,y,x)}function Is(s,l,d,y,x,w){var $=ue(s),O=ue(l),B=h,H=h;$||(B=be(s),B=B==u?_:B),O||(H=be(l),H=H==u?_:H);var V=B==_&&!Yt(s),G=H==_&&!Yt(l),K=B==H;if(K&&!V)return w||(w=new ce),$||co(s)?fi(s,l,d,y,x,w):Qs(s,l,B,d,y,x,w);if(!(x&a)){var ee=V&&oe.call(s,"__wrapped__"),te=G&&oe.call(l,"__wrapped__");if(ee||te){var ve=ee?s.value():s,he=te?l.value():l;return w||(w=new ce),d(ve,he,y,x,w)}}return K?(w||(w=new ce),Zs(s,l,d,y,x,w)):!1}function Ns(s,l,d,y){var x=d.length,w=x;if(s==null)return!w;for(s=Object(s);x--;){var $=d[x];if($[2]?$[1]!==s[$[0]]:!($[0]in s))return!1}for(;++x<w;){$=d[x];var O=$[0],B=s[O],H=$[1];if($[2]){if(B===void 0&&!(O in s))return!1}else{var V=new ce,G;if(!(G===void 0?nn(H,B,y,o|a,V):G))return!1}}return!0}function Hs(s){if(!gt(s)||io(s))return!1;var l=yi(s)||Yt(s)?es:Ir;return l.test(Le(s))}function Fs(s){return mt(s)&&on(s.length)&&!!D[Pe.call(s)]}function zs(s){return typeof s=="function"?s:s==null?po:typeof s=="object"?ue(s)?Ws(s[0],s[1]):Us(s):go(s)}function qs(s){if(!ro(s))return is(s);var l=[];for(var d in Object(s))oe.call(s,d)&&d!="constructor"&&l.push(d);return l}function Ks(s,l){var d=-1,y=pt(s)?Array(s.length):[];return Es(s,function(x,w,$){y[++d]=l(x,w,$)}),y}function Us(s){var l=Js(s);return l.length==1&&l[0][2]?gi(l[0][0],l[0][1]):function(d){return d===s||Ns(d,s,l)}}function Ws(s,l){return ft(s)&&pi(l)?gi(dt(s),l):function(d){var y=ho(d,s);return y===void 0&&y===l?fo(d,s):nn(l,y,void 0,o|a)}}function Vs(s){return function(l){return ui(l,s)}}function Gs(s){if(typeof s=="string")return s;if(an(s))return ci?ci.call(s):"";var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function hi(s){return ue(s)?s:so(s)}function Ys(s,l){return function(d,y){if(d==null)return d;if(!pt(d))return s(d,y);for(var x=d.length,w=-1,$=Object(d);++w<x&&y($[w],w,$)!==!1;);return d}}function Xs(s){return function(l,d,y){for(var x=-1,w=Object(l),$=y(l),O=$.length;O--;){var B=$[++x];if(d(w[B],B,w)===!1)break}return l}}function fi(s,l,d,y,x,w){var $=x&a,O=s.length,B=l.length;if(O!=B&&!($&&B>O))return!1;var H=w.get(s);if(H&&w.get(l))return H==l;var V=-1,G=!0,K=x&o?new ct:void 0;for(w.set(s,l),w.set(l,s);++V<O;){var ee=s[V],te=l[V];if(y)var ve=$?y(te,ee,V,l,s,w):y(ee,te,V,s,l,w);if(ve!==void 0){if(ve)continue;G=!1;break}if(K){if(!Kr(l,function(he,Re){if(!K.has(Re)&&(ee===he||d(ee,he,y,x,w)))return K.add(Re)})){G=!1;break}}else if(!(ee===te||d(ee,te,y,x,w))){G=!1;break}}return w.delete(s),w.delete(l),G}function Qs(s,l,d,y,x,w,$){switch(d){case E:if(s.byteLength!=l.byteLength||s.byteOffset!=l.byteOffset)return!1;s=s.buffer,l=l.buffer;case se:return!(s.byteLength!=l.byteLength||!y(new ai(s),new ai(l)));case f:case p:case A:return mi(+s,+l);case g:return s.name==l.name&&s.message==l.message;case L:case Q:return s==l+"";case b:var O=Yr;case j:var B=w&a;if(O||(O=Qr),s.size!=l.size&&!B)return!1;var H=$.get(s);if(H)return H==l;w|=o,$.set(s,l);var V=fi(O(s),O(l),y,x,w,$);return $.delete(s),V;case N:if(tn)return tn.call(s)==tn.call(l)}return!1}function Zs(s,l,d,y,x,w){var $=x&a,O=yt(s),B=O.length,H=yt(l),V=H.length;if(B!=V&&!$)return!1;for(var G=B;G--;){var K=O[G];if(!($?K in l:oe.call(l,K)))return!1}var ee=w.get(s);if(ee&&w.get(l))return ee==l;var te=!0;w.set(s,l),w.set(l,s);for(var ve=$;++G<B;){K=O[G];var he=s[K],Re=l[K];if(y)var bi=$?y(Re,he,K,l,s,w):y(he,Re,K,s,l,w);if(!(bi===void 0?he===Re||d(he,Re,y,x,w):bi)){te=!1;break}ve||(ve=K=="constructor")}if(te&&!ve){var bt=s.constructor,vt=l.constructor;bt!=vt&&"constructor"in s&&"constructor"in l&&!(typeof bt=="function"&&bt instanceof bt&&typeof vt=="function"&&vt instanceof vt)&&(te=!1)}return w.delete(s),w.delete(l),te}function ht(s,l){var d=s.__data__;return no(l)?d[typeof l=="string"?"string":"hash"]:d.map}function Js(s){for(var l=yt(s),d=l.length;d--;){var y=l[d],x=s[y];l[d]=[y,x,pi(x)]}return l}function Ie(s,l){var d=Gr(s,l);return Hs(d)?d:void 0}var be=Bs;(Qt&&be(new Qt(new ArrayBuffer(1)))!=E||Xe&&be(new Xe)!=b||Zt&&be(Zt.resolve())!=S||Jt&&be(new Jt)!=j||en&&be(new en)!=ge)&&(be=function(s){var l=Pe.call(s),d=l==_?s.constructor:void 0,y=d?Le(d):void 0;if(y)switch(y){case rs:return E;case ss:return b;case os:return S;case as:return j;case ls:return ge}return l});function eo(s,l,d){l=ft(l,s)?[l]:hi(l);for(var y,x=-1,$=l.length;++x<$;){var w=dt(l[x]);if(!(y=s!=null&&d(s,w)))break;s=s[w]}if(y)return y;var $=s?s.length:0;return!!$&&on($)&&di(w,$)&&(ue(s)||sn(s))}function to(s){return ue(s)||sn(s)||!!(li&&s&&s[li])}function di(s,l){return l=l??c,!!l&&(typeof s=="number"||Nr.test(s))&&s>-1&&s%1==0&&s<l}function ft(s,l){if(ue(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||an(s)?!0:Dr.test(s)||!Er.test(s)||l!=null&&s in Object(l)}function no(s){var l=typeof s;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?s!=="__proto__":s===null}function io(s){return!!si&&si in s}function ro(s){var l=s&&s.constructor,d=typeof l=="function"&&l.prototype||ot;return s===d}function pi(s){return s===s&&!gt(s)}function gi(s,l){return function(d){return d==null?!1:d[s]===l&&(l!==void 0||s in Object(d))}}var so=rn(function(s){s=uo(s);var l=[];return jr.test(s)&&l.push(""),s.replace(Or,function(d,y,x,w){l.push(x?w.replace(Pr,"$1"):y||d)}),l});function dt(s){if(typeof s=="string"||an(s))return s;var l=s+"";return l=="0"&&1/s==-1/0?"-0":l}function Le(s){if(s!=null){try{return oi.call(s)}catch{}try{return s+""}catch{}}return""}function oo(s,l){return Ds(ao(s,l))}function ao(s,l){var d=ue(s)?zr:Ks;return d(s,zs(l))}function rn(s,l){if(typeof s!="function"||l&&typeof l!="function")throw new TypeError(i);var d=function(){var y=arguments,x=l?l.apply(this,y):y[0],w=d.cache;if(w.has(x))return w.get(x);var $=s.apply(this,y);return d.cache=w.set(x,$),$};return d.cache=new(rn.Cache||le),d}rn.Cache=le;function mi(s,l){return s===l||s!==s&&l!==l}function sn(s){return lo(s)&&oe.call(s,"callee")&&(!ts.call(s,"callee")||Pe.call(s)==u)}var ue=Array.isArray;function pt(s){return s!=null&&on(s.length)&&!yi(s)}function lo(s){return mt(s)&&pt(s)}function yi(s){var l=gt(s)?Pe.call(s):"";return l==m||l==v}function on(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=c}function gt(s){var l=typeof s;return!!s&&(l=="object"||l=="function")}function mt(s){return!!s&&typeof s=="object"}function an(s){return typeof s=="symbol"||mt(s)&&Pe.call(s)==N}var co=ri?Vr(ri):Fs;function uo(s){return s==null?"":Gs(s)}function ho(s,l,d){var y=s==null?void 0:ui(s,l);return y===void 0?d:y}function fo(s,l){return s!=null&&eo(s,l,Ps)}function yt(s){return pt(s)?Ts(s):qs(s)}function po(s){return s}function go(s){return ft(s)?Ur(dt(s)):Vs(s)}e.exports=oo})(Dt,Dt.exports);var qc=Dt.exports;const Bn=Pi(qc);function Kc(e,t,n){let i=[];e.filterProperties.length&&e.filterProperties.forEach(o=>{var p,g,m,v;const a={},c=b=>o.format==="date"?k(b).valueOf():parseFloat(b);t.forEach(b=>{var A,_;if(o.type==="range"){const S=z(o.key,b);if(Array.isArray(S)){const L=[c(S[0]),c(S[1])];a.min=a.min!==void 0?Math.min(a.min,L[0]):L[0],a.max=a.max!==void 0?Math.max(a.max,L[1]):L[1]}else{const L=c(S);a.min=a.min!==void 0?Math.min(a.min,L):L,a.max=a.max!==void 0?Math.max(a.max,L):L}return}Array.isArray(b[o.key])?b[o.key].forEach(S=>{a[S]=void 0}):o.type==="spatial"?(a.geometry=((A=o==null?void 0:o.state)==null?void 0:A.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(_=o.key)!=null&&_.includes(".")?On(Bn(n.items,o.key)).filter(S=>S).forEach(S=>{a[S]=void 0}):a[b[o.key]]=void 0});const u=o.key||o.keys.join("|"),h=n.filters[u];let f;if(o.state)if(o.type==="range"){const b=j=>o.format==="date"?k(j).valueOf():parseFloat(j),A=b(o.state.min),_=b(o.state.max),S=b(o.min??a.min),L=b(o.max??a.max);o.format==="date"?f=!k(A).isSame(k(S),"day")||!k(_).isSame(k(L),"day")||void 0:f=A!==S||_!==L||void 0}else f=Object.values(o.state).some(b=>b)||void 0;if(n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:f||(h==null?void 0:h.dirty),key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),o.type==="range"&&n.filters[u].dirty){const b=S=>o.format==="date"?k(S).valueOf():parseFloat(S),A=b(((p=o.state)==null?void 0:p.min)!==void 0?o.state.min:(g=h==null?void 0:h.state)==null?void 0:g.min),_=b(((m=o.state)==null?void 0:m.max)!==void 0?o.state.max:(v=h==null?void 0:h.state)==null?void 0:v.max);n.filters[u].stringifiedState=o.format==="date"?`${k(A).format(qe)} - ${k(_).format(qe)}`:`${A} - ${_}`}if(n.filters[u].state=Object.assign({},a,(h==null?void 0:h.state)||{},o.state),o.type==="range"&&o.state){const b=A=>o.format==="date"?k(A).valueOf():parseFloat(A);o.state.min!==void 0&&(n.filters[u].state.min=b(o.state.min)),o.state.max!==void 0&&(n.filters[u].state.max=b(o.state.max))}}),e.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(t),n.requestUpdate()),e.aggregateResults&&(i=Array.from(new Set(t.reduce((o,a)=>o.concat(a[e.aggregateResults]),[]))).filter(o=>o).sort((o,a)=>o.localeCompare(a)));const r=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{r.includes(a)||r.push(a)}):(o.type==="select"||o.type==="multiselect")&&(r.includes(o.key)||r.push(o.key))}),ml(t,Object.assign({keys:r},e.fuseConfig)),i}async function Uc(e,t,n){let i;n.externalFilter?i=await wl(t,n.filters,e):i=await yl(t,n.filters,e),n.results=n.sortResults(i,{isExternalResult:!!n.externalFilter})}function Wc(e,t,n){const i=`filter-${e.key}`.replace("|","-");switch(e.type){case"text":return C`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${i}"
        .tabIndex=${t}
        .filterObject=${e}
        .results=${n.results}
        .unstyled=${n.unstyled}
        @result=${n.updateResult}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return C`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${i}"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${On(Bn(n.items,e.key)).filter(r=>r)}"
          type="${e.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return C`
        <eox-itemfilter-range
          .inlineMode=${n.inlineMode||!1}
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          .suggestions="${On(Bn(n.items,e.key)).filter(r=>r)}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return C`
        <eox-itemfilter-spatial
          id="${i}"
          data-type="filter"
          .tabIndex=${t}
          .filterObject=${e}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return C``}}function Vc(e,t,n={}){var a;const{resultSorting:i}=t;if(i===!1)return e;if(i===void 0)return n.isExternalResult||(a=t.fuseConfig)!=null&&a.shouldSort?e:[...e].sort((c,u)=>{const h=z(t.titleProperty,c)||"",f=z(t.titleProperty,u)||"";return h.toString().localeCompare(f.toString())});if(typeof i=="function")return[...e].sort(i);const r=typeof i=="string"?i:i.key,o=typeof i=="object"&&i.order==="desc"?-1:1;return r?[...e].sort((c,u)=>{const h=z(r,c)||"",f=z(r,u)||"";return h.toString().localeCompare(f.toString())*o}):e}function Gc(e,t,n){return C`
    ${I(e.dirty,()=>C`
        <button
          type="button"
          tabindex=${t}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${i=>{const r=i.target.parentElement.querySelector("[slot=filter]");r&&typeof r.reset=="function"&&r.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":C`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <span class="tooltip left">Reset filter</span>
              `}
        </button>
      `)}
  `}function Yc(e){e.renderRoot.querySelectorAll("[data-type='filter']").forEach(t=>{typeof t.reset=="function"&&t.reset()}),e.search()}var st,Te,Y,Ke,Rr,kr;class Xc extends re{constructor(){super();U(this,Ke);U(this,st,[]);U(this,Te,[]);U(this,Y,Ml);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Nt(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.resultSorting=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{type:Array},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{type:Array},fuseConfig:{type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},resultSorting:{type:Object},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{type:Boolean},resultActionIcon:{type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){Ne(this,Y,fn.reduce((n,i)=>(n[i]=this[i],n),{})),Ne(this,st,Kc(F(this,Y),F(this,Te),this)),this.search()}async searchHandler(){await Uc(F(this,Y),F(this,Te),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n,i){return Vc(n,F(this,Y),i)}resetFilters(){Yc(this)}firstUpdated(n){var r;let i={};fn.map(o=>{i={...i,[o]:this[o]}}),Ne(this,Y,i),Ne(this,Te,((r=this.items)==null?void 0:r.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){var o;let i=!1,r=!1;fn.forEach(a=>{n.has(a)&&(F(this,Y)[a]=this[a],["items","filterProperties","idProperty","aggregateResults","fuseConfig","matchAllWhenEmpty","externalFilter"].includes(a)?i=!0:a==="resultSorting"&&(r=!0))}),i?(Ne(this,Te,((o=this.items)==null?void 0:o.map((a,c)=>Object.assign({id:a[this.idProperty]||`item-${c}`},a)))||[]),this.apply()):r&&this.search()}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}mouseEnterResult(n){this.dispatchEvent(new CustomEvent("mouseenter:result",{detail:n.detail,bubbles:!0,composed:!0}))}mouseLeaveResult(n){this.dispatchEvent(new CustomEvent("mouseleave:result",{detail:n.detail,bubbles:!0,composed:!0}))}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return C`
      <style>
        ${Mo}
        ${!this.unstyled&&Nn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":xe}
        @submit="${i=>i.preventDefault()}"
      >
        ${I(this.filterProperties,()=>C`
            <div
              style="display: var(--filter-display); min-height: ${this.inlineMode?"100%":this.filterProperties.length>2?"50%":this.filterProperties.length*32+105+"px"}"
            >
              <eox-itemfilter-container
                .filters=${this.filters}
                .filterProperties=${this.filterProperties}
                .inlineMode=${this.inlineMode||!1}
                @reset=${()=>this.resetFilters()}
                @filter=${()=>this.search()}
              >
                <section
                  slot="section"
                  style="height: 100%; overflow: hidden; display: flex; flex-direction: column;"
                >
                  ${I(!this.inlineMode,()=>C`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${I(!this.inlineMode&&F(this,Y).filterProperties&&!this.inlineMode&&F(this,Y).filterProperties&&$n(this.filters),()=>C`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?xe:C`
                                    <i class="small">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <title>close</title>
                                        <path
                                          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                        />
                                      </svg>
                                    </i>
                                  `}
                              <span class="small-text">Reset all</span>
                            </button>
                          `)}
                      </nav>
                    `)}
                  <div class="scroll" style="flex: 1; max-height: 100%">
                    <ul id="filters" class="list no-space">
                      ${It(Object.values(this.filters),(i,r)=>C` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${i}
                              @details-toggled=${o=>rr(o,F(this,Y),this)}
                              data-details="${i.key}"
                            >
                              ${R(this,Ke,kr).call(this,i,ji(r,1))}
                              ${R(this,Ke,Rr).call(this,i,ji(r,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${I(((n=F(this,Y))==null?void 0:n.showResults)&&this.results,()=>C`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${F(this,Y)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${F(this,st)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @mouseenter:result=${this.mouseEnterResult}
              @mouseleave:result=${this.mouseLeaveResult}
              @click:result-action=${this.emitResultAction}
            >
              <nav class="title-nav">
                <slot name="resultstitle"
                  ><p><strong>Results</strong></p></slot
                >
              </nav>
            </eox-itemfilter-results>
          `)}
      </form>
    `}}st=new WeakMap,Te=new WeakMap,Y=new WeakMap,Ke=new WeakSet,Rr=function(n,i){return Wc(n,i,this)},kr=function(n,i){return Gc(n,i,this)};customElements.define("eox-itemfilter",Xc);export{Xc as EOxItemFilter};
