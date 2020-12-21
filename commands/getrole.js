module.exports = {
    name: 'getrole',
    aliases: ['gr'],
    cooldown: 2,
    description: 'Adds the role',
    execute(message, args) {
        if (!args.length) {
            return message.reply("Please mention a role!");
        } else {
            var memrole = message.guild.roles.cache.find(role => role.name === args[0]);
            message.member.roles.add(memrole);
            message.reply("Role Assigned!")
        }
    },
};