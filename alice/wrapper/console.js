 const gradient = require("gradient-string");
 let leiamX;
if (global.alice.theme === 1) leiamX = gradient("#00539C", "#EEA47F");
if (global.alice.theme === 2) leiamX = gradient("#101820", "#FEE715");
if (global.alice.theme === 3) leiamX = gradient("#2F3C7E", "#FBEAEB");
if (global.alice.theme === 4) leiamX = gradient("#F96167", "#F96167");
if (global.alice.theme === 5) leiamX = gradient("#CCF381", "#4831D4");
if (global.alice.theme === 6) leiamX = gradient("#E2D1F9", "#317773");
if (global.alice.theme === 7) leiamX = gradient("#990011", "#FCF6F5");
if (global.alice.theme === 8) leiamX = gradient("#8AAAE5", "#FFFFFF");
if (global.alice.theme === 9) leiamX = gradient("#FF69B4", "#00FFFF");
if (global.alice.theme === 10) leiamX = gradient("#FCEDDA", "#EE4E34");
if (global.alice.theme === 11) leiamX = gradient("#ADD8E6", "#00008B");
if (global.alice.theme === 12) leiamX = gradient("#89ABE3", "#EA738D");
if (global.alice.theme === 13) leiamX = gradient("#E3B448", "#CBD18F", "#3A6B35");
if (global.alice.theme === 14) leiamX = gradient("#EC449B", "#99F443");
if (global.alice.theme === 15) leiamX = gradient("#FFA351", "#FFBE7B", "#EED971");
if (global.alice.theme === 16) leiamX = gradient("#8A307F", "#79A7D3", "#6883BC");
if (global.alice.theme === 17) leiamX = gradient("#CC313D", "#F7C5CC");
if (global.alice.theme === 18) leiamX = gradient("#FC766A", "#783937", "#F1AC88");
if (global.alice.theme === 19) leiamX = gradient("#AA96DA", "#C5FAD5", "#FFFFD2");
if (global.alice.theme === 20) leiamX = gradient("#2C5F2D", "#97BC62");
if (global.alice.theme === 21) leiamX = gradient("#2BAE66", "#FCF6F5");
if (global.alice.theme === 22) leiamX = gradient("#FFE77A", "#2C5F2D");
if (global.alice.theme === 23) leiamX = gradient("#DDC3A5", "#201E20", "#E0A96D");
if (global.alice.theme === 24) leiamX = gradient("#234E70", "#FBF8BE");
if (global.alice.theme === 25) leiamX = gradient("#408EC6", "#7A2048", "#1E2761");

exports.err = function(leiam, nash) {
console.log("\x1B[31m", `[ ${nash} ] » ${leiam}`);
}

exports.leiam = function(leiam) {
console.log(leiamX(leiam));
}

exports.error = function(leiam) {
console.log("\x1B[31m", leiam)
}

exports.alice = function(leiam, nash) {
console.log(leiamX(`[ ${nash} ] » ${leiam}`));
}