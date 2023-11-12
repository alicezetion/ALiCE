const axios = require("axios");

module.exports = async function(leiam) {
  try {
const leiamnash = (await axios.post("https://useblackbox.io/chat-request-v4", {
  textInput: leiam,
  allMessages: [{ user: leiam }],
  stream: "",
  clickedContinue: false
})).data.response[0][0]
    return leiamnash;
 } catch (error) {}
}