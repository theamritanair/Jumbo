const clap = '👏'
module.exports = {
    name: 'clap',
    cooldown: 2,
    description: 'Event',
    execute(message, args) {
        if (!args.length) {
            return message.reply("");
        } else {
            message.channel.send(clap + args.join(`  ${clap}`).toUpperCase());
        }
    },
};