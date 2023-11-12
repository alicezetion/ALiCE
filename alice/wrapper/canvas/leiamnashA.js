const { registerFont } = require("canvas");

registerFont(__dirname + "/../../assets/fonts/Manrope-Regular.ttf", {
  family: "Manrope",
  weight: "regular",
  style: "normal"
});

registerFont(__dirname + "/../../assets/fonts/Manrope-Bold.ttf", {
  family: "Manrope",
  weight: "bold",
  style: "normal"
});

registerFont(__dirname + "/../../assets/fonts/Poppins-Regular.ttf", {
  family: "Poppins",
  weight: "regular",
  style: "normal"
});

registerFont(__dirname + "/../../assets/fonts/Poppins-Bold.ttf", {
  family: "Poppins",
  weight: "bold",
  style: "normal"
});

module.exports = {
  Rank: require(__dirname + "/leiamnashC.js"),
  WelcomeLeave: require(__dirname + "/leiamnashB.js")
};