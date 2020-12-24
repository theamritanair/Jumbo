module.exports = {
    name: 'status',
    cooldown: 2,
    description: 'Status Info',
    execute(message, args) {
        if (!args.length) {
            console.log(message.author.presence.activities)
            return message.reply("just trying");
        } else {
            message.reply("", { files: [message.mentions.users.first().avatarURL({ size: 2048 })] })
        }
    },
};