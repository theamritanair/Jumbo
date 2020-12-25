module.exports = {
	name: 'remindme',
	cooldown: 2,
	description: 'Pings the user when the reminder is set',
	async execute(message, args) {
		const splitMessage = args[0];
		args.splice(0, 1);
		const filteredMessage = args.join(' ');
		function reminder() {
			message.reply('\n**REMINDER:**' + filteredMessage);
		}

		function timeRespond(time, timeType) {
			let timeUnit;
			switch(timeType) {
			case 'd': {
				timeUnit = 'days';
				break;
			}
			case 's': {
				timeUnit = 'seconds';
				break;
			}
			case 'h': {
				timeUnit = 'hours';
				break;
			}
			case 'm': {
				timeUnit = 'minutes';
				break;
			}
			}
			message.reply('Your reminder has been set. I will remind you in ' + time + timeUnit);
		}

		switch(splitMessage.slice(-1)) {
		case 's': {
			const msDelay = splitMessage.slice(0, -1) * 1000;
			timeRespond(splitMessage.slice(0, -1), 's');
			setTimeout(reminder, msDelay);
			break;
		}
		case 'm': {
			const msDelay = splitMessage.slice(0, -1) * 60000;
			timeRespond(splitMessage.slice(0, -1), 'm');
			setTimeout(reminder, msDelay);
			break;
		}
		case 'h': {
			const msDelay = splitMessage.slice(0, -1) * 3600000;
			timeRespond(splitMessage.slice(0, -1), 'h');
			setTimeout(reminder, msDelay);
			break;
		}
		case 'd': {
			const msDelay = splitMessage.slice(0, -1) * 86400000;
			timeRespond(splitMessage.slice(0, -1), 'd');
			setTimeout(reminder, msDelay);
			break;
		}
		}

	},
};