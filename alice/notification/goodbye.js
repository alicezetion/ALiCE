var alice = {
  name: "goodbye",
  type: "log:unsubscribe"
}

async function leiamnash({ alice, api, axios, bot, cache, database, event, font, fs, language, log, path, wrapper }) {
try {
if (event.logMessageData.leftParticipantFbId == bot.getCurrentUserID()) {
 const leiamA = await bot.getThreadInfo(event.threadID);
 const leiamB = (await bot.getUserInfo(event.author))[event.author].name;
for (var leiam of alice.admin) {
  return bot.chat(`𝗕𝗢𝗧 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡\nkick in a group\n\ngroup chat:\n\nname: ${leiamA.threadName}\ntid: ${event.threadID}\nmembers: ${leiamA.participantIDs.length}\n\nremove by:\n\nname: ${leiamB}\nuid: ${event.author}\nprofile:\nfacebook.com/${event.author}`, leiam);
 }
} else {
bot.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, async(err) => {
  if (err) {
  const canvas = require(wrapper + "card.js");
  const leiamX = __dirname + `/../cache/goodbye_${event.logMessageData.leftParticipantFbId}.png`;
   const leiamA = (await bot.getUserInfo(event.logMessageData.leftParticipantFbId))[event.logMessageData.leftParticipantFbId].name;
   const leiamB = await bot.getThreadInfo(event.threadID);
   await canvas({
    title: "goodbye",
    description: language.goodbye.description.replace("{0}", leiamA),
    profile: `https://graph.facebook.com/${event.logMessageData.leftParticipantFbId}/picture?width=540&height=540&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
     file: leiamX
});
  return bot.chat({
    body: language.goodbye.message.replace("{0}", leiamA).replace("{1}", leiamB.participantIDs.length).replace("{2}", leiamB.threadName),
    attachment: fs.createReadStream(leiamX)
  }, event.threadID, (err) => {
   if (err) return bot.chat(language.goodbye.message.replace("{0}", leiamA).replace("{1}", leiamB.participantIDs.length).replace("{2}", leiamB.threadName), event.threadID);
     fs.unlinkSync(leiamX)
  });
 } else {
  return bot.chat(`▄▀█ █▄░█ ▀█▀ █ █▀█ █░█ ▀█▀\n█▀█ █░▀█ ░█░ █ █▄█ █▄█ ░█░\n\ndo you think you can leave here easily?`, event.threadID);
    }
   });
  }
 } catch (error) {}
}

module.exports = {
  alice,
  leiamnash
}