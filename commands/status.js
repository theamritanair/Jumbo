module.exports = {
    name: 'status',
    cooldown: 2,
    description: 'Status Info',
    execute(message, args) {
        if (!args.length) {
            return message.reply(message.author.presence.status);
        } else {
            message.reply("", { files: [message.mentions.users.first().avatarURL({ size: 2048 })] })
        }
    },
};