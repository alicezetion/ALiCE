var alice = {
 command: "ytsearch",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const leiam = require(scraper + "ytsearch.js");
message(await font(language.request.replace("{0}", chat)), "✅");
  const leiamX = []
  const leiamY = []
for (var leiamZ = 0; leiamZ <= 8; leiamZ++) {
  const leiamV = (await leiam(chat)).videos[leiamZ];
  const leiamI = `${cache}ytsearch${event.senderID}_${leiamZ}.png`;
leiamX.push(`━━━━━━━━━━━━━━━━\nTitle: ${leiamV.title}\nChannel: ${leiamV.channel.name}\nViews: ${leiamV.views}\nDuration: ${leiamV.duration_raw}\nUploaded: ${leiamV.uploaded}\nLink: ${leiamV.shareLink}\n━━━━━━━━━━━━━━━━\n\n`);
    const leiamS = (await axios.get(leiamV.thumbnail, { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
leiamY.push(fs.createReadStream(leiamI).on("end", () => {
    fs.unlinkSync(leiamI);
 }));
}
 return bot.chat({
   body: await font(`${language.search.replace("{0}", chat)}\n\n${leiamX.join("")}`),
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