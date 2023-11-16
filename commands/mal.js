var alice = {
 command: "mal",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 5
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const mal = require("mal-scraper");
 message(await font(language.request.replace("{0}", chat)), "✅");
const leiam = await mal.getInfoFromName(chat);
const leiamA = `${cache}mal_${event.senderID}.png`;
const leiamB = (await axios.get(leiam.picture, { 
      responseType: "arraybuffer"
})).data;
fs.writeFileSync(leiamA, Buffer.from(leiamB, 'utf-8'));
return bot.chat({
  body: await font(`${leiam.englishTitle}\n\ntype: ${leiam.type}\nepisode: ${leiam.episodes}\naired: ${leiam.aired}\npremiered: ${leiam.premiered}\nbroadcast: ${leiam.broadcast}\nproducers: ${leiam.producers.join(", ")}\nstudios: ${leiam.studios}\nsource: ${leiam.source}\nduration: ${leiam.duration}\nrating: ${leiam.rating}\ngenres: ${leiam.genres.join(", ")}\nstatus: ${leiam.status}\nscore: ${leiam.score}\nranked: ${leiam.ranked}\n\nsynopsis:\n\n${leiam.synopsis}\n\nalternative information\n\njapanese: ${leiam.japaneseTitle}\nsynonyms: ${leiam.synonyms}\npopularity: ${leiam.popularity}\nmembers: ${leiam.members}\nfavorites: ${leiam.favorites}\nid: ${leiam.id}\nstats: ${leiam.scoreStats}\nsource: ${leiam.url}`),
  attachment: fs.createReadStream(leiamA)
}, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
  fs.unlinkSync(leiamA);
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
