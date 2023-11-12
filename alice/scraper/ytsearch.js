 const path = require("path");
 const Scraper = require(path.join(__dirname, "ytsearch/leiamnashD.js")).default;
 const youtube = new Scraper();

module.exports = async function(leiam) {
  try {
  const result = await youtube.search(leiam);
   return result;
  } catch (error) {}
}