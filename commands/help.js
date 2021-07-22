const dotenv = require('dotenv');

/* const execute = (bot, msg, args) => {
    let string = "===== AJUDA =====\n";
    bot.commands.forEach((command) => {
        if(command.help) {
            string += '**${command.name}**: ${command.help}\n'
        }
    });
    return msg.channel.send(string);
}; */

module.exports = {
	name: 'help',
	description: 'Lista de comandos e descrição do que eles fazem.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
        const data = [];
		const { commands } = message.client;

		if (!args.length) {
            data.push('Aqui está a lista de todos os meus comandos:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nVocê pode enviar \`${process.env.PREFIX}help [nome do comando]\` para saber mais sobre o comando específico!`);
        
            return message.author.send(data, { split: true })
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('Te enviei uma mensagem no pv com todos os meus comandos!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('Parece que eu não consigo te enviar mensagens pelo pv, você desabilitou suas DM\'s?');
                });
		}

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Este comando não existe!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
	},
};