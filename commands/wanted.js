var alice = {
 command: "wanted",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 20
}

async function leiamnashh(canvas, text, defaultFontSize, width, font) {
  const ctx = canvas.getContext("2d");
  do {
  ctx.font = `${(defaultFontSize -= 1)}px ${font}`;
} while (ctx.measureText(text).width > width);
        return ctx.font;
}

async function leiamnash(leiam) {
  const path = require("path");
  const jimp = require("jimp");
  const Canvas = require("canvas");
  const background = await Canvas.loadImage(path.resolve(__dirname, "..", "alice/assets/wanted.png"));
  const avatar = await Canvas.loadImage(leiam);
   var price = Math.floor(Math.random() * 188708) + 329889;
  var currency = Math.floor(Math.random() * 18);
  const canvas = Canvas.createCanvas(257, 383);
  const ctx = canvas.getContext("2d");
        ctx.drawImage(avatar, 25, 60, 210, 210);
        ctx.drawImage(background, 0, 0, 257, 383);
        ctx.textAlign = "center"; 
        ctx.font = leiamnashh(canvas, price.toLocaleString() + currency, 80, 200, "Times New Roman");
        ctx.fillStyle = "#513d34";
        ctx.fillText("$" + price.toLocaleString() + currency, 128, 315);
        return canvas.toBuffer();
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  const { createCanvas, loadImage } = require("canvas");
  const leiamA = Object.keys(event.mentions)[0];
 if (!leiamA || !chat) return message(await font(language.mention.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
bot.react("✅", event.messageID, (err) => {}, true);
  const leiamB = path.resolve(__dirname, "..", `alice/cache/affect_${event.senderID}.png`);
  const leiamC = await leiamnash(`https://graph.facebook.com/${leiamA}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
 fs.writeFileSync(leiamB, leiamC);
   return bot.chat({
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