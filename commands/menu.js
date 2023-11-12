var alice = {
 command: "menu",
 type: "auto",
 author: "leiamnash",
 restrict: "premium",
 cooldown: 1
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  var leiamX = fs.readdirSync(path.join(__dirname, "..", "commands/")).filter(leiam => leiam.endsWith(".js"));
  var leiamZ = []
 for (var leiam of leiamX) {
 var leiamY = require(path.join(__dirname, "..", `commands/${leiam}`));
if (leiamY.alice.restrict.toLowerCase() == "premium") {
 leiamZ.push(alice.prefix + leiamY.alice.command);
 }
}
return message(await font(`premuim commands:\n\n${leiamZ.join("\n")}`), "📜");
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}