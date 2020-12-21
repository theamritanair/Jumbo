module.exports = {
    name: 'droprole',
    aliases: ['dr'],
    cooldown: 2,
    description: 'Drops the role. ',
    execute(message, args) {
        if (!args.length) {
            return message.reply("Please mention a role!");
        } else {
            var memrole = message.guild.roles.cache.find(role => role.name === args[0]);
            message.member.roles.remove(memrole);
            message.reply("Role Removed!")
        }
    },
};