var alice = {
 command: "capcut",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  if (!chat.startsWith("https://www.capcut.com/"))  return message(await font(language.url.replace("{0}", "capcut")), "🗨️");
 message(await font(language.request.replace("{0}", chat)), "✅");
  
const leiam = (await axios.get(`${api.tool}tools/capcutdl?url=${chat}`, {
  headers: {
    'accept': 'application/json',
  },
 })).data.result;
  const leiamI = `${cache}capcut_${event.senderID}.mp4`;
  const leiamS = (await axios.get(leiam.video_ori, { 
      responseType: "arraybuffer"
})).data;
fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
 if (fs.statSync(leiamI).size > 51791701) return bot.chat(language.size, event.threadID, () => fs.unlinkSync(leiamI), event.messageID);
 return bot.chat({
  body: await font(`${leiam.title}\n\ndescription: ${leiam.description}\nviews: ${leiam.digunakan}`),
  attachment: fs.createReadStream(leiamI)
 }, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
   fs.unlinkSync(leiamI); 
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