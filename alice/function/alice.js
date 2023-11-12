async function leiamnashA(leiam, nash) {
  const axios = require("axios");
  const fs = require("fs");
const leiamA = (await axios.get(leiam, { 
      responseType: "arraybuffer"
})).data;
fs.writeFileSync(nash, Buffer.from(leiamA, "utf-8"));
}

exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
  try {
    if (!event.body) return;
if (event.body.toLowerCase() == "alice" || event.body.toLowerCase() == "hey alice" || event.body.toLowerCase() == "hoy alice" || event.body.toLowerCase() == "hoi alice" || event.body.toLowerCase() == "yo alice" || event.body.toLowerCase() == "hello alice" || event.body.toLowerCase() == "helo alice" || event.body.toLowerCase() == "halo alice" || event.body.toLowerCase() == "hola alice" || event.body.toLowerCase() == "ola alice" || event.body.toLowerCase() == "heyo alice" || event.body.toLowerCase() == "hi alice" || event.body.toLowerCase() == "ey alice" || event.body.toLowerCase() == "oi alice" || event.body.toLowerCase() == "hiy alice" || event.body.toLowerCase() == "hallo alice" || event.body.toLowerCase() == "huy alice" || event.body.toLowerCase() == "uy alice") {
  const leiamX = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  const leiamY = [ `hello ${leiamX}, how can i help you today?`, `yo ${leiamX}, do you have any questions?`, `hi ${leiamX}, if you have some any questions you can ask me`, `hey ${leiamX} how are you today? have some questions?` ]
 return bot.chat(leiamY[Math.floor(Math.random() * leiamY.length)], event.threadID, event.messageID);
}

if (event.body.toLowerCase().startsWith("alice") || event.body.toLowerCase().startsWith("hey alice") || event.body.toLowerCase().startsWith("hoy alice") || event.body.toLowerCase().startsWith("hoi alice") || event.body.toLowerCase().startsWith("yo alice") || event.body.toLowerCase().startsWith("hello alice") || event.body.toLowerCase().startsWith("helo alice") || event.body.toLowerCase().startsWith("halo alice") || event.body.toLowerCase().startsWith("hola alice") || event.body.toLowerCase().startsWith("ola alice") || event.body.toLowerCase().startsWith("heyo alice") || event.body.toLowerCase().startsWith("hi alice") || event.body.toLowerCase().startsWith("ey alice") || event.body.toLowerCase().startsWith("oi alice") || event.body.toLowerCase().startsWith("hiy alice") || event.body.toLowerCase().startsWith("hallo alice") || event.body.toLowerCase().startsWith("huy alice") || event.body.toLowerCase().startsWith("uy alice")) {
 let leiamX = event.body.replace("alice", "").replace("hey alice", "").replace("hoy alice", "").replace("hoi alice", "").replace("yo alice", "").replace("hello alice", "").replace("helo alice", "").replace("halo alice", "").replace("hola alice", "").replace("ola alice", "").replace("heyo alice", "").replace("hi alice", "").replace("ey alice", "").replace("oi alice", "").replace("hiy alice", "").replace("hallo alice", "").replace("huy alice", "").replace("uy alice", "");
bot.react("✅", event.messageID, (err) => {}, true);
  const leiam = (await axios.get(`${api.leiamnash}leiamnashthemostpowerfulmodel?theprojectaliceisoneofthefirstpowerfulmodelcreatedbyleiamnash=${encodeURI(leiamX)}`)).data;
    
if (leiam.type == "leiamnashA") {
 const leiamA = `${cache}alice-ytdl_${event.senderID}.mp4`;
 const leiamB = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  await leiamnashA(leiam.file, leiamA);
    return bot.chat({
      body: await font(leiam.message.replace("{0}", leiamB)),
      attachment: fs.createReadStream(leiamA)
    }, event.threadID, (err) => {
   if (err) return bot.chat(`hello ${leiamB}, sorry to tell you that i can't process your request for now, please try again later`, event.threadID, event.messageID);
     fs.unlinkSync(leiamA);
 }, event.messageID);
}

if (leiam.type == "leiamnashB") {
 const leiamC = `${cache}alice-fbdl_${event.senderID}.mp4`;
 const leiamD = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  await leiamnashA(leiam.file, leiamC);
    return bot.chat({
      body: await font(leiam.message.replace("{0}", leiamD)),
      attachment: fs.createReadStream(leiamC)
    }, event.threadID, (err) => {
   if (err) return bot.chat(`hello ${leiamD}, sorry to tell you that i can't process your request for now, please try again later`, event.threadID, event.messageID);
     fs.unlinkSync(leiamC);
 }, event.messageID);
}

if (leiam.type == "leiamnashC") {
 const leiamE = `${cache}alice-vidl_${event.senderID}.mp4`;
 const leiamF = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  await leiamnashA(leiam.file, leiamE);
    return bot.chat({
      body: await font(leiam.message.replace("{0}", leiamF)),
      attachment: fs.createReadStream(leiamE)
    }, event.threadID, (err) => {
   if (err) return bot.chat(`hello ${leiamF}, sorry to tell you that i can't process your request for now, please try again later`, event.threadID, event.messageID);
     fs.unlinkSync(leiamE);
 }, event.messageID);
}

if (leiam.type == "leiamnashD") {
 const leiamG = `${cache}alice-mudl_${event.senderID}.mp3`;
 const leiamH = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  await leiamnashA(leiam.file, leiamG);
    return bot.chat({
      body: await font(leiam.message.replace("{0}", leiamH)),
      attachment: fs.createReadStream(leiamG)
    }, event.threadID, (err) => {
   if (err) return bot.chat(`hello ${leiamH}, sorry to tell you that i can't process your request for now, please try again later`, event.threadID, event.messageID);
     fs.unlinkSync(leiamG);
 }, event.messageID);
}

if (leiam.type == "leiamnashE") {
   const leiamI = []
      let leiamU = 0;
  const leiamJ = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  for (var leiamK of leiam.file) {
    const leiamL = `${cache}alice-art${leiamU += 1}_${event.senderID}.png`;
  await leiamnashA(leiamK, leiamL);
leiamI.push(fs.createReadStream(leiamL).on("end", () => {
    fs.unlinkSync(leiamL);
 }));
}
  return bot.chat({
      body: await font(leiam.message.replace("{0}", leiamJ)),
      attachment: leiamI
    }, event.threadID, (err) => {
   if (err) return bot.chat(`hello ${leiamJ}, sorry to tell you that i can't process your request for now, please try again later`, event.threadID, event.messageID);
 }, event.messageID);
}


if (leiam.type == "leiamnashG") {
 const leiamO = `${cache}alice-ani_${event.senderID}.mp4`;
 const leiamP = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  await leiamnashA(leiam.file, leiamO);
    return bot.chat({
      body: await font(leiam.message.replace("{0}", leiamP)),
      attachment: fs.createReadStream(leiamO)
    }, event.threadID, (err) => {
   if (err) return bot.chat(`hello ${leiamP}, sorry to tell you that i can't process your request for now, please try again later`, event.threadID, event.messageID);
     fs.unlinkSync(leiamO);
 }, event.messageID);
}

if (leiam.type == "leiamnashH") {
   const leiamQ = []
        let leiamU = 0; 
  for (var leiamR of leiam.file) {
    const leiamS = `${cache}alice-img${leiamU += 1}_${event.senderID}.png`;
  await leiamnashA(leiamR, leiamS);
leiamQ.push(fs.createReadStream(leiamS).on("end", () => {
    fs.unlinkSync(leiamS);
 }));
}
  return bot.chat({
      body: await font(leiam.message),
      attachment: leiamQ
    }, event.threadID, (err) => {
   if (err) return bot.chat(`hello alicization user, sorry to tell you that i can't process your request for now, please try again later`, event.threadID, event.messageID);
 }, event.messageID);
}
        
if (leiam.type == "leiamnashI") {
        return bot.chat(await font(leiam.message), event.threadID, event.messageID);
}

if (leiam.type == "leiamnashJ") {
   const leiamT = []
        leiamUU += 1
  const leiamU = (await bot.getUserInfo(event.senderID))[event.senderID].name;
  for (var leiamV of leiam.file) {
    const leiamW = `${cache}alice-img${leiamUU += 1}_${event.senderID}.png`;
  await leiamnashA(leiamV, leiamW);
leiamT.push(fs.createReadStream(leiamW).on("end", () => {
    fs.unlinkSync(leiamW);
 }));
}
  return bot.chat({
      body: await font(leiam.message.replace("{0}", leiamU)),
      attachment: leiamT
    }, event.threadID, (err) => {
   if (err) return bot.chat(`hello ${leiamU}, sorry to tell you that i can't process your request for now, please try again later`, event.threadID, event.messageID);
  }, event.messageID);
 }
}

  } catch(error) {}
 }