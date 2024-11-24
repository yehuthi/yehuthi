const s="Paleo Fonts",a="𐤀𐤁𐤂𐤃𐤄𐤅𐤆𐤇𐤈𐤉𐤊𐤋𐤌𐤍𐤎𐤏𐤐𐤑𐤒𐤓𐤔𐤕",o=Object.freeze([{name:"Segoe UI Historic",vendor:"Microsoft",url:"https://learn.microsoft.com/en-us/typography/font-list/segoe-ui-historic",image:"https://raw.githubusercontent.com/yehuthi/paleo_fonts/refs/heads/master/segoe_ui_historic/sample.svg",font:"font/Segoe UI Historic.ttf",notes:`
<p>
Microsoft's go at a Phoenician font, often making it the fallback font on Windows.
</p>
<p>
Blends Hebrew scripts from the end of the 10th century BCE (see Gezer Calendar) and middle of 9th century BCE (see Mesha Stele).
</p>
`},{name:"Noto Sans Phoenician",vendor:"Google",url:"https://fonts.google.com/noto/specimen/Noto+Sans+Phoenician",image:"https://raw.githubusercontent.com/yehuthi/paleo_fonts/refs/heads/master/noto_sans_phoenician/sample.svg",font:"font/NotoSansPhoenician-Regular.ttf",notes:`
<p>Google's take, often making it the fallback font on Android.</p>
`},{name:"GNU FreeFont Sans",url:"https://www.gnu.org/software/freefont/",license:"GNU General Public License v3 or later",image:"https://raw.githubusercontent.com/yehuthi/paleo_fonts/refs/heads/master/free_sans/sample.svg"},{name:"MPH 2B Damase",image:"https://raw.githubusercontent.com/yehuthi/paleo_fonts/refs/heads/master/mph_2b_damase/sample.svg",license:"Public Domain",font:"font/damase_v.2.ttf"},{name:"Universalia",image:"https://raw.githubusercontent.com/yehuthi/paleo_fonts/refs/heads/master/universalia/sample.svg"}]),i=t=>{t.innerHTML=`
<h2>Paleo-Hebrew / Phoenician Fonts</h2>
<style>
textarea {
	width: 100%;
	font-size: 2rem;
	resize: vertical;
}
${o.map(e=>e.font?`@font-face { font-family: "${e.name}"; src: url('${e.font}'); }`:"").join(`
`)}
</style>
<p>
In this page you can preview fonts that support the <a href="https://symbl.cc/en/unicode/blocks/phoenician/">Phoenician Unicode block</a> with a quick review.
</p>
<p>
I do not own any of the fonts and this page does not grant a license for any usage of any font.
Instead, the fonts are presented under nonprofit and educational fair-use.
To use a font refer to its license.
</p>
`;for(const e of o){const n=document.createElement("div");n.innerHTML=`
<h3 id="${encodeURIComponent(e.name)}"><a${e.url?` href="${e.url}"`:""}>${e.name}</a></h3>
${e.font?`<textarea style="font-family: '${e.name}';">${a}</textarea>`:`<img style="background:#fff;padding:1rem;" src="${e.image}" alt="${e.name} Sample">`}
${e.notes??""}
`,t.appendChild(n)}};export{i as mount,s as title};
