exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
  try {
  if (!event.body.match(/(?:https?:\/\/)?(?:www.|web.|m.)?(facebook|fb).(com|watch)\/(?:video.php\?v=\d+|(\S+)|photo.php\?v=\d+|\?v=\d+)|\S+\/?(videos|reel)\/((\S+)\/(\d+)|(\d+))\/?/) || event.body.startsWith(alice.prefix)) return;
 if (event.body.startsWith("https://fb.watch/")) event.body = event.attachments[0].facebookUrl;
bot.react("✅", event.messageID, (err) => {}, true);
 const leiamnash = require(scraper + "fbdl.js");
 const leiamY = (await leiamnash(event.body)).sd;
  const leiamI = `${cache}fbdl_${event.senderID}.mp4`;
  const leiamS = (await axios.get(leiamY, { 
      responseType: "arraybuffer"
})).data;
fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
  let leiamX;
if (event.attachments[0].description.toLowerCase() == "facebook") leiamX = event.attachments[0].title;
if (event.attachments[0].description.toLowerCase() != "facebook") leiamX = `${event.attachments[0].description}\n\nuploader: ${event.attachments[0].source}`;
if (event.attachments[0].description.toLowerCase() == "") leiamX = `${event.attachments[0].source}\n\nuploaded on: ${event.attachments[0].title}`;
if (fs.statSync(leiamI).size > 51791701) return bot.react("❎", event.messageID, (err) => { fs.unlinkSync(leiamI) }, true );
 return bot.chat({
   body: `${await font(leiamX)}`,
   attachment: fs.createReadStream(leiamI)
 }, event.threadID, (err) => {
      if (err) return bot.react("❎", event.messageID, (err) => {}, true);
   fs.unlinkSync(leiamI); 
  }, event.messageID);
  } catch(error) {}
 }