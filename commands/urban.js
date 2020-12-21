const ud = require("relevant-urban");
const Discord = require("discord.js");
const config = require("../config.json");

const left = '⬅️';
const right = '➡️';

const generateEmbed = (defin, start) => {
    let urban = new Discord.MessageEmbed()
        .setTitle(defin[start].word)
        .setURL(defin[start].urbanURL)
        .setDescription(defin[start].definition)
        .addField("Example", defin[start].example)
        .addField("Upvotes", defin[start].thumbs_up)
        .addField("Downvotes", defin[start].thumbs_down)
        .setColor(config.GREEN)
    return urban
}

module.exports = {
    name: 'urban',
    cooldown: 2,
    description: 'Pings the user when the reminder is set',
    async execute(message, args) {
        let worder = args[0];
        if (!worder) return message.channel.send("Specify a word")
        let defin = await ud.all(args.join(' ')).catch(e => {
            message.channel.send("Word not found")
            return;
        });


        message.channel.send({ embed: generateEmbed(defin, 0) }).then(async message => {
            if (defin.length < 1) return
            await message.react("➡️")
            const filter = (reaction, user) => {
                return [left, right].includes(reaction.emoji.name)
            };

            message.awaitReactions(filter, { time: 3000 }).then(collected => {
                const reaction = collected.first();

                let currentIndex = 0
                message.reactions.removeAll().then(async() => {
                    reaction.emoji.name === left ? currentIndex -= 1 : currentIndex += 1
                    console.log(currentIndex)
                    message.edit(generateEmbed(defin, currentIndex))

                    if (currentIndex !== 0) await message.react(left)
                    console.log(currentIndex, defin.length)
                    if (currentIndex + 1 < defin.length) await message.react(right)
                    console.log("After ", currentIndex)
                })

            });

        });
    }
}