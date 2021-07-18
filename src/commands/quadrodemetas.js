const MessageEmbed = require('discord.js').MessageEmbed;

/* const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()

} */

module.exports = {
    name: "metas",
    description: "Retorna o quadro de metas do ano",
    execute (message, args) {
        const embed = new MessageEmbed()
        .setColor('#dbb826')
        .setTitle('**METAS ANUAIS**')
        .setURL('https://discord.js.org/')
        .setAuthor('Diretoria Executiva', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('GuiBarr3to', 'https://i.imgur.com/wSTFkRM.png');

        message.reply(embed);
    }


}