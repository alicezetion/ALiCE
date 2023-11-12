var alice = {
 command: "pornhub",
 type: "prefix",
 author: "leiamnash",
 restrict: "premium",
 cooldown: 60
}

async function reply({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, reply, scraper, wrapper }) {
try {
 if (isNaN(event.body)) return message(await font(language.number), "🗨️");
 const leiam = require(scraper + "xvideo.js");
message(await font(language.request.replace("{0}", reply.leiamD[event.body - 1].title)), "✅");
 const leiamA = await leiam.download({
 videoUrl: reply.leiamD[event.body - 1].video,
 proxy: true
});
const leiamB = `${cache}pornhub_${event.senderID}.mp4`;
const leiamC = (await axios.get(leiamA.contentUrl, { 
      responseType: "arraybuffer"
})).data;
fs.writeFileSync(leiamB, Buffer.from(leiamC, 'utf-8'));
if (fs.statSync(leiamB).size > 51791701) return bot.chat(language.size, event.threadID, () => fs.unlinkSync(leiamE), event.messageID);
return bot.chat({
  body: await font(`${leiamA.name}\n\nDescription:\n${leiamA.description}`),
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

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const leiam = require(scraper + "xvideo.js");
message(await font(language.request.replace("{0}", chat)), "✅");
  const leiamA = await leiam.search({
    search: chat,
    sort: "views",
    filterDuration: "3-10min",
    pagination: 1
});
 const leiamB = []
 const leiamC = []
 const leiamD = []
for (var leiamE = 1; leiamE <= 9; leiamE++) {
  const leiamF = `${cache}pornhub${leiamE}_${event.senderID}.png`;
  leiamB.push(`━━━━━━⟨ ${leiamE} ⟩━━━━━━━\nTitle: ${leiamA[leiamE].title}\nDuration: ${leiamA[leiamE].duration}\nChannel: ${leiamA[leiamE].uploaderName}\n━━━━━━━━━━━━━━━━\n\n`);
  leiamD.push({
    video: leiamA[leiamE].video,
    title: leiamA[leiamE].title
});
const leiamG = (await axios.get(leiamA[leiamE].thumbnail, { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamF, Buffer.from(leiamG, 'utf-8'));
leiamC.push(fs.createReadStream(leiamF).on("end", () => {
    fs.unlinkSync(leiamF);
 }));
  }
 return bot.chat({
   body: await font(`${language.search.replace("{0}", chat)}\n\n${leiamB.join("")}\n\n${language.number}`),
   attachment: leiamC
 }, event.threadID, (err, info) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
global.reply.push({
    command: this.alice.command,
    messageID: info.messageID,
    author: event.messageID,
    leiamD
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