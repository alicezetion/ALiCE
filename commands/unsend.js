var alice = {
 command: "unsend",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 1
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
if (event.type != "message_reply" || event.messageReply.senderID != bot.getCurrentUserID()) return;
  return bot.unsendMessage(event.messageReply.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
} 