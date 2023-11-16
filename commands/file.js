var alice = {
 command: "file",
 type: "auto",
 author: "leiamnash",
 restrict: "admin",
 cooldown: 1
}

async function react({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, react, scraper, wrapper }) {
try {
  const { execSync } = require("child_process");
 bot.react("✅", react.author, (err) => {}, true);
 const leiamnash = (await axios.get(react.leiamY)).data;
 fs.writeFileSync(`${__dirname}/${react.leiamX}`, `${leiamnash}`, "utf-8", function(err) {
     if (err) return api.chat(`failed to install please try again and follow this instructions carefully\n\nhow to use?\n${alice.prefix}${this.alice.command} <file name> => <url>\n\nexample:\n${alice.prefix}${this.alice.command} example.js => https://example.com/leiamnash`, event.threadID, react.author);
 });
     execSync("npm restart");
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
const leiamA = chat.split("=>");
const [leiamX, leiamY] = leiamA.map((item) => item.trim());
 if (!leiamX || !leiamY) return bot.chat(await font(`missing inputs\n\nhow to use?\n${alice.prefix}${this.alice.command} <file name> => <url>\n\nexample:\n${alice.prefix}${this.alice.command} example.js => https://example.com/leiamnash`), event.threadID, event.messageID);
  return bot.chat(await font(`you're currently adding a command in ALiCE file system, this will make your account harmful because some of file command has a troll system that will burn your account instantly, if you think this file is safe please continue\n\nreact to this message to continue`), event.threadID, (err, info) => {
    global.react.push({
    command: this.alice.command,
    messageID: info.messageID,
    author: event.messageID,
    leiamX,
    leiamY
   });
 }, event.messageID);
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command,
  react
}
