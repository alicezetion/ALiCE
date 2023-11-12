var alice = {
 command: "finger",
 type: "prefix",
 author: "leiamnash",
 restrict: "nsfw",
 cooldown: 20
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  const jimp = require("jimp");
  const leiamA = Object.keys(event.mentions)[0];
 if (!leiamA || !chat) return message(await font(language.mention.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
bot.react("✅", event.messageID, (err) => {}, true);
  const leiamB = path.resolve(__dirname, "..", "alice");
  const leiamC = `${leiamB}/assets/finger.png`;
  const leiamD = `${leiamB}/cache/finger1_${event.senderID}.png`;
  const leiamE = `${leiamB}/cache/finger2_${event.senderID}.png`;
  const leiamF = `${leiamB}/cache/finger_${event.senderID}.png`;
  const leiamG = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
]
 const leiamH = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { 
   responseType: "arraybuffer",
   muteHttpExceptions: true,
   headers: {
    authority: "graph.facebook.com",
      "cache-control": "max-age=0",
      "sec-ch-ua-mobile": "?0",
      "user-agent": leiamG[Math.floor(Math.random() * leiamG.length)]
  }
 })).data;
fs.writeFileSync(leiamD, Buffer.from(leiamH, 'utf-8'));
 const leiamI = (await axios.get(`https://graph.facebook.com/${leiamA}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { 
   responseType: "arraybuffer",
   muteHttpExceptions: true,
   headers: {
    authority: "graph.facebook.com",
      "cache-control": "max-age=0",
      "sec-ch-ua-mobile": "?0",
      "user-agent": leiamG[Math.floor(Math.random() * leiamG.length)]
  }
 })).data;
fs.writeFileSync(leiamE, Buffer.from(leiamI, 'utf-8'));
  const leiamJ = (await jimp.read(leiamD)).circle();
  const leiamK = (await jimp.read(leiamE)).circle();
  const leiamL = await leiamJ.getBufferAsync("image/png");
 const leiamM = await leiamK.getBufferAsync("image/png");
 const leiamN = await jimp.read(leiamL);
 const leiamO = await jimp.read(leiamM);
 const leiamP = await jimp.read(leiamC);
leiamP.composite(leiamN.resize(200, 200), 340, 120).composite(leiamO.resize(200, 200), 100, 220);
   const leiamQ = await leiamP.getBufferAsync("image/png");
    fs.writeFileSync(leiamF, leiamQ);
    fs.unlinkSync(leiamD);
    fs.unlinkSync(leiamE);
return bot.chat({
  attachment: fs.createReadStream(leiamF)
}, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
   fs.unlinkSync(leiamF);
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