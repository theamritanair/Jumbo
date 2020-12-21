module.exports = {
    name: 'event',
    cooldown: 2,
    description: 'Event',
    execute(message, args) {
        message.channel.send("<@&783276030550474764>" + ' ' + args.join(' '));
    },
};