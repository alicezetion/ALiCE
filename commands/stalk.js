var alice = {
 command: "stalk",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 5
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
    let leiam;
  if (Object.keys(event.mentions)[0]) leiam = Object.keys(event.mentions)[0];
  if (!chat) leiam = event.senderID;
  const leiamA = `${cache}stalk_${event.senderID}.png`; 
bot.react("✅", event.messageID, (err) => {}, true);
  const leiamX = (await bot.getUserInfo(leiam))[leiam];
  function _0x189f(_0x378763,_0x4d5cff){const _0x1a57d1=_0x1a57();return _0x189f=function(_0x189fb9,_0x403555){_0x189fb9=_0x189fb9-0x1c5;let _0x2da81b=_0x1a57d1[_0x189fb9];return _0x2da81b;},_0x189f(_0x378763,_0x4d5cff);}const _0xc44037=_0x189f;(function(_0x37a9cf,_0x373975){const _0x5e4cdd=_0x189f,_0x3091e6=_0x37a9cf();while(!![]){try{const _0x2e11b8=parseInt(_0x5e4cdd(0x1cc))/0x1+parseInt(_0x5e4cdd(0x1c6))/0x2*(parseInt(_0x5e4cdd(0x1cd))/0x3)+parseInt(_0x5e4cdd(0x1d3))/0x4*(-parseInt(_0x5e4cdd(0x1c7))/0x5)+parseInt(_0x5e4cdd(0x1c9))/0x6*(parseInt(_0x5e4cdd(0x1ca))/0x7)+parseInt(_0x5e4cdd(0x1ce))/0x8*(parseInt(_0x5e4cdd(0x1cb))/0x9)+-parseInt(_0x5e4cdd(0x1d1))/0xa+-parseInt(_0x5e4cdd(0x1c8))/0xb*(parseInt(_0x5e4cdd(0x1d0))/0xc);if(_0x2e11b8===_0x373975)break;else _0x3091e6['push'](_0x3091e6['shift']());}catch(_0x624bb4){_0x3091e6['push'](_0x3091e6['shift']());}}}(_0x1a57,0xc8ba5));const leiamY=(await axios[_0xc44037(0x1c5)]('https://graph.facebook.com/'+leiam+_0xc44037(0x1cf)))[_0xc44037(0x1d2)];function _0x1a57(){const _0x3f57a6=['5188135pxrZQu','24761CYKpTw','4106628HfGwEb','7sFGHfi','9MaAWHh','1021973RxKWJc','3sdndmx','8617864xkffco','?fields=age_range,picture,cover,name,first_name,email,about,birthday,gender,website,hometown,link,location,quotes,relationship_status,significant_other,username,subscribers.limite(0)&access_token=EAAD6V7os0gcBO5Q1ZBVsbM4tqNP55mEPNNKO062ZBB5DSpa2yNy2iGIM52ZAIllGdkKvurhIJkpsad9DoAO4F62333vYwIDgbvTtn6lUZByenYUshKLehkh6qq9q6kHPwPgbIqEZCql1SNnSwdi855ZA8fg7wllZARH0UwuvPjRpvv36Q69LDbu4Aq7d2yHACPAPgZDZD','3804GzhEyZ','9296510jAdZql','data','4XstGoN','get','1438764uuxSFq'];_0x1a57=function(){return _0x3f57a6;};return _0x1a57();}
    const leiamW = [
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
]
 const leiamZ = (await axios.get(`https://graph.facebook.com/${leiam}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { 
   responseType: "arraybuffer",
   muteHttpExceptions: true,
   headers: {
    authority: "graph.facebook.com",
      "cache-control": "max-age=0",
      "sec-ch-ua-mobile": "?0",
      "user-agent": leiamW[Math.floor(Math.random() * leiamW.length)]
  }
 })).data;
fs.writeFileSync(leiamA, Buffer.from(leiamZ, 'utf-8'));

   if (leiamY.significant_other != undefined) leiamY.significant_other = leiamY.significant_other.name;
   if (leiamY.location != undefined) leiamY.location = leiamY.location.name;
   if (leiamY.hometown != undefined) leiamY.hometown = leiamY.hometown.name;

return bot.chat({
  body: await font(`${leiamX.name}\n\nfirstname: ${leiamX.firstName}\ntype: ${leiamX.type}\nvanity: ${leiamX.vanity || "no data"}\nbirthday: ${leiamY.birthday || "no data"}\nfollowers: ${leiamY.subscribers.summary.total_count || "no data"}\ngender: ${leiamY.gender || "no data"}\naddress: ${leiamY.hometown || "no data"}\nlocation: ${leiamY.location || "no data"}\nrelationship: ${leiamY.relationship_status || "no data"}\npartner: ${leiamY.significant_other || "no data"}\nwebsite: ${leiamY.website || "no data"}\nbio: ${leiamY.about || "no data"}\nUID: ${leiam}\nprofile: ${leiamX.profileUrl}\n\nprofile picture:`),
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
