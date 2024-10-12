const telegramBot = require("node-telegram-bot-api");

const myToken = "7607464298:AAGYZ9Iz8G8cdtd9q_t8xt22jXDNm-Jf4c0"
const bot = new telegramBot(myToken, { polling: true});

bot.onText(/\/start/, msg => {
    bot.sendMessage(msg.chat.id, "testBotting!?");
})
