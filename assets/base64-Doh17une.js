const v="Base64";function g(e,n,i){return e>i?i:e<n?n:e}const c=(()=>{const e="deviceMemory"in navigator&&typeof navigator.deviceMemory=="number"?navigator.deviceMemory:2;return g(e,1,8)*256})(),h=e=>{e.innerHTML=`
<div id="root">
	<h2>${v}</h2>
	<input id="input_file" type="file">
	<span>
		<input type="checkbox" id="len_cap" checked>
		<label>Cap Length (<button id="len_button">${c}</button>)</label>
	</span>
	<button id="copy">Copy</button>
	<code id="output"></code>
	<dialog id="len_dialog">
		<form id="len_form">
			<label for="len_slider">Max Length</label>
			<input type="number" id="len_slider">
			<button type="submit">Save</button>
		</form>
	</dialog>
</div>
<style>
#root {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}
#len_button {
	border: 0;
	background: none;
	cursor: pointer;
	color: #ffffff;
	text-decoration: underline;
	padding-inline: 0;
}
#input_file {
	border: 3px dashed #00000055;
	border-radius: 10px;
	padding: 25px;
}
#output.capped::after {
	content: '...';
	color: #ffffff55;
}
#output {
	overflow-wrap: anywhere;
}
</style>
`;const n=e.querySelector("#input_file"),i=e.querySelector("#output"),b=e.querySelector("#copy");let o="",r=c;const a=e.querySelector("#len_cap");function y(){return a.checked?r:null}a.oninput=s;function s(){const l=y();i.textContent=l?o.substring(0,l):o,r&&o.length>r?i.classList.add("capped"):i.classList.remove("capped")}const p=e.querySelector("#len_button"),f=e.querySelector("#len_dialog"),t=e.querySelector("#len_slider"),m=e.querySelector("#len_form");p.onclick=()=>{t.valueAsNumber=r,t.placeholder=c.toString(),t.select(),f.showModal()},m.onsubmit=l=>{if(l.preventDefault(),t.valueAsNumber<=0){t.setCustomValidity("Must be a positive number"),t.addEventListener("input",()=>{t.setCustomValidity("")},{once:!0});return}isNaN(t.valueAsNumber)&&(t.valueAsNumber=c);const u=t.valueAsNumber;p.textContent=u.toString(),r=u,a.checked=!0,s(),f.close()};const d=new FileReader;n.oninput=async()=>{if(!n.files||n.files.length<1)return;const l=n.files[0],u=new Promise(_=>{d.onload=()=>_(d.result)});d.readAsDataURL(new Blob([await l.arrayBuffer()])),o=await u,o=o.substring(37),s()},b.onclick=()=>{navigator.clipboard.writeText(o)}};export{h as mount,v as title};
