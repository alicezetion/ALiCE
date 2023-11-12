 const path = require("path");
 let leiamX;

if (global.alice.font === 1) leiamX = require(path.join(__dirname, "leiamnashA/font-01.json"));
if (global.alice.font === 2) leiamX = require(path.join(__dirname, "leiamnashA/font-02.json"));
if (global.alice.font === 3) leiamX = require(path.join(__dirname, "leiamnashA/font-03.json"));
if (global.alice.font === 4) leiamX = require(path.join(__dirname, "leiamnashA/font-04.json"));
if (global.alice.font === 5) leiamX = require(path.join(__dirname, "leiamnashA/font-05.json"));
if (global.alice.font === 6) leiamX = require(path.join(__dirname, "leiamnashA/font-06.json"));
if (global.alice.font === 7) leiamX = require(path.join(__dirname, "leiamnashA/font-07.json"));
if (global.alice.font === 8) leiamX = require(path.join(__dirname, "leiamnashA/font-08.json"));
if (global.alice.font === 9) leiamX = require(path.join(__dirname, "leiamnashA/font-09.json"));
if (global.alice.font === 10) leiamX = require(path.join(__dirname, "leiamnashA/font-10.json"));
if (global.alice.font === 11) leiamX = require(path.join(__dirname, "leiamnashA/font-11.json"));
if (global.alice.font === 12) leiamX = require(path.join(__dirname, "leiamnashA/font-12.json"));
if (global.alice.font === 13) leiamX = require(path.join(__dirname, "leiamnashA/font-13.json"));
if (global.alice.font === 14) leiamX = require(path.join(__dirname, "leiamnashA/font-14.json"));
if (global.alice.font === 15) leiamX = require(path.join(__dirname, "leiamnashA/font-15.json"));
if (global.alice.font === 16) leiamX = require(path.join(__dirname, "leiamnashA/font-16.json"));
if (global.alice.font === 17) leiamX = require(path.join(__dirname, "leiamnashA/font-17.json"));
if (global.alice.font === 18) leiamX = require(path.join(__dirname, "leiamnashA/font-18.json"));
if (global.alice.font === 19) leiamX = require(path.join(__dirname, "leiamnashA/font-19.json"));
if (global.alice.font === 20) leiamX = require(path.join(__dirname, "leiamnashA/font-20.json"));
if (global.alice.font === 21) leiamX = require(path.join(__dirname, "leiamnashB/font--01.json"));
if (global.alice.font === 22) leiamX = require(path.join(__dirname, "leiamnashB/font--02.json"));
if (global.alice.font === 23) leiamX = require(path.join(__dirname, "leiamnashB/font--03.json"));
if (global.alice.font === 24) leiamX = require(path.join(__dirname, "leiamnashB/font--04.json"));
if (global.alice.font === 25) leiamX = require(path.join(__dirname, "leiamnashB/font--05.json"));
if (global.alice.font === 26) leiamX = require(path.join(__dirname, "leiamnashB/font--06.json"));
if (global.alice.font === 27) leiamX = require(path.join(__dirname, "leiamnashB/font--07.json"));
if (global.alice.font === 28) leiamX = require(path.join(__dirname, "leiamnashB/font--08.json"));
if (global.alice.font === 29) leiamX = require(path.join(__dirname, "leiamnashB/font--09.json"));
if (global.alice.font === 30) leiamX = require(path.join(__dirname, "leiamnashB/font--10.json"));
if (global.alice.font === 31) leiamX = require(path.join(__dirname, "leiamnashB/font--11.json"));
if (global.alice.font === 32) leiamX = require(path.join(__dirname, "leiamnashB/font--12.json"));
if (global.alice.font === 33) leiamX = require(path.join(__dirname, "leiamnashB/font--13.json"));
if (global.alice.font === 34) leiamX = require(path.join(__dirname, "leiamnashB/font--14.json"));
if (global.alice.font === 35) leiamX = require(path.join(__dirname, "leiamnashB/font--15.json"));
if (global.alice.font === 36) leiamX = require(path.join(__dirname, "leiamnashB/font--16.json"));
if (global.alice.font === 37) leiamX = require(path.join(__dirname, "leiamnashB/font--17.json"));
if (global.alice.font === 38) leiamX = require(path.join(__dirname, "leiamnashB/font--18.json"));
if (global.alice.font === 39) leiamX = require(path.join(__dirname, "leiamnashB/font--19.json"));
if (global.alice.font === 40) leiamX = require(path.join(__dirname, "leiamnashB/font--20.json"));

exports.leiamnash = async function(leiamnash) {
try {
  const leiam = new RegExp(Object.keys(leiamX).join("|"), "g");
    return leiamnash.replace(leiam, match => leiamX[match]);
 } catch (error) { console.log(error); }
}