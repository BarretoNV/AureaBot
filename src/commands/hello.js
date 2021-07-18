module.exports = {
    name: 'hello',
    description: 'Responde sua mensagem com uma saudação aureana!',
    execute(message, args) {
        return message.reply(`Eaí, batendo muita meta??`);
    }
};