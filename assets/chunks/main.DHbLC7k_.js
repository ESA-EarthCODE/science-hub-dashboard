var Wn=Object.defineProperty;var Ro=e=>{throw TypeError(e)};var Gn=(e,t,o)=>t in e?Wn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var I=(e,t,o)=>Gn(e,typeof t!="symbol"?t+"":t,o),Ke=(e,t,o)=>t.has(e)||Ro("Cannot "+o);var x=(e,t,o)=>(Ke(e,t,"read from private field"),o?o.call(e):t.get(e)),T=(e,t,o)=>t.has(e)?Ro("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),ut=(e,t,o,n)=>(Ke(e,t,"write to private field"),n?n.call(e,o):t.set(e,o),o),L=(e,t,o)=>(Ke(e,t,"access private method"),o);import{b as p,E as ue,A as Tt,a as lt,i as po}from"./lit-element.BMPlKsWQ.js";import{n as V}from"./when.BR7zwNJC.js";import{c as Jn}from"./repeat.BH3fx7cN.js";import{e as Kn,i as Qn,t as Rt}from"./directive.CvdRHFdJ.js";import{r as ti,p as ei}from"./directive-helpers.DDXwWjbG.js";import{o as oi}from"./unsafe-html.WWnMP6dQ.js";import{o as ye}from"./map.DiiNQ3pp.js";import{e as xo,a as ni}from"./addCommonStyleSheet.9nqUfdRV.js";import{X as ii}from"./XYZ.BW26KQaI.js";import{c as ce,a as ri}from"./commonjsHelpers.C4iS2aBk.js";import{_ as ai}from"./index.CmRAAlwx.js";import{g as si}from"./getElement.CdRlZPdn.js";import"./intersectsextent.Bzf_ewag.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=e=>e!==void 0,zo=(e,t,o)=>t in e?e[t]:e[t]=o;const oe={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class li{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,o){return Ge(t,o).join("")}}function Ge(e,t){return Wo(e,t,[]).join("")}function Wo(e,t,o){if(e.nodeType===oe.CDATA_SECTION||e.nodeType===oe.TEXT)t?o.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):o.push(e.nodeValue);else{var n;for(n=e.firstChild;n;n=n.nextSibling)Wo(n,t,o)}return o}function ui(e,t,o,n){for(var i=ci(t);i;i=di(i)){var r=i.namespaceURI||null,a=e[r];if(E(a)){var s=a[i.localName];E(s)&&s.call(n,i,o)}}}function ci(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==oe.ELEMENT;)t=t.nextSibling;return t}function di(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==oe.ELEMENT;)t=t.nextSibling;return t}function F(e,t,o){return hi(e,t,o)}function hi(e,t,o){var n=E(o)?o:{},i,r;for(i=0,r=e.length;i<r;++i)n[e[i]]=t;return n}function Go(e,t){return function(o,n){var i=e.call(E(t)?t:this,o,n);if(E(i)){var r=n[n.length-1];r.push(i)}}}function N(e,t,o,n,i){return n.push(e),ui(t,o,n,i),n.pop()}function f(e,t,o){return function(n,i){let r=e.call(E(o)?o:this,n,i);if(E(r)){var a=i[i.length-1],s=E(t)?t:n.localName;a[s]=r}}}function J(e,t,o){return function(n,i){var r=e.call(E(o)?o:this,n,i);if(E(r)){var a=i[i.length-1],s=E(t)?t:n.localName,l=zo(a,s,[]);l.push(r)}}}const pi=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function fi(e){return e.replace(pi,"")}function Lt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function Ot(e){return gt(Ge(e,!1))}function gt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function Qe(e){return xe(Ge(e,!1))}function xe(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function C(e){return fi(Ge(e,!1))}const gi="http://www.w3.org/1999/xlink";function Eo(e){return e.getAttributeNS(gi,"href")}function yi(e,t){return N({},qi,e,t)}function Jo(e){return[gt(e.getAttribute("minx")),gt(e.getAttribute("miny")),gt(e.getAttribute("maxx")),gt(e.getAttribute("maxy"))]}function mi(e,t){const o=Jo(e),n=[gt(e.getAttribute("resx")),gt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:o,res:n}}function vi(e,t){const o=Jo(e);if(!(!E(o[0])||!E(o[1])||!E(o[2])||!E(o[3])))return o}function bi(e,t){const o=parseFloat(e.getAttribute("min")),n=parseFloat(e.getAttribute("max"));return{min:o,max:n}}function wi(e,t){const o=N({},ji,e,t);if(!E(o))return;const n=o.westBoundLongitude,i=o.southBoundLatitude,r=o.eastBoundLongitude,a=o.northBoundLatitude;if(!(!E(n)||!E(i)||!E(r)||!E(a)))return[n,i,r,a]}function Si(e,t){return N({},Oi,e,t)}function xi(e,t){return N({},Bi,e,t)}function Ei(e,t){return N({},Ni,e,t)}function $i(e,t){return N({},ki,e,t)}function Ai(e,t){return N({},Ui,e,t)}function Ti(e,t){return N([],Fi,e,t)}function Ci(e,t){const o=Lt(e.getAttribute("queryable"));return N({queryable:E(o)?o:!1},tn,e,t)}function _i(e,t){var o=t[t.length-1];const n=N({},tn,e,t);if(!E(n))return;let i=Lt(e.getAttribute("queryable"));E(i)||(i=o.queryable),n.queryable=E(i)?i:!1;let r=xe(e.getAttribute("cascaded"));E(r)||(r=o.cascaded),n.cascaded=r;let a=Lt(e.getAttribute("opaque"));E(a)||(a=o.opaque),n.opaque=E(a)?a:!1;let s=Lt(e.getAttribute("noSubsets"));E(s)||(s=o.noSubsets),n.noSubsets=E(s)?s:!1;let l=gt(e.getAttribute("fixedWidth"));E(l)||(l=o.fixedWidth),n.fixedWidth=l;let u=gt(e.getAttribute("fixedHeight"));E(u)||(u=o.fixedHeight),n.fixedHeight=u;const h=["Style","CRS","AuthorityURL"];for(let g=0,b=h.length;g<b;g++){const y=h[g],S=o[y];if(E(S)){let H=zo(n,y,[]);H=H.concat(S),n[y]=H}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let g=0,b=d.length;g<b;g++){const y=d[g],S=n[y];if(!E(S)){const H=o[y];n[y]=H}}return n}function Di(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Lt(e.getAttribute("multipleValues")),nearestValue:Lt(e.getAttribute("nearestValue")),current:Lt(e.getAttribute("current")),values:C(e)}}function mt(e,t){return N({},Gi,e,t)}function Vi(e,t){return N({},Zi,e,t)}function Li(e,t){return N({},Yi,e,t)}function Ri(e,t){return N({},zi,e,t)}function to(e,t){return N({},Xi,e,t)}function Ko(e,t){var o=mt(e,t);if(E(o)){const n=[xe(e.getAttribute("width")),xe(e.getAttribute("height"))];return o.size=n,o}}function Ii(e,t){var o=mt(e,t);if(E(o))return o.name=e.getAttribute("name"),o}function Pi(e,t){var o=mt(e,t);if(E(o))return o.type=e.getAttribute("type"),o}function Hi(e,t){return N({},Wi,e,t)}function Qo(e,t){return N([],Ji,e,t)}const q=[null,"http://www.opengis.net/wms"],Mi=F(q,{Service:f(xi),Capability:f(Si)}),Oi=F(q,{Request:f(Vi),Exception:f(Ti),Layer:f(Ci)}),Bi=F(q,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(Qo),OnlineResource:f(Eo),ContactInformation:f(Ei),Fees:f(C),AccessConstraints:f(C),LayerLimit:f(Qe),MaxWidth:f(Qe),MaxHeight:f(Qe)}),Ni=F(q,{ContactPersonPrimary:f($i),ContactPosition:f(C),ContactAddress:f(Ai),ContactVoiceTelephone:f(C),ContactFacsimileTelephone:f(C),ContactElectronicMailAddress:f(C)}),ki=F(q,{ContactPerson:f(C),ContactOrganization:f(C)}),Ui=F(q,{AddressType:f(C),Address:f(C),City:f(C),StateOrProvince:f(C),PostCode:f(C),Country:f(C)}),Fi=F(q,{Format:Go(C)}),tn=F(q,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(Qo),CRS:J(C),SRS:J(C),EX_GeographicBoundingBox:f(wi),LatLonBoundingBox:f(vi),BoundingBox:J(mi),Dimension:J(Di),Attribution:f(yi),AuthorityURL:J(Ii),Identifier:J(C),MetadataURL:J(Pi),DataURL:J(mt),FeatureListURL:J(mt),Style:J(Hi),MinScaleDenominator:f(Ot),MaxScaleDenominator:f(Ot),ScaleHint:f(bi),Layer:J(_i)}),qi=F(q,{Title:f(C),OnlineResource:f(Eo),LogoURL:f(Ko)}),ji=F(q,{westBoundLongitude:f(Ot),eastBoundLongitude:f(Ot),southBoundLatitude:f(Ot),northBoundLatitude:f(Ot)}),Zi=F(q,{GetCapabilities:f(to),GetMap:f(to),GetFeatureInfo:f(to)}),Xi=F(q,{Format:J(C),DCPType:J(Li)}),Yi=F(q,{HTTP:f(Ri)}),zi=F(q,{Get:f(mt),Post:f(mt)}),Wi=F(q,{Name:f(C),Title:f(C),Abstract:f(C),LegendURL:J(Ko),StyleSheetURL:f(mt),StyleURL:f(mt)}),Gi=F(q,{Format:f(C),OnlineResource:f(Eo)}),Ji=F(q,{Keyword:Go(C)});class Ki{constructor(t,o){!o&&typeof window<"u"&&(o=window.DOMParser),this.version=void 0,this._parser=new li(o),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let o=t.firstChild;o;o=o.nextSibling)if(o.nodeType==oe.ELEMENT)return this.readFromNode(o);return null}readFromNode(t){return this.version=t.getAttribute("version"),N({version:this.version},Mi,t,[])||null}}async function Qi(e){let t=new URL(e),o=t.searchParams;o.set("SERVICE","WMS"),o.set("REQUEST","GetCapabilities");let n=t.toString();const i=await fetch(n);if(i.ok){const r=await i.text();return new Ki(r).toJSON()}else throw new Error(`Error: ${i.status}`)}function $o(e){const t=/\b(?:wms|ows)\b/i,o=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":o.test(e)?"XYZ":!1}function tr(e){const o=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),n=$o(e);return!!(e&&o&&n)}function en(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function er(e){try{return JSON.parse(en(e)),!!e}catch{return!1}}function eo(e,t){const o=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{o.set(l,s[l])}):Array.isArray(s)?(o.delete(a),s.forEach(l=>{o.append(a,l)})):o.set(a,s)});const n=e.split("?")[0],i=o.toString();return`${n}?${i}`}/**!
 * Sortable 1.15.7
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function or(e,t,o){return(t=ar(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function vt(){return vt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)({}).hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},vt.apply(null,arguments)}function Io(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,n)}return o}function ht(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?Io(Object(o),!0).forEach(function(n){or(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):Io(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function nr(e,t){if(e==null)return{};var o,n,i=ir(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)===-1&&{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}function ir(e,t){if(e==null)return{};var o={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;o[n]=e[n]}return o}function rr(e,t){if(typeof e!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ar(e){var t=rr(e,"string");return typeof t=="symbol"?t:t+""}function fo(e){"@babel/helpers - typeof";return fo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(e)}var sr="1.15.7";function yt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var bt=yt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=yt(/Edge/i),Po=yt(/firefox/i),Gt=yt(/safari/i)&&!yt(/chrome/i)&&!yt(/android/i),Ao=yt(/iP(ad|od|hone)/i),on=yt(/chrome/i)&&yt(/android/i),nn={capture:!1,passive:!1};function A(e,t,o){e.addEventListener(t,o,!bt&&nn)}function $(e,t,o){e.removeEventListener(t,o,!bt&&nn)}function Ee(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function rn(e){return e.host&&e!==document&&e.host.nodeType&&e.host!==e?e.host:e.parentNode}function st(e,t,o,n){if(e){o=o||document;do{if(t!=null&&(t[0]===">"?e.parentNode===o&&Ee(e,t):Ee(e,t))||n&&e===o)return e;if(e===o)break}while(e=rn(e))}return null}var Ho=/\s+/g;function tt(e,t,o){if(e&&t)if(e.classList)e.classList[o?"add":"remove"](t);else{var n=(" "+e.className+" ").replace(Ho," ").replace(" "+t+" "," ");e.className=(n+(o?" "+t:"")).replace(Ho," ")}}function m(e,t,o){var n=e&&e.style;if(n){if(o===void 0)return document.defaultView&&document.defaultView.getComputedStyle?o=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(o=e.currentStyle),t===void 0?o:o[t];!(t in n)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),n[t]=o+(typeof o=="string"?"":"px")}}function Nt(e,t){var o="";if(typeof e=="string")o=e;else do{var n=m(e,"transform");n&&n!=="none"&&(o=n+" "+o)}while(!t&&(e=e.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(o)}function an(e,t,o){if(e){var n=e.getElementsByTagName(t),i=0,r=n.length;if(o)for(;i<r;i++)o(n[i],i);return n}return[]}function dt(){var e=document.scrollingElement;return e||document.documentElement}function O(e,t,o,n,i){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,s,l,u,h,d;if(e!==window&&e.parentNode&&e!==dt()?(r=e.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,u=r.right,h=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,h=window.innerHeight,d=window.innerWidth),(t||o)&&e!==window&&(i=i||e.parentNode,!bt))do if(i&&i.getBoundingClientRect&&(m(i,"transform")!=="none"||o&&m(i,"position")!=="static")){var g=i.getBoundingClientRect();a-=g.top+parseInt(m(i,"border-top-width")),s-=g.left+parseInt(m(i,"border-left-width")),l=a+r.height,u=s+r.width;break}while(i=i.parentNode);if(n&&e!==window){var b=Nt(i||e),y=b&&b.a,S=b&&b.d;b&&(a/=S,s/=y,d/=y,h/=S,l=a+h,u=s+d)}return{top:a,left:s,bottom:l,right:u,width:d,height:h}}}function Mo(e,t,o){for(var n=At(e,!0),i=O(e)[t];n;){var r=O(n)[o],a=void 0;if(a=i>=r,!a)return n;if(n===dt())break;n=At(n,!1)}return!1}function Ut(e,t,o,n){for(var i=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==v.ghost&&(n||a[r]!==v.dragged)&&st(a[r],o.draggable,e,!1)){if(i===t)return a[r];i++}r++}return null}function To(e,t){for(var o=e.lastElementChild;o&&(o===v.ghost||m(o,"display")==="none"||t&&!Ee(o,t));)o=o.previousElementSibling;return o||null}function nt(e,t){var o=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==v.clone&&(!t||Ee(e,t))&&o++;return o}function Oo(e){var t=0,o=0,n=dt();if(e)do{var i=Nt(e),r=i.a,a=i.d;t+=e.scrollLeft*r,o+=e.scrollTop*a}while(e!==n&&(e=e.parentNode));return[t,o]}function lr(e,t){for(var o in e)if(e.hasOwnProperty(o)){for(var n in t)if(t.hasOwnProperty(n)&&t[n]===e[o][n])return Number(o)}return-1}function At(e,t){if(!e||!e.getBoundingClientRect)return dt();var o=e,n=!1;do if(o.clientWidth<o.scrollWidth||o.clientHeight<o.scrollHeight){var i=m(o);if(o.clientWidth<o.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||o.clientHeight<o.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!o.getBoundingClientRect||o===document.body)return dt();if(n||t)return o;n=!0}}while(o=o.parentNode);return dt()}function ur(e,t){if(e&&t)for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);return e}function oo(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function sn(e,t){return function(){if(!Jt){var o=arguments,n=this;o.length===1?e.call(n,o[0]):e.apply(n,o),Jt=setTimeout(function(){Jt=void 0},t)}}}function cr(){clearTimeout(Jt),Jt=void 0}function ln(e,t,o){e.scrollLeft+=t,e.scrollTop+=o}function un(e){var t=window.Polymer,o=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):o?o(e).clone(!0)[0]:e.cloneNode(!0)}function cn(e,t,o){var n={};return Array.from(e.children).forEach(function(i){var r,a,s,l;if(!(!st(i,t.draggable,e,!1)||i.animated||i===o)){var u=O(i);n.left=Math.min((r=n.left)!==null&&r!==void 0?r:1/0,u.left),n.top=Math.min((a=n.top)!==null&&a!==void 0?a:1/0,u.top),n.right=Math.max((s=n.right)!==null&&s!==void 0?s:-1/0,u.right),n.bottom=Math.max((l=n.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),n.width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}var K="Sortable"+new Date().getTime();function dr(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(m(i,"display")==="none"||i===v.ghost)){e.push({target:i,rect:O(i)});var r=ht({},e[e.length-1].rect);if(i.thisAnimationDuration){var a=Nt(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(n){e.push(n)},removeAnimationState:function(n){e.splice(lr(e,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(t),typeof n=="function"&&n();return}var r=!1,a=0;e.forEach(function(s){var l=0,u=s.target,h=u.fromRect,d=O(u),g=u.prevFromRect,b=u.prevToRect,y=s.rect,S=Nt(u,!0);S&&(d.top-=S.f,d.left-=S.e),u.toRect=d,u.thisAnimationDuration&&oo(g,d)&&!oo(h,d)&&(y.top-d.top)/(y.left-d.left)===(h.top-d.top)/(h.left-d.left)&&(l=pr(y,g,b,i.options)),oo(d,h)||(u.prevFromRect=h,u.prevToRect=d,l||(l=i.options.animation),i.animate(u,y,d,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),e=[]},animate:function(n,i,r,a){if(a){m(n,"transition",""),m(n,"transform","");var s=Nt(this.el),l=s&&s.a,u=s&&s.d,h=(i.left-r.left)/(l||1),d=(i.top-r.top)/(u||1);n.animatingX=!!h,n.animatingY=!!d,m(n,"transform","translate3d("+h+"px,"+d+"px,0)"),this.forRepaintDummy=hr(n),m(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),m(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){m(n,"transition",""),m(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function hr(e){return e.offsetWidth}function pr(e,t,o,n){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-o.top,2)+Math.pow(t.left-o.left,2))*n.animation}var It=[],no={initializeByDefault:!0},se={mount:function(t){for(var o in no)no.hasOwnProperty(o)&&!(o in t)&&(t[o]=no[o]);It.forEach(function(n){if(n.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),It.push(t)},pluginEvent:function(t,o,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var r=t+"Global";It.forEach(function(a){o[a.pluginName]&&(o[a.pluginName][r]&&o[a.pluginName][r](ht({sortable:o},n)),o.options[a.pluginName]&&o[a.pluginName][t]&&o[a.pluginName][t](ht({sortable:o},n)))})},initializePlugins:function(t,o,n,i){It.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,o,t.options);u.sortable=t,u.options=t.options,t[l]=u,vt(n,u.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,o){var n={};return It.forEach(function(i){typeof i.eventProperties=="function"&&vt(n,i.eventProperties.call(o[i.pluginName],t))}),n},modifyOption:function(t,o,n){var i;return It.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[o]=="function"&&(i=r.optionListeners[o].call(t[r.pluginName],n))}),i}};function fr(e){var t=e.sortable,o=e.rootEl,n=e.name,i=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,h=e.oldDraggableIndex,d=e.newDraggableIndex,g=e.originalEvent,b=e.putSortable,y=e.extraEventProperties;if(t=t||o&&o[K],!!t){var S,H=t.options,W="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!bt&&!ae?S=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(S=document.createEvent("Event"),S.initEvent(n,!0,!0)),S.to=a||o,S.from=s||o,S.item=i||o,S.clone=r,S.oldIndex=l,S.newIndex=u,S.oldDraggableIndex=h,S.newDraggableIndex=d,S.originalEvent=g,S.pullMode=b?b.lastPutMode:void 0;var B=ht(ht({},y),se.getEventProperties(n,t));for(var Q in B)S[Q]=B[Q];o&&o.dispatchEvent(S),H[W]&&H[W].call(t,S)}}var gr=["evt"],G=function(t,o){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,r=nr(n,gr);se.pluginEvent.bind(v)(t,o,ht({dragEl:c,parentEl:P,ghostEl:w,rootEl:D,nextEl:Vt,lastDownEl:me,cloneEl:R,cloneHidden:Et,dragStarted:Yt,putSortable:k,activeSortable:v.active,originalEvent:i,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:xt,hideGhostForTarget:fn,unhideGhostForTarget:gn,cloneNowHidden:function(){Et=!0},cloneNowShown:function(){Et=!1},dispatchSortableEvent:function(s){z({sortable:o,name:s,originalEvent:i})}},r))};function z(e){fr(ht({putSortable:k,cloneEl:R,targetEl:c,rootEl:D,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:xt},e))}var c,P,w,D,Vt,me,R,Et,Bt,et,Kt,xt,de,k,Ht=!1,$e=!1,Ae=[],_t,at,io,ro,Bo,No,Yt,Pt,Qt,te=!1,he=!1,ve,X,ao=[],go=!1,Te=[],Je=typeof document<"u",pe=Ao,ko=ae||bt?"cssFloat":"float",yr=Je&&!on&&!Ao&&"draggable"in document.createElement("div"),dn=function(){if(Je){if(bt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),hn=function(t,o){var n=m(t),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=Ut(t,0,o),a=Ut(t,1,o),s=r&&m(r),l=a&&m(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+O(r).width,h=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+O(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=i&&n[ko]==="none"||a&&n[ko]==="none"&&u+h>i)?"vertical":"horizontal"},mr=function(t,o,n){var i=n?t.left:t.top,r=n?t.right:t.bottom,a=n?t.width:t.height,s=n?o.left:o.top,l=n?o.right:o.bottom,u=n?o.width:o.height;return i===s||r===l||i+a/2===s+u/2},vr=function(t,o){var n;return Ae.some(function(i){var r=i[K].options.emptyInsertThreshold;if(!(!r||To(i))){var a=O(i),s=t>=a.left-r&&t<=a.right+r,l=o>=a.top-r&&o<=a.bottom+r;if(s&&l)return n=i}}),n},pn=function(t){function o(r,a){return function(s,l,u,h){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return o(r(s,l,u,h),a)(s,l,u,h);var g=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===g||r.join&&r.indexOf(g)>-1}}var n={},i=t.group;(!i||fo(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=o(i.pull,!0),n.checkPut=o(i.put),n.revertClone=i.revertClone,t.group=n},fn=function(){!dn&&w&&m(w,"display","none")},gn=function(){!dn&&w&&m(w,"display","")};Je&&!on&&document.addEventListener("click",function(e){if($e)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),$e=!1,!1},!0);var Dt=function(t){if(c){t=t.touches?t.touches[0]:t;var o=vr(t.clientX,t.clientY);if(o){var n={};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);n.target=n.rootEl=o,n.preventDefault=void 0,n.stopPropagation=void 0,o[K]._onDragOver(n)}}},br=function(t){c&&c.parentNode[K]._isOutsideThisEl(t.target)};function v(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=vt({},t),e[K]=this;var o={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return hn(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:v.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||Ao),emptyInsertThreshold:5};se.initializePlugins(this,e,o);for(var n in o)!(n in t)&&(t[n]=o[n]);pn(t);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=t.forceFallback?!1:yr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?A(e,"pointerdown",this._onTapStart):(A(e,"mousedown",this._onTapStart),A(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(A(e,"dragover",this),A(e,"dragenter",this)),Ae.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),vt(this,dr())}v.prototype={constructor:v,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Pt=null)},_getDirection:function(t,o){return typeof this.options.direction=="function"?this.options.direction.call(this,t,o,c):this.options.direction},_onTapStart:function(t){if(t.cancelable){var o=this,n=this.el,i=this.options,r=i.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,h=i.filter;if(Cr(n),!c&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||i.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Gt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=st(l,i.draggable,n,!1),!(l&&l.animated)&&me!==l)){if(Bt=nt(l),Kt=nt(l,i.draggable),typeof h=="function"){if(h.call(this,t,l,this)){z({sortable:o,rootEl:u,name:"filter",targetEl:l,toEl:n,fromEl:n}),G("filter",o,{evt:t}),r&&t.preventDefault();return}}else if(h&&(h=h.split(",").some(function(d){if(d=st(u,d.trim(),n,!1),d)return z({sortable:o,rootEl:d,name:"filter",targetEl:l,fromEl:n,toEl:n}),G("filter",o,{evt:t}),!0}),h)){r&&t.preventDefault();return}i.handle&&!st(u,i.handle,n,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,o,n){var i=this,r=i.el,a=i.options,s=r.ownerDocument,l;if(n&&!c&&n.parentNode===r){var u=O(n);if(D=r,c=n,P=c.parentNode,Vt=c.nextSibling,me=n,de=a.group,v.dragged=c,_t={target:c,clientX:(o||t).clientX,clientY:(o||t).clientY},Bo=_t.clientX-u.left,No=_t.clientY-u.top,this._lastX=(o||t).clientX,this._lastY=(o||t).clientY,c.style["will-change"]="all",l=function(){if(G("delayEnded",i,{evt:t}),v.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!Po&&i.nativeDraggable&&(c.draggable=!0),i._triggerDragStart(t,o),z({sortable:i,name:"choose",originalEvent:t}),tt(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(h){an(c,h.trim(),so)}),A(s,"dragover",Dt),A(s,"mousemove",Dt),A(s,"touchmove",Dt),a.supportPointer?(A(s,"pointerup",i._onDrop),!this.nativeDraggable&&A(s,"pointercancel",i._onDrop)):(A(s,"mouseup",i._onDrop),A(s,"touchend",i._onDrop),A(s,"touchcancel",i._onDrop)),Po&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),G("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||o)&&(!this.nativeDraggable||!(ae||bt))){if(v.eventCanceled){this._onDrop();return}a.supportPointer?(A(s,"pointerup",i._disableDelayedDrag),A(s,"pointercancel",i._disableDelayedDrag)):(A(s,"mouseup",i._disableDelayedDrag),A(s,"touchend",i._disableDelayedDrag),A(s,"touchcancel",i._disableDelayedDrag)),A(s,"mousemove",i._delayedDragTouchMoveHandler),A(s,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&A(s,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var o=t.touches?t.touches[0]:t;Math.max(Math.abs(o.clientX-this._lastX),Math.abs(o.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&so(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,o){o=o||t.pointerType=="touch"&&t,!this.nativeDraggable||o?this.options.supportPointer?A(document,"pointermove",this._onTouchMove):o?A(document,"touchmove",this._onTouchMove):A(document,"mousemove",this._onTouchMove):(A(c,"dragend",this),A(D,"dragstart",this._onDragStart));try{document.selection?be(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,o){if(Ht=!1,D&&c){G("dragStarted",this,{evt:o}),this.nativeDraggable&&A(document,"dragover",br);var n=this.options;!t&&tt(c,n.dragClass,!1),tt(c,n.ghostClass,!0),v.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:o})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,fn();for(var t=document.elementFromPoint(at.clientX,at.clientY),o=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY),t!==o);)o=t;if(c.parentNode[K]._isOutsideThisEl(t),o)do{if(o[K]){var n=void 0;if(n=o[K]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:o}),n&&!this.options.dragoverBubble)break}t=o}while(o=rn(o));gn()}},_onTouchMove:function(t){if(_t){var o=this.options,n=o.fallbackTolerance,i=o.fallbackOffset,r=t.touches?t.touches[0]:t,a=w&&Nt(w,!0),s=w&&a&&a.a,l=w&&a&&a.d,u=pe&&X&&Oo(X),h=(r.clientX-_t.clientX+i.x)/(s||1)+(u?u[0]-ao[0]:0)/(s||1),d=(r.clientY-_t.clientY+i.y)/(l||1)+(u?u[1]-ao[1]:0)/(l||1);if(!v.active&&!Ht){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(w){a?(a.e+=h-(io||0),a.f+=d-(ro||0)):a={a:1,b:0,c:0,d:1,e:h,f:d};var g="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");m(w,"webkitTransform",g),m(w,"mozTransform",g),m(w,"msTransform",g),m(w,"transform",g),io=h,ro=d,at=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!w){var t=this.options.fallbackOnBody?document.body:D,o=O(c,!0,pe,!0,t),n=this.options;if(pe){for(X=t;m(X,"position")==="static"&&m(X,"transform")==="none"&&X!==document;)X=X.parentNode;X!==document.body&&X!==document.documentElement?(X===document&&(X=dt()),o.top+=X.scrollTop,o.left+=X.scrollLeft):X=dt(),ao=Oo(X)}w=c.cloneNode(!0),tt(w,n.ghostClass,!1),tt(w,n.fallbackClass,!0),tt(w,n.dragClass,!0),m(w,"transition",""),m(w,"transform",""),m(w,"box-sizing","border-box"),m(w,"margin",0),m(w,"top",o.top),m(w,"left",o.left),m(w,"width",o.width),m(w,"height",o.height),m(w,"opacity","0.8"),m(w,"position",pe?"absolute":"fixed"),m(w,"zIndex","100000"),m(w,"pointerEvents","none"),v.ghost=w,t.appendChild(w),m(w,"transform-origin",Bo/parseInt(w.style.width)*100+"% "+No/parseInt(w.style.height)*100+"%")}},_onDragStart:function(t,o){var n=this,i=t.dataTransfer,r=n.options;if(G("dragStart",this,{evt:t}),v.eventCanceled){this._onDrop();return}G("setupClone",this),v.eventCanceled||(R=un(c),R.removeAttribute("id"),R.draggable=!1,R.style["will-change"]="",this._hideClone(),tt(R,this.options.chosenClass,!1),v.clone=R),n.cloneId=be(function(){G("clone",n),!v.eventCanceled&&(n.options.removeCloneOnHide||D.insertBefore(R,c),n._hideClone(),z({sortable:n,name:"clone"}))}),!o&&tt(c,r.dragClass,!0),o?($e=!0,n._loopId=setInterval(n._emulateDragOver,50)):($(document,"mouseup",n._onDrop),$(document,"touchend",n._onDrop),$(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(n,i,c)),A(document,"drop",n),m(c,"transform","translateZ(0)")),Ht=!0,n._dragStartId=be(n._dragStarted.bind(n,o,t)),A(document,"selectstart",n),Yt=!0,window.getSelection().removeAllRanges(),Gt&&m(document.body,"user-select","none")},_onDragOver:function(t){var o=this.el,n=t.target,i,r,a,s=this.options,l=s.group,u=v.active,h=de===l,d=s.sort,g=k||u,b,y=this,S=!1;if(go)return;function H(Xt,Yn){G(Xt,y,ht({evt:t,isOwner:h,axis:b?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:d,fromSortable:g,target:n,completed:B,onMove:function(Lo,zn){return fe(D,o,c,i,Lo,O(Lo),t,zn)},changed:Q},Yn))}function W(){H("dragOverAnimationCapture"),y.captureAnimationState(),y!==g&&g.captureAnimationState()}function B(Xt){return H("dragOverCompleted",{insertion:Xt}),Xt&&(h?u._hideClone():u._showClone(y),y!==g&&(tt(c,k?k.options.ghostClass:u.options.ghostClass,!1),tt(c,s.ghostClass,!0)),k!==y&&y!==v.active?k=y:y===v.active&&k&&(k=null),g===y&&(y._ignoreWhileAnimating=n),y.animateAll(function(){H("dragOverAnimationComplete"),y._ignoreWhileAnimating=null}),y!==g&&(g.animateAll(),g._ignoreWhileAnimating=null)),(n===c&&!c.animated||n===o&&!n.animated)&&(Pt=null),!s.dragoverBubble&&!t.rootEl&&n!==document&&(c.parentNode[K]._isOutsideThisEl(t.target),!Xt&&Dt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),S=!0}function Q(){et=nt(c),xt=nt(c,s.draggable),z({sortable:y,name:"change",toEl:o,newIndex:et,newDraggableIndex:xt,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),n=st(n,s.draggable,o,!0),H("dragOver"),v.eventCanceled)return S;if(c.contains(t.target)||n.animated&&n.animatingX&&n.animatingY||y._ignoreWhileAnimating===n)return B(!1);if($e=!1,u&&!s.disabled&&(h?d||(a=P!==D):k===this||(this.lastPutMode=de.checkPull(this,u,c,t))&&l.checkPut(this,u,c,t))){if(b=this._getDirection(t,n)==="vertical",i=O(c),H("dragOverValid"),v.eventCanceled)return S;if(a)return P=D,W(),this._hideClone(),H("revert"),v.eventCanceled||(Vt?D.insertBefore(c,Vt):D.appendChild(c)),B(!0);var Y=To(o,s.draggable);if(!Y||Er(t,b,this)&&!Y.animated){if(Y===c)return B(!1);if(Y&&o===t.target&&(n=Y),n&&(r=O(n)),fe(D,o,c,i,n,r,t,!!n)!==!1)return W(),Y&&Y.nextSibling?o.insertBefore(c,Y.nextSibling):o.appendChild(c),P=o,Q(),B(!0)}else if(Y&&xr(t,b,this)){var it=Ut(o,0,s,!0);if(it===c)return B(!1);if(n=it,r=O(n),fe(D,o,c,i,n,r,t,!1)!==!1)return W(),o.insertBefore(c,it),P=o,Q(),B(!0)}else if(n.parentNode===o){r=O(n);var _=0,j,rt=c.parentNode!==o,Z=!mr(c.animated&&c.toRect||i,n.animated&&n.toRect||r,b),qt=b?"top":"left",wt=Mo(n,"top","top")||Mo(c,"top","top"),jt=wt?wt.scrollTop:void 0;Pt!==n&&(j=r[qt],te=!1,he=!Z&&s.invertSwap||rt),_=$r(t,n,r,b,Z?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,he,Pt===n);var pt;if(_!==0){var Ct=nt(c);do Ct-=_,pt=P.children[Ct];while(pt&&(m(pt,"display")==="none"||pt===w))}if(_===0||pt===n)return B(!1);Pt=n,Qt=_;var Zt=n.nextElementSibling,St=!1;St=_===1;var le=fe(D,o,c,i,n,r,t,St);if(le!==!1)return(le===1||le===-1)&&(St=le===1),go=!0,setTimeout(Sr,30),W(),St&&!Zt?o.appendChild(c):n.parentNode.insertBefore(c,St?Zt:n),wt&&ln(wt,0,jt-wt.scrollTop),P=c.parentNode,j!==void 0&&!he&&(ve=Math.abs(j-O(n)[qt])),Q(),B(!0)}if(o.contains(c))return B(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Dt),$(document,"mousemove",Dt),$(document,"touchmove",Dt)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var o=this.el,n=this.options;if(et=nt(c),xt=nt(c,n.draggable),G("drop",this,{evt:t}),P=c&&c.parentNode,et=nt(c),xt=nt(c,n.draggable),v.eventCanceled){this._nulling();return}Ht=!1,he=!1,te=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),yo(this.cloneId),yo(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(o,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&m(document.body,"user-select",""),m(c,"transform",""),t&&(Yt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),w&&w.parentNode&&w.parentNode.removeChild(w),(D===P||k&&k.lastPutMode!=="clone")&&R&&R.parentNode&&R.parentNode.removeChild(R),c&&(this.nativeDraggable&&$(c,"dragend",this),so(c),c.style["will-change"]="",Yt&&!Ht&&tt(c,k?k.options.ghostClass:this.options.ghostClass,!1),tt(c,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:P,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==P?(et>=0&&(z({rootEl:P,name:"add",toEl:P,fromEl:D,originalEvent:t}),z({sortable:this,name:"remove",toEl:P,originalEvent:t}),z({rootEl:P,name:"sort",toEl:P,fromEl:D,originalEvent:t}),z({sortable:this,name:"sort",toEl:P,originalEvent:t})),k&&k.save()):et!==Bt&&et>=0&&(z({sortable:this,name:"update",toEl:P,originalEvent:t}),z({sortable:this,name:"sort",toEl:P,originalEvent:t})),v.active&&((et==null||et===-1)&&(et=Bt,xt=Kt),z({sortable:this,name:"end",toEl:P,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){G("nulling",this),D=c=P=w=Vt=R=me=Et=_t=at=Yt=et=xt=Bt=Kt=Pt=Qt=k=de=v.dragged=v.ghost=v.clone=v.active=null;var t=this.el;Te.forEach(function(o){t.contains(o)&&(o.checked=!0)}),Te.length=io=ro=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":c&&(this._onDragOver(t),wr(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],o,n=this.el.children,i=0,r=n.length,a=this.options;i<r;i++)o=n[i],st(o,a.draggable,this.el,!1)&&t.push(o.getAttribute(a.dataIdAttr)||Tr(o));return t},sort:function(t,o){var n={},i=this.el;this.toArray().forEach(function(r,a){var s=i.children[a];st(s,this.options.draggable,i,!1)&&(n[r]=s)},this),o&&this.captureAnimationState(),t.forEach(function(r){n[r]&&(i.removeChild(n[r]),i.appendChild(n[r]))}),o&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,o){return st(t,o||this.options.draggable,this.el,!1)},option:function(t,o){var n=this.options;if(o===void 0)return n[t];var i=se.modifyOption(this,t,o);typeof i<"u"?n[t]=i:n[t]=o,t==="group"&&pn(n)},destroy:function(){G("destroy",this);var t=this.el;t[K]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(o){o.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ae.splice(Ae.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!Et){if(G("hideClone",this),v.eventCanceled)return;m(R,"display","none"),this.options.removeCloneOnHide&&R.parentNode&&R.parentNode.removeChild(R),Et=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if(Et){if(G("showClone",this),v.eventCanceled)return;c.parentNode==D&&!this.options.group.revertClone?D.insertBefore(R,c):Vt?D.insertBefore(R,Vt):D.appendChild(R),this.options.group.revertClone&&this.animate(c,R),m(R,"display",""),Et=!1}}};function wr(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function fe(e,t,o,n,i,r,a,s){var l,u=e[K],h=u.options.onMove,d;return window.CustomEvent&&!bt&&!ae?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=o,l.draggedRect=n,l.related=i||t,l.relatedRect=r||O(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),h&&(d=h.call(u,l,a)),d}function so(e){e.draggable=!1}function Sr(){go=!1}function xr(e,t,o){var n=O(Ut(o.el,0,o.options,!0)),i=cn(o.el,o.options,w),r=10;return t?e.clientX<i.left-r||e.clientY<n.top&&e.clientX<n.right:e.clientY<i.top-r||e.clientY<n.bottom&&e.clientX<n.left}function Er(e,t,o){var n=O(To(o.el,o.options.draggable)),i=cn(o.el,o.options,w),r=10;return t?e.clientX>i.right+r||e.clientY>n.bottom&&e.clientX>n.left:e.clientY>i.bottom+r||e.clientX>n.right&&e.clientY>n.top}function $r(e,t,o,n,i,r,a,s){var l=n?e.clientY:e.clientX,u=n?o.height:o.width,h=n?o.top:o.left,d=n?o.bottom:o.right,g=!1;if(!a){if(s&&ve<u*i){if(!te&&(Qt===1?l>h+u*r/2:l<d-u*r/2)&&(te=!0),te)g=!0;else if(Qt===1?l<h+ve:l>d-ve)return-Qt}else if(l>h+u*(1-i)/2&&l<d-u*(1-i)/2)return Ar(t)}return g=g||a,g&&(l<h+u*r/2||l>d-u*r/2)?l>h+u/2?1:-1:0}function Ar(e){return nt(c)<nt(e)?1:-1}function Tr(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,o=t.length,n=0;o--;)n+=t.charCodeAt(o);return n.toString(36)}function Cr(e){Te.length=0;for(var t=e.getElementsByTagName("input"),o=t.length;o--;){var n=t[o];n.checked&&Te.push(n)}}function be(e){return setTimeout(e,0)}function yo(e){return clearTimeout(e)}Je&&A(document,"touchmove",function(e){(v.active||Ht)&&e.cancelable&&e.preventDefault()});v.utils={on:A,off:$,css:m,find:an,is:function(t,o){return!!st(t,o,t,!1)},extend:ur,throttle:sn,closest:st,toggleClass:tt,clone:un,index:nt,nextTick:be,cancelNextTick:yo,detectDirection:hn,getChild:Ut,expando:K};v.get=function(e){return e[K]};v.mount=function(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t[0].constructor===Array&&(t=t[0]),t.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(v.utils=ht(ht({},v.utils),n.utils)),se.mount(n)})};v.create=function(e,t){return new v(e,t)};v.version=sr;var M=[],zt,mo,vo=!1,lo,uo,Ce,Wt;function _r(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(o){var n=o.originalEvent;this.sortable.nativeDraggable?A(document,"dragover",this._handleAutoScroll):this.options.supportPointer?A(document,"pointermove",this._handleFallbackAutoScroll):n.touches?A(document,"touchmove",this._handleFallbackAutoScroll):A(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(o){var n=o.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),Uo(),we(),cr()},nulling:function(){Ce=mo=zt=vo=Wt=lo=uo=null,M.length=0},_handleFallbackAutoScroll:function(o){this._handleAutoScroll(o,!0)},_handleAutoScroll:function(o,n){var i=this,r=(o.touches?o.touches[0]:o).clientX,a=(o.touches?o.touches[0]:o).clientY,s=document.elementFromPoint(r,a);if(Ce=o,n||this.options.forceAutoScrollFallback||ae||bt||Gt){co(o,this.options,s,n);var l=At(s,!0);vo&&(!Wt||r!==lo||a!==uo)&&(Wt&&Uo(),Wt=setInterval(function(){var u=At(document.elementFromPoint(r,a),!0);u!==l&&(l=u,we()),co(o,i.options,u,n)},10),lo=r,uo=a)}else{if(!this.options.bubbleScroll||At(s,!0)===dt()){we();return}co(o,this.options,At(s,!1),!1)}}},vt(e,{pluginName:"scroll",initializeByDefault:!0})}function we(){M.forEach(function(e){clearInterval(e.pid)}),M=[]}function Uo(){clearInterval(Wt)}var co=sn(function(e,t,o,n){if(t.scroll){var i=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=dt(),u=!1,h;mo!==o&&(mo=o,we(),zt=t.scroll,h=t.scrollFn,zt===!0&&(zt=At(o,!0)));var d=0,g=zt;do{var b=g,y=O(b),S=y.top,H=y.bottom,W=y.left,B=y.right,Q=y.width,Y=y.height,it=void 0,_=void 0,j=b.scrollWidth,rt=b.scrollHeight,Z=m(b),qt=b.scrollLeft,wt=b.scrollTop;b===l?(it=Q<j&&(Z.overflowX==="auto"||Z.overflowX==="scroll"||Z.overflowX==="visible"),_=Y<rt&&(Z.overflowY==="auto"||Z.overflowY==="scroll"||Z.overflowY==="visible")):(it=Q<j&&(Z.overflowX==="auto"||Z.overflowX==="scroll"),_=Y<rt&&(Z.overflowY==="auto"||Z.overflowY==="scroll"));var jt=it&&(Math.abs(B-i)<=a&&qt+Q<j)-(Math.abs(W-i)<=a&&!!qt),pt=_&&(Math.abs(H-r)<=a&&wt+Y<rt)-(Math.abs(S-r)<=a&&!!wt);if(!M[d])for(var Ct=0;Ct<=d;Ct++)M[Ct]||(M[Ct]={});(M[d].vx!=jt||M[d].vy!=pt||M[d].el!==b)&&(M[d].el=b,M[d].vx=jt,M[d].vy=pt,clearInterval(M[d].pid),(jt!=0||pt!=0)&&(u=!0,M[d].pid=setInterval((function(){n&&this.layer===0&&v.active._onTouchMove(Ce);var Zt=M[this.layer].vy?M[this.layer].vy*s:0,St=M[this.layer].vx?M[this.layer].vx*s:0;typeof h=="function"&&h.call(v.dragged.parentNode[K],St,Zt,e,Ce,M[this.layer].el)!=="continue"||ln(M[this.layer].el,St,Zt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&g!==l&&(g=At(g,!1)));vo=u}},30),yn=function(t){var o=t.originalEvent,n=t.putSortable,i=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(o){var u=n||r;s();var h=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:o,d=document.elementFromPoint(h.clientX,h.clientY);l(),u&&!u.el.contains(d)&&(a("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function Co(){}Co.prototype={startIndex:null,dragStart:function(t){var o=t.oldDraggableIndex;this.startIndex=o},onSpill:function(t){var o=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=Ut(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(o,i):this.sortable.el.appendChild(o),this.sortable.animateAll(),n&&n.animateAll()},drop:yn};vt(Co,{pluginName:"revertOnSpill"});function _o(){}_o.prototype={onSpill:function(t){var o=t.dragEl,n=t.putSortable,i=n||this.sortable;i.captureAnimationState(),o.parentNode&&o.parentNode.removeChild(o),i.animateAll()},drop:yn};vt(_o,{pluginName:"removeOnSpill"});v.mount(new _r);v.mount(_o,Co);const Dr=e=>{const t=e.item;let o=Array.prototype.slice.call(t.parentNode.childNodes);return o=o.filter(n=>n.nodeType!=Node.ELEMENT_NODE||!n.classList.contains("sortable-fallback")),o},Vr=(e,t,o,n,i,r)=>{const s=e.item.parentNode;for(const S of o)s.appendChild(S);if(e.oldIndex==e.newIndex)return;const l=n.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(i),h=l.find(S=>S.get(i)===u),d=r.dataset.layer,g=l.find(S=>S.get(i)==d);let b,y;for(b=0;b<l.length;b++)if(l[b]==h){n.removeAt(b);break}for(y=0;y<l.length;y++)if(l[y]===g){b>y?n.insertAt(y,h):n.insertAt(y+1,h);break}t.requestUpdate()};function Lr(e,t,o,n){let i=[],r=null;e._sortable=v.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),i=Dr(a)},onMove:a=>{r=a.related},onEnd:a=>Vr(a,n,i,t,o,r)})}function Rr(e,t,o,n){const i=e.getArray();let r=!1;i.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(o)||(a.set(o,`layer ${s}`),r=!0),r&&n.requestUpdate()})}function Do(e,t,o){let n=[];const i=(r,a,s)=>{n=[...n,...r.filter(u=>u.get(a)===s)];const l=r.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>i(u.getLayers().getArray(),a,s)),n};return i(e,t,o),n}function Ir(e,t,o){if(!e||!t)return!1;if(!mn(e,o))return!0;const n=e.get("minZoom"),i=e.get("maxZoom"),r=t.getView().getZoom();return r>n&&r<i}function mn(e,t){const o=e.get("minZoom"),n=e.get("maxZoom");return!!(t&&(o!==-1/0||n!==1/0))}function Fo(e,t){var i,r,a;return!e||!t?void 0:e.getLayers?"group":((a=(i=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:i.ol_uid)==null?void 0:a.includes(e.getSource?(r=e.getSource())==null?void 0:r.ol_uid:void 0))?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Pr=(e,t,o)=>{let n=t;o.layer.getSource().getTileUrlFunction()&&(n||(n=o.layer.getSource().getTileUrlFunction()),o.layer.getSource().setTileUrlFunction((...r)=>{var l,u;const a=new URL(n(...r)),s=((u=(l=o.layerConfig.schema)==null?void 0:l.options)==null?void 0:u.removeProperties)??[];return o.layer.getSource()instanceof ii&&(o.layer.getSource()._updatedUrl=eo(o.layer.getSource().getUrls()[0],e)),s.forEach(h=>a.searchParams.delete(h)),eo(a.href,e)}),o.layer.getSource().setKey(new Date));const i=document.querySelector("eox-map");if(i){const r=i.globe;if(r){const a=r.planet.layers.filter(s=>s.name==o.layer.get("id"))[0];a.setUrl(eo(a.url,e)),window.eoxMapGlobe.refresh()}}return n};function Hr(e,t,o){const n="updateStyleVariables"in t,i="setStyle"in t,r=n?t.style_:o.style;let a=r==null?void 0:r.variables;if(a){const s=Vo(e);if(r.variables={...a,...s},n)t.updateStyleVariables(s);else if(i){const l=Mr(r);t.setStyle(l)}}}const Vo=e=>{const t={};for(const o in e)if(typeof e[o]=="object"&&e[o]!==null){const n=Vo(e[o]);for(const i in n)t[i]=n==null?void 0:n[i]}else t[o]=e==null?void 0:e[o];return t};function Mr(e){let t=e;if("variables"in e){let o=JSON.stringify(e);const{variables:n}=e;for(const i in n)typeof n[i]=="number"?o=o.replaceAll(`["var","${i}"]`,String(n[i])):o=o.replaceAll(`["var","${i}"]`,`"${n[i]}"`);t=JSON.parse(o)}return t}const Or=(e,t)=>{if(!e)return;const o=Vo(t);let n,i;return Array.isArray(e)?i=structuredClone(e):i=[structuredClone(e)],n=i.filter(r=>{if(!("boundTo"in r))return!0;const a=r.boundTo.key,s=r.boundTo.value;return a in o&&o[a]==s}),n.length||(n=null),n==null?void 0:n.map(r=>{var a;return delete r.boundTo,!("domainProperties"in r)||"domain"in r?r:(a=Object.keys(r))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=r[l].map(u=>o[u]):s[l]=r[l],s),{})})};function vn(e,t){var n;let o={};for(const i in e){const r=e[i].type;if(r&&r!=="object"&&t[i]!==void 0)o[i]=r==="number"?Number(t[i]):t[i];else if(typeof e[i]=="object"&&((n=e[i])!=null&&n.properties)){const a=vn(e[i].properties,t);Object.keys(a).length>0&&(o[i]=a)}}return o}function Br(e,t){var r,a,s,l,u;if(!t)return null;let o={},n="updateStyleVariables"in e?(r=e.style_)==null?void 0:r.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&n)o=n;else if((l=(s=e.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const h=new URL(e.getSource().getTileUrlFunction()([0,0,0]));o={};for(const[d,g]of h.searchParams.entries()){const b=h.searchParams.getAll(d);o[d]=b.length>1?b:g}}else return null;const i=vn(((u=t.schema)==null?void 0:u.properties)||t.schema,o);return Object.keys(i).length?i:null}const bn=(e,t)=>e==null?void 0:e.filter(o=>["remove","sort"].filter(n=>t!=null&&t.get("layerControlDisable")?n!=="sort":!0).includes(o)),wn=(e,t)=>e==null?void 0:e.filter(o=>{let n=!0;return["remove","sort"].includes(o)&&(n=!1),o==="info"&&(n=t.get("description")),o==="config"&&(n=t.get("layerConfig")),o==="datetime"&&(n=t.get("layerDatetime")),o==="legend"&&(n=t.get("layerLegend")),n}),Nr=(e,t,o)=>p`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${o?e:p`<i class="small primary-text">${t}</i>`}
  </button>
`,Sn=(e,t)=>p`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:o}=e;o==null||o.set("layerControlOptional",!0),o==null||o.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:o,bubbles:!0}))}}
  >
    ${e.unstyled?"x":p`<i class="small red-text">${t}</i>`}
  </button>
`,xn=(e,t,o)=>p`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${o?"═":p`<i class="small primary-text">${t}</i>`}
  </button>
`;function ee(){return{dots:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const En=e=>{var o;const t=["layerControlHide","layerControlOptional"];return(o=e==null?void 0:e.getArray())==null?void 0:o.filter(n=>t.every(i=>!n.get(i)))};function $n(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=Kn(class extends Qn{constructor(e){if(super(e),e.type!==Rt.PROPERTY&&e.type!==Rt.ATTRIBUTE&&e.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ti(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ue||t===Tt)return t;const o=e.element,n=e.name;if(e.type===Rt.PROPERTY){if(t===o[n])return ue}else if(e.type===Rt.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(n))return ue}else if(e.type===Rt.ATTRIBUTE&&o.getAttribute(n)===t+"")return ue;return ei(e),t}});var An="Expected a function",qo=NaN,kr="[object Symbol]",Ur=/^\s+|\s+$/g,Fr=/^[-+]0x[0-9a-f]+$/i,qr=/^0b[01]+$/i,jr=/^0o[0-7]+$/i,Zr=parseInt,Xr=typeof ce=="object"&&ce&&ce.Object===Object&&ce,Yr=typeof self=="object"&&self&&self.Object===Object&&self,zr=Xr||Yr||Function("return this")(),Wr=Object.prototype,Gr=Wr.toString,Jr=Math.max,Kr=Math.min,ho=function(){return zr.Date.now()};function Qr(e,t,o){var n,i,r,a,s,l,u=0,h=!1,d=!1,g=!0;if(typeof e!="function")throw new TypeError(An);t=jo(t)||0,_e(o)&&(h=!!o.leading,d="maxWait"in o,r=d?Jr(jo(o.maxWait)||0,t):r,g="trailing"in o?!!o.trailing:g);function b(_){var j=n,rt=i;return n=i=void 0,u=_,a=e.apply(rt,j),a}function y(_){return u=_,s=setTimeout(W,t),h?b(_):a}function S(_){var j=_-l,rt=_-u,Z=t-j;return d?Kr(Z,r-rt):Z}function H(_){var j=_-l,rt=_-u;return l===void 0||j>=t||j<0||d&&rt>=r}function W(){var _=ho();if(H(_))return B(_);s=setTimeout(W,S(_))}function B(_){return s=void 0,g&&n?b(_):(n=i=void 0,a)}function Q(){s!==void 0&&clearTimeout(s),u=0,n=l=i=s=void 0}function Y(){return s===void 0?a:B(ho())}function it(){var _=ho(),j=H(_);if(n=arguments,i=this,l=_,j){if(s===void 0)return y(l);if(d)return s=setTimeout(W,t),b(l)}return s===void 0&&(s=setTimeout(W,t)),a}return it.cancel=Q,it.flush=Y,it}function ta(e,t,o){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(An);return _e(o)&&(n="leading"in o?!!o.leading:n,i="trailing"in o?!!o.trailing:i),Qr(e,t,{leading:n,maxWait:t,trailing:i})}function _e(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ea(e){return!!e&&typeof e=="object"}function oa(e){return typeof e=="symbol"||ea(e)&&Gr.call(e)==kr}function jo(e){if(typeof e=="number")return e;if(oa(e))return qo;if(_e(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=_e(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ur,"");var o=qr.test(e);return o||jr.test(e)?Zr(e.slice(2),o?2:8):Fr.test(e)?qo:+e}var na=ta;const Zo=ri(na);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=e=>e??Tt;var ot,De,Ve;class Tn extends lt{constructor(){super();T(this,ot,[]);T(this,De,po`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);T(this,Ve,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return x(this,ot)?x(this,ot).length>1?x(this,ot):x(this,ot)[0]:null}set layerLegend(o){var n;o?Array.isArray(o)?ut(this,ot,o.map((i,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...i}})):ut(this,ot,[{id:(((n=this.layer)==null?void 0:n.get("id"))??"")+0,...o}]):ut(this,ot,null)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var o;ut(this,ot,(o=x(this,ot))==null?void 0:o.map(n=>(this.offsetWidth!==n.width&&(n.width=this.offsetWidth),{...n}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),p`
      <style>
        ${x(this,De)}
        ${!this.unstyled&&x(this,Ve)}
      </style>
      ${V(this.layerLegend,()=>p`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${x(this,ot).map((o,n,i)=>p`
                <color-legend
                  id="${o.id}"
                  width=${o.width??325}
                  scaleType="${ge(o.scaleType)}"
                  markType="${ge(o.markType)}"
                  titleText="${ge(o.title)}"
                  .range=${o.range}
                  .domain=${o.domain}
                  tickFormat="${ge(o.tickFormat)}"
                  .ticks=${o.ticks??5}
                  .tickValues=${o.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${n!==i.length-1?p`<div class="separator"></div>`:Tt}
              `)}
          </div>
        `)}
    `}}ot=new WeakMap,De=new WeakMap,Ve=new WeakMap,I(Tn,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",Tn);var ft,kt,ne,ie,wo,Le,Re;class Cn extends lt{constructor(){super();T(this,ie);T(this,ft,{});T(this,kt,null);T(this,ne);T(this,Le,po`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `);T(this,Re,po`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Zo(L(this,ie,wo),1e3),this.customEditorInterfaces=[]}updated(o){if(o.has("layerConfig")){const n=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Zo(L(this,ie,wo),n),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){ut(this,kt,Br(this.layer,this.layerConfig)),Object.keys(x(this,ft)).length!==0&&ut(this,kt,x(this,ft)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const o={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return p`
      <style>
        ${x(this,Le)}
        ${!this.unstyled&&x(this,Re)}
      </style>
      ${V(this.layerConfig,()=>p`
          ${V(this.layerConfig.legend,()=>p`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Or(this.layerConfig.legend,x(this,ft))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${x(this,kt)}
            .options=${o}
            .noShadow=${!0}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}ft=new WeakMap,kt=new WeakMap,ne=new WeakMap,ie=new WeakSet,wo=function(o){ut(this,ft,o.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?Hr(x(this,ft),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):ut(this,ne,Pr(x(this,ft),x(this,ne),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:o.detail,layer:this.layer}})),this.requestUpdate()},Le=new WeakMap,Re=new WeakMap,I(Cn,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layerconfig",Cn);var Ie,Dn,Pe,He;class _n extends lt{constructor(){super();T(this,Ie);T(this,Pe,"");T(this,He,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),p`
      <style>
        ${x(this,Pe)}
        ${!this.unstyled&&x(this,He)}
      </style>
      ${V(this.layerDatetime,()=>p`
          <eox-timecontrol
            .initDate=${this.layerDatetime.currentStep?[this.layerDatetime.currentStep]:void 0}
            .controlValues=${[{id:this.layer.get("id"),name:this.layer.get("name")||this.layer.get("title"),timeControlValues:this.layerDatetime.controlValues.map(o=>({date:o}))}]}
            @select=${L(this,Ie,Dn)}
            .showUTC=${this.layerDatetime.showUTC||!1}
          >
            <eox-timecontrol-date
              .navigation=${this.layerDatetime.navigation??!1}
              .format=${this.layerDatetime.displayFormat}
            ></eox-timecontrol-date>
            <eox-timecontrol-slider
              animate-onclick-interval="${this.layerDatetime.animateOnClickInterval??"0.3s"}"
            ></eox-timecontrol-slider>
          </eox-timecontrol>
        `)}
    `}}Ie=new WeakSet,Dn=function(o){var a;const n=new Date(o.detail.date[0]),i=(a=this.layerDatetime.controlValues)==null?void 0:a.some(s=>typeof s=="string"&&s.includes("T"));let r;i?r=n.toISOString():r=(l=>`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`)(n),r!==this.layerDatetime.currentStep&&(this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:r,layer:this.layer}})),this.layerDatetime.currentStep=r,this.requestUpdate())},Pe=new WeakMap,He=new WeakMap,I(_n,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",_n);var re,Me,Oe;class Vn extends lt{constructor(){super();T(this,re,o=>(this.selectedTab===o||this.toolsAsList)&&"highlighted");T(this,Me,`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
    .listed .tab {
      margin-bottom: .5rem;
    }
  `);T(this,Oe,`
    ${xo}
    figure {
      padding: var(--padding-vertical) var(--padding);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface-variant);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.tabs,n=this.actions,i=n.length+o.length>1;return p`
      <style>
        ${x(this,Me)}
        ${!this.unstyled&&x(this,Oe)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${V(i,()=>p`
            <nav>
              ${V(!this.toolsAsList,()=>p`
                  <div>
                    <!-- Labels for tabs -->
                    ${ye(o,(r,a)=>p`
                        <label
                          class=${x(this,re).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ye(n,r=>p`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${ye(o,(r,a)=>p`
              ${V(this.toolsAsList,()=>p`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${x(this,re).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
              ${V(this.toolsAsList&&a<o.length-1,()=>p`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}re=new WeakMap,Me=new WeakMap,Oe=new WeakMap,I(Vn,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Vn);var Be,Rn,Ne,ke;class Ln extends lt{constructor(){super();T(this,Be);I(this,"_removeButton",o=>Sn(this,o));I(this,"_sortButton",o=>xn(this,o,this.unstyled));I(this,"_button",(o,n)=>Nr(o,n,this.unstyled));I(this,"_getDefaultTools",o=>{var n,i;return p`
      <div slot="info-content">
        ${oi(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${bo((n=this.layer)==null?void 0:n.getOpacity())}
            class="tiny max"
            @input=${r=>{this.layer.setOpacity(parseFloat(r.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((i=this.layer)==null?void 0:i.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${V(this.layer.get("layerConfig"),()=>p`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
              @layerConfig:change=${L(this,Be,Rn)}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${V(this.layer.get("layerDatetime"),()=>p`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${r=>$n(r,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${V(this.layer.get("layerLegend"),()=>p`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton(o.remove)}</div>
      <div slot="sort-icon">${this._sortButton(o.sort)}</div>
    `});T(this,Ne,"");T(this,ke,`
    ${this.embedded?"":xo}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
    :host {
      display: block;
      margin-block: var(--padding-vertical) !important;
    }
    details[open] eox-layercontrol-tools-items {
      display: block;
    }
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.open=!1,this.toolsAutoExpand=!1,setTimeout(()=>{var n,i,r;const o=this.parentElement||((n=this.getRootNode())==null?void 0:n.host);this.embedded=(o==null?void 0:o.tagName)==="EOX-LAYERCONTROL-LAYER",(typeof this.open>"u"||this.open===!1||this.open===null)&&(this.open=this.toolsAutoExpand?!!((i=this.layer)!=null&&i.getVisible()):this.embedded===!1?!0:!!((r=this.layer)!=null&&r.get("layerControlToolsExpand")))}),this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}updated(o){var n;this.toolsAutoExpand&&(o.has("toolsAutoExpand")||o.has("layer"))&&(this.open=!!((n=this.layer)!=null&&n.getVisible()))}render(){const o=bn(this.tools,this.layer),n=wn(this.tools,this.layer),i=o==null?void 0:o.length,r=n==null?void 0:n.length;return p`
      <style>
        ${x(this,Ne)}
        ${!this.unstyled&&x(this,ke)}
      </style>
      ${V(i+r>0,()=>p`
          ${V(!(i===1&&r===0),()=>p`
              <details
                class="tools"
                .open=${bo(this.open)}
                @toggle=${a=>{this.open=a.target.open}}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${o}
                  .tabs=${n}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ye(n,a=>this._button(a,ee()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(ee())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Be=new WeakSet,Rn=function(o){this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:o.detail.jsonformValue,layer:o.detail.layer}}))},Ne=new WeakMap,ke=new WeakMap,I(Ln,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},open:{type:Boolean,reflect:!0},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},embedded:{state:!0},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-tools",Ln);const ia=e=>{const t=()=>{const o=Ir(e.layer,e.map,e.showLayerZoomState);let n=!1;!o&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,n=!0):o&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,n=!0),n&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};mn(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},ra=(e,t)=>{const o=t.layer;if(o.setVisible(e.target.checked),t.toolsAutoExpand){const n=t.renderRoot.querySelector("eox-layercontrol-layer-tools");n&&(n.open=e.target.checked)}e.target.checked&&o.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(i=>{var r;if(i.layer!==o&&((r=i.layer)!=null&&r.get("layerControlExclusive"))){if(i.layer.setVisible(!1),i.toolsAutoExpand){const a=i.renderRoot.querySelector("eox-layercontrol-layer-tools");a&&(a.open=!1)}i.requestUpdate()}}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:o})),t.requestUpdate()};var ct,Mt,Pn,Ue,Fe;class In extends lt{constructor(){super();T(this,ct);I(this,"currLayerVisibilityBasedOnZoom",!0);T(this,Ue,"");T(this,Fe,`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;
      transform: translateX(.3rem);
    }
    eox-layercontrol-layer > nav > .action.visibility span::after {
      border-radius: 0.25rem !important;
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){ia(this)}render(){var h,d;const o=this.layer.getVisible(),n=o?"visible":"",i=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=L(this,ct,Mt).call(this,"layerControlDisable")?"disabled":"",a=L(this,ct,Mt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((h=bn(this.tools,this.layer))==null?void 0:h.length)>0,l=((d=wn(this.tools,this.layer))==null?void 0:d.length)>0,u=document.querySelector("eox-layercontrol-layer-tools");return u&&Object.assign(u,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),p`
      <style>
        ${x(this,Ue)}
        ${!this.unstyled&&x(this,Fe)}
        
        /* Make sure the CSS variable is applied to the layer type icon */
        .small.grey-text {
          display: var(--layer-type-visibility);
        }
      </style>
      ${V(this.layer,()=>p`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${n} ${i} responsive tiny-space"
          >
            ${V(!this.unstyled,()=>{if(L(this,ct,Mt).call(this,"color"))return p`
                  <i class="small" style="color: ${L(this,ct,Mt).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return p` <i class="small"> </i> `;case"draw":return p`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case"vector":return p`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case"raster":return p`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return p` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${r}">
              <span class="layertitle truncate"
                >${L(this,ct,Mt).call(this,this.titleProperty)}</span
              >
            </div>

            ${V(l&&!this.toolsAutoExpand,()=>p`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{const g=this.renderRoot.querySelector("eox-layercontrol-layer-tools");g.open=!g.open}}
                >
                  <i class="small">
                    ${ee()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<span class="tooltip top" style="pointer-events: none">Tools</span>-->
                </button>
              `)}
            ${V(!l&&s,()=>this.tools[0]==="remove"?Sn(this,ee()[this.tools[0]]):xn(this,ee()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${bo(o)}
                @click=${L(this,ct,Pn)}
                disabled=${r||Tt}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<span class="tooltip top" style="pointer-events: none">${o?"Hide":"Show"}</span>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${V(l&&!u,()=>p`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .customEditorInterfaces=${this.customEditorInterfaces}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ct=new WeakSet,Mt=function(o){var n;return(n=this.layer)==null?void 0:n.get(o)},Pn=function(o){ra(o,this)},Ue=new WeakMap,Fe=new WeakMap,I(In,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer",In);var qe,je;class Hn extends lt{constructor(){super();T(this,qe,"");T(this,je,`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var i,r;const o=!!((i=this.group)!=null&&i.get("layerControlExpand")),n=(r=En(this.group.getLayers()))==null?void 0:r.length;return p`
      <style>
        ${x(this,qe)}
        ${!this.unstyled&&x(this,je)}
      </style>
      ${V(this.group,()=>p`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${o||Tt}
            data-children-length=${n}
          >
            <summary class="square">
              ${V(n>0,()=>p`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                .toolsAutoExpand=${this.toolsAutoExpand}
                .customEditorInterfaces=${this.customEditorInterfaces}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${this.noShadow}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              .toolsAutoExpand=${this.toolsAutoExpand}
              .customEditorInterfaces=${this.customEditorInterfaces}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}qe=new WeakMap,je=new WeakMap,I(Hn,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-group",Hn);const aa=e=>{const{layers:t,idProperty:o,titleProperty:n,renderRoot:i}=e,r=ai(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=i.querySelector("ul");Rr(t,o,n,e),Lr(s,t,o,e)}};var Ze,Xe;class Mn extends lt{constructor(){super();T(this,Ze,"");T(this,Xe,`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list.no-space {
      margin-block: var(--padding-inline) !important;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.toolsAutoExpand=!1,this.globallyExclusiveLayers=!1,this.customEditorInterfaces=[]}firstUpdated(){aa(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=this.layers?En(this.layers).reverse():[];return p`
      <style>
        ${x(this,Ze)}
        ${!this.unstyled&&x(this,Xe)}
      </style>
      <ul class="list no-space">
        ${V(this.layers,()=>p`
            ${Jn(o,n=>n,n=>p`
                <li
                  data-layer="${n.get(this.idProperty)}"
                  data-type="${Fo(n,this.map)}"
                  class="square"
                >
                  ${n.getLayers?p`
                          <eox-layercontrol-layer-group
                            .noShadow=${this.noShadow}
                            .group=${n}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:p`
                          <eox-layercontrol-layer
                            .noShadow=${this.noShadow}
                            .layer=${n}
                            .layerType=${Fo(n,this.map)}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            .toolsAutoExpand=${this.toolsAutoExpand}
                            .customEditorInterfaces=${this.customEditorInterfaces}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Ze=new WeakMap,Xe=new WeakMap,I(Mn,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{attribute:!1,type:Array}});customElements.define("eox-layercontrol-layer-list",Mn);const sa=e=>{const t=e.querySelector("select[name=optional]"),o=t?t.value:null,n=Do(e.layers.getArray(),"layerControlOptional",!0).find(i=>(i.get(e.idProperty)||i.ol_uid)===o);n==null||n.set("layerControlOptional",!1),n==null||n.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(i=>i.requestUpdate()),e.requestUpdate()};var Ye,Bn;class On extends lt{constructor(){super();T(this,Ye);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o=Do(this.layers.getArray(),"layerControlOptional",!0);return p`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${o.map(n=>{const i=n.get(this.idProperty)||n.ol_uid,r=n.get(this.titleProperty),a=`layer ${n.get(this.idProperty)}`;return p` <option value="${i}">${r||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${L(this,Ye,Bn)}">Add</button>
      </nav>
    `}}Ye=new WeakSet,Bn=function(){sa(this)},I(On,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",On);const la=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},Xo=e=>{const t=JSON.parse(`{"data":${en(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(o=>{e.eoxMap.addOrUpdateLayer(o)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},ua=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function ca(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if($o(t)==="XYZ")return{Name:t};try{const o=await Qi(t);e.wmsCapabilities=o}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const da=(e,t)=>{const{Name:o}=e,n=$o(t.urlInput)||"XYZ",i={type:"Tile",properties:{id:o,title:o},source:{type:n,url:t.urlInput,params:{LAYERS:o}}};t.jsonInput=JSON.stringify(i)},ha=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var U,kn,Un,So,Fn,qn,Se,ze;class Nn extends lt{constructor(){super();T(this,U);I(this,"urlInput",null);I(this,"jsonInput",null);I(this,"open",null);I(this,"searchLoad",!1);I(this,"wmsCapabilities",null);T(this,ze,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const o={add:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:p`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},n=this.open?"open":"close",i=this.open==="url",r=this.open==="json",a=!tr(this.urlInput)||this.searchLoad?!0:Tt;return p`
      <style>
        ${x(this,ze)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${n}"
          >
            <a
              @click=${()=>L(this,U,Se).call(this,"url")}
              class="${i?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>L(this,U,Se).call(this,"json")}
              class="${r?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>L(this,U,Se).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":p`<i class="small primary-text">${o.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${n}" style="padding: 15px 0">
          ${i?p`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${L(this,U,kn)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${L(this,U,Un)}
                  >
                    ${this.unstyled?"Search":p`<i class="small">${o.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?p`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return p`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>L(this,U,So).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:Tt}
              `:p`
                <!-- Textarea for JSON input -->
                <div class="field small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${L(this,U,qn)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0; z-index: 1;"
                  disabled=${er(this.jsonInput)?Tt:!0}
                  @click=${L(this,U,Fn)}
                >
                  ${this.unstyled?"Add JSON":p`<i class="small">${o.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}U=new WeakSet,kn=function(o){ua(o,this)},Un=async function(){const o=await ca(this);o&&L(this,U,So).call(this,o)},So=function(o){da(o,this),Xo(this)},Fn=function(){Xo(this)},qn=function(o){la(o,this)},Se=function(o){ha(o,this)},ze=new WeakMap,I(Nn,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Nn);const pa=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const o=t.renderRoot.querySelector("eox-layercontrol-optional-list");o==null||o.requestUpdate()}},Yo=e=>{const t=si(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};ni();var $t,Ft,Zn,Xn,We;class jn extends lt{constructor(){super();T(this,Ft);T(this,$t);T(this,We,`
    ${xo}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

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

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
    summary > * {
      pointer-events: all !important;
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1,this.toolsAutoExpand=!1,this.customEditorInterfaces=[]}firstUpdated(){this.eoxMap=Yo(this)}updated(o){o.has("for")&&(this.eoxMap=Yo(this))}get eoxMap(){return x(this,$t)}set eoxMap(o){const n=x(this,$t);ut(this,$t,o),this.requestUpdate("eoxMap",n)}render(){var i,r,a;const o=(i=this.map)==null?void 0:i.getLayers().getArray(),n=o&&((r=Do(o,"layerControlOptional",!0))==null?void 0:r.length)>0;return p`
      <style>
        ${!this.unstyled&&x(this,We)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${V(this.addExternalLayers&&((a=x(this,$t))==null?void 0:a.addOrUpdateLayer),()=>p`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${x(this,$t)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${V(this.map,()=>p`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            .toolsAutoExpand=${this.toolsAutoExpand}
            .customEditorInterfaces=${this.customEditorInterfaces}
            @changed=${L(this,Ft,Zn)}
            @datetime:updated=${s=>$n(s,this)}
            @layerConfig:change=${L(this,Ft,Xn)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${V(n,()=>p`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}$t=new WeakMap,Ft=new WeakSet,Zn=function(o){pa(o,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:o.detail}))},Xn=function(o){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:o.detail}))},We=new WeakMap,I(jn,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{type:Array},addExternalLayers:{attribute:"add-external-layers",type:Boolean},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean},toolsAutoExpand:{attribute:"tools-auto-expand",type:Boolean},customEditorInterfaces:{type:Array}});customElements.define("eox-layercontrol",jn);export{jn as EOxLayerControl,Mr as updateVectorLayerStyle};
