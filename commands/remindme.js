module.exports = {
	name: 'remindme',
	cooldown: 2,
	description: 'Pings the user when the reminder is set',
	execute(message, args) {
		const splitMessage = args.split(' ');
		const filteredMessage = args.replace(splitMessage[0], '');
		function reminder() {
			message.reply('\n**REMINDER:**\n' + filteredMessage);
		}

	},
};