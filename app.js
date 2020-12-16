const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();
const axios = require('axios');
const Discord = require('discord.js');
const { MessageAttachment } = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.DISCORD_BOT_TOKEN;
const { MessageEmbed } = require("discord.js");
const Gamedig = require('gamedig');
const PREFIX = "/";


// --------------------------------------------------------------------------------
bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);

    bot.user.setActivity(`autem-servernetwork.de`, { type: 'WATCHING' });
});

// --------------------------------------------------------------------------------


bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}
 
bot.on('ready', () => {
    console.log("All commands loaded!");
});
 
bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(" ");
 
    switch (args[0]) {
 
        case "server":
            bot.commands.get('server').execute(message, args);
        break;

        case "ts":
            bot.commands.get('ts').execute(message, args);
        break;
        
        case "help":
            bot.commands.get('help').execute(message, args);
        break;

        case "credits":
            bot.commands.get('credits').execute(message, args);
        break;

        case "social":
            bot.commands.get('social').execute(message, args);
        break;
    }
});


// --------------------------------------------------------------------------------



// --------------------------------------------------------------------------------

// use this to read server info in console | DO NOT TOUCH
bot.on('message', message => {
    // If the message is "ping"
    if (message.content === 'test') {
      console.log('MAKING SERVER QUERY');
      Gamedig.query({
          type: 'teamspeak3',
          host: 'autem-servernetwork.de',
        }).then((state) => {
          console.log(state);
          message.channel.send(`${state.raw.vanilla.raw}`);
      }).catch((error) => {
          console.log("Server is offline");
      });
    }
});