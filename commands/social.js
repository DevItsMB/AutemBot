const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'social',
	description: 'social!',
	execute(message, args) {
        

        const embed = new MessageEmbed()
        .setColor('#4788c7')
        .setAuthor('Autem Bot Social Media', 'https://img.icons8.com/ultraviolet/452/fivem.png')
        .setDescription('Check out our Social Media!')
        .addFields(
///     { name: 'Regular field title', value: 'Some value here' },
  
        { name: '❯ 🌐 Website', value: '[autem-servernetwork.de](http://autem-servernetwork.de/)', inline: false },
        { name: '❯ <:IG:783420785166778408> Instagram', value: '[deautem](https://www.instagram.com/deautem/?hl=de)', inline: false },
        { name: '❯ <:Twitter:783420889491963964> Twitter', value: '[DeAutem](https://twitter.com/DeAutem)', inline: false },

        )
///        .addField('Inline field title', 'Some value here', true)


        .setFooter('Autem Bot © 2020');
        message.channel.send(embed);
    }
};