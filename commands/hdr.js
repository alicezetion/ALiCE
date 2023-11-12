var alice = {
 command: "hdr",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 10
}

async function leiamnash(leiam) {
try {
  const axios = require("axios");
  const Jimp = require("jimp");
  const FormData = require("form-data");
  const image = await Jimp.read(leiam);
  const buffer = await new Promise((resolve, reject) => {
 image.getBuffer(Jimp.MIME_JPEG, (err, buf) => {
     if (err) return;
      return resolve(buf);
 });
});
  const form = new FormData();
  form.append('image', buffer, { filename: 'remini.jpg' });
    const { data } = await axios.post(`${global.api.tool}ai/remini`, form, {
      headers: {
        ...form.getHeaders(),
        'accept': 'application/json',
      },
    });
    return data.result;
 } catch (error) {}
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
 if (event.type != "message_reply" || !event.messageReply.attachments[0].url) return;
  message(await font(language.request.replace("{0}", "photo quality enchancer")), "✅");
  const leiamZ = `${cache}hdr_${event.senderID}.png`;
  const leiamX = await leiamnash(event.messageReply.attachments[0].url);
  const leiamS = (await axios.get(leiamX, { 
      responseType: "arraybuffer"
})).data
fs.writeFileSync(leiamZ, Buffer.from(leiamS, 'utf-8'));
return bot.chat({
   attachment: fs.createReadStream(leiamZ)
 }, event.threadID, (err) => {
  if (err) return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
  fs.unlinkSync(leiamZ);
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