const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['462503125048360960'];




client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('#wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('#ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('#st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(`${argresult} \` `)
}
});

client.login(process.env.BOT_TOKEN);
