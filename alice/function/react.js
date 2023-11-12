exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
  try {
    if (!event.body) return;
const leiamA = [ "aha", "ha", "heh", "ehe", "aah", "gag", "bob", "tang", "pota", "yawa", "xd", "lol", "lmao", "shit", "sht", "😀", "😃", "😄", "😆", "😅", "😂", "🤣", "🙂", "😸", "😹" ]
const leiamB = [ "cry", "sad", "sakit", "ouch", "hurt", "malongkot", "malungkot", "broken", "uhu", "😭", "🥲", "😢", "😥", "😿", "💔", "patay", "dead", "break" ]
const leiamC = [ "lewd", "nsfw", "pussy", "dick", "fck", "fuc", "masturbate", "finger", "seg", "sex", "kantot", "bold", "buld", "porn", "prn", "ass", "boob", "tit", "penis", "vagina", "hentai", "hanime", "sauce", "cum", "👀", "🍑", "🍆", "talong", "inch" ]
const leiamD = [ "wow", "woah", "amazing", "mind", "😮", "😯", "😲", "😳", "🤯", "😵", "🙀" ]
const leiamE = [ "nice", "noice", "great", "cool", "sogoi" ]
const leiamF = [ "sigma", "shes", "🗿", "damn", "nig", "neg" ]
const leiamG = [ "bye", "night", "sleep", "brb" ]
const leiamH = [ "love", "luv", "heart", "pogi", "ganda", "thank", "welcome", "ty", "wc", "ogip", "jowa", "jewa", "babe", "beb", "laby", "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "♥️", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "❣️", "❤️‍🩹", "❤️‍🔥" ]
const leiamI = [ "game", "ml", "cod", "fl", "wr", "pubg", "farlight", "coc", "1v1", "ign", "genshin", "genshit", "duo", "wildrift", "csgo", "steam", "pc", "rank", "classic", "br", "psp", "nintendo", "xbox", "roblox", "bloxfruit", "grind", "comshop" ]

leiamA.forEach(leiam => {
  const leiamX = [ "😄", "😂", "🤣", "😸", "😹" ]
  if (event.body.toLowerCase().includes(leiam)) return bot.react(leiamX[Math.floor(Math.random() * leiamX.length)], event.messageID, (err) => {}, true);
});
leiamB.forEach(leiam => {
  const leiamX = [ "😭", "😢", "😿", "😥", "🥲" ]
  if (event.body.toLowerCase().includes(leiam)) return bot.react(leiamX[Math.floor(Math.random() * leiamX.length)], event.messageID, (err) => {}, true);
});
leiamC.forEach(leiam => {
  const leiamX = [ "😼", "😏", "🫣", "🥴", "🤧", "😖", "🤨", "🧐" ]
  if (event.body.toLowerCase().includes(leiam)) return bot.react(leiamX[Math.floor(Math.random() * leiamX.length)], event.messageID, (err) => {}, true);
});
leiamD.forEach(leiam => {
  const leiamX = [ "😮", "😲", "😵", "🤯" ]
  if (event.body.toLowerCase().includes(leiam)) return bot.react(leiamX[Math.floor(Math.random() * leiamX.length)], event.messageID, (err) => {}, true);
});
leiamE.forEach(leiam => {
  const leiamX = [ "🎇", "🎆", "🎑", "🪔" ]
  if (event.body.toLowerCase().includes(leiam)) return bot.react(leiamX[Math.floor(Math.random() * leiamX.length)], event.messageID, (err) => {}, true);
});
leiamF.forEach(leiam => {
  if (event.body.toLowerCase().includes(leiam)) return bot.react("🗿", event.messageID, (err) => {}, true);
});
leiamG.forEach(leiam => {
  if (event.body.toLowerCase().includes(leiam)) return bot.react("🍃", event.messageID, (err) => {}, true);
});
leiamH.forEach(leiam => {
  const leiamX = [ "❤️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍" ]
  if (event.body.toLowerCase().includes(leiam)) return bot.react(leiamX[Math.floor(Math.random() * leiamX.length)], event.messageID, (err) => {}, true);
});
leiamI.forEach(leiam => {
  const leiamX = [ "🎮", "🕹️", "👾", "💻", "⌨️", "🖱️" ]
  if (event.body.toLowerCase().includes(leiam)) return bot.react(leiamX[Math.floor(Math.random() * leiamX.length)], event.messageID, (err) => {}, true);
});
  } catch(error) {}
 }