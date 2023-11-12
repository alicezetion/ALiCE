var alice = {
 command: "redroom",
 type: "prefix",
 author: "leiamnash",
 restrict: "premium",
 cooldown: 60
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  const leiam = require(scraper + "xvideo.js");
 message(await font(language.request.replace("{0}", "random redroom video from internet")), "✅");
  const leiamX = [ "hentai", "stepsis", "fingering", "blowjob", "masturbate", "family stroke", "japanese", "chinese", "cosplay", "creampie", "dogstyle", "dildo", "solo", "gangbang", "stepmom" ]
 const leiamA = await leiam.search({
    search: leiamX[Math.floor(Math.random() * leiamX.length)],
    sort: "rating",
    filterDuration: "3-10min",
    pagination: 1
});
const leiamB = leiamA[Math.floor(Math.random() * leiamA.length)]
const leiamC = `${cache}redroom_${event.senderID}.mp4`;
const leiamD = await leiam.download({
 videoUrl: leiamB.video,
 proxy: true
});
const leiamE = (await axios.get(leiamD.contentUrl, { 
      responseType: "arraybuffer"
})).data;
fs.writeFileSync(leiamC, Buffer.from(leiamE, 'utf-8'));
  if (fs.statSync(leiamC).size > 51791701) return bot.chat(language.size, event.threadID, () => fs.unlinkSync(leiamC), event.messageID);
return bot.chat({
  body: await font(`${leiamD.name}\n\nDescription:\n${leiamD.description}`),
  attachment: fs.createReadStream(leiamC)
}, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
  fs.unlinkSync(leiamC);
 }, event.messageID);
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
 return bot.chat(`[ ${this.alce.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}