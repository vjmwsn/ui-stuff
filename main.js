
let projectKey = "C";
let projectScale = "maj";

let keyDropdownButton = document.querySelector("#keyDropdownButton");

let cButton = document.querySelector("#keyC");
let cSharpButton = document.querySelector("#keyCsharp");
let dButton = document.querySelector("#keyD");
let dSharpButton = document.querySelector("#keyDsharp");
let eButton = document.querySelector("#keyE");
let fButton = document.querySelector("#keyF");
let fSharpButton = document.querySelector("#keyFsharp");
let gButton = document.querySelector("#keyG");
let gSharpButton = document.querySelector("#keyGsharp");
let aButton = document.querySelector("#keyA");
let aSharpButton = document.querySelector("#keyAsharp");
let bButton = document.querySelector("#keyB");

let majorButton = document.querySelector("#keyMajor");
let minorButton = document.querySelector("#keyMinor");

function setKeyC() { projectKey = "C"; setKeyLabel("C", projectScale);}
function setKeyCsharp() { projectKey = "C#"; setKeyLabel("C#", projectScale);}
function setKeyD() { projectKey = "D"; setKeyLabel("D", projectScale);}
function setKeyDsharp() { projectKey = "D#"; setKeyLabel("D#", projectScale);}
function setKeyE() { projectKey = "E"; setKeyLabel("E", projectScale);}
function setKeyF() { projectKey = "F"; setKeyLabel("F", projectScale);}
function setKeyFsharp() { projectKey = "F#"; setKeyLabel("F#", projectScale);}
function setKeyG() { projectKey = "G"; setKeyLabel("G", projectScale);}
function setKeyGsharp() { projectKey = "G#"; setKeyLabel("G#", projectScale);}
function setKeyA() { projectKey = "A"; setKeyLabel("A", projectScale);}
function setKeyAsharp() { projectKey = "A#"; setKeyLabel("A#", projectScale);}
function setKeyB() { projectKey = "B"; setKeyLabel("B", projectScale);}

function setScaleMajor() {projectScale = "maj"; setKeyLabel(projectKey, "maj");};
function setScaleMinor() {projectScale = "min"; setKeyLabel(projectKey, "min");};

function setKeyLabel(key, scale) {
    keyDropdownButton.innerHTML = `Key: ${key}${scale}`
}

if (cButton) cButton.addEventListener("click", setKeyC);
if (cSharpButton) cSharpButton.addEventListener("click", setKeyCsharp);
if (dButton) dButton.addEventListener("click", setKeyD);
if (dSharpButton) dSharpButton.addEventListener("click", setKeyDsharp);
if (eButton) eButton.addEventListener("click", setKeyE);
if (fButton) fButton.addEventListener("click", setKeyF);
if (fSharpButton) fSharpButton.addEventListener("click", setKeyFsharp);
if (gButton) gButton.addEventListener("click", setKeyG);
if (gSharpButton) gSharpButton.addEventListener("click", setKeyGsharp);
if (aButton) aButton.addEventListener("click", setKeyA);
if (aSharpButton) aSharpButton.addEventListener("click", setKeyAsharp);
if (bButton) bButton.addEventListener("click", setKeyB);

if (majorButton) majorButton.addEventListener("click", setScaleMajor);
if (minorButton) minorButton.addEventListener("click", setScaleMinor);

console.log(projectKey);

