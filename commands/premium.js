var alice = {
 command: "premium",
 type: "prefix",
 author: "leiamnash",
 restrict: "admin",
 cooldown: 1
}

async function react({ alice, api, axios, bot, cache, database, event, font, fs, language, log, message, path, react, scraper, wrapper }) {
try {
 if (react.type == "leiamnashA") {
 const leiamA = (await bot.getUserInfo(react.leiam))[react.leiam].name;
 await database.addPremium(react.leiam);
 return bot.chat(await font(`█▀█ █▀█ █▀▀ █▀▄▀█ █ █░█ █▀▄▀█\n█▀▀ █▀▄ ██▄ █░▀░█ █ █▄█ █░▀░█\nsuccess\n\nthis user ${leiamA} is now added on  premium list and it can now used premium commands ${react.leiam}`), event.threadID, react.author);
 }
if (react.type == "leiamnashB") {
 const leiamA = (await bot.getUserInfo(react.leiam))[react.leiam].name;
 await database.removePremium(react.leiam);
 return bot.chat(await font(`█▀█ █▀█ █▀▀ █▀▄▀█ █ █░█ █▀▄▀█\n█▀▀ █▀▄ ██▄ █░▀░█ █ █▄█ █░▀░█\nsuccess\n\nthis user ${leiamA} is now removed on premium list and it now no longer access for premium commands ${react.leiam}`), event.threadID, react.author);
 }
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(`please add your options\n\nhow to use?\n${alice.prefix}${this.alice.command} (add/remove) [UID]\n\nexample:\n${alice.prefix}${this.alice.command} add 123456789\n${alice.prefix}${this.alice.command} remove 123456789`), "🗨️");
if (chat.toLowerCase().startsWith("add")) {
  const leiam = await database.premiumData();
  const leiamA = (chat.split(" "))[1];
  const leiamB = (await bot.getUserInfo(leiamA))[leiamA].name;
  if (isNaN(leiamA)) return message(await font(`please enter a valid facebook uid, to get the user uid use ⟨ ${alice.prefix}uid ⟩`), "🆔");
  if (leiam.includes(leiamA)) return message(await font(`this user ${leiamB} is already in premium list`), "💮");
  return bot.chat(await font(`you're currently adding this user to a premium list, please double check the info\n\nname: ${leiamB}\nuid: ${leiamA}\n\nplease react to this message to continue`), event.threadID, (err, info) => {
    global.react.push({
    command: this.alice.command,
    messageID: info.messageID,
    author: event.messageID,
    type: "leiamnashA",
    leiam: leiamA
   });
 }, event.messageID);
}
if (chat.toLowerCase().startsWith("remove")) {
  const leiam = await database.premiumData();
  const leiamA = (chat.split(" "))[1];
  const leiamB = (await bot.getUserInfo(leiamA))[leiamA].name;
  if (isNaN(leiamA)) return message(await font(`please enter a valid facebook uid, to get the user uid use ⟨ ${alice.prefix}uid ⟩`), "🆔");
  if (!leiam.includes(leiamA)) return message(await font(`this user ${leiamB} is currently not available in premium list`), "💮");
  return bot.chat(await font(`you're currently removing this user from premium list, please double check the info\n\nname: ${leiamB}\nuid: ${leiamA}\n\nplease react to this message to continue`), event.threadID, (err, info) => {
    global.react.push({
    command: this.alice.command,
    messageID: info.messageID,
    author: event.messageID,
    type: "leiamnashB",
    leiam: leiamA
   });
 }, event.messageID);
}
return message(await font(`please add your options\n\nhow to use?\n${alice.prefix}${this.alice.command} (add/remove) [UID]\n\nexample:\n${alice.prefix}${this.alice.command} add 123456789\n${alice.prefix}${this.alice.command} remove 123456789`), "🗨️");
 } catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
 return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command,
  react
}