exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
  try {
      if (!event.body.match(/^.*https:\/\/(?:m|www|vm|vt)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/) || event.body.startsWith(alice.prefix)) return;
 bot.react("✅", event.messageID, (err) => {}, true);
    const leiamY = (await axios.get(api.tiktok + event.body.match(/^.*https:\/\/(?:m|www|vm|vt)?\.?tiktok\.com\/((?:.*\b(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+))|\w+)/)[0])).data;
      const leiamI = `${cache}tikdl_${event.senderID}.mp4`;
      const leiamS = (await axios.get(leiamY.video.noWatermark, { 
          responseType: "arraybuffer"
    })).data;
    fs.writeFileSync(leiamI, Buffer.from(leiamS, 'utf-8'));
     if (fs.statSync(leiamI).size > 51791701) return bot.react("❎", event.messageID, (err) => { fs.unlinkSync(leiamI) }, true );
     return bot.chat({
      body: await font(`${leiamY.title}\n\nUploader: ${leiamY.author.name}\nViews: ${leiamY.stats.playCount}\nLikes: ${leiamY.stats.likeCount}\nShared: ${leiamY.created_at}`),
      attachment: fs.createReadStream(leiamI)
     }, event.threadID, (err) => {
      if (err) return bot.react("✅", event.messageID, (err) => {}, true);
       fs.unlinkSync(leiamI); 
   }, event.messageID);
  } catch(error) {}
 }