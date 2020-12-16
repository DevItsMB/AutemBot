const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'server',
    description: 'server!',
    execute(message, args) {

        const Gamedig = require('gamedig');
        Gamedig.query({
            type: 'fivem',
            host: '45.93.249.240',
        }).then((state) => {
            const embed = new MessageEmbed()
            .setAuthor('Autem-Servernetwork.net', 'https://img.icons8.com/ultraviolet/452/fivem.png')            
            .setThumbnail('https://img.icons8.com/ultraviolet/452/fivem.png')
            .setColor('#4788c7');
            
            let players = ``;

            for (let i = 0; i < state.players.length; i++) {
                players += `${state.players[i].name}\n`
            }

            if (state.players.length === 0) {
                players = '0 players';
            }

            embed.addFields(
                { name: 'Name', value: `${state.name}`, inline: false },
                
                { name: 'Direct Connect', value: `${state.connect}`, inline: true },

                { name: 'Map', value: `${state.map}`, inline: true },
                { name: 'Gametype', value: `FiveM`, inline: true },

                { name: 'Ping', value: `\`${state.ping}ms\``, inline: true },
                { name: 'Info', value: `\`${state.players.length}\`/\`${state.maxplayers}\``, inline: true },
                { name: 'Player list', value: players, inline: false },

            )   
        
            /// ``\`${state.maxplayers}\`\`${state.players.length}\`
            ///      .addField('Players:', state.players.length)

            /// { name: '\u200B', value: '\u200B' },
            /// { name: 'Need support?', value: '<#686994156094357651>', inline: true },
        

            embed.setFooter(`IP: ${state.connect} | Ping: ${state.ping}ms`);

            message.channel.send(embed);
        }).catch((error) => {
            console.log(error);
            const embed = new MessageEmbed()
            .setTitle('Autem-Servernetwork.net')
            .setColor('#4788c7')
            .setThumbnail('https://lh3.googleusercontent.com/proxy/8st8ADFWNCDBJ1QA2rGnGsCLVsAR8Xqx_E6_qz03Xpd1U1yeXetH2In8H3KMAwV57RhHWcdbGddWP7q4QJj5Ngh5cBLqEqM')
            .setDescription('SERVER OFFLINE')

            /// { name: '\u200B', value: '\u200B' },
            /// { name: 'Need support?', value: '<#686994156094357651>', inline: true },

            .setFooter('Autem Bot Beta © 2020');

            message.channel.send(embed);
        });
    },
};