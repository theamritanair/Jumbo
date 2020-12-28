const ud = require('relevant-urban');
const Discord = require('discord.js');
const config = require('../config.json');
function randomNumber(min, max) {
	const r = Math.random() * (max - min) + min;
	return Math.floor(r);
}
module.exports = {
	name: 'urban',
	cooldown: 2,
	aliases: ['u'],
	usage: '[word]',
	description: 'Pings the user when the reminder is set',
	async execute(message, args) {
		const worder = args[0];
		if (!worder) return message.channel.send('Specify a word');
		const defin = await ud.all(args.join(' ')).catch(e => {
			message.channel.send('Word not found');
			return;
		});

		const pos = randomNumber(0, defin.length);
		const search = defin[pos];
		const urban = new Discord.MessageEmbed()
			.setTitle(search.word)
			.setURL(search.urbanURL)
			.setDescription(search.definition)
			.addField('Example', search.example)
			.addField('Rating', `👍 ${search.thumbsUp} 👎 ${search.thumbsDown}`)
			.setColor(config.GREEN);

		message.channel.send({ embed: urban }).then(async message => {
			if (defin.length < 1) return;
			await message.react('❌');
			const filter = (reaction) => {
				return ['❌'].includes(reaction.emoji.name);
			};

			message.awaitReactions(filter, { time: 6000 }).then(collected => {
				const reaction = collected.first();

				if(reaction.emoji.name === '❌') {
					message.suppressEmbeds(true);
				}
				message.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
				message.delete();
			});

		});
	},
};