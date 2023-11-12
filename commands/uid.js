var alice = {
 command: "uid",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 5
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
 const leiam = Object.keys(event.mentions)[0];
if (event.type == "message_reply") return message(event.messageReply.senderID, "🆔");
if (leiam) return message(leiam, "🆔");
  return message(event.senderID, "🆔");
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}