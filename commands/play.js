const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const Discord = require('discord.js');
const greetMessage = require('../library/reply');

module.exports = {
	name: 'play',
	description: 'Play songs from youtube',
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

		const permission = voiceChannel.permissionsFor(message.client.user);

		if (!permission.has('CONNECT'))
			return message.channel.send(`You're not even allowing me to join you! How rude`);
		if (!permission.has('SPEAK'))
			return message.channel.send(`I'm here and yet you don't give me a chance to speak? Are you an idiot?`);
		if (!args.length) return message.channel.send(`What do you want me to do? I can't read your mind`);

		const connection = await voiceChannel.join();

		const videoFinder = async (query) => {
			const videoResult = await ytSearch(query);
			return videoResult.videos.length > 1 ? videoResult.videos[0] : null;
		};

		const video = await videoFinder(args.join(' '));

		if (video) {
			// console.log(video.url);
			const stream = ytdl(video.url, { filter: 'audioonly' });
			connection.play(stream, { seek: 0, volume: 1 }).on('finish', () => {
				message.channel.send(`That's the song. I'm tired, you coming to bed soon?`);
				voiceChannel.leave();
			});

			await message.reply(`:thumbsup: Now Playing *** ${video.title} ***`);
		} else {
			message.channel.send(`There is nothing here! Are you sure you're not mistaken?`);
		}
	}
};
