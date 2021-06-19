const Discord = require('discord.js');
const { Client, Message, MessageEmbed } = require("discord.js");
const client = new Discord.Client();
 
client.once('ready', () => {
  console.log('Bot jest online!');
})

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'everyone');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('845911256103911448').send(`witamy <@${guildMember.user.id}> na serwerze rozgość się😁!`)
});
		
client.login('ODQ2NDYyMDQ1NDIzNzk2MzI1.YKv3Ng.Mxr270tGUBvob4qvMdq9N8eg65g');