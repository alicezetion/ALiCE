var alice = {
 command: "draw",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 20
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
 if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const leiamX = require(wrapper + "md.js");
  const leiamnash = await leiamX(chat, "3d");
 message(await font(language.request.replace("{0}", chat)), "✅");
const leiamY = []
for (var leiamB = 0; leiamB <= 8; leiamB ++) {
const leiamA = `${cache}draw${leiamB}_${event.senderID}.png`;

const leiamC = (await axios.get(leiamnash[leiamB], { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamA, Buffer.from(leiamC, 'utf-8'));
leiamY.push(fs.createReadStream(leiamA).on("end", () => {
  fs.unlinkSync(leiamA);
}));
}
return bot.chat({
  body: await font(chat),
  attachment: leiamY
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