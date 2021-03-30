const Discord = require('discord.js');
const Models = require('../db/config/dbObjects');
const crypto = require('crypto');

const addLevel = async function(message) {
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
};

module.exports = addLevel;
