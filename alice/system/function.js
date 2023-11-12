 const path = require("path");
 const fs = require("fs");
 const leiamA = fs.readdirSync(path.join(__dirname, "..", "function/")).filter(leiam => leiam.endsWith(".js"));

exports.leiamnashB = async function({ api, event }) {
  for (var leiam of leiamA) {
try {
    var { leiamnash } = require(path.join(__dirname, "..", `function/${leiam}`));
  let leiamK = (leiam, nash) => api.react(nash, event.messageID, (err) => {
    api.chat({
      body: leiam,
      attachment: fs.createReadStream(path.join(__dirname, "..", "..", `alice/assets/image/leiamnash${Math.floor(Math.random() * 35)}.png`))
  }, event.threadID, (err) => {
      if (err) return api.chat(leiam, event.threadID, event.messageID);
  }, event.messageID);
  }, true);
  leiamnash({
    alice: global.alice,
    api: global.api, 
    axios: require("axios"),
    bot: api,
    cache: path.join(__dirname, "..", "cache/"), 
    database: global.database, 
    event: event, 
    font: global.font, 
    fs: require("fs"), 
    language: global.language, 
    log: require(path.join(__dirname, "..", "wrapper/console.js")),
    message: leiamK,
    path: require("path"),
    scraper: path.join(__dirname, "..", "scraper/"),
    wrapper: path.join(__dirname, "..", "wrapper/")
   });
   } catch (error) { console.log(error); }
 }
}