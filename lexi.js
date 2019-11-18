const google = require('google');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	
	if (message.author.bot) return;

	else if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');

	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');

	} else if (message.content === `${prefix}noot`) {
		message.channel.send('Noot Noot Bitch.');

	} else if (message.content === `${prefix}test`) {
		message.channel.send(message.content);


	} else if (message.content.toLowerCase().startsWith('im')) {
		let nick = message.content;
		nick = nick.replace("im", "");
		message.channel.send('hi' + nick + ', I\'m Lexi! :)');	
		message.member.setNickname(nick);

	} else if (message.content.toLowerCase().startsWith('i\'m')) {
		let nick = message.content;
		nick = nick.toLowerCase().replace("i\'m", "");
		message.channel.send('hi' + nick + ', I\'m Lexi! :)');	
		message.member.setNickname(nick);
	}


	
});

client.login(token);


