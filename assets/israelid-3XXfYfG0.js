import{t as g}from"./tippy.esm-E6RSmzHQ.js";const d=n=>{let t=0;for(let i=0;i<n.length;i++){const e=(n.charCodeAt(i)-48)*(i%2+1);t+=e>9?e-9:e}return t},w=n=>n%10===0;function v(n,t){const i=n%10;if(i==0)return 0;const e=t%2,p=10-i,c=p%2==0;let l=p;return!c&&e&&(l+=9),e&&(l/=2),l}const x="#root,form{display:flex;flex-direction:column;gap:1rem}input{font-size:2rem;text-align:center;letter-spacing:.5ch;padding-block:1rem}#checksum{color:#fff8;font-family:monospace;text-align:end;margin-top:3px;align-self:end}output button{border:0;background:0;padding:0;font-family:inherit;font-size:inherit;cursor:pointer;border-bottom:dashed 1px white}h3>svg{vertical-align:middle;width:32px;height:32px;margin-inline-end:2px}.nw{white-space:nowrap}",b="Israeli ID",k=n=>{n.innerHTML=`
<style>${x}</style>
<div id="root">
	<h2>${b}</h2>
	<div style="display:flex;flex-direction:column;">
		<input>
		<span id="checksum" data-tippy-content="Checksum"></span>
	</div>
	<output>
	</output>
</div>
`;const t=n.querySelector("input"),i=n.querySelector("#checksum"),e=n.querySelector("output");function p(){e.innerHTML=`
<h3><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00FF00"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>Valid ID</h3>
<p>Looks like a valid ID!</p>
`}function c(o,s){e.innerHTML=`
<h3><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF0000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>Invalid ID</h3>
<p>Invalid ID! to fix it
<button>change the last digit to <span class="nw">${o}</button>,</span>
or, <span class="nw"><button>append ${s}</button>.</span>
`;const[u,a]=e.querySelectorAll("button");a.onclick=()=>{t.value+=s,t.dispatchEvent(new InputEvent("input"))},u.onclick=()=>{t.value=`${t.value.substring(0,t.value.length-1)}${o}`,t.dispatchEvent(new InputEvent("input"))}}function l(o){e.innerHTML=`
<h3><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFF00"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"/></svg>Unusual Length</h3>
<p>
	The ID is valid but it has a length of ${o}.
	Israeli IDs have a length of nine (9).
	${o>=9?"":'You can fix it by <span class="nw"><button>padding zeroes</button>.</span>'}
</p>
`,e.querySelector("button").onclick=()=>{t.value=t.value.padEnd(9,"0"),t.dispatchEvent(new InputEvent("input"))}}function r(){const o=t.value,s=o.length;if(s===0){i.textContent="0",e.textContent="";return}const u=d(o);if(i.textContent=u.toString(),w(u))s===9?p():l(s);else{const a=v(u,s);let h;{const m=o.substring(0,s-1),f=d(m);h=Number(v(f,s-1))}c(h,a)}}return t.oninput=r,r(),{tippy:g("[data-tippy-content]")}};function I(n){n.tippy.forEach(t=>t.destroy())}export{I as destroy,k as mount,b as title};
