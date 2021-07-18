const Discord = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(path.join(__dirname, '/commands'))
    .filter((filename) => filename.endsWith('.js'));

for (var filename of commandFiles) {
    const command = require('./commands/' + filename);
    bot.commands.set(command.name, command);
}


bot.login(process.env.TOKEN);

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;
    return message.channel.send("Bonjour");
});