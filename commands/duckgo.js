var alice = {
 command: "duckgo",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const DDG = require("duck-duck-scrape");
  message(await font(language.request.replace("{0}", chat)), "✅");
  const leiam = (await DDG.search(chat, { safeSearch: DDG.SafeSearchType.STRICT })).results;
  const leiamnash = leiam[Math.floor(Math.random() * leiam.length)];
  const leiamA = `${cache}duckgo_${event.senderID}.png`;
  const leiamB = (await axios.get(api.screenshot + leiamnash.url, { responseType: 'arraybuffer' })).data;
	fs.writeFileSync(leiamA, Buffer.from(leiamB, 'utf-8'));
return bot.chat({ 
  body: await font(`${leiamnash.title}\n\n${leiamnash.description.replace(/<\/b>/g, "").replace(/<b>/g, "")}\n\nsource: ${leiamnash.url}`),
  attachment: fs.createReadStream(leiamA)
  }, event.threadID, (err) => {
  if (err) return bot.chat(`${leiamnash.title}\n\n${leiamnash.description.replace(/<\/b>/g, "").replace(/<b>/g, "")}\n\nsource: ${leiamnash.url}`, event.threadID, event.messageID);
   fs.unlinkSync(leiamA);
}, event.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}