// const { Telegraf } = require('telegraf')
// const TOKEN = "8109888789:AAG_xKg1hQ59HA2JVHB8AA_yljVT3HTYnXw";
// const bot = new Telegraf(TOKEN);

// const web_link = 'https://adt-store.web.app/';

// bot.start((ctx) => ctx.reply('Welcome to ADT Store!', {
//     reply_markup: {keyboard: [[{text:  'web App', web_app:{url:web_link}}]],
// },
// })
// );

// bot.launch()



const { Telegraf } = require('telegraf');
const express = require('express');

// Telegram Bot Token
const TOKEN = "8109888789:AAG_xKg1hQ59HA2JVHB8AA_yljVT3HTYnXw";
const bot = new Telegraf(TOKEN);

// Web link to be used in the bot
const web_link = 'https://adt-store.web.app/';

// Create an Express app to keep the server alive
const app = express();
const PORT = process.env.PORT || 3000;

// Define the bot functionality
bot.start((ctx) =>
    ctx.reply('Welcome to ADT Store!', {
        reply_markup: {
            keyboard: [[{ text: 'web App', web_app: { url: web_link } }]],
        },
    })
);

// Launch the bot
bot.launch();

// Define a basic route for the Express app
app.get('/', (req, res) => {
    res.send('Telegram Bot is running.');
});

// Keep the app running by listening on the specified port
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

