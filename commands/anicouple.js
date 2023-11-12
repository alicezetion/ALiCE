var alice = {
 command: "anicouple",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  const leiam = require(wrapper + "anicouple.js");
  const leiamA = await leiam();
bot.react("✅", event.messageID, (err) => {}, true);
  const leiamX = []
  const leiamI = `${cache}anicouple1_${event.senderID}.png`;
  const leiamT = `${cache}anicouple2_${event.senderID}.png`;
  const leiamS = (await axios.get(leiamA.avatar[0], { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
const leiamU = (await axios.get(leiamA.avatar[1], {
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamT, Buffer.from(leiamU, 'utf-8'));
 return bot.chat({
   body: await font(`Character: ${leiamA.character}\n\n~ ${leiamA.anime}`),
   attachment: [
fs.createReadStream(leiamI),
fs.createReadStream(leiamT)
  ]
 }, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
   fs.unlinkSync(leiamI);
   fs.unlinkSync(leiamT);
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