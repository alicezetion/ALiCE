var alice = {
 command: "rip",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 20
}

async function leiamnash(leiam) {
  const { createCanvas, loadImage } = require("canvas");
  const path = require("path");
let image;
  image = await loadImage(leiam);
 const background = await loadImage(path.resolve(__dirname, "..", "alice/assets/rip.png"));
 const avatar = await loadImage(leiam);
 const canvas = createCanvas(720, 405);
 const ctx = canvas.getContext(`2d`);
        ctx.drawImage(avatar, 110, 47, 85, 85);
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        return canvas;
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  const { createCanvas, loadImage } = require("canvas");
  const leiamA = Object.keys(event.mentions)[0];
 if (!leiamA || !chat) return message(await font(language.mention.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
bot.react("✅", event.messageID, (err) => {}, true);
  const leiamB = path.resolve(__dirname, "..", `alice/cache/affect_${event.senderID}.png`);
  const leiamC = await leiamnash(`https://graph.facebook.com/${leiamA}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);
  const leiamD = leiamC.toBuffer();
 fs.writeFileSync(leiamB, leiamD);
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