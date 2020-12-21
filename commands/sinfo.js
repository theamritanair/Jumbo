module.exports = {
    name: 'sinfo',
    cooldown: 2,
    description: 'Server Info',
    execute(message) {
        const msg = `Name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated At: ${message.guild.createdAt}\n`;
        message.reply(msg);
    },
};