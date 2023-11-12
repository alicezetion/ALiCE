exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
  try {
  const request = require("request");
    global.leiamResend || (global.leiamResend = new Map), global.leiamResendBot || (global.leiamResendBot = bot.getCurrentUserID());
    if (event.senderID != global.leiamResendBot && ("message_unsend" != event.type && global.leiamResend.set(event.messageID, {
      leiamA: event.body,
      leiamB: event.attachments
    }), "message_unsend" == event.type)) {
    const leiamnash = global.leiamResend.get(event.messageID);
      if (!leiamnash) return;
      const leiamName = (await bot.getUserInfo(event.senderID))[event.senderID].name;
      let leiamA = 0;
      let leiamImage = [];
      if (leiamnash.leiamB[0] == null) return bot.chat({body: `${leiamName} remove this message\n\n${leiamnash.leiamA}`, mentions: [{tag: leiamName, id: event.senderID}]}, event.threadID);
      if (leiamnash.leiamB[0].type == "audio") {
     const leiamT = __dirname + "/../cache/resend_" + event.senderID + ".mp3";
     const leiamU = (await axios.get(leiamnash.leiamB[0].url, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(leiamT, Buffer.from(leiamU, 'utf-8'));
    return bot.chat({body: `${leiamName} remove this voice message ${"" != leiamnash.leiamA?`\n\ncheck it out: ${leiamnash.leiamA}` : ""}`, mentions: [{tag: leiamName, id: event.senderID}], attachment: fs.createReadStream(leiamT)}, event.threadID, () => fs.unlinkSync(leiamT));
    } else {
    for (var leiamB of leiamnash.leiamB) {
      leiamA += 1;
      const leiamPath = (await request.get(leiamB.url)).uri.pathname;
      const leiamC = leiamPath.substring(leiamPath.lastIndexOf(".") + 1);
      const leiamD = __dirname + "/../cache/resend" + leiamA + "_" + event.senderID + "." + leiamC;
      const leiamE = (await axios.get(leiamB.url, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(leiamD, Buffer.from(leiamE, 'utf-8'));
    leiamImage.push(fs.createReadStream(leiamD).on("end", () => {
        fs.unlinkSync(leiamD);
     }));
    }
    return bot.chat({body: `${leiamName} remove ${leiamnash.leiamB.length} attachment ${"" != leiamnash.leiamA?`\n\ncheck it out: ${leiamnash.leiamA}` : ""}`, mentions: [{tag: leiamName, id: event.senderID}], attachment: leiamImage}, event.threadID);
    }
   }
  } catch(error) {}
 }