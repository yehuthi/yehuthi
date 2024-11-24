const d="x86 Registers",o=Object.freeze([{name:"Accumulator",qword:"rax",dword:"eax",word:"ax",byte:"al",byte_high:"ah"},{name:"Base",qword:"rbx",dword:"ebx",word:"bx",byte:"bl",byte_high:"bh"},{name:"Counter",qword:"rcx",dword:"ecx",word:"cx",byte:"cl",byte_high:"ch"},{name:"Data",qword:"rdx",dword:"edx",word:"dx",byte:"dl",byte_high:"dh"},{name:"Source Index",qword:"rsi",dword:"esi",word:"si",byte:"sil"},{name:"Destination Index",qword:"rdi",dword:"edi",word:"di",byte:"dil"},{name:"Base Pointer",qword:"rbp",dword:"ebp",word:"bp",byte:"bpl"},{name:"Stack Pointer",qword:"rsp",dword:"esp",word:"sp",byte:"spl"},{qword:"r8",dword:"r8d",word:"r8w",byte:"r8b"},{qword:"r9",dword:"r9d",word:"r9w",byte:"r9b"},{qword:"r10",dword:"r10d",word:"r10w",byte:"r10b"},{qword:"r11",dword:"r11d",word:"r11w",byte:"r11b"},{qword:"r12",dword:"r12d",word:"r12w",byte:"r12b"},{qword:"r13",dword:"r13d",word:"r13w",byte:"r13b"},{qword:"r14",dword:"r14d",word:"r14w",byte:"r14b"},{qword:"r15",dword:"r15d",word:"r15w",byte:"r15b"}]),e=r=>{r.innerHTML=`
<h2>${d}<sup>WIP</sup></h2>
<code style="white-space:pre;">
${JSON.stringify(o,null,2)}
</code>
`};export{e as mount,d as title};
