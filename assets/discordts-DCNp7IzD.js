import{c as f,t as g}from"./tippy.esm-E6RSmzHQ.js";import{g as x,d as w,f as T,n as S}from"./index-DrbMxA7f.js";const L=`<div id="root">
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
`,_=":root{background:color-mix(in oklab,hsl(223,6.7%,20.6%) 100%,#000 0%);color-scheme:dark}#root{display:flex;flex-direction:column;gap:.5rem;margin-inline:5px}input{background:color-mix(in oklab,hsl(225,6.3%,12.5%) 100%,#000 0%);border:0;padding:10px;height:40px;color:color-mix(in oklab,hsl(210,9.1%,87.1%) 100%,black 0%);border-radius:3px;font-family:inherit}svg{fill:#b5bac1;width:32px;height:32px;vertical-align:middle}button{border:0;color:#fff;cursor:pointer;border-radius:3px;font-size:14px;font-weight:500;line-height:16px;padding:2px 16px;height:32px}button{background:#5865f2}button:hover,button:hover+.btn-join,.btn-hover{background:#4752c4}button:active,button:active+.btn-join,.btn-active{background:#3c45a5}output{display:flex;flex-direction:column;gap:5px;margin-block:5px}output>div{display:flex;gap:5px}output>div>span{display:flex}.round-start{border-end-end-radius:0;border-start-end-radius:0}.round-end{border-start-start-radius:0;border-end-start-radius:0}.border-end{border-inline-end:2px solid rgba(0,0,0,.3333333333)}.border-start{border-inline-start:2px solid rgba(0,0,0,.3333333333)}.border-dashed{border-style:dashed}.dialog{position:fixed;inset-inline:0;bottom:10px;width:min-content;text-align:center;margin-inline:auto;border-radius:3px;padding:1rem;transform:translateY(calc(100% + 10px));transition:transform .25s ease-out;color:#dcddde;background:color-mix(in oklab,hsl(225,6.3%,12.5%) 100%,#000 0%)}.dialog.show{transform:none}";var b="timeago-id";function M(t){return t.getAttribute("datetime")}function k(t,o){t.setAttribute(b,o)}function h(t){return parseInt(t.getAttribute(b))}var v={},m=function(t){clearTimeout(t),delete v[t]};function y(t,o,i,e){m(h(t));var a=e.relativeDate,d=e.minInterval,s=w(o,a);t.innerText=T(s,i);var c=setTimeout(function(){y(t,o,i,e)},Math.min(Math.max(S(s),d||1)*1e3,2147483647));v[c]=0,k(t,c)}function D(t){t?m(h(t)):Object.keys(v).forEach(m)}function H(t,o,i){var e=t.length?t:[t];return e.forEach(function(a){y(a,M(a),x(o),{})}),e}const A="Discord Timestamp",C=t=>{t.innerHTML=`<style>${_}</style>${L}`;const o=t.querySelector("input"),i=t.querySelector("output");{const r=new Date;o.valueAsNumber=(r.valueOf()/1e3|0)*1e3}const e=i.querySelectorAll("button");function a(){const n=new Date(o.valueAsNumber);D(e[0]),e[0].setAttribute("datetime",n.toISOString()),H(e[0]),e[1].textContent=n.toLocaleDateString(void 0,{day:"numeric",month:"numeric",year:"numeric"}),e[2].textContent=n.toLocaleDateString(void 0,{dateStyle:"long"}),e[3].textContent=n.toLocaleString(void 0,{weekday:"long"}),e[4].textContent=n.toLocaleString(void 0,{month:"long",day:"numeric",year:"numeric",hour:"numeric",minute:"numeric"}),e[5].textContent=n.toLocaleTimeString(void 0,{timeStyle:"short",hour12:!1}),e[6].textContent=`:${n.getSeconds().toString().padStart(2,"0")}`}const d=t.querySelector("#copy_dialog");let s=0;async function c(r){let n=!0;try{await navigator.clipboard.writeText(r)}catch(p){console.error("copy failed",p),n=!1}d.innerHTML=n?"Copied!":`
		<p>Timestamp:</p>
		<input value="${r}" readonly>
		`,d.classList.add("show"),n&&(clearTimeout(s),s=setTimeout(()=>{d.classList.remove("show")},1e3)),d.querySelector("input").select()}i.addEventListener("click",r=>{if(!(r.target instanceof HTMLButtonElement))return;const n=new Date(o.valueAsNumber).valueOf()/1e3|0,p=r.target.getAttribute("data-type");c(`<t:${n}:${p}>`)}),a(),o.oninput=a;const l=e[5],u=e[6];return u.onmouseenter=()=>{l.classList.add("btn-hover")},u.onmousedown=()=>{l.classList.add("btn-active"),window.addEventListener("mouseup",()=>{l.classList.remove("btn-active")},{once:!0})},u.onmouseleave=()=>{l.classList.remove("btn-hover")},{tippy:f(g("[data-tippy-content]"))}};function I(t){t.tippy.destroy()}export{I as destroy,C as mount,A as title};
