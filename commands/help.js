const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'help',
	description: 'help!',
	execute(message, args) {
        

        const embed = new MessageEmbed()
        .setColor('#4788c7')
        .setAuthor('Autem Bot Help', 'https://img.icons8.com/ultraviolet/452/fivem.png')
        .setDescription('To use a command type: `/<command name>` for example: `/help`')
        .addFields(
///     { name: 'Regular field title', value: 'Some value here' },
  
        { name: '❯ <:Utility:782631369318727751> Utility', value: '`server`, `ts`, `credits`', inline: false },

        )
///        .addField('Inline field title', 'Some value here', true)


        .setFooter('Autem Bot © 2020');
        message.channel.send(embed);
    }
};