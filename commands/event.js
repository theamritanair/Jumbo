module.exports = {
	name: 'event',
	cooldown: 2,
	aliases: ['e'],
	usage: '[mention] description',
	description: 'Pings for event. Ping a particular role for event by !event role-name message. Else pings everyone. ',
	execute(message, args) {
		if(message.mentions.roles.size != '0') {
			const roleId = (message.mentions.roles.first().id);
			args.splice(0, 1);
			message.channel.send('<@&' + roleId + '>' + ' ' + args.join(' '));
		}
		else{
			message.channel.send('@everyone' + ' ' + args.join(' '));
		}

	},
};