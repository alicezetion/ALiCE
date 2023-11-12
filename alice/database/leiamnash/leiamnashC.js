 const path = require("path");
 const fs = require("fs");

exports.addNsfw = async function(leiamnash) {
try {
  const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/access.json"));
 if (!leiamnash || leiam.nsfw.includes(leiamnash) || isNaN(leiamnash)) return false;
  leiam.nsfw.push(leiamnash);
fs.writeFileSync("./alice/database/access.json", JSON.stringify(leiam, null, 2), "utf-8");
 } catch (error) {}
}

exports.addPremium = async function(leiamnash) {
try {
const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/access.json"));
 if (!leiamnash || leiam.premium.includes(leiamnash) || isNaN(leiamnash)) return false;
  leiam.premium.push(leiamnash);
fs.writeFileSync("./alice/database/access.json", JSON.stringify(leiam, null, 2), "utf-8");
 } catch (error) {}
}

exports.removeNsfw = async function(leiamnash) {
  try {
const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/access.json"));
    if (!leiamnash || isNaN(leiamnash)) return;
    const nash = leiam.nsfw.indexOf(leiamnash);
 leiam.nsfw.splice(nash, 1);
fs.writeFileSync("./alice/database/access.json", JSON.stringify(leiam, null, 4));
 } catch (error) {}
}

exports.removePremium = async function(leiamnash) {
  try {
const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/access.json"));
    if (!leiamnash || isNaN(leiamnash)) return;
    const nash = leiam.premium.indexOf(leiamnash);
 leiam.premium.splice(nash, 1);
fs.writeFileSync("./alice/database/access.json", JSON.stringify(leiam, null, 4));
 } catch (error) {}
}

exports.nsfwData = async function() {
  try {
    const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/access.json"));
    return leiam.nsfw;
 } catch (error) {}
}

exports.premiumData = async function() {
  try {
    const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/access.json"));
    return leiam.premium;
 } catch (error) {}
}