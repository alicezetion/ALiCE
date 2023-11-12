exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!event.body) return;
const leiamA = require(wrapper + "rank.js");
const leiamB = __dirname + "/../database/rank.json";
const leiamC = await database.rankData();
const leiamQ = `${cache}level_${event.senderID}.png`;

if (event.senderID in leiamC) {
  const leiamD = leiamC[event.senderID];
  const leiamU = ((leiamD.exp) += 1);
  leiamC[event.senderID] = {
      exp: leiamU,
      level: leiamD.level,
      points: leiamD.points
  }
fs.writeFileSync(leiamB, JSON.stringify(leiamC, null, 4));
  const leiamX = leiamD.exp;
  const leiamZ = leiamD.level;
  const leiamP = leiamD.points;
  const leiamY = 10 * (Math.pow(2, leiamZ) - 1);
  leiamC[event.senderID] = {
      exp: leiamD.exp,
      level: leiamD.level,
      points: leiamY
  }
fs.writeFileSync(leiamB, JSON.stringify(leiamC, null, 4));
if (leiamP <= leiamX) {
const leiam = (await bot.getUserInfo(event.senderID))[event.senderID];
  const leiamH = leiamZ + 1;
await leiamA({
  profile: `https://graph.facebook.com/${event.senderID}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
  level: leiamH,
  file: leiamQ,
  name: leiam.firstName
});
leiamC[event.senderID] = {
      exp: leiamD.exp,
      level: leiamH
  }
fs.writeFileSync(leiamB, JSON.stringify(leiamC, null, 4));
  return bot.chat({body: language.level.replace("{0}", leiam.name).replace("{1}", leiamH), mentions: [{ tag: leiam.name, id: event.senderID }], attachment: fs.createReadStream(leiamQ)}, event.threadID, (err) => {
    fs.unlinkSync(leiamQ);
});
 }
} else if (!(event.senderID in leiamC)) {
  leiamC[event.senderID] = {
      exp: 1,
      level: 1
  }
fs.writeFileSync(leiamB, JSON.stringify(leiamC, null, 4));
  }
 } catch (error) { console.log(error); }  
}