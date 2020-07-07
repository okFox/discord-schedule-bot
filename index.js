require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.once('ready', () => {
	console.log('Ready!');
});

bot.login(TOKEN);

