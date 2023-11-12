try {
 const fs = require("fs");
 const path = require("path");
 const { banUser, banGroup, banBot, removeBanUser, removeBanGroup, removeBanBot, banUserData, banGroupData, banBotData } = require(path.join(__dirname, "..", "database/leiamnash/leiamnashA.js"));
  const { addCoin, removeCoin, coinData } = require(path.join(__dirname, "..", "database/leiamnash/leiamnashB.js"));
  const { addNsfw, addPremium, removeNsfw, removePremium, nsfwData, premiumData } = require(path.join(__dirname, "..", "database/leiamnash/leiamnashC.js"));
  const { rankData } = require(path.join(__dirname, "..", "database/leiamnash/leiamnashD.js"));

 module.exports = {
   banUser,
   banGroup,
   banBot,
   removeBanUser,
   removeBanGroup,
   removeBanBot,
   banUserData,
   banGroupData,
   banBotData,
   addCoin,
   removeCoin,
   coinData,
   addNsfw,
   addPremium,
   removeNsfw,
   removePremium,
   nsfwData,
   premiumData,
   rankData
 }
} catch (error) { console.log(error); }