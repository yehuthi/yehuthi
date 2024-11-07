import{c as S,t as _}from"./tippy.esm-E6RSmzHQ.js";const T=`<div id="root">
<h2>Discord Timestamp</h2>
<input title="Date" type="datetime-local" id="date_input">
<output id="output">
	<div>
		<svg viewBox="0 0 24 24" data-tippy-content="Relative"><path
			d="M15,1H9v2h6V1z M11,14h2V8h-2V14z M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42 C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9s4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7 s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z"
		/></svg>
		<button data-type="R" style="text-transform: capitalize">Relative</button>
	</div>
	<div>
		<svg viewBox="0 0 24 24" data-tippy-content="Date"><path
			d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"
		/></svg>
		<button data-type="d">dd/mm/yyyy</button>
		<button data-type="D">dd M yyyy</button>
	</div>
	<div>
		<svg viewBox="0 0 24 24" data-tippy-content="Date & Time"><path
			d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zm0-12H5V5h14v2zM7 11h5v5H7z"
		/></svg>
		<span>
			<button data-type="F" class="round-start border-end border-dashed">D, dd M yyyy hh:mm</button>
			<button data-type="f" class="round-end btn-join border-start">dd M yyyy hh:mm</button>
		</span>
	</div>
	<div>
		<svg viewBox="0 0 24 24" data-tippy-content="Time"><path
			d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
		/></svg>
		<span>
			<button data-type="t" class="round-start border-end">hh:mm</button>
			<button data-type="T" class="round-end border-start border-dashed">:ss</button>
		</span>
	</div>
</output>
<div class="dialog" id="copy_dialog"></div>
</div>
`,M=":root{background:color-mix(in oklab,hsl(223,6.7%,20.6%) 100%,#000 0%);color-scheme:dark}#root{display:flex;flex-direction:column;gap:.5rem;margin-inline:5px}input{background:color-mix(in oklab,hsl(225,6.3%,12.5%) 100%,#000 0%);border:0;padding:10px;height:40px;color:color-mix(in oklab,hsl(210,9.1%,87.1%) 100%,black 0%);border-radius:3px;font-family:inherit}svg{fill:#b5bac1;width:32px;height:32px;vertical-align:middle}button{border:0;color:#fff;cursor:pointer;border-radius:3px;font-size:14px;font-weight:500;line-height:16px;padding:2px 16px;height:32px}button{background:#5865f2}button:hover,button:hover+.btn-join,.btn-hover{background:#4752c4}button:active,button:active+.btn-join,.btn-active{background:#3c45a5}output{display:flex;flex-direction:column;gap:5px;margin-block:5px}output>div{display:flex;gap:5px}output>div>span{display:flex}.round-start{border-end-end-radius:0;border-start-end-radius:0}.round-end{border-start-start-radius:0;border-end-start-radius:0}.border-end{border-inline-end:2px solid rgba(0,0,0,.3333333333)}.border-start{border-inline-start:2px solid rgba(0,0,0,.3333333333)}.border-dashed{border-style:dashed}.dialog{position:fixed;inset-inline:0;bottom:10px;width:min-content;text-align:center;margin-inline:auto;border-radius:3px;padding:1rem;transform:translateY(calc(100% + 10px));transition:transform .25s ease-out;color:#dcddde;background:color-mix(in oklab,hsl(225,6.3%,12.5%) 100%,#000 0%)}.dialog.show{transform:none}";var D=["second","minute","hour","day","week","month","year"];function L(t,e){if(e===0)return["just now","right now"];var o=D[Math.floor(e/2)];return t>1&&(o+="s"),[t+" "+o+" ago","in "+t+" "+o]}var k=["秒","分钟","小时","天","周","个月","年"];function z(t,e){if(e===0)return["刚刚","片刻后"];var o=k[~~(e/2)];return[t+" "+o+"前",t+" "+o+"后"]}var m={},g=function(t,e){m[t]=e},H=function(t){return m[t]||m.en_US},c=[60,60,24,7,365/7/12,12];function y(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function C(t,e){var o=t<0?1:0;t=Math.abs(t);for(var n=t,r=0;t>=c[r]&&r<c.length;r++)t/=c[r];return t=Math.floor(t),r*=2,t>(r===0?9:1)&&(r+=1),e(t,r,n)[o].replace("%s",t.toString())}function A(t,e){var o=e?y(e):new Date;return(+o-+y(t))/1e3}function V(t){for(var e=1,o=0,n=Math.abs(t);t>=c[o]&&o<c.length;o++)t/=c[o],e*=c[o];return n=n%e,n=n?e-n:e,Math.ceil(n)}var f="timeago-id";function I(t){return t.getAttribute("datetime")}function E(t,e){t.setAttribute(f,e)}function x(t){return parseInt(t.getAttribute(f))}var h={},b=function(t){clearTimeout(t),delete h[t]};function w(t,e,o,n){b(x(t));var r=n.relativeDate,s=n.minInterval,d=A(e,r);t.innerText=C(d,o);var l=setTimeout(function(){w(t,e,o,n)},Math.min(Math.max(V(d),s||1)*1e3,2147483647));h[l]=0,E(t,l)}function $(t){t?b(x(t)):Object.keys(h).forEach(b)}function N(t,e,o){var n=t.length?t:[t];return n.forEach(function(r){w(r,I(r),H(e),{})}),n}g("en_US",L);g("zh_CN",z);const R="Discord Timestamp",j=t=>{t.innerHTML=`<style>${M}</style>${T}`;const e=t.querySelector("input"),o=t.querySelector("output");{const i=new Date;e.valueAsNumber=(i.valueOf()/1e3|0)*1e3}const n=o.querySelectorAll("button");function r(){const a=new Date(e.valueAsNumber);$(n[0]),n[0].setAttribute("datetime",a.toISOString()),N(n[0]),n[1].textContent=a.toLocaleDateString(void 0,{day:"numeric",month:"numeric",year:"numeric"}),n[2].textContent=a.toLocaleDateString(void 0,{dateStyle:"long"}),n[3].textContent=a.toLocaleString(void 0,{weekday:"long"}),n[4].textContent=a.toLocaleString(void 0,{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}),n[5].textContent=a.toLocaleTimeString(void 0,{timeStyle:"short",hour12:!1}),n[6].textContent=`:${a.getSeconds().toString().padStart(2,"0")}`}const s=t.querySelector("#copy_dialog");let d=0;async function l(i){let a=!0;try{await navigator.clipboard.writeText(i)}catch(v){console.error("copy failed",v),a=!1}s.innerHTML=a?"Copied!":`
		<p>Timestamp:</p>
		<input value="${i}" readonly>
		`,s.classList.add("show"),a&&(clearTimeout(d),d=setTimeout(()=>{s.classList.remove("show")},1e3)),s.querySelector("input").select()}o.addEventListener("click",i=>{if(!(i.target instanceof HTMLButtonElement))return;const a=new Date(e.valueAsNumber).valueOf()/1e3|0,v=i.target.getAttribute("data-type");l(`<t:${a}:${v}>`)}),r(),e.oninput=r;const u=n[5],p=n[6];return p.onmouseenter=()=>{u.classList.add("btn-hover")},p.onmousedown=()=>{u.classList.add("btn-active"),window.addEventListener("mouseup",()=>{u.classList.remove("btn-active")},{once:!0})},p.onmouseleave=()=>{u.classList.remove("btn-hover")},{tippy:S(_("[data-tippy-content]"))}};function q(t){t.tippy.destroy()}export{q as destroy,j as mount,R as title};
