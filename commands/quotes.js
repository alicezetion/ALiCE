var alice = {
 command: "quotes",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const leiamA = chat.split("=");
  const [leiamX, leiamY] = leiamA.map((item) => item.trim());
if (!leiamX || !leiamY) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️"); 
  const leiamnash = require(wrapper + "quotes.js");
  bot.react("✅", event.messageID, (err) => {}, true);
 const leiam = await leiamnash(chat);
 const leiamB = `${cache}quotes_${event.senderID}.png`;
  const leiamC = leiam.toBuffer();
  fs.writeFileSync(leiamB, leiamC);
  return bot.chat({
    body: await font(`${leiamX}\n\n~ ${leiamY}`), 
    attachment: fs.createReadStream(leiamB)
  }, event.threadID, (err) => {
    if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
  fs.unlinkSync(leiamB);
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