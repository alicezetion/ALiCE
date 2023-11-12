exports.leiamnash = async function({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
  try {
  if (!event.body) return;
const leiamnash = ["الأمر الذي تكتبه غير موجود في نظامي، هل تقص", "আপনার টাইপ করা কমান্ড আমার সিস্টেমে বিদ্যমান নেই, আপনি কি বলতে চাচ্ছেন", "the command you type doesn't exist in my system you mean", "perintah yang Anda ketik tidak ada di sistem saya, maksud Anda", "入力したコマンドはシステムに存在しません。つまり", "lệnh bạn gõ không tồn tại trong hệ thống của tôi, ý bạn là", "My prefix is:", "🌐 System prefix:", "Default Prefix:", "[ 𝙼𝙸𝙳𝙾𝚁𝙸𝚈𝙰 𝙱𝙾𝚃 ]", "[ ☕ | Coffee Bot ]", '🔍 "', "⚠ | The command you used does not exist", "commands list", "𝗕𝗢𝗧 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗" ]

leiamnash.forEach(async(leiam) => {
  if (event.body.toLowerCase().includes(leiam)) {
  const leiamX = (await bot.getUserInfo(event.senderID))[event.senderID].name;
    await database.banBot(event.senderID);
  for (var leiamY of alice.admin) {
    bot.chat(`𝗕𝗢𝗧 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡\notherbot detected\n\nName: ${leiamX}\nUID: ${event.senderID}`, leiamY)
 }
    return bot.chat({
      body: `𝗕𝗢𝗧 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗\n${leiamX}\n\nyou have been automatically banned on alice system to prevent spam`,
      attachment: fs.createReadStream(path.join(__dirname, "..", "..", `alice/assets/image/leiamnash${Math.floor(Math.random() * 35)}.png`)),
     mentions: [{
       id: event.senderID,
       tag: leiamX
     }]
   }, event.threadID, (err) => {
  if (err) return bot.chat(`𝗕𝗢𝗧 𝗗𝗘𝗧𝗘𝗖𝗧𝗘𝗗\n${leiamX}\n\nyou have been automatically banned on alice system to prevent spam`, event.threadID);
    });
   }
  });
 } catch(error) {}
}