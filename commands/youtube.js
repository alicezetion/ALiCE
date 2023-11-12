var alice = {
 command: "youtube",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function reply({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, reply, scraper, wrapper }) {
try {
 if (isNaN(event.body)) return message(await font(language.number), "🗨️");
 const leiam = require(scraper + "ytsearch.js");
 const ytdl = require("@distube/ytdl-core");
message(await font(language.request.replace("{0}", reply.leiamU[event.body - 1].title)), "✅");
 const leiamC = await ytdl.getInfo(reply.leiamU[event.body - 1].id);
  const leiamD = ytdl.chooseFormat(leiamC.formats, { quality: '18' });
  const leiamE = `${cache}youtube_${event.senderID}.mp4`;
const leiamF = (await axios.get(leiamD.url, { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamE, Buffer.from(leiamF, 'utf-8'));
if (fs.statSync(leiamE).size > 51791701) return bot.chat(language.size, event.threadID, () => fs.unlinkSync(leiamE), event.messageID);
return bot.chat({
  body: await font(`${reply.leiamU[event.body - 1].title}\n\nChannel: ${reply.leiamU[event.body - 1].channel}\nViews: ${reply.leiamU[event.body - 1].views}\nUploaded: ${reply.leiamU[event.body - 1].uploaded}`),
  attachment: fs.createReadStream(leiamE)
}, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
  fs.unlinkSync(leiamE);
 }, event.messageID);
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const leiam = require(scraper + "ytsearch.js");
message(await font(language.request.replace("{0}", chat)), "✅");
  const leiamX = []
  const leiamY = []
  const leiamU = []
for (var leiamZ = 1; leiamZ <= 15; leiamZ++) {
  const leiamV = (await leiam(chat)).videos[leiamZ];
  const leiamI = `${cache}youtube${event.senderID}_${leiamZ}.png`;
leiamX.push(`━━━━━━⟨ ${leiamZ} ⟩━━━━━━━\nTitle: ${leiamV.title}\nChannel: ${leiamV.channel.name}\nViews: ${leiamV.views}\nDuration: ${leiamV.duration_raw}\nUploaded: ${leiamV.uploaded}\n━━━━━━━━━━━━━━━━\n\n`);
leiamU.push({
  id: leiamV.id,
  title: leiamV.title,
  views: leiamV.views,
  channel: leiamV.channel.name,
  duration: leiamV.duration_raw,
  uploaded: leiamV.uploaded
});
    const leiamS = (await axios.get(leiamV.thumbnail, { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
leiamY.push(fs.createReadStream(leiamI).on("end", () => {
    fs.unlinkSync(leiamI);
 }));
}
 return bot.chat({
   body: await font(`${language.search.replace("{0}", chat)}\n\n${leiamX.join("")}\n\n${language.number}`),
   attachment: leiamY
 }, event.threadID, (err, info) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
global.reply.push({
    command: this.alice.command,
    messageID: info.messageID,
    author: event.messageID,
    leiamU
   });
  }, event.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
 return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command,
  reply
}