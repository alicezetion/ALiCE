const path = require("path");
global.alice = require(path.join(__dirname, "alice.json"));
global.api = require(path.join(__dirname, "alice/assets/api.json"));
global.package = require(path.join(__dirname, "package.json"));
global.database = require(path.join(__dirname, "alice/system/database.js"));
global.command = new Map();
global.reply = new Array();
global.react = new Array(); 
const cron = require("node-cron");
const fs = require("fs");
const axios = require("axios");
const alice = require("alicezetion");
const { leiamnash } = require(path.join(__dirname, "alice/system/event.js"));
const { execSync } = require("child_process");
if (isNaN(global.alice.font) || global.alice.font > 40) {
  log.error(`█▀▀ █▀█ █▄░█ ▀█▀\n █▀░ █▄█ █░▀█ ░█░\n\nplease provide a valid number and also there's only 40 available options`);
  return process.exit();
}
if (isNaN(global.alice.theme) || global.alice.theme > 25) {
  log.error(`▀█▀ █░█ █▀▀ █▀▄▀█ █▀▀\n ░█░ █▀█ ██▄ █░▀░█ ██▄\n\nplease provide a valid number and also there's only 25 available options`);
  return process.exit();
}
global.font = require(path.join(__dirname, `alice/font/font.js`)).leiamnash;
 const leiamA = fs.readdirSync(path.join(__dirname, "/alice/language/")).filter(leiam => leiam.endsWith(".json"));
 const leiamB = fs.readdirSync(path.join(__dirname, "/commands/")).filter(leiam => leiam.endsWith(".js"));
 const log = require(path.join(__dirname, "alice/wrapper/console.js"));
if (!leiamA.includes(global.alice.language + ".json")) {
  log.error(`█░░ ▄▀█ █▄░█ █▀▀ █░█ ▄▀█ █▀▀ █▀▀\n █▄▄ █▀█ █░▀█ █▄█ █▄█ █▀█ █▄█ ██▄\n\nthere's no available ⟨ ${global.alice.language} ⟩`);
  return process.exit();
}
global.language = require(path.join(__dirname, `alice/language/${global.alice.language}.json`));
require(path.join(__dirname, "alice/system/security.js"));
require(path.join(__dirname, "alice/system/http.js"));
require("alicix")();
require(path.join(__dirname, "alice/system/alicestate.js"));
   const leiamC = [];
for (var leiam of leiamB) {
 const leiamE = require(path.join(__dirname, `commands/${leiam}`));
if (!leiamE.alice.command || !leiamE.alice.author || !leiamE.alice.cooldown || !leiamE.alice.restrict) {
   log.error("█▀▀ █▀█ █▀▄▀█ █▀▄▀█ ▄▀█ █▄░█ █▀▄\n █▄▄ █▄█ █░▀░█ █░▀░█ █▀█ █░▀█ █▄▀\n\n" + global.language.file.invalid.replace("{0}", leiam));
  return process.exit();
 }
  global.command.set(leiamE.alice.command, leiamE);
  leiamC.push(leiamE.alice.command);
  log.alice(leiamE.alice.command, "COMMAND");
}
const leiamF = leiamC => leiamC.filter((item, index) => leiamC.indexOf(item) !== index);
if (leiamF(leiamC)[0] != undefined) {
log.error("█▀▀ █▀█ █▀▄▀█ █▀▄▀█ ▄▀█ █▄░█ █▀▄\n █▄▄ █▄█ █░▀░█ █░▀░█ █▀█ █░▀█ █▄▀\n\n" + global.language.file.exist.replace("{0}", leiamF(leiamD)[0]));
  return process.exit();
}
log.alice(global.language.installed.command.replace("{0}", leiamB.length), "ALICE");
var _0x241cb0=_0xb2cc;function _0xb2cc(_0x45817d,_0x149dda){var _0x10487c=_0x1048();return _0xb2cc=function(_0xb2cc7,_0x1b054e){_0xb2cc7=_0xb2cc7-0xdc;var _0x326a2e=_0x10487c[_0xb2cc7];return _0x326a2e;},_0xb2cc(_0x45817d,_0x149dda);}function _0x1048(){var _0x2c109b=['12699159eufoOP','7733355MTkDZB','exit','error','740QGnqIV','█░░\u2003█▀▀\u2003█\u2003▄▀█\u2003█▀▄▀█\u2003█▄░█\u2003▄▀█\u2003█▀\u2003█░█\x0a\x20█▄▄\u2003██▄\u2003█\u2003█▀█\u2003█░▀░█\u2003█░▀█\u2003█▀█\u2003▄█\u2003█▀█\x0a\x0achange\x20name\x20detected\x0ayour\x20file\x20is\x20now\x20banned\x0ayou\x20cannot\x20bypass\x20this\x20project','alice/system/security.js','alice','4652718OpLyjS','alice/database/leiamnash/leiamnashD.js','5idyDhb','1557916VZWBrc','join','alice/database/leiamnash/leiamnashC.js','21082uNZlVs','existsSync','48zESlTe','135918NWqDtz','1361515XDBPjH','alice/database/leiamnash/leiamnashB.js','commands','alice/assets/image/leiamnash0.png','8njfpNp'];_0x1048=function(){return _0x2c109b;};return _0x1048();}(function(_0x16fcb1,_0x4ffad2){var _0x35b7ca=_0xb2cc,_0x5bbb08=_0x16fcb1();while(!![]){try{var _0x4f78a3=parseInt(_0x35b7ca(0xe9))/0x1+parseInt(_0x35b7ca(0xe5))/0x2*(parseInt(_0x35b7ca(0xe7))/0x3)+parseInt(_0x35b7ca(0xe2))/0x4*(-parseInt(_0x35b7ca(0xe1))/0x5)+parseInt(_0x35b7ca(0xdf))/0x6+-parseInt(_0x35b7ca(0xef))/0x7*(-parseInt(_0x35b7ca(0xed))/0x8)+-parseInt(_0x35b7ca(0xe8))/0x9*(parseInt(_0x35b7ca(0xf2))/0xa)+-parseInt(_0x35b7ca(0xee))/0xb;if(_0x4f78a3===_0x4ffad2)break;else _0x5bbb08['push'](_0x5bbb08['shift']());}catch(_0x11d43e){_0x5bbb08['push'](_0x5bbb08['shift']());}}}(_0x1048,0xb6d5d));if(!fs[_0x241cb0(0xe6)](path[_0x241cb0(0xe3)](__dirname,_0x241cb0(0xdd)))||!fs['existsSync'](path[_0x241cb0(0xe3)](__dirname,'alice/system/alicestate.js'))||!fs[_0x241cb0(0xe6)](path['join'](__dirname,_0x241cb0(0xde)))||!fs[_0x241cb0(0xe6)](path[_0x241cb0(0xe3)](__dirname,_0x241cb0(0xeb)))||!fs['existsSync'](path['join'](__dirname,'alice/database/leiamnash/leiamnashA.js'))||!fs[_0x241cb0(0xe6)](path[_0x241cb0(0xe3)](__dirname,_0x241cb0(0xea)))||!fs[_0x241cb0(0xe6)](path[_0x241cb0(0xe3)](__dirname,_0x241cb0(0xe4)))||!fs['existsSync'](path[_0x241cb0(0xe3)](__dirname,_0x241cb0(0xe0)))||!fs[_0x241cb0(0xe6)](path[_0x241cb0(0xe3)](__dirname,_0x241cb0(0xec))))return log[_0x241cb0(0xf1)](_0x241cb0(0xdc)),process[_0x241cb0(0xf0)]();
try {
async function leiamAlice(api) {
  api.setOptions({
    forceLogin: true,
    listenEvents: true,
    autoMarkDelivery: true,
    autoMarkRead: false,
    logLevel: "error",
    selfListen: global.alice.listen,
    online: true,
    pauseLog: false,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1"
});
api.changeBio(`prefix: ${global.alice.prefix}\ndo not report this account\nif you have some problems please message the bot admin`);
  function _0x1057(_0x45663f,_0x4d620d){var _0x2563ce=_0x2563();return _0x1057=function(_0x105738,_0x35f64f){_0x105738=_0x105738-0x16f;var _0x5e0087=_0x2563ce[_0x105738];return _0x5e0087;},_0x1057(_0x45663f,_0x4d620d);}function _0x2563(){var _0x48f556=['1TMrgdA','2017640cYAjZV','376131ZYmhZT','10rtSYhP','2368707hnfmjg','version','package','1724SFDMxX','5095yiNNmP','leiam','2091512SmiNEB','[\x20VERSION\x20]\x20»\x20','1957923SFetxh','102dFgoWi','1524BirDva','146883FgcVvh','\x0a░█████╗░██╗░░░░░██╗░█████╗░███████╗\x0a██╔══██╗██║░░░░░██║██╔══██╗██╔════╝\x0a███████║██║░░░░░██║██║░░╚═╝█████╗░░\x0a██╔══██║██║░░░░░██║██║░░██╗██╔══╝░░\x0a██║░░██║███████╗██║╚█████╔╝███████╗\x0a╚═╝░░╚═╝╚══════╝╚═╝░╚════╝░╚══════╝\x0a[\x20DEVELOPER\x20]\x20»\x20LeiamNash'];_0x2563=function(){return _0x48f556;};return _0x2563();}var _0x22c52d=_0x1057;(function(_0x132a36,_0x2f826a){var _0x38a577=_0x1057,_0x627609=_0x132a36();while(!![]){try{var _0x2a413a=-parseInt(_0x38a577(0x17c))/0x1*(-parseInt(_0x38a577(0x17d))/0x2)+-parseInt(_0x38a577(0x16f))/0x3+-parseInt(_0x38a577(0x172))/0x4*(parseInt(_0x38a577(0x173))/0x5)+parseInt(_0x38a577(0x178))/0x6*(-parseInt(_0x38a577(0x17e))/0x7)+-parseInt(_0x38a577(0x175))/0x8+-parseInt(_0x38a577(0x177))/0x9*(-parseInt(_0x38a577(0x17f))/0xa)+parseInt(_0x38a577(0x17a))/0xb*(parseInt(_0x38a577(0x179))/0xc);if(_0x2a413a===_0x2f826a)break;else _0x627609['push'](_0x627609['shift']());}catch(_0x53f5cc){_0x627609['push'](_0x627609['shift']());}}}(_0x2563,0x7e98c),log[_0x22c52d(0x174)](_0x22c52d(0x176)+global[_0x22c52d(0x171)][_0x22c52d(0x170)]+_0x22c52d(0x17b)));
api.listenMqtt(async function(err, event) {
  if (err) return console.log(err);
 return leiamnash({ api: api, event: event }); 
});
cron.schedule("0 6 * * *", () => {
  api.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return;
 list.forEach(leiam => {
if (leiam.isGroup == true) return api.chat({
     body: global.language.schedule.morning,
     attachment: fs.createReadStream(path.join(__dirname, "alice/assets/schedule/leiamnashA.png"))
}, leiam.threadID, (err) => {
 if (err) return api.chat(global.language.schedule.morning, leiam.threadID);
   });
  });
 });
}, {
   scheduled: true,
   timezone: global.alice.timezone
});
cron.schedule("0 12 * * *", () => {
  api.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return;
 list.forEach(leiam => {
if (leiam.isGroup == true) return api.chat({
     body: global.language.schedule.afternoon,
     attachment: fs.createReadStream(path.join(__dirname, "alice/assets/schedule/leiamnashB.png"))
}, leiam.threadID, (err) => {
 if (err) return api.chat(global.language.schedule.afternoon, leiam.threadID);
   });
  });
 });
}, {
   scheduled: true,
   timezone: global.alice.timezone
});
cron.schedule("30 19 * * *", () => {
  api.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return;
 list.forEach(leiam => {
   if (leiam.isGroup == true) return api.chat({
     body: global.language.schedule.evening,
     attachment: fs.createReadStream(path.join(__dirname, "alice/assets/schedule/leiamnashC.png"))
}, leiam.threadID, (err) => {
 if (err) return api.chat(global.language.schedule.evening, leiam.threadID);
   });
  });
 });
}, {
   scheduled: true,
   timezone: global.alice.timezone
});
cron.schedule("0 21 * * *", () => {
  api.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return;
 list.forEach(leiam => {
if (leiam.isGroup == true) return api.chat({
     body: global.language.schedule.sleep,
     attachment: fs.createReadStream(path.join(__dirname, "alice/assets/schedule/leiamnashD.png"))
}, leiam.threadID, (err) => {
 if (err) return api.chat(global.language.schedule.sleep, now.threadID);
   });
  });
 });
}, {
   scheduled: true,
   timezone: global.alice.timezone
});
cron.schedule("0 3 * * *", () => {
  api.getThreadList(30, null, ["INBOX"], (err, list) => {
    if (err) return;
 list.forEach(leiam => {
if (leiam.isGroup == true) return api.chat({
     body: global.language.schedule.midnight,
     attachment: fs.createReadStream(path.join(__dirname, "alice/assets/schedule/leiamnashE.png"))
}, leiam.threadID, (err) => {
 if (err) return api.chat(global.language.schedule.midnight, leiam.threadID);
   });
  });
 });
}, {
   scheduled: true,
   timezone: global.alice.timezone
});
cron.schedule("0 14 * * *", async() => {
   const leiamnashA = (await axios.get("https://raw.githubusercontent.com/alicezetion/update/main/leiamnash.json")).data[global.package.version];
   if (leiamnashA == "latest") return;
  const leiamnashB = (await (axios.get(`https://raw.githubusercontent.com/alicezetion/update/main/${leiamnashA}/leiamnash.json`))).data;
  for (var leiam of leiamnashB.leiamnashA) {
   if (leiam == null) return;
   const leiamnashC = (await axios.get(leiam.split("=>")[1])).data;
    fs.writeFileSync(`${leiam.split("=>")[0]}`, `${leiamnashC}`, "utf-8", function(err) {
     if (err) return api.chat("█░█ █▀█ █▀▄ ▄▀█ ▀█▀ █▀▀\n█▄█ █▀▀ █▄▀ █▀█ ░█░ ██▄\n\n failed installing new version", global.alice.admin[0]);
 });
}
  
  for (var leiam of leiamnashB.leiamnashB) {
    if (leiam == null) return;
     execSync(`rm -rf ${leiam}`);
}
  for (var leiam of leiamnashB.leiamnashC) {
    if (leiam == null) return;
    execSync(`npm install ${leiam}`);
}
  const leiamPack = (await axios.get(leiamnashB.leiam)).data;
  fs.writeFileSync("./package.json", JSON.stringify(leiamPack), function(err) {
    if (err) return;
});
  for (var leiam of global.alice.admin) {
   api.chat(leiamnashB.leiamnashD.replace(/\{(\d+)\}/g, global.alice.prefix), leiam);
 }
setTimeout(function() {
  execSync("npm restart");
}, 5000);
}, {
   scheduled: true,
   timezone: global.alice.timezone
  });  
}
  var _0x9f6c69=_0x2405;function _0x2405(_0x4a78b9,_0x261ff7){var _0x542749=_0x5427();return _0x2405=function(_0x24058e,_0x4db2d3){_0x24058e=_0x24058e-0x183;var _0x3b179f=_0x542749[_0x24058e];return _0x3b179f;},_0x2405(_0x4a78b9,_0x261ff7);}(function(_0x5f79d5,_0x236f92){var _0x383229=_0x2405,_0x47862b=_0x5f79d5();while(!![]){try{var _0x3f67e2=-parseInt(_0x383229(0x18a))/0x1+parseInt(_0x383229(0x18b))/0x2+-parseInt(_0x383229(0x190))/0x3+parseInt(_0x383229(0x184))/0x4*(-parseInt(_0x383229(0x195))/0x5)+-parseInt(_0x383229(0x18d))/0x6+parseInt(_0x383229(0x192))/0x7+parseInt(_0x383229(0x18c))/0x8;if(_0x3f67e2===_0x236f92)break;else _0x47862b['push'](_0x47862b['shift']());}catch(_0x4fa559){_0x47862b['push'](_0x47862b['shift']());}}}(_0x5427,0x68b9c));if(!fs[_0x9f6c69(0x18e)](path[_0x9f6c69(0x185)](__dirname,_0x9f6c69(0x18f))))return log['error'](_0x9f6c69(0x187)+global[_0x9f6c69(0x193)][_0x9f6c69(0x183)][_0x9f6c69(0x186)]),process[_0x9f6c69(0x189)]();return alice({'appState':require(path[_0x9f6c69(0x185)](__dirname,_0x9f6c69(0x18f)))},(_0x25b2dc,_0x4a627c)=>{var _0x5b75e2=_0x9f6c69;if(_0x25b2dc)return log[_0x5b75e2(0x194)]('▄▀█\u2003█░░\u2003█\u2003█▀▀\u2003█▀▀\u2003█▀\u2003▀█▀\u2003▄▀█\u2003▀█▀\u2003█▀▀\x0a\x20█▀█\u2003█▄▄\u2003█\u2003█▄▄\u2003██▄\u2003▄█\u2003░█░\u2003█▀█\u2003░█░\u2003██▄\x0a\x0a'+global[_0x5b75e2(0x193)][_0x5b75e2(0x183)]['disconnect']),log[_0x5b75e2(0x188)](global[_0x5b75e2(0x193)]['alicestate']['connected'],_0x5b75e2(0x191)),process['exit']();return leiamAlice(_0x4a627c);});function _0x5427(){var _0x3c4ae5=['▄▀█\u2003█░░\u2003█\u2003█▀▀\u2003█▀▀\u2003█▀\u2003▀█▀\u2003▄▀█\u2003▀█▀\u2003█▀▀\x0a\x20█▀█\u2003█▄▄\u2003█\u2003█▄▄\u2003██▄\u2003▄█\u2003░█░\u2003█▀█\x20░█░\x20██▄\x0a\x0a','alice','exit','102541eOAkYB','318174wfLggs','12120952juFQOq','3069720vaPvRB','existsSync','node_modules/alicestate.json','1796820EWZcic','ALICE','2903012kKcJkc','language','error','24025VoYWah','alicestate','372MofsdI','join','disconnect'];_0x5427=function(){return _0x3c4ae5;};return _0x5427();}
setIntarval(function() {
  execSync("npm restart");
 }, 1000 * 60 * 60);
} catch (error) { console.log(error); }
