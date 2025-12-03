const editor = document.getElementById("editor");
const display = document.getElementById("display");

function compile() {    
    display.innerHTML = editor.value;
    MathJax.typeset();
    
    localStorage.setItem("editorValue", editor.value);
}

if (localStorage.getItem("editorValue") === null){
    localStorage.setItem("editorValue", "");
}

// initialise editor value
editor.value = localStorage.getItem("editorValue");

// display output of editor in display box
compile();