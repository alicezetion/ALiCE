var alice = {
 command: "brainly",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const leiamnash = require(scraper + "brainly.js");
  bot.react("✅", event.messageID, (err) => {}, true);
 const leiam = (await leiamnash(chat)).data;
const leiamA = leiam[Math.floor(Math.random() * leiam.length)];
  return bot.chat(await font(`Question: \n${leiamA.Question}\n\nAnswer:\n${leiamA.Answer[0].text}\n\nExplanation:\n${leiamA.Answer[1].text}`), event.threadID, event.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}