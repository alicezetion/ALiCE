var alice = {
 command: "tinyurl",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
 if (event.type != "message_reply" || !event.messageReply.attachments[0].url) return;
  bot.react("✅", event.messageID, (err) => {}, true);
  const turl = require("turl");
return bot.chat(await turl.shorten(event.messageReply.attachments[0].url), event.threadID, event.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}