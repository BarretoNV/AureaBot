const MessageEmbed = require('discord.js').MessageEmbed;
const xlsx = require('xlsx');
const fs = require('fs');

/* const execute = (bot, msg, args) => {
    const embed = new MessageEmbed()

} */

const wb = xlsx.readFile('metas.xlsx');
let worksheets = {};

for (const sheetName of wb.SheetNames) {
    worksheets[sheetName] = xlsx.utils.sheet_to_json(wb.Sheets[sheetName]);
}



console.log("json:\n", JSON.stringify(worksheets.Planilha1), "\n\n");
console.log(worksheets.Planilha1);  // MOSTRA SE O JSON DA PLANILHA DO EXCEL ESTA CORRETO



module.exports = {
    name: "metas",
    description: "Retorna o quadro de metas do ano",
    execute (message, args) {
        const embed = new MessageEmbed()
        .setColor('#dbb826')
        .setTitle('**QUADRO de METAS ANUAIS** V0.2 Beta')
        .setURL('https://portal.brasiljunior.org.br/ejs/aurea/perfil')
        .setAuthor('Como foram definidas as metas?', 'https://i.ibb.co/qMrpw21/Colagem-png-sem-fundo.png', 'https://drive.google.com/file/d/1DKbI8MYwE8seDS681PhuP-uyqKfKHLjI/view')
        .setDescription('Vamos buscar o TRI?')
        .setThumbnail('https://i.ibb.co/xgLnZt4/urea-Selo-Copia.png')
        .addFields(
            { name: 'Projetos:', value: worksheets.Planilha1[1].Projetos , inline: true },
            { name: 'Meta:', value: worksheets.Planilha1[0].Projetos , inline: true },
            { name: 'Porcentagem alcançada:', value: worksheets.Planilha1[2].Projetos , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Faturamento:', value: worksheets.Planilha1[1].Faturamento , inline: true },
            { name: 'Meta:', value: worksheets.Planilha1[0].Faturamento , inline: true },
            { name: 'Porcentagem alcançada:', value: worksheets.Planilha1[2].Faturamento , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Ações compartilhadas:', value: worksheets.Planilha1[1].Acoes_compartilhadas , inline: true },
            { name: 'Meta:', value: worksheets.Planilha1[0].Acoes_compartilhadas , inline: true },
            { name: 'Porcentagem alcançada:', value: worksheets.Planilha1[2].Acoes_compartilhadas , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'NPS:', value: worksheets.Planilha1[1].NPS , inline: true },
            { name: 'Meta:', value: worksheets.Planilha1[0].NPS , inline: true },
            { name: 'Porcentagem alcançada:', value: worksheets.Planilha1[2].NPS , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: '% de Membros que executam:', value: worksheets.Planilha1[1].Membros_que_executam , inline: true },
            { name: 'Meta:', value: worksheets.Planilha1[0].Membros_que_executam , inline: true },
            { name: 'Porcentagem alcançada:', value: worksheets.Planilha1[2].Membros_que_executam , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: '% de Participação em eventos:', value: worksheets.Planilha1[1].Participacao_em_eventos , inline: true },
            { name: 'Meta:', value: worksheets.Planilha1[0].Participacao_em_eventos , inline: true },
            { name: 'Porcentagem alcançada:', value: worksheets.Planilha1[2].Participacao_em_eventos , inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: 'Projetos de impacto:', value: worksheets.Planilha1[1].Projetos_de_impacto , inline: true },
            { name: 'Meta:', value: worksheets.Planilha1[0].Projetos_de_impacto , inline: true },
            { name: 'Porcentagem alcançada:', value: worksheets.Planilha1[2].Projetos_de_impacto , inline: true },
        )
        .setImage('https://i.ibb.co/ss5P36k/Em-busca-do-TRI.png')
        .addField("Desenvolvido com node.js usando a biblioteca discord.js", "[Clique aqui](https://github.com/BarretoNV/AureaBot) para ver o código fonte no github.")
        .setTimestamp()
        .setFooter('Desenvolvido por Gui Barreto', 'https://i.imgur.com/wSTFkRM.png')


        message.reply(embed);
    }


}