const Discord = require('discord.js');
const Models = require('../db/config/dbObjects');
const crypto = require('crypto');

module.exports = {
	name: 'voice',
	description: 'Broadcast message through all channels',
	async execute(message, args) {
		const embed = new Discord.MessageEmbed();
	}
};
