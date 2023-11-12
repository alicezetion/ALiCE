var alice = {
 command: "leave",
 type: "prefix",
 author: "leiamnash",
 restrict: "admin",
 cooldown: 1
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
 bot.removeUserFromGroup(bot.getCurrentUserID(), event.threadID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}