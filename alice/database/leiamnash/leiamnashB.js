 const path = require("path");
 const fs = require("fs");

exports.addCoin = async function(leiam, nash) {
try {
  const leiamnash = require(path.join(__dirname, "..", "..", "..", "alice/database/coin.json"));
if (!(leiam in leiamnash)) {
  leiamnash[leiam] = nash;
fs.writeFileSync("./alice/database/coin.json", JSON.stringify(leiamnash, null, 2), "utf-8");
} else {
  leiamnash[leiam] = leiamnash[leiam] + nash;
fs.writeFileSync("./alice/database/coin.json", JSON.stringify(leiamnash, null, 2), "utf-8");
  }
 } catch (error) {}
}

exports.removeCoin = async function(leiam, nash) {
try {
  const leiamnash = require(path.join(__dirname, "..", "..", "..", "alice/database/coin.json"));
if (!(leiam in leiamnash)) return;
  leiamnash[leiam] = leiamnash[leiam] - nash;
fs.writeFileSync("./alice/database/coin.json", JSON.stringify(leiamnash, null, 2), "utf-8");
 } catch (error) {}
}

exports.coinData = async function() {
try {
  const leiamnash = require(path.join(__dirname, "..", "..", "..", "alice/database/coin.json"));
   return leiamnash;
 } catch (error) {}
}