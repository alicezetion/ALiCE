var alice = {
 command: "manga",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 30
}

async function reply({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, reply, scraper, wrapper }) {
try {
 if (isNaN(event.body)) return message(await font(language.number), "🗨️");
 const leiamT = `${cache}mangathumbnail_${event.senderID}.png`;
 const { MANGA } = require("@consumet/extensions");
 const leiamA = new MANGA.MangaDex();

if (reply.type == "leiamnashA") {
  bot.react("✅", event.messageID, (err) => {}, true);
 const leiamB = await leiamA.fetchMangaInfo(reply.leiamE[event.body - 1]);
 const leiamC = []
 const leiamD = []
for (var leiam of leiamB.chapters) {
 leiamC.push(`~ ${leiam.title}\nChapter: ${leiam.chapterNumber}\n\n`);
 leiamD.push({
   id: leiam.id,
   title: leiam.title,
   chapter: leiam.chapterNumber
  });
}
const leiamS = (await axios.get(leiamB.image, {
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamT, Buffer.from(leiamS, 'utf-8'));
return bot.chat({
  body: `${leiamB.title}\n\nGenres: ${leiamB.genres.join(", ")}\nDescription: ${leiamB.description.en}\n\n${leiamC.join("")}\n\n${language.number}`,
  attachment: fs.createReadStream(leiamT)
}, event.threadID, (err, info) => {
  if (err) return bot.chat(`${leiamB.title}\n\nGenres: ${leiamB.genres.join(" ")}\nDescription: ${leiamB.description.en}\n\n${leiamC.join("")}\n\n${language.number}`, event.threadID, event.messageID);
  fs.unlinkSync(leiamT);
  global.reply.push({
    command: this.alice.command,
    messageID: info.messageID,
    author: event.messageID,
    type: "leiamnashB",
    info: {
      title: leiamB.title,
      genres: leiamB.genres.join(", "),
      status: leiamB.status,
      release: leiamB.releaseDate,
      description: leiamB.description.en
    },
    leiamD
  });
 }, event.messageID);
}
  if (reply.type == "leiamnashB") {
  let leiamP = reply.leiamD.reverse();
  let leiamU = leiamP[event.body - 1]
message(await font(language.request.replace("{0}", `Chapter: ${leiamU.chapter} - ${leiamU.title} | ${leiamU.title}`)), "✅");
  const leiamB = await leiamA.fetchChapterPages(leiamU.id);
 const leiamY = []
    let leiamZ = 0
  leiamB.forEach(leiam => {
    leiamZ += 1
 });
for (var leiamX = 0; leiamX <= leiamZ - 1; leiamX++) {
  if (leiamX >= 40) break;
  const leiamI = `${cache}manga${event.senderID}_${leiamX}.png`;
  const leiamS = (await axios.get(leiamB[leiamX].img, { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
leiamY.push(fs.createReadStream(leiamI).on("end", () => {
    fs.unlinkSync(leiamI);
 }));
}
 return bot.chat({
   body: `${reply.info.title}\n\nGenres: ${reply.info.genres}\nstatus: ${reply.info.status}\nrelease: ${reply.info.release}\n\n${reply.info.description}\n\n~ ${leiamU.title}\nChapter: ${leiamU.chapter}`,
   attachment: leiamY
 }, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
  }, event.messageID);
 }
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  const { MANGA } = require("@consumet/extensions");
 const leiamA = new MANGA.MangaDex();
bot.react("✅", event.messageID, (err) => {}, true);
  const leiamB = (await leiamA.search(chat)).results;
 const leiamC = []
 let leiamD = 0;
 const leiamE = []
 for (var leiam of leiamB) {
leiamC.push(`━━━━━━⟨ ${leiamD += 1} ⟩━━━━━━━\n${leiam.title}\n\nStatus: ${leiam.status}\nRelease: ${leiam.releaseDate}\n\nDescription: ${leiam.description}\n━━━━━━━━━━━━━━━━\n\n`);
leiamE.push(leiam.id);
}
return bot.chat(`${language.search.replace("{0}", chat)}\n\n${leiamC.join("")}\n\n${language.number}`, event.threadID, (err, info) => {
  global.reply.push({
    command: this.alice.command,
    messageID: info.messageID,
    author: event.messageID,
    type: "leiamnashA",
    leiamE
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