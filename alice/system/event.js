 const path = require("path");
 const { leiamnashA } = require(path.join(__dirname, "..", "system/command.js"));
 const { leiamnashB } = require(path.join(__dirname, "..", "system/function.js"));
 const { leiamnashC } = require(path.join(__dirname, "..", "system/auto.js")); 
 const { leiamnashD } = require(path.join(__dirname, "..", "system/notification.js"));
 const { leiamnashE } = require(path.join(__dirname, "..", "system/reply.js"));
const { leiamnashF } = require(path.join(__dirname, "..", "system/react.js"));

 
 
exports.leiamnash = async function({ api, event }) {
try {
switch (event.type) {
    case "message":
    case "message_reply":
    case "message_unsend":
leiamnashA({ api: api, event: event });
leiamnashB({ api: api, event: event });
leiamnashC({ api: api, event: event });
leiamnashE({ api: api, event: event });
      break;
    case "event":
leiamnashD({ api: api, event: event });
      break;
  case "message_reaction":
leiamnashF({ api: api, event: event });
      break;
    default:
      break;
  }
 } catch (error) { console.log(error); }
}