const MessageEmbed = require('discord.js').MessageEmbed;
const xlsx = require('xlsx');
const fs = require('fs');

/* const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()

} */

const wb = xlsx.readFile('src/metas.xlsx');
let worksheets = {};

for (const sheetName of wb.SheetNames) {
    worksheets[sheetName] = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
}



console.log("json:\n", JSON.stringify(worksheets.Planilha1), "\n\n");
console.log(worksheets.Planilha1); 


const num = 16;
const numMeta = 25;

module.exports = {
    name: "metas",
    description: "Retorna o quadro de metas do ano",
    execute (message, args) {
        const embed = new MessageEmbed()
        .setColor('#dbb826')
        .setTitle('**QUADRO de METAS ANUAIS** V0.1 Beta')
        .setURL('https://portal.brasiljunior.org.br/ejs/aurea/perfil')
        .setAuthor('Como foram definidas as metas?', 'https://i.ibb.co/qMrpw21/Colagem-png-sem-fundo.png', 'https://drive.google.com/file/d/1DKbI8MYwE8seDS681PhuP-uyqKfKHLjI/view')
        .setDescription('Vamos buscar o TRI?')
        .setThumbnail('https://i.ibb.co/xgLnZt4/urea-Selo-Copia.png')
        .addFields(
            { name: 'Projetos:', value: worksheets.Planilha1 , inline: true },
            { name: 'Meta:', value: numMeta , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Faturamento:', value: num , inline: true },
            { name: 'Meta:', value: numMeta , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Ações compartilhadas:', value: num , inline: true },
            { name: 'Meta:', value: numMeta , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'NPS:', value: num , inline: true },
            { name: 'Meta:', value: numMeta , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Participação em eventos:', value: num , inline: true },
            { name: 'Meta:', value: numMeta , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Projetos de impacto:', value: num , inline: true },
            { name: 'Meta:', value: numMeta , inline: true },
        )
        .setImage('https://i.ibb.co/ss5P36k/Em-busca-do-TRI.png')
        .addField("Desenvolvido com node.js usando a biblioteca discord.js", "[Clique aqui](https://github.com/BarretoNV/AureaBot) para ver o código fonte no github.")
        .setTimestamp()
        .setFooter('Desenvolvido por Gui Barreto', 'https://i.imgur.com/wSTFkRM.png')


        message.reply(embed);
    }


}