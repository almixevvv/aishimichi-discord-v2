const Discord = require('discord.js');
const Models = require('../db/config/dbObjects');
const crypto = require('crypto');

module.exports = {
	name: 'restore',
	description: 'Broadcast message through all channels',
	async execute(message, args) {
		if (!message.member.hasPermission('ADMINISTRATOR'))
			return message.channel.send(`You're not allowed to use this command`);

		if (args.length == 0) {
			return message.reply(`You didn't specify any query, please check with **'ai?restore help'** for more info`);
		}

		switch (args[0]) {
			//Backup the current server member roles and permissions
			case 'backup':
				let memberList = message.guild.members.cache;

				memberList.each((members) => {
					console.log(members.username);
				});

				break;

			//Register the current server to database, so that it can be used to backup and restore
			case 'register':
				try {
					var curDate = new Date().valueOf().toString();
					var rand = Math.random().toString();

					var key = crypto.createHash('sha1').update(curDate + rand).digest('hex');
					key = key.substr(0, 20);

					if (!message.guild.available) {
						return message.channel.send(`Server outage detected. Please try again later`);
					}

					let serverID = message.guild.id;
					let serverName = message.guild.name;
					let memberCount = message.guild.memberCount;

					const servers = await Models.Servers.create({
						REC_ID: key,
						NAME: serverName,
						SERVER_ID: serverID,
						MEMBER_COUNT: memberCount
					});

					return message.channel.send(`Server ${servers.NAME} was successfully registered`);
				} catch (e) {
					return message.channel.send(`Something wrong while inserting data\nError Type: ${e}`);
				}
			//Restore current server roles to existing member
			case 'restore':
				break;

			default:
				break;
		}
	}
};
