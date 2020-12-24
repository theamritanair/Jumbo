module.exports = {
    name: 'getrole',
    aliases: ['gr'],
    cooldown: 3,
    description: 'Adds the role',
    execute(message, args) {
        if (!args.length) {
            return message.reply("Please mention a role!");
        } else {
            var memrole = message.guild.roles.cache.find(role => role.name === args[0]);
            const highest = message.member.roles.highest;
            if(highest.comparePositionTo(memrole) <= 0){
                return message.channel.send('You cannot add roles equal/higher to that member\'s highest role')
            }else{
                message.member.roles.add(memrole);
                message.reply("Role Assigned!")
            }
                
            
        }
    },
};