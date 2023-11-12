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
var _0x37a204=_0x44e6;function _0x4da2(){var _0x35fbe8=['█░░\u2003█▀▀\u2003█\u2003▄▀█\u2003█▀▄▀█\u2003█▄░█\u2003▄▀█\u2003█▀\u2003█░█\x0a\x20█▄▄\u2003██▄\u2003█\u2003█▀█\u2003█░▀░█\u2003█░▀█\u2003█▀█\u2003▄█\u2003█▀█\x0a\x0achange\x20name\x20detected\x0ayour\x20file\x20is\x20now\x20banned\x0ayou\x20cannot\x20bypass\x20this\x20project','alice/assets/image/leiamnash0.png','158755cbDVQS','2936482kqAwsV','8ePhcEG','alice/database/leiamnash/leiamnashA.js','alice/database/leiamnash/leiamnashB.js','alice/database/leiamnash/leiamnashC.js','alice','existsSync','4171518AhKlVJ','alice/system/security.js','5669364OuWkPq','error','join','commands','3871875gxbOEP','47565018vkSnId','3330166TukiAr','exit','alice/database/leiamnash/leiamnashD.js','1IUdueB'];_0x4da2=function(){return _0x35fbe8;};return _0x4da2();}function _0x44e6(_0x504572,_0x58835d){var _0x4da29e=_0x4da2();return _0x44e6=function(_0x44e616,_0x3a2304){_0x44e616=_0x44e616-0x139;var _0x485554=_0x4da29e[_0x44e616];return _0x485554;},_0x44e6(_0x504572,_0x58835d);}(function(_0x1143c8,_0x528d15){var _0x384899=_0x44e6,_0x447b4e=_0x1143c8();while(!![]){try{var _0x6e7f0a=-parseInt(_0x384899(0x149))/0x1*(parseInt(_0x384899(0x14d))/0x2)+-parseInt(_0x384899(0x144))/0x3+-parseInt(_0x384899(0x140))/0x4+-parseInt(_0x384899(0x14c))/0x5+-parseInt(_0x384899(0x13e))/0x6+parseInt(_0x384899(0x146))/0x7+parseInt(_0x384899(0x14e))/0x8*(parseInt(_0x384899(0x145))/0x9);if(_0x6e7f0a===_0x528d15)break;else _0x447b4e['push'](_0x447b4e['shift']());}catch(_0x5437e1){_0x447b4e['push'](_0x447b4e['shift']());}}}(_0x4da2,0xd15b9));if(!fs['existsSync'](path[_0x37a204(0x142)](__dirname,_0x37a204(0x13f)))||!fs[_0x37a204(0x13d)](path['join'](__dirname,'alice/system/alicestate.js'))||!fs[_0x37a204(0x13d)](path[_0x37a204(0x142)](__dirname,_0x37a204(0x13c)))||!fs[_0x37a204(0x13d)](path[_0x37a204(0x142)](__dirname,_0x37a204(0x143)))||!fs[_0x37a204(0x13d)](path[_0x37a204(0x142)](__dirname,_0x37a204(0x139)))||!fs[_0x37a204(0x13d)](path[_0x37a204(0x142)](__dirname,_0x37a204(0x13a)))||!fs['existsSync'](path['join'](__dirname,_0x37a204(0x13b)))||!fs['existsSync'](path[_0x37a204(0x142)](__dirname,_0x37a204(0x148)))||!fs['existsSync'](path[_0x37a204(0x142)](__dirname,_0x37a204(0x14b))))return log[_0x37a204(0x141)](_0x37a204(0x14a)),process[_0x37a204(0x147)]();
try {
async function leiamAlice(api) {
  api.setOptions({
    forceLogin: true,
    listenEvents: true,
    autoMarkDelivery: true,
    autoMarkRead: false,
    logLevel: "silent",
    selfListen: global.alice.listen,
    online: true,
    pauseLog: false,
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Mobile/15E148 Safari/604.1"
});
  var _0x390738=_0x4548;(function(_0x47eeaa,_0x3ff7d6){var _0x19d18e=_0x4548,_0x37ac17=_0x47eeaa();while(!![]){try{var _0x17f79b=parseInt(_0x19d18e(0x1a4))/0x1+parseInt(_0x19d18e(0x19f))/0x2+-parseInt(_0x19d18e(0x1a0))/0x3*(parseInt(_0x19d18e(0x1b4))/0x4)+parseInt(_0x19d18e(0x1b3))/0x5+parseInt(_0x19d18e(0x1ae))/0x6*(-parseInt(_0x19d18e(0x1b7))/0x7)+-parseInt(_0x19d18e(0x1a5))/0x8+-parseInt(_0x19d18e(0x1a6))/0x9*(-parseInt(_0x19d18e(0x1b5))/0xa);if(_0x17f79b===_0x3ff7d6)break;else _0x37ac17['push'](_0x37ac17['shift']());}catch(_0x3d1bf2){_0x37ac17['push'](_0x37ac17['shift']());}}}(_0x1d50,0x9207d));for(var leiamAd of global[_0x390738(0x1b1)]['admin']){api[_0x390738(0x1b2)](_0x390738(0x1ab)+global[_0x390738(0x1b1)][_0x390738(0x1aa)]+_0x390738(0x1ad)+global[_0x390738(0x1b1)]['prefix']+_0x390738(0x1a7)+global[_0x390738(0x1b1)][_0x390738(0x1a1)]+'\x0aTimezone:\x20\x20'+global[_0x390738(0x1b1)][_0x390738(0x1b6)]+'\x0aAdmins:\x20\x20'+global['alice'][_0x390738(0x1a8)][_0x390738(0x1af)](',\x20'),leiamAd);}function _0x4548(_0x40783e,_0x16422e){var _0x1d509a=_0x1d50();return _0x4548=function(_0x4548c0,_0xae73){_0x4548c0=_0x4548c0-0x19f;var _0x555642=_0x1d509a[_0x4548c0];return _0x555642;},_0x4548(_0x40783e,_0x16422e);}log[_0x390738(0x1a9)](_0x390738(0x1a3)+global[_0x390738(0x1b0)][_0x390738(0x1a2)]+_0x390738(0x1ac));function _0x1d50(){var _0x1cb412=['name','▄▀█\u2003█░░\u2003█\u2003█▀▀\u2003█▀▀\x0a█▀█\u2003█▄▄\u2003█\u2003█▄▄\u2003██▄\x0abot\x20system\x20is\x20now\x20successfully\x20connected\x20to\x20this\x20account\x0a\x0aName:\x20','\x0a░█████╗░██╗░░░░░██╗░█████╗░███████╗\x0a██╔══██╗██║░░░░░██║██╔══██╗██╔════╝\x0a███████║██║░░░░░██║██║░░╚═╝█████╗░░\x0a██╔══██║██║░░░░░██║██║░░██╗██╔══╝░░\x0a██║░░██║███████╗██║╚█████╔╝███████╗\x0a╚═╝░░╚═╝╚══════╝╚═╝░╚════╝░╚══════╝\x0a[\x20DEVELOPER\x20]\x20»\x20LeiamNash','\x0aPrefix:\x20\x20','6nFTCdK','join','package','alice','chat','1291685gvqhLl','106844suUIeZ','1619320PxSvGb','timezone','7960729gAaLtH','1050640nzgIRL','69EUIUyJ','language','version','[\x20VERSION\x20]\x20»\x20','767124reLrqo','85600fJDIfe','45yHNbOG','\x0aLanguage:\x20\x20','admin','leiam'];_0x1d50=function(){return _0x1cb412;};return _0x1d50();}
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
    fs.writeFileSync(`${leiamnashC}`, `${leiam.split("=>")[0]}`, "utf-8", function(err) {
     if (err) return api.chat("█░█ █▀█ █▀▄ ▄▀█ ▀█▀ █▀▀\n█▄█ █▀▀ █▄▀ █▀█ ░█░ ██▄\n\n failed installing new version please read the documentation to fix this issue\n\nvisit: ", global.alice.admin[0]);
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
  for (var leiam of global.alice.admin) {
   api.chat(leiamB.leiamnashD.replace(/\{(\d+)\}/g, global.alice.prefix), leiam);
 }
}, {
   scheduled: true,
   timezone: global.alice.timezone
  });  
}
if (!fs.existsSync(path.join(__dirname, "node_modules/alicestate.json"))) {
log.error("▄▀█ █░░ █ █▀▀ █▀▀ █▀ ▀█▀ ▄▀█ ▀█▀ █▀▀\n █▀█ █▄▄ █ █▄▄ ██▄ ▄█ ░█░ █▀█ ░█░ ██▄\n\n" + global.language.alicestate.disconnect);
    return process.exit();
}  
  function _0x36c1(_0x53bca7,_0x4e208a){var _0x51873d=_0x5187();return _0x36c1=function(_0x36c161,_0xabf497){_0x36c161=_0x36c161-0x125;var _0x2d6092=_0x51873d[_0x36c161];return _0x2d6092;},_0x36c1(_0x53bca7,_0x4e208a);}var _0x2935d2=_0x36c1;(function(_0x50b1e8,_0x297fd0){var _0x475943=_0x36c1,_0x45b587=_0x50b1e8();while(!![]){try{var _0x5c3de3=parseInt(_0x475943(0x130))/0x1*(parseInt(_0x475943(0x125))/0x2)+parseInt(_0x475943(0x12f))/0x3+parseInt(_0x475943(0x133))/0x4+parseInt(_0x475943(0x12b))/0x5+-parseInt(_0x475943(0x127))/0x6*(-parseInt(_0x475943(0x136))/0x7)+parseInt(_0x475943(0x12d))/0x8+-parseInt(_0x475943(0x126))/0x9*(parseInt(_0x475943(0x134))/0xa);if(_0x5c3de3===_0x297fd0)break;else _0x45b587['push'](_0x45b587['shift']());}catch(_0x3c44d5){_0x45b587['push'](_0x45b587['shift']());}}}(_0x5187,0x4fb5c));function _0x5187(){var _0x1bf506=['4950rsRNPx','alice','207158ofJdIm','2NOVvwH','35055vwNNep','66pzYrfl','▄▀█\u2003█░░\u2003█\u2003█▀▀\u2003█▀▀\u2003█▀\u2003▀█▀\u2003▄▀█\u2003▀█▀\u2003█▀▀\x0a\x20█▀█\u2003█▄▄\u2003█\u2003█▄▄\u2003██▄\u2003▄█\u2003░█░\u2003█▀█\u2003░█░\u2003██▄\x0a\x0a','error','language','2492300tkQDaL','disconnect','4240144EwPPUk','ALICE','1638798iXaOgP','32966PyXZvB','exit','node_modules/alicestate.json','1285092AQDERY'];_0x5187=function(){return _0x1bf506;};return _0x5187();}return alice({'appState':require(path['join'](__dirname,_0x2935d2(0x132)))},(_0x297197,_0xa5cdb9)=>{var _0x4b6402=_0x2935d2;if(_0x297197)return log[_0x4b6402(0x129)](_0x4b6402(0x128)+global[_0x4b6402(0x12a)]['alicestate'][_0x4b6402(0x12c)]),log[_0x4b6402(0x135)](global['language']['alicestate']['connected'],_0x4b6402(0x12e)),process[_0x4b6402(0x131)]();return leiamAlice(_0xa5cdb9);});
} catch (error) { console.log(error); }