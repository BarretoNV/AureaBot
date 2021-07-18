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

/* bot.on('message', (msg) => {
    if (!msg.content.startsWith(process.env.PREFIX) || msg.author.bot) return;

    const args = msg.content.slice(process.env.PREFIX.length).split(" "); // pega as palavras da mensagem com prefixo separadas por espaços
    const command = args.shift();

    try {
        bot.commands.get(command).execute(bot, msg, args);
    } catch (e) {
        return msg.reply("Opa, ainda não conheço esse comando!");
    }
}); */

bot.on('message', message => {
	if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

	const args = message.content.slice(process.env.PREFIX.length).trim().split(" ");
	const command = args.shift().toLowerCase();

	if (!bot.commands.has(command)) return;

	try {
		bot.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Um erro ocorreu e não foi possível executar esse comando! Entre em contato com alguém da equipe de <@&id_computação>');
	}
});