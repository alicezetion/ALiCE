const path = require("path");
const scrapper = require(path.join(__dirname, "brainly/leiamnashA.js"));

module.exports = async function(leiam) {
try {
 const brainly = await scrapper(leiam, 6);
  return brainly;
 } catch (error) {}
}