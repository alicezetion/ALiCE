var alice = {
 command: "balance",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
const leiam = (await database.coinData())[event.senderID];
  if (!leiam) return message(await font(`sorry but your account doesn't have data on ALICE database, please try to use ⟨ ${alice.prefix}daily ⟩ to have some lycoris coin`), "🪙");
  return message(await font(`your lycoris coin balance is ˖۪⸙͎${leiam}`), "🪙");
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}