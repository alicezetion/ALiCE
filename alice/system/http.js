const express = require("express");
const https = require("https");
const app = express();
const cors = require("cors");
const path = require("path");
const log = require(path.join(__dirname, "..", "..", "alice/wrapper/console.js"));
const httpsServer = https.createServer(app);
require("dotenv").config();
const leiam = Math.floor(Math.random() * 10000);
app.get("/", (req, res) => 
res.send('<html><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1.0"><title>AliceBot</title> <meta name="title" content="your open source and friendly messenger bot develop by leiamnash"><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/LeiamNashRebirth/LeiamNashRebirth/leiamthenutz.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/LeiamNashRebirth/LeiamNashRebirth/leiamNutz.css"><link rel="shortcut icon" href="https://cdn.jsdelivr.net/gh/LeiamNashRebirth/LeiamNashRebirth/Alice%20Zuberg.jpeg" type="image/svg+xml"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet"></head><body><div class="animation-wrapper"><div class="particle particle-1"></div><div class="particle particle-2"></div><div class="particle particle-3"></div><div class="particle particle-4"></div></div><main><img src="https://cdn.jsdelivr.net/gh/LeiamNashRebirth/LeiamNashRebirth/New Project 6 [6679F5D].png" class="w-100"><div class="container" id="service"><h3 class="h2 section-title text-center" style="position: relative; top: 20px;">ALICE BOT</h3><p class="section-text text-center" style="font-size: 18px; position: relative; top: 0px;">your open source and friendly messenger bot develop by leiamnash</p></div></main></body></html>'));
app.listen(leiam, () =>
app.listen(() => log.alice(leiam, "PORT")));
app.use("/", (req, res) => {
	res.send(new Date());
}); 
app.listen(() => log.alice("website connected", "SERVER"));
app.get("/", (req, res) => res.sendStatus(200))