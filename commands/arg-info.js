module.exports = {
	name: 'args-info',
	description: 'Info about the arguments',
	args: true,
	execute(message, args) {
		if (!args.length) {
			const embed = new Discord.MessageEmbed()
				.setColor('#fefefe')
				.setTitle('ERROR')
				.setDescription('Not enough arguments.')
				.setFooter('Bot Error Log')
				.addField('Code', 'something', true)
				.addFields({ name: 'Code', value: true, inline: true }, { name: 'Code 2', value: true, inline: true })
				.setTimestamp()
				.setImage('https://tenor.com/view/ava-rose-tiktok-girl-cute-girl-adrian-pretty-gif-17310460')
				.setThumbnail('https://tenor.com/view/ava-rose-tiktok-girl-cute-girl-adrian-pretty-gif-17310460');

			return message.channel.send(embed);
		} else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments Length: ${args.length}`);
	}
};
