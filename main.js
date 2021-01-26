const Discord = require('discord.js');
const env = require('dotenv').config();

const client = new Discord.Client();
const prefix = process.env.PREFIX;

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter((file) => file.endsWith('.js'));

client.login(process.env.CLIENT_KEY);

client.once('ready', () => {
	console.log('ready to rock');
	client.user.setActivity(`Is angry at you!`);
});

client.on('message', (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName);

	try {
		command.execute(message, args, client);
	} catch (err) {
		console.error(err);
		message.reply('There was an issue with this command!');
	}
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
