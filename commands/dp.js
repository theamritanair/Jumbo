module.exports = {
    name: 'dp',
    aliases: ['profile'],
    cooldown: 2,
    description: 'Shows display picture',
    execute(message, args) {
        if (!args.length) {
            return message.reply("", { files: [message.author.avatarURL({ dynamic: true, size: 2048 })] });
        } else {
            message.reply("", { files: [message.mentions.users.first().avatarURL({ dynamic: true, size: 2048 })] })
        }
    },
};