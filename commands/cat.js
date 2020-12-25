const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports = {
	name: 'cat',
	aliases: ['meow'],
	cooldown: 3,
	description: 'Sends random cat pictures',
	async execute(message, args) {
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
		message.channel.send(file);
	},
};