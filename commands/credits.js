const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'credits',
	description: 'credits!',
	execute(message, args) {
        

        const embed = new MessageEmbed()
        .setColor('#4788c7')
        .setAuthor('Autem Bot Credits', 'https://img.icons8.com/ultraviolet/452/fivem.png')
        .addFields(
  
            { name: '❯ <:Dev:782701847676190730> Developer', value: '[ItsMB#5946](https://github.com/DevItsMB)', inline: true },
            { name: '❯ Third Party Services', value: 'We use a few external services to make the bot what it is today.\n Bot Logo - [icons8](https://img.icons8.com/ultraviolet/452/fivem.png)\n Discord.js - [discord.js.org](https://discord.js.org/#/)\n Gamedig - [gamedig](https://www.npmjs.com/package/gamedig)', inline: false },

        )
///        .addField('Inline field title', 'Some value here', true)


        .setFooter('Autem Bot © 2020');
        message.channel.send(embed);
    }
};