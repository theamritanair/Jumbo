const clap = '👏'
module.exports = {
    name: 'clap',
    cooldown: 2,
    usage: 'clap [what you want to scream]',
    description: 'I scream.',
    execute(message, args) {
        if (!args.length) {
            return message.reply("I can't scream silence");
        } else {
            message.channel.send(clap + args.join(`  ${clap}`).toUpperCase());
        }
    },
};