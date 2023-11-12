var alice = {
 command: "tiktokmp4",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  if (!chat.match(/^.*https:\/\/(?:m|www|vm|vt)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/)) return message(await font(language.url.replace("{0}", "tiktok")), "🗨️");
  message(await font(language.request.replace("{0}", chat.match(/^.*https:\/\/(?:m|www|vm|vt)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/)[0])), "✅");
  const leiamY = (await axios.get(api.tiktok + chat.match(/^.*https:\/\/(?:m|www|vm|vt)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/)[0])).data;
  const leiamI = `${cache}tiktokmp4_${event.senderID}.mp4`;
  const leiamS = (await axios.get(leiamY.video.noWatermark, { 
      responseType: "arraybuffer"
})).data;
fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
 if (fs.statSync(leiamI).size > 51791701) return bot.chat(language.size, event.threadID, () => fs.unlinkSync(leiamI), event.messageID);
 return bot.chat({
  body: await font(`${leiamY.title}\n\nUploader: ${leiamY.author.name}\nViews: ${leiamY.stats.playCount}\nLikes: ${leiamY.stats.likeCount}\nShared: ${leiamY.created_at}`),
  attachment: fs.createReadStream(leiamI)
 }, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
   fs.unlinkSync(leiamI); 
  }, event.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, () => fs.unlinkSync(`${cache}tiktokmp4_${event.senderID}.mp4`), event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}