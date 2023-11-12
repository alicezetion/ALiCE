var alice = {
 command: "ngl",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 120
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
message(await font(language.request.replace("{0}", chat)), "✅");
  const leiamA = chat.split("=");
const [leiam, nash] = leiamA.map((item) => item.trim());
  if (!leiam || !nash[1]) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
message(await font(language.request.replace("{0}", chat)), "✅");
  const leiamX = [
    "23d7346e-7d22-4256-80f3-dd4ce3fd8878",
    "ea356443-ab18-4a49-b590-bd8f96b994ee"
  ]
  const headers = {
      'referer': `https://ngl.link/${leiamA[0]}`,
      'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7'
}
  const data = {
      'username': leiam,
      'question': nash,
      'deviceId': leiamX[Math.floor(Math.random () * leiamX.length)],
      'gameSlug': '',
      'referrer': ''
}
for (let leiamC = 0; leiamC < 20; leiamC++) {
      await axios.post('https://ngl.link/api/submit', data, { headers });
} 
  return bot.chat(await font(`Successfully spam\n\nUsername: ${leiamA[0]}\nMessage: ${leiamA[1]}\nSpam: 20 times\n\nlimit has been reached, only supports 20 spam every username`), event.threadID, event.messageID);
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}