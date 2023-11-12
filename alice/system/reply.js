 const fs = require("fs");
 const path = require("path");
 const log = require(path.join(__dirname, "..", "wrapper/console.js"));
 
module.exports.leiamnashE = async function({ api, event }) {
try {
  if (!event.messageReply) return;
  if (global.reply.length == 0) return;
  const leiamA = global.reply.findIndex(leiam => leiam.messageID == event.messageReply.messageID);
  if (leiamA < 0) return;
  const leiamB = global.command.get(global.reply[leiamA].command);
  if (!leiamB) return;
let leiamK = (leiam, nash) => api.react(nash, event.messageID, (err) => {
    api.chat({
      body: leiam,
      attachment: fs.createReadStream(path.join(__dirname, "..", "..", `alice/assets/image/leiamnash${Math.floor(Math.random() * 20)}.png`))
}, event.threadID, (err) => {
      if (err) return api.chat(leiam, event.threadID, event.messageID);
 }, event.messageID);
}, true);
leiamB.reply({
    alice: global.alice,
    api: global.api, 
    axios: require("axios"),
    bot: api,
    cache: path.join(__dirname, "..", "cache/"), 
    chat: event.body.slice(global.alice.prefix.length).trim().split(/ +/).slice(1).join(" "), 
    database: global.database, 
    event: event, 
    font: global.font, 
    fs: require("fs"), 
    language: global.language, 
    log: require(path.join(__dirname, "..", "wrapper/console.js")),
    message: leiamK,
    path: require("path"),
    reply: global.reply[leiamA],
    scraper: path.join(__dirname, "..", "scraper/"),
    wrapper: path.join(__dirname, "..", "wrapper/")
  });
 } catch (error) { console.log(error); }
}