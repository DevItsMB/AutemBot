const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'list',
    description: 'list!',
    execute(message, args) {

        const Gamedig = require('gamedig');
        Gamedig.query({
            type: 'minecraft',
            host: '193.23.127.112',
            port: '25565',
        }).then((state) => {
            const embed = new MessageEmbed()
                .setTitle('Player List')
                .setColor('#50b748')
                .addField('Players:', state.players.length)

  

            let players = ``;

            for (let i = 0; i < state.players.length; i++) {
                players += `${state.players[i].name}\n`
            }

            embed.setDescription(players);

            embed.setFooter('ServerStatus Beta © 2020');

            message.channel.send(embed);
        }).catch((error) => {
            const embed = new MessageEmbed()
                .setTitle('Player Online')
                .setColor('#50b748')
                .setDescription('SERVER OFFLINE')

                /// { name: '\u200B', value: '\u200B' },
                /// { name: 'Need support?', value: '<#686994156094357651>', inline: true },

                .setFooter('ServerStatus Beta © 2020');

            message.channel.send(embed);
        });
    },
};