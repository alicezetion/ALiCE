var alice = {
  name: "add",
  type: "log:subscribe"
}

async function leiamnash({ alice, api, axios, bot, cache, database, event, font, fs, language, log, path, wrapper }) {
try {
 if (event.logMessageData.addedParticipants.some(leiam => leiam.userFbId == bot.getCurrentUserID())) {
   const leiamA = (await bot.getUserInfo(event.author))[event.author].name;
   const leiamB = await bot.getThreadInfo(event.threadID);
for (var leiam of alice.admin) {
 bot.chat(`𝗕𝗢𝗧 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡\nnew group added\n\ngroup chat:\n\nname: ${leiamB.threadName}\ntid: ${event.threadID}\nmembers: ${leiamB.participantIDs.length}\n\nadded by:\n\nname: ${leiamA}\nuid: ${event.author}\nprofile:\nfacebook.com/${event.author}`, leiam);
 }
    const leiamC = (await bot.getUserInfo(alice.admin[0]))[alice.admin[0]].name;
  return bot.chat({
    body: `▄▀█ █░░ █ █▀▀ █▀▀\n█▀█ █▄▄ █ █▄▄ ██▄\nsuccessfully connected\n\nprefix: ${alice.prefix}\nbotname: ${alice.name}\nowner: ${leiamC}\n\nplease use ⟨ ${alice.prefix}help ⟩ to view the commands`,
    attachment: fs.createReadStream(path.join(__dirname, "..", `assets/add/leiamnash${Math.floor(Math.random() * 5)}.png`))
  }, event.threadID, (err) => {
    if (err) return bot.chat(`▄▀█ █░░ █ █▀▀ █▀▀\n█▀█ █▄▄ █ █▄▄ ██▄\nsuccessfully connected\n\nprefix: ${alice.prefix}\nbotname: ${alice.name}\nowner: ${leiamC}\n\nplease use ⟨ ${alice.prefix}help ⟩ to view the commands`, event.threadID);
    bot.changeNickname(`𝗕𝗢𝗧 ${alice.name}【 ${alice.prefix} 】`, event.threadID, bot.getCurrentUserID());
   });
  } else {
 const leiamY = []
event.logMessageData.addedParticipants.forEach(leiam => {
  leiamY.push(leiam.userFbId);
});
  const canvas = require(wrapper + "card.js");

for (var leiam of leiamY) {
  const leiamX = __dirname + `/../cache/welcome_${leiam}.png`;
   const leiamA = (await bot.getUserInfo(leiam))[leiam].name;
   const leiamB = await bot.getThreadInfo(event.threadID);
   await canvas({
    title: "welcome",
    description: language.welcome.description.replace("{0}", leiamA).replace("{1}", alice.prefix),
    profile: `https://graph.facebook.com/${leiam}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
     file: leiamX
});
  return bot.chat({
    body: language.welcome.message.replace("{0}", leiamA).replace("{1}", leiamB.participantIDs.length).replace("{2}", leiamB.threadName),
    attachment: fs.createReadStream(leiamX)
  }, event.threadID, (err) => {
   if (err) return bot.chat(language.welcome.message.replace("{0}", leiamA).replace("{1}", leiamB.participantIDs.length).replace("{2}", leiamB.threadName), event.threadID);
     fs.unlinkSync(leiamX)
    });
   }
  }
 } catch (error) {}
}

module.exports = {
  alice,
  leiamnash
}