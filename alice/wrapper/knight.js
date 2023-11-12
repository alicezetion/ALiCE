const Canvas = require("canvas");
const path = require("path");

Canvas.registerFont(`${__dirname}/../assets/fonts/theboldfont.ttf`, { family: "Bold" });
Canvas.registerFont(`${__dirname}/../assets/fonts/SketchMatch.ttf`, { family: "SketchMatch" });
Canvas.registerFont(`${__dirname}/../assets/fonts/LuckiestGuy-Regular.ttf`, { family: "luckiest guy" });
Canvas.registerFont(`${__dirname}/../assets/fonts/KeepCalm-Medium.ttf`, { family: "KeepCalm" });
Canvas.registerFont(`${__dirname}/../assets/fonts/CubestMedium.otf`, { family: "CubestMedium" });
Canvas.registerFont(`${__dirname}/../assets/fonts/Uni-Italic.ttf`, { family: "Unitalic" });
Canvas.registerFont(`${__dirname}/../assets/fonts/Bult.ttf`, { family: "Built" });
Canvas.registerFont(`${__dirname}/../assets/fonts/beamweaponital.ttf`, { family: "BeamweaponItal" });
Canvas.registerFont(`${__dirname}/../assets/fonts/BrushKing.otf`, { family: "brush" });

module.exports.Gura = require(path.join(__dirname, "canvas/leiamnashI.js"));
module.exports.Gfx1 = require(path.join(__dirname, "canvas/leiamnashD.js"));
module.exports.Gfx2 = require(path.join(__dirname, "canvas/leiamnashE.js"));
module.exports.Gfx3 = require(path.join(__dirname, "canvas/leiamnashF.js"));
module.exports.Gfx4 = require(path.join(__dirname, "canvas/leiamnashG.js"));
module.exports.Gfx5 = require(path.join(__dirname, "canvas/leiamnashH.js"));