const { Telegraf } = require('telegraf')
const TOKEN = "8109888789:AAG_xKg1hQ59HA2JVHB8AA_yljVT3HTYnXw";
const bot = new Telegraf(TOKEN);

const web_link = 'https://adt-store.web.app/';

bot.start((ctx) => ctx.reply('Welcome to ADT Store!', {
    reply_markup: {keyboard: [[{text:  'web App', web_app:{url:web_link}}]],
},
})
);

bot.launch()

