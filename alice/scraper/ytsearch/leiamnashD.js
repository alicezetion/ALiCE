 const path = require("path");
const Constants = require(path.join(__dirname, "leiamnashB.js"));
const Scraper = require(path.join(__dirname, "leiamnashC.js"));

module.exports = {
    Constants,
    default: Scraper,
    Scraper
}