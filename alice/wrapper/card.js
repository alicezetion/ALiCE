const path = require("path");
const fs = require("fs");
const canvas = require(path.join(__dirname, "canvas/leiamnashA.js"));

module.exports = async function({ title, description, profile, file }) {
const leiamA = ["#df6caf", "#4fd91f", "#d84ca8", "#d44032", "#ba32f2", "#230259", "#dfc445", "#feaafe", "#9700fd", "#b5837e", "#94ece8", "#a18b2c", "#a61627", "#d66aa5"]
const leiamB = ["#00ffe2", "#ff00d1", "#4aff00", "#ffc6a5", "#ff4c7c", "#f784d7", "#f90bab", "#1ad0f6", "#ff205c", "#ccbbbb", "#f784d7", "#ff8b94", "#c0d1c2", "#f2e3c6", "#17e364", "#ff9ab0", "#ffdaac", "#d7c0e0"]
const leiamC = leiamA[Math.floor(Math.random() * leiamA.length)];
const leiamD = leiamB[Math.floor(Math.random() * leiamB.length)];
const leiamE = Math.floor(Math.random() * 1000) + 1;
const leiamF = Math.floor(Math.random() * 100) + 1;
const leiamG = `https://raw.githubusercontent.com/LeiamNashRebirth/aoi/main/rankcard${Math.floor(Math.random() * 15)}.png`;
const rank = await new canvas.WelcomeLeave()
    .setAvatar(profile)
    .setBackground("image", leiamG)
    .setTitle(title)
    .setDescription(description, "#fff")
    .setOverlayOpacity(0.100)
    .setAvatarBorder(`${leiamC}`)
    .setBorder(`${leiamD}`)
    .build()
  const data = rank.toBuffer();
fs.writeFileSync(file, data);
}