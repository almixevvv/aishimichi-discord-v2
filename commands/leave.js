const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const Discord = require('discord.js');
const greetMessage = require('../library/reply');

module.exports = {
	name: 'dc',
	description: 'Disconnected from voice channel',
	async execute(message, args) {
		const voiceChannel = message.member.voice.channel;
		const embed = new Discord.MessageEmbed();

		let greetingMessage = greetMessage.youtubeDisconnectedReply();

		if (!voiceChannel) {
			embed
				.setColor(greetingMessage.color)
				// .setTitle('Have a nice day!')
				.setTitle(greetingMessage.message)
				.setImage(greetingMessage.gif)
				.setTimestamp();

			return message.channel.send(embed);
		}

		await voiceChannel.leave();
		await message.channel.send(`That's the song. I'm tired, you coming to bed soon?`);
	}
};
