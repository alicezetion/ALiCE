var alice = {
 command: "nsfw",
 type: "prefix",
 author: "leiamnash",
 restrict: "group",
 cooldown: 1
}

async function command({ alice, api, axios, bot, cache, chat, database, event, font, fs, language, log, message, path, scraper, wrapper }) {
try {
  if (!chat) return message(await font(`please use on or off options\n\nexample: ${alice.prefix}${this.alice.command} ⟨ on/off ⟩`), "🗨️");
  const leiam = await database.nsfwData();
 if (chat.toLowerCase().startsWith("on")) {
  const leiamA = (await bot.getThreadInfo(event.threadID)).threadName;
    await database.addNsfw(event.threadID);
  return message(await font(`█▄░█ █▀ █▀▀ █░█░█\n█░▀█ ▄█ █▀░ ▀▄▀▄▀\nsuccessfully enabled\n\nthis group ${leiamA} can now used nsfw commands\n\nwarning:\n\nnsfw commands are contained lewd stuff please be responsible as a user`), "✅");
}
  if (chat.toLowerCase().startsWith("off")) {
  const leiamA = (await bot.getThreadInfo(event.threadID)).threadName;
    await database.removeNsfw(event.threadID);
  return message(await font(`█▄░█ █▀ █▀▀ █░█░█\n█░▀█ ▄█ █▀░ ▀▄▀▄▀\nsuccessfully disabled\n\nthis group ${leiamA} is no longer access for nsfw commands`), "✅");
}
 return message(await font(`please use on or off options\n\nexample: ${alice.prefix}${this.alice.command} ⟨ on/off ⟩`), "🗨️");
} catch (error) {
 log.error(`[ ${this.alice.command} ] » ${error}`);
  return bot.chat(`[ ${this.alice.command} ] » ${language.error}`, event.threadID, event.messageID);
 }
}

module["exports"] = {
  alice,
  command
}