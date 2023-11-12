module.exports = async function(leiamnash) {
  try {
const axios = require("axios");
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const leiamX = leiamnash.split("=");
const [leiam, nash] = leiamX.map((item) => item.trim());
    
const leiamA = [ "https://i.ibb.co/7k5G4Cn/20230924-203546-0000.png", "https://i.ibb.co/Q6Vg9k3/20230924-203433-0000.png", "https://i.ibb.co/cQwTTzb/20230924-203343-0000.png", "https://i.ibb.co/PYXBNvM/20230924-203234-0000.png", "https://i.ibb.co/Ch1v2s1/20230924-203042-0000.png", "https://i.ibb.co/WzbVG31/20230924-202920-0000.png", "https://i.ibb.co/ZG6XLws/20230924-202753-0000.png", "https://i.ibb.co/BKVKBS3/20230924-202608-0000.png", "https://i.ibb.co/PZyMpj2/20230924-202445-0000.png", "https://i.ibb.co/7GpLnzP/Reminder-Aesthetic-Pastel-Brown-Instagram-Post-20230924-202211-0000.png", "https://i.ibb.co/BZPmKz1/Reminder-Aesthetic-Pastel-Brown-Instagram-Post-20230924-201857-0000.png", "https://i.ibb.co/bshdcZW/Reminder-Aesthetic-Pastel-Brown-Instagram-Post-20230924-201645-0000.png", "https://i.ibb.co/G2WZdDD/20230924-201551-0000.png", "https://i.ibb.co/dbQML7Z/20230924-201412-0000.png", "https://i.ibb.co/kxKwdzW/20230924-201310-0000.png", "https://i.ibb.co/WDk0cTQ/20230924-201208-0000.png", "https://i.ibb.co/7WZ4xmf/20230924-201001-0000.png", "https://i.ibb.co/zSFszcV/20230924-200909-0000.png", "https://i.ibb.co/bbRbH45/20230924-200801-0000.png", "https://i.ibb.co/2WxRgVZ/Reminder-Aesthetic-Pastel-Brown-Instagram-Post-20230924-200715-0000.png", "https://i.ibb.co/C9cwyLb/20230924-200236-0000.png", "https://i.ibb.co/jZ1B4D3/20230924-195825-0000.png", "https://i.ibb.co/1q8FD15/20230924-195728-0000.png", "https://i.ibb.co/FxJ2HhZ/20230924-195432-0000.png", "https://i.ibb.co/5GTbxpC/Blue-White-Simple-Quotes-of-the-Day-Instagram-Post-20230924-195305-0000.png", "https://i.ibb.co/xMCj0qP/Blue-White-Simple-Quotes-of-the-Day-Instagram-Post-20230924-195220-0000.png", "https://i.ibb.co/80XMR2V/20230924-194848-0000.png", "https://i.ibb.co/wMFrJXW/Blue-White-Simple-Quotes-of-the-Day-Instagram-Post-20230924-194728-0000.png", "https://i.ibb.co/xF4TYyQ/20230924-194403-0000.png", "https://i.ibb.co/6yJKBqr/20230924-193826-0000.png", "https://i.ibb.co/RbKrnmr/20230924-192944-0000.png", "https://i.ibb.co/w6phW2j/20230924-192825-0000.png" ]
    const leiamB = leiamA[Math.floor(Math.random() * leiamA.length)];
    const background = await loadImage(leiamB);
    const canvas = createCanvas(background.width, background.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 29px Serif';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const maxLineWidth = 300;
    const lineHeight = 35;
    const lines = [];
    let line = '';
    for (let i = 0; i < leiam.length; i++) {
      const testLine = line + leiam[i] + ' ';
      const testLineWidth = ctx.measureText(testLine).width;
      if (testLineWidth > maxLineWidth) {
        lines.push(line.trim());
        line = leiam[i] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());
    const textY = canvas.height / 2 - (lines.length - 1) * lineHeight / 2;
    lines.forEach((line, index) => {
      ctx.fillText(line, canvas.width / 2, textY + index * lineHeight);
    });
    ctx.font = '25px Times New Roman';
    ctx.fillText(`~ ${nash}`, canvas.width / 2, canvas.height - 49);
      return canvas;   
 } catch (err) {}
}