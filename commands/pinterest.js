var alice = {
 command: "pinterest",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
 if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const leiamX = require(scraper + "pinterest.js");
  const leiamnash = await leiamX(chat);
 message(await font(language.request.replace("{0}", chat)), "✅");
let leiamA = 0;
 const leiamB = []
 for (var leiam of leiamnash) {
   if (leiamA >= 21) break;
  const leiamC = `${cache}pinterest${leiamA}_${event.senderID}.png`;
 const leiamD = (await axios.get(leiam, { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamC, Buffer.from(leiamD, 'utf-8'));
leiamB.push(fs.createReadStream(leiamC).on("end", () => {
    fs.unlinkSync(leiamC);
 }));
   leiamA += 1;
}
return bot.chat({
  body: await font(language.search.replace("{0}", chat)),
  attachment: leiamB
}, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
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