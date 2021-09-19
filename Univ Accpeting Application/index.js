//querySelector Function Shortcut
function qs(s) {
    return document.querySelector(s);
}

//A:removing red color on change/keydown
qs("#studentID").onkeydown = (e)=>{
    if (e.target.style.backgroundColor.length > 0) {
        e.target.style.backgroundColor = "";
    }
}
qs("#reqID").onkeydown = (e)=>{
    if (e.target.style.backgroundColor.length > 0) {
        e.target.style.backgroundColor = "";
    }
}

//A1: red color remove from input 
qs('#reqState').onchange = (e)=>{
    //B1:remove red color
    if (e.target.style.backgroundColor.length > 0) {
        e.target.style.backgroundColor = "";
    }
    //B2:making reqState font color grey when no opt is selected
    if (e.target.value == 'الولاية') {
        e.target.style.color = '#00000090';
    } else {
        e.target.style.color = '';
    }
}

//A2: Same as @A1
qs('#reqType').onchange = (e)=>{
    //@B1
    if (e.target.style.backgroundColor.length > 0) {
        e.target.style.backgroundColor = "";
    }
    //@B2
    if (e.target.value == 'نوع التقديم') {
        e.target.style.color = '#00000090';
    } else {
        e.target.style.color = '';
    }
}
//-----------------
//capcha generating btn
qs('#capcha_gen').onclick = ()=>{
    qs('#capcha>div').innerText = Math.random().toString(30).slice(2, 8).toUpperCase();
}

//addtional event 
qs('#capchaConfirm').oninput = (e)=>{
    //always caps on capcha confirm input
    e.target.value = e.target.value.toUpperCase();
}
qs('#capchaConfirm').onchange = (e)=>{
    //always caps on capcha confirm input
    e.target.value = e.target.value.toUpperCase();
}
qs('#capchaConfirm').onkeydown = (e)=>{
    //remove spaces in input
    if (e.target.value.includes(" ")) {
        e.target.value = e.target.value.replace(/ /, '');
    }
    //always caps on capcha confirm input
    e.target.value = e.target.value.toUpperCase();
    //removes red color
    if (qs('#capchaConfirm').style.backgroundColor.length > 0) {
        qs("#capchaConfirm").style.backgroundColor = "";
    }
}

//reqGo click
qs('#reqGo').onclick = ()=>{
    if (qs("#capchaConfirm").value !== qs('#capcha>div').innerText) {
        qs("#capchaConfirm").style.backgroundColor = "#ff000059";
    }
    if (qs("#studentID").value == "") {
        qs("#studentID").style.backgroundColor = "#ff000059";
    }
    if (qs("#reqID").value == "") {
        qs("#reqID").style.backgroundColor = "#ff000059";
    }
    if (qs("#reqType").value == "نوع التقديم") {
        qs("#reqType").style.backgroundColor = "#ff000059";
    }
    if (qs("#reqState").value == "الولاية") {
        qs("#reqState").style.backgroundColor = "#ff000059";
    }
}

//onload constants
onload = ()=>{
    qs('#capcha_gen').click();
}
