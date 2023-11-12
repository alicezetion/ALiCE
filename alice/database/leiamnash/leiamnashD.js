 const path = require("path");
 const fs = require("fs");

 exports.rankData = async function() {
    const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/rank.json"));
      return leiam;
 }