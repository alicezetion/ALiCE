var alice = {
 command: "help",
 type: "auto",
 author: "leiamnash",
 restrict: "none",
 cooldown: 1
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
   var leiamV = Array.from(global.command.values());
   var leiamX = fs.readdirSync(path.join(__dirname, "..", "commands/")).filter(leiam => leiam.endsWith(".js"));
   let leiamZ = 10;
   let leiamB = 1;
  var leiamU = Math.ceil(leiamV.length / leiamZ);
  var leiamE = parseInt(chat);
   var leiamA = event.body.split(" ");
  leiamA.splice(0, 1);
  leiamA = leiamA.join(" ");
if (!isNaN(leiamE) && leiamE >= 1 && leiamE <= leiamU) leiamB = leiamE;
 var leiamC = []
 var leiamD = "";
 for (var leiam of leiamX) {
 var leiamY = require(path.join(__dirname, "..", `commands/${leiam}`));
   leiamC.push(leiamY.alice.command);
}
 var leiamF = (leiamB * leiamZ) - leiamZ;
 var leiamG = leiamB * leiamZ;
for (var leiamH = leiamF; leiamH < leiamG; leiamH++) {
  if (leiamC[leiamH] != undefined) {
var leiamI = alice.prefix + leiamC[leiamH] + "\n";
    leiamD += leiamI;
  }
}
return message(await font(language.help.replace("{0}", leiamD).replace("{1}", `${leiamB}/${leiamU}`)), "📑");
} catch(error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}