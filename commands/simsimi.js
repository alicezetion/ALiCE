var alice = {
 command: "simsimi",
 type: "prefix",
 author: "leiamnash",
 restrict: "none",
 cooldown: 5
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(language.missing.replace(/\{(\d+)\}/g, alice.prefix + this.alice.command)), "🗨️");
const params = new URLSearchParams();
    params.append("text", chat);
    params.append("lc", "ph");
    axios({
        method: "POST",
        url: "https://api.simsimi.vn/v2/simtalk",
        data: params,
    }).then(async(leiamnash) => {
      return bot.chat(await font(leiamnash.data.message), event.threadID, event.messageID);
    }).catch(async(err) => {
  if (err) {
      const leiam = fs.readFileSync(path.join(__dirname, "..", "alice/assets/simsimi.sql"), "utf-8").split("\n"); 
  return bot.chat(await font(leiam[Math.floor(Math.random() * leiam.length)].trim()), event.threadID, event.messageID);
  }
 });  
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}