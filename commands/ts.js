const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports = {
    name: 'ts',
    description: 'ts!',
    execute(message, args) {

        const Gamedig = require('gamedig');
        Gamedig.query({
            type: 'teamspeak3',
            host: 'autem-servernetwork.de',
        }).then((state) => {
            const embed = new MessageEmbed()
            .setAuthor('Autem TeamSpeak Server', 'https://upload.wikimedia.org/wikipedia/commons/e/ec/TeamSpeak_logo_renovado.png')            
            .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/e/ec/TeamSpeak_logo_renovado.png')
            .setColor('#084490');
            
            let players = ``;

            for (let i = 0; i < state.players.length; i++) {
                players += `${state.players[i].name}\n`
            }

            if (state.players.length === 0) {
                players = '0 players';
            }

            embed.addFields(
                
                { name: 'IP:Port', value: `${state.connect}`, inline: false },


                { name: 'Ping', value: `\`${state.ping}ms\``, inline: true },
                { name: 'Uptime', value: `\`${state.raw.virtualserver_uptime}s\``, inline: true },
                { name: 'Host', value: `\`${state.raw.virtualserver_platform}\``, inline: true },

                { name: 'Status', value: `\`${state.raw.virtualserver_status}\``, inline: true },
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
            .setTitle('Autem TeamSpeak Server')
            .setColor('#084490')
            .setThumbnail('https://lh3.googleusercontent.com/proxy/8st8ADFWNCDBJ1QA2rGnGsCLVsAR8Xqx_E6_qz03Xpd1U1yeXetH2In8H3KMAwV57RhHWcdbGddWP7q4QJj5Ngh5cBLqEqM')
            .setDescription('SERVER OFFLINE')

            /// { name: '\u200B', value: '\u200B' },
            /// { name: 'Need support?', value: '<#686994156094357651>', inline: true },

            .setFooter('Autem Bot © 2020');

            message.channel.send(embed);
        });
    },
};