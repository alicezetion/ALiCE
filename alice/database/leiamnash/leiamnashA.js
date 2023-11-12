 const path = require("path");
 const fs = require("fs");

exports.banUser = async function(leiamnash) {
try {
  const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
 if (!leiamnash || leiam.user.includes(leiamnash) || isNaN(leiamnash)) return false;
  leiam.user.push(leiamnash);
fs.writeFileSync("./alice/database/ban.json", JSON.stringify(leiam, null, 2), "utf-8");
 } catch (error) {}
}

exports.banGroup = async function(leiamnash) {
try {
  const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
 if (!leiamnash || leiam.group.includes(leiamnash) || isNaN(leiamnash)) return false;
  leiam.group.push(leiamnash);
fs.writeFileSync("./alice/database/ban.json", JSON.stringify(leiam, null, 2), "utf-8");
 } catch (error) {}
}

exports.banBot = async function(leiamnash) {
try {
  const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
 if (!leiamnash || leiam.bot.includes(leiamnash) || isNaN(leiamnash)) return false;
  leiam.bot.push(leiamnash);
fs.writeFileSync("./alice/database/ban.json", JSON.stringify(leiam, null, 2), "utf-8");
 } catch (error) {}
}

exports.removeBanUser = async function(leiamnash) {
  try {
    const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
    if (!leiamnash || isNaN(leiamnash)) return;
    const nash = leiam.user.indexOf(leiamnash);
 leiam.user.splice(nash, 1);
fs.writeFileSync("./alice/database/ban.json", JSON.stringify(leiam, null, 4));
 } catch (error) {}
}

exports.removeBanGroup = async function(leiamnash) {
  try {
    const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
    if (!leiamnash || isNaN(leiamnash)) return;
    const nash = leiam.group.indexOf(leiamnash);
 leiam.group.splice(nash, 1);
fs.writeFileSync("./alice/database/ban.json", JSON.stringify(leiam, null, 4));
 } catch (error) {}
}

exports.removeBanBot = async function(leiamnash) {
  try {
    const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
    if (!leiamnash || isNaN(leiamnash)) return;
    const nash = leiam.bot.indexOf(leiamnash);
 leiam.bot.splice(nash, 1);
fs.writeFileSync("./alice/database/ban.json", JSON.stringify(leiam, null, 4));
 } catch (error) {}
}

exports.banUserData = async function() {
  try {
  const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
      return leiam.user;
 } catch (error) {}
}

exports.banGroupData = async function() {
  try {
  const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
      return leiam.group;
 } catch (error) {}
}

exports.banBotData = async function() {
  try {
  const leiam = require(path.join(__dirname, "..", "..", "..", "alice/database/ban.json"));
      return leiam.bot;
 } catch (error) {}
}