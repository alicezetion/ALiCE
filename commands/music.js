var alice = {
 command: "music",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const leiam = require(scraper + "ytsearch.js");
  const ytdl = require("@distube/ytdl-core");
message(await font(language.request.replace("{0}", chat)), "✅");
  const leiamA = await leiam(chat);
  const leiamB = Math.floor(Math.random() * leiamA.videos.length);
  const leiamC = await ytdl.getInfo(leiamA.videos[leiamB].id);
  const leiamD = ytdl.chooseFormat(leiamC.formats, { quality: '18' });
  const leiamE = `${cache}music_${event.senderID}.mp3`;
const leiamF = (await axios.get(leiamD.url, { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamE, Buffer.from(leiamF, 'utf-8'));
if (fs.statSync(leiamE).size > 51791701) return bot.chat(language.size, event.threadID, () => fs.unlinkSync(leiamE), event.messageID);
return bot.chat({
  body: await font(`${leiamA.videos[leiamB].title.replace(/ *\([^)]*\) */g, "")}\n\nChannel: ${leiamA.videos[leiamB].channel.name}\nViews: ${leiamA.videos[leiamB].views}\nUploaded: ${leiamA.videos[leiamB].uploaded}`),
  attachment: fs.createReadStream(leiamE)
}, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
  fs.unlinkSync(leiamE);
 }, event.messageID);
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, () => fs.unlinkSync(`${cache}music_${event.senderID}.mp3`), event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}