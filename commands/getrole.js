module.exports = {
	name: 'getrole',
	aliases: ['gr'],
	cooldown: 3,
	usage: '[role]',
	description: 'Adds the role',
	execute(message, args) {
		if (!args.length) {
			return message.reply('Please mention a role!');
		}
		else {
			const memrole = message.guild.roles.cache.find(role => role.name === args[0]);
			const highest = message.member.roles.highest;
			console.log(memrole + 'this is what you want');
			console.log(highest);
			if(highest.comparePositionTo(memrole) <= 0) {
				return message.channel.send('You cannot add roles equal/higher to that member\'s highest role');
			}
			else{
				message.member.roles.add(memrole);
				message.reply('Role Assigned!');
			}


		}
	},
};