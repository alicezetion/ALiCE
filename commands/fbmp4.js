var alice = {
 command: "fbmp4",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
  if (!chat.match(/(?:https?:\/\/)?(?:www.|web.|m.)?(facebook|fb).(com|watch)\/(?:video.php\?v=\d+|(\S+)|photo.php\?v=\d+|\?v=\d+)|\S+\/?(videos|reel)\/((\S+)\/(\d+)|(\d+))\/?/)) return message(await font(language.url.replace("{0}", "facebook")), "🗨️");
 if (chat.startsWith("https://fb.watch/")) chat = event.attachments[0].facebookUrl;
message(await font(language.request.replace("{0}", chat)), "✅");
 const leiamnash = require(scraper + "fbdl.js");
 const leiamY = (await leiamnash(chat)).sd;
  const leiamI = `${cache}fbmp4_${event.senderID}.mp4`;
  const leiamS = (await axios.get(leiamY, { 
      responseType: "arraybuffer"
})).data;
fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
  let leiamX;
if (event.attachments[0].description.toLowerCase() == "facebook") leiamX = event.attachments[0].title;
if (event.attachments[0].description.toLowerCase() != "facebook") leiamX = `${event.attachments[0].description}\n\nuploader: ${event.attachments[0].source}`;
if (event.attachments[0].description.toLowerCase() == "") leiamX = `${event.attachments[0].source}\n\nuploaded on: ${event.attachments[0].title}`;
if (fs.statSync(leiamI).size > 51791701) return bot.chat(language.size, event.threadID, () => fs.unlinkSync(leiamI), event.messageID);
 return bot.chat({
   body: `${await font(leiamX)}`,
   attachment: fs.createReadStream(leiamI)
 }, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
   fs.unlinkSync(leiamI); 
  }, event.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, () => fs.unlinkSync(`${cache}fbmp4_${event.senderID}.mp4`), event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}