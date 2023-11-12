var alice = {
 command: "openai",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  message(await font(language.request.replace("{0}", chat)), "✅");
  const leiam = (await axios.get(`${global.api.tool}tools/openai?q=${chat}`)).data.result;
 const leiamA = (await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURI(leiam)}`)).data;
		var leiamB = "";
leiamA[0].forEach(leiamnash => (leiamnash[0]) ? leiamB += leiamnash[0] : "");
  return bot.chat(await font(leiamB), event.threadID, event.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}