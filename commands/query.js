const Discord = require('discord.js');
const Models = require('../db/config/dbObjects');
const crypto = require('crypto');

module.exports = {
	name: 'query',
	description: 'Broadcast message through all channels',
	async execute(message, args) {
		const embed = new Discord.MessageEmbed();

		if (args.length == 0) {
			return message.reply(`You didn't specify any query, please check with **'ai?query help'** for more info`);
		}

		const addQueries = async function(arguments) {
			switch (arguments[1]) {
				case 'servers':
					try {
						var curDate = new Date().valueOf().toString();
						var rand = Math.random().toString();

						var key = crypto.createHash('sha1').update(curDate + rand).digest('hex');
						key = key.substr(0, 20);

						var channelID = message.guild.channels.cache.find((data) => data.name === arguments[2]);

						if (channelID.length == 0) {
							return message.channel.send(`Channel name not found, please check again`);
						}

						const servers = await Models.Servers.create({
							REC_ID: key,
							NAME: channelID.guild.name,
							DEFAULT_CHANNEL: channelID.name,
							CHANNEL_ID: channelID.id
						});

						return message.channel.send(`Servers ${servers.REC_ID} was created`);
					} catch (e) {
						return message.channel.send(`Something wrong while inserting data\nError Type: ${e}`);
					}
				case 'tags':
					try {
						var curDate = new Date().valueOf().toString();
						var rand = Math.random().toString();

						var key = crypto.createHash('sha1').update(curDate + rand).digest('hex');
						key = key.substr(0, 20);

						const splitArgs = arguments.split(' ');
						const tagName = splitArgs.shift();
						const tagDescription = splitArgs.join(' ');

						const tags = await Models.Tags.create({
							REC_ID: key,
							NAME: tagName,
							DESCRIPTION: tagDescription,
							USERNAME: message.author.username
						});

						return message.channel.send(`Tag List ${tags.REC_ID} was created`);
					} catch (e) {
						return message.channel.send(`Something wrong while inserting data\nError Type: ${e}`);
					}
				case 'voice':
					try {
					} catch (e) {
						return message.channel.send(`Something wrong while inserting data\nError Type: ${e}`);
					}
					break;
				default:
					return message.channel.send(`No table found! Please check again`);
			}
		};

		switch (args[0]) {
			case 'help':
				embed
					.setColor('#acd0ff')
					// .setTitle('Have a nice day!')
					.setTitle(`Aishimichi Query Format`)
					.addFields(
						{
							name: `**Add Data to Tags Table**`,
							value: `Query Format\n\t*ai?query add tags [*NAME*] [*DESCRIPTION*] [*USERNAME*]*`
						},
						{
							name: `\n**Add Data to Servers Table**`,
							value: `Query Format\n\t*ai?query add servers [*NAME*] [*DESCRIPTION*] [*USERNAME*]*`
						}
					)
					.setTimestamp()
					.setFooter(`Aishimichi DBMS created by OXBOX`);
				return message.channel.send(embed);

			case 'add':
				return addQueries(args);

			case 'delete':
				console.log('delete command');
				return message.channel.send(`Delete Query`);

			case 'update':
				console.log('update command');
				return message.channel.send(`Update Query`);

			default:
				return message.channel.send(`Incorrect command! Please try again`);
		}
	}
};
