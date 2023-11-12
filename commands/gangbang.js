var alice = {
 command: "gangbang",
 type: "prefix",
 author: "leiamnash",
 restrict: "nsfw",
 cooldown: 20
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  const jimp = require("jimp");
  const Canvas = require("canvas");
  const leiamA = Object.keys(event.mentions)[0];
 if (!leiamA || !chat) return message(await font(language.mention.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
bot.react("✅", event.messageID, (err) => {}, true);
  const leiamB = path.resolve(__dirname, "..", "alice");
  const leiamC = `${leiamB}/assets/gangbang.png`;
  const leiamD = `${leiamB}/cache/gangbang1_${event.senderID}.png`;
  const leiamE = `${leiamB}/cache/gangbang2_${event.senderID}.png`;
  const leiamF = `${leiamB}/cache/gangbang_${event.senderID}.png`;
  const leiamG = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
]
 const leiamH = (await axios.get(`https://graph.facebook.com/${leiamA}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { 
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
  const leiamI = (await jimp.read(leiamD)).circle();
  const leiamJ = await leiamI.getBufferAsync("image/png");
 fs.writeFileSync(leiamE, leiamJ);
  const canvas = Canvas.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage(leiamC);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(leiamE), 88, 50, 95, 95);
	const leiamK = canvas.toBuffer();
    fs.writeFileSync(leiamF, leiamK);
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