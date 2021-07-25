const MessageEmbed = require('discord.js').MessageEmbed;
const xlsx = require('xlsx');
const fs = require('fs');

const wb = xlsx.readFile('metas.xlsx');
let worksheets = {};

for (const sheetName of wb.SheetNames) {
    worksheets[sheetName] = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
}



/* console.log("json:\n", JSON.stringify(worksheets.Planilha3), "\n\n");
console.log(worksheets.Planilha3); */  // MOSTRA SE O JSON DA PLANILHA DO EXCEL ESTA CORRETO



module.exports = {
    name: "coordenadoria",
    description: "Mostra os membros da DE desse ano",
    execute (message, args) {
        const embed = new MessageEmbed()
        .setColor('#dbb826')
        .setTitle('Coordenadoria')
        .setURL('https://portal.brasiljunior.org.br/ejs/aurea/perfil')
        .setDescription('Eleitos pela DE em Julho/2021')
        .setThumbnail('https://i.ibb.co/xgLnZt4/urea-Selo-Copia.png')
        .addFields(
            { name: 'Coordenadora de Arquitetura e Urbanismo', value: worksheets.Planilha3[0].ArqEUrb , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenador de Computação', value: worksheets.Planilha3[0].Comp , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenadora de Elétrica', value: worksheets.Planilha3[0].Eletr , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenador de Automação', value: worksheets.Planilha3[0].Autom , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenador de EndoMarketing', value: worksheets.Planilha3[0].Endo , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenadora de InboundMarketing', value: worksheets.Planilha3[0].Inbound , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenador de Pós-Vendas', value: worksheets.Planilha3[0].PosV , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenador de Vendas', value: worksheets.Planilha3[0].Vendas , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenadora de Gente', value: worksheets.Planilha3[0].Gente , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Coordenadora de Gestão', value: worksheets.Planilha3[0].Gestao , inline: true },
            { name: '\u200B', value: '\u200B' },
        )
        .setImage('https://i.ibb.co/ss5P36k/Em-busca-do-TRI.png')
        .addField("Desenvolvido com node.js usando a biblioteca discord.js", "[Clique aqui](https://github.com/BarretoNV/AureaBot) para ver o código fonte no github.")
        .setTimestamp()
        .setFooter('Desenvolvido por Gui Barreto', 'https://i.imgur.com/wSTFkRM.png')


        message.reply(embed);
    }


}