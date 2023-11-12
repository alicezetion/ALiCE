var alice = {
 command: "rem",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 5
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  bot.react("✅", event.messageID, (err) => {}, true);
  const leiamA = (await bot.getUserInfo(event.senderID))[event.senderID].firstName;
  const leiamB = require(wrapper + "knight.js");
  const leiamC = await new leiamB.Gfx5()
   .setText(leiamA)
   .toAttachment();
  const data = leiamC.toBuffer();
  const leiamD = `${cache}rem_${event.senderID}.png`;
  fs.writeFileSync(leiamD, data);
return bot.chat({
  attachment: fs.createReadStream(leiamD)
}, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
     fs.unlinkSync(leiamD);
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