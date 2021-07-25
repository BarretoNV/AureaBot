const MessageEmbed = require('discord.js').MessageEmbed;
const xlsx = require('xlsx');
const fs = require('fs');

const wb = xlsx.readFile('metas.xlsx');
let worksheets = {};

for (const sheetName of wb.SheetNames) {
    worksheets[sheetName] = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
}



/* console.log("json:\n", JSON.stringify(worksheets.Planilha2), "\n\n");
console.log(worksheets.Planilha2); */  // MOSTRA SE O JSON DA PLANILHA DO EXCEL ESTA CORRETO



module.exports = {
    name: "diretoria",
    description: "Mostra os membros da Coordenadoria desse semestre",
    execute (message, args) {
        const embed = new MessageEmbed()
        .setColor('#dbb826')
        .setTitle('Diretoria Executiva')
        .setURL('https://portal.brasiljunior.org.br/ejs/aurea/perfil')
        .setDescription('Eleitos em Assembleia Geral no início do Ano')
        .setThumbnail('https://i.ibb.co/xgLnZt4/urea-Selo-Copia.png')
        .addFields(
            { name: 'Diretor Presidente', value: worksheets.Planilha2[0].Presidente , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Diretora de Marketing', value: worksheets.Planilha2[0].Marketing , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Diretor Comercial', value: worksheets.Planilha2[0].Comercial , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Diretor de Projetos', value: worksheets.Planilha2[0].Projetos , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Diretor de Gente e Gestão', value: worksheets.Planilha2[0].Gente_e_Gestao , inline: true },
            { name: '\u200B', value: '\u200B' },
        )
        .setImage('https://i.ibb.co/ss5P36k/Em-busca-do-TRI.png')
        .addField("Desenvolvido com node.js usando a biblioteca discord.js", "[Clique aqui](https://github.com/BarretoNV/AureaBot) para ver o código fonte no github.")
        .setTimestamp()
        .setFooter('Desenvolvido por Gui Barreto', 'https://i.imgur.com/wSTFkRM.png')


        message.reply(embed);
    }


}