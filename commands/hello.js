module.exports = {
    name: 'hello',
    description: 'Responde sua mensagem com uma saudação aureana!',
    execute(message, args) {
        return message.reply(`Eaí, batendo muita meta?? Por enquanto não tenho muitas funções, mas mande sugestões para a equipe de computação!`);
    }
};