const fetch = require('node-fetch');
const Discord = require("discord.js");
module.exports = {
    name: 'dog',
    aliases: ['woof'],
    cooldown: 3,
    description: 'Sends random dog pictures',
    async execute(message, args) {
        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(data => {
               result = (data.url)
               message.channel.send(result)
            })
    },
};