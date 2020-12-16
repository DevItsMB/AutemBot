const Discord = require('discord.js');
const bot = new Discord.Client();

module.exports = {
	name: 'ping',
	description: 'Ping!',
	
	
	
	execute(message, args) {
        message.channel.send('Pong! Your ping is `' + `${client.ws.ping}` + ' ms`');
	},
};