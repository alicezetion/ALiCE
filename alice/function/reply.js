exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (event.type != "message_reply" || event.messageReply.senderID != bot.getCurrentUserID() || event.body.startsWith(alice.prefix) || !isNaN(event.body)) return;
 const leiamX = `${cache}reply_${event.senderID}.mp3`;
  const leiamnash = fs.readFileSync(path.join(__dirname, "..", "assets/simsimi.sql"), "utf-8").split("\n");
const params = new URLSearchParams();
    params.append("text", event.body);
    params.append("lc", "ph");
const leiamY = (await axios({
        method: "POST",
        url: "https://api.simsimi.vn/v2/simtalk",
        data: params,
    })).data.message;
if (leiamY == undefined) leiamY = leiamnash[Math.floor(Math.random() * leiamnash.length)].trim();
 const leiamA = (await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja&dt=t&q=${encodeURI(leiamY)}`)).data;
		var leiamB = "";
leiamA[0].forEach(leiamnash => (leiamnash[0]) ? leiamB += leiamnash[0] : "");
 const leiamC = (await axios.get(`https://api.tts.quest/v3/voicevox/synthesis?text=${encodeURI(leiamB)}&speaker=17`)).data.mp3StreamingUrl;
  const leiamD = (await axios.get(leiamC, { responseType: 'arraybuffer' })).data;
fs.writeFileSync(leiamX, Buffer.from(leiamD, "utf-8"));
 return bot.chat({
   body: await font(leiamY),
   attachment: fs.createReadStream(leiamX)
 }, event.threadID, (err) => {
   if (err) return bot.chat(leiamY, event.threadID, event.messageID);
  fs.unlinkSync(leiamX);
  }, event.messageID);
 } catch(error) {}
}