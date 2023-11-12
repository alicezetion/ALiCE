var alice = {
 command: "daily",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 600
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  const leiam = Math.floor(Math.random() * 10000);
  await database.addCoin(event.senderID, leiam);
  return message(await font(`you receive ˖۪⸙͎${leiam} lycoris coin`), "🪙");
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}