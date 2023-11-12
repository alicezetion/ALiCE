 const fs = require("fs");
 const path = require("path");
 const log = require(path.join(__dirname, "..", "wrapper/console.js"));
 const leiamA = fs.readdirSync(path.join(__dirname, "..", "notification/")).filter(leiam => leiam.endsWith(".js"));

exports.leiamnashD = async function({ api, event }) {
for (const leiamX of leiamA) {
try {
 const leiamY = require(path.join(__dirname, "..", `notification/${leiamX}`));
if (event.logMessageType.toLowerCase() == leiamY.alice.type) return leiamY.leiamnash({
    alice: global.alice,
    api: global.api, 
    axios: require("axios"),
    bot: api,
    cache: path.join(__dirname, "..", "..", "alice/cache/"),
    database: global.database, 
    event: event, 
    font: global.font, 
    fs: require("fs"), 
    language: global.language, 
    log: require(path.join(__dirname, "..", "wrapper/console.js")),
    path: require("path"),
    wrapper: path.join(__dirname, "..", "wrapper/")
  });
 
   } catch (error) { console.log(error); }
 }
}