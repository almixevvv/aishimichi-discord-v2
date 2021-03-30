const Discord = require('discord.js');

// let regMenu = function(message, curMessage) {
// 	setupEmbed.setDescription(
// 		`Please select one of the menu below to continue:\n
// 			1. Greeting Channel Registration
// 			2. Broadcast Channel Registration
// 			3. Custom Voice Channel Registration

// 			0. Exit`
// 	);

// 	const filter = (m) => m.author.id === message.author.id;

// 	curMessage.edit(setupEmbed);

// 	message.channel.send(curMessage).then((m) => {
// 		message.channel
// 			.awaitMessages(filter, { max: 1, time: 5000, errors: [ 'time' ] })
// 			.then((collected) => {
// 				const msg = collected.first();

// 				switch (msg.content) {
// 					case '1':
// 						break;
// 					case '2':
// 						break;
// 					case '3':
// 						break;
// 					case '0':
// 						m.delete();
// 						break;
// 				}
// 			})
// 			.catch((_err) => {
// 				setupEmbed.setDescription(`You don't specify any answer`);
// 				m.edit(setupEmbed);
// 				m.delete({ timeout: 3000 });
// 			});
// 	});
// };

//Setup Message
// const setupMessage = async (msg) => {
// 	const setupEmbed = new Discord.MessageEmbed()
// 		.setTitle('Aishimichi Bot Setup')
// 		.setColor('RANDOM')
// 		.setDescription(
// 			`Aishimichi Bot default setup. This process is **MANDATORY** and cannot be skipped, otherwise you cannot use this bot`
// 		)
// 		.setDescription(
// 			`Please select one of the menu below to continue:\n
// 	1. Default channel registration
// 	2. Greeting message
// 	0. Exit`
// 		)
// 		.setTimestamp()
// 		.setFooter(`Please contact the creator for further info`);

// 	const message = msg.channel.send(setupEmbed);

// 	try {
// 		const collected = await this.channel.awaitMessages(
// 			(m) => m.author.id === message.author.id && !isNaN(parseInt(message.content)),
// 			{ max: 1, time: 15000 }
// 		);

// 		return parseInt(collected.first().content);
// 	} catch (collected) {
// 		setupEmbed.setDescription(`You don't specify any answer`);
// 		msg.edit(setupEmbed);
// 		msg.delete({ timeout: 3000 });
// 	}
// };

module.exports = {
	name: 'setup',
	description: 'Initial Server Setup',
	async execute(message, args) {
		if (!message.member.hasPermission('ADMINISTRATOR'))
			return message.channel.send(`You're not allowed to use this command`);

		const getNumberOfQuestions = async () => {
			const message = await this.channel.send('How many questions should I ask? (1-10)');
			try {
				const collected = await this.channel.awaitMessages(
					(message) => message.author.id === this.owner && !isNaN(parseInt(message.content)),
					{ max: 1, time: 15000 }
				);
				this.channel.send(`You asked for ${collected.first().content} questions.`);
				return parseInt(collected.first().content);
			} catch (collected) {
				this.channel.send('You did not tell me how many questions you wanted. Ending the quiz.');
			}
		};

		const getDifficulty = async () => {
			const message = await this.channel.send('What difficulty would you like: easy, medium, hard?');
			try {
				const collected = await this.channel.awaitMessages(
					(message) =>
						message.author.id === this.owner &&
						[ 'easy', 'medium', 'hard' ].includes(message.content.toLocaleLowerCase()),
					{ max: 1, time: 15000 }
				);
				this.channel.send(`You asked for ${collected.first().content} difficulty.`);
				return collected.first().content;
			} catch (collected) {
				this.channel.send('You did not tell which difficulty you wanted. Ending the quiz.');
			}
		};

		(async () => {
			await getNumberOfQuestions();
			await getDifficulty();
		})();

		// setupMessage(message);
		// const filter = (m) => m.author.id === message.author.id;

		// message.channel.send(setupEmbed).then((m) => {
		// 	message.channel
		// 		.awaitMessages(filter, { max: 1, time: 5000, errors: [ 'time' ] })
		// 		.then((collected) => {
		// 			const msg = collected.first();

		// 			switch (msg.content) {
		// 				case '1':
		// 					m.delete();
		// 					regMenu(message, m);
		// 					break;
		// 				case '2':
		// 					setupEmbed.setDescription(
		// 						`Please select one of the menu below to continue:\n
		// 							1. Greeting Text Registration
		// 							2. Greeting Type Registration
		// 							3. Greeting Gif Registration

		// 							0. Exit`
		// 					);
		// 					m.edit(setupEmbed);
		// 					break;
		// 				case '0':
		// 					m.delete();
		// 					break;
		// 				default:
		// 					console.log(`invalid menu`);
		// 					break;
		// 			}
		// 		})
		// 		.catch((_err) => {
		// 			console.log(m);
		// 			setupEmbed.setDescription(`You don't specify any answer`);
		// 			m.edit(setupEmbed);
		// 			m.delete({ timeout: 3000 });
		// 		});
		// });

		// const msgs = await message.channel.awaitMessages(filter, { time: 5000 });

		/* Only use for this example to have cleaner codes */
		// const collector = new Discord.MessageCollector(message.channel, filter, { time: 15000 });

		// collector.on('collect', (msg) => {
		// 	// console.log(msg.content);
		// 	if (msg.content == '0') {
		// 		collector.stop();
		// 	}

		// 	switch (msg.content) {
		// 		case '1':
		// 			const register = channelRegister(message);
		// 			if (!register) channelSetup(message);
		// 			break;
		// 		case '2':
		// 			console.log(`Greeting message`);
		// 			break;
		// 		case '3':
		// 			console.log(`Broadcast channel`);
		// 			break;
		// 		case '0':
		// 			collector.stop();
		// 			break;
		// 		default:
		// 			message.channel.send(`Invalid command`);
		// 			break;
		// 	}
		// });

		// collector.on('end', (msg) => {
		// 	message.channel.send(`Registration process terminated by user`);
		// });

		// collector.on('dispose', (msg) => {
		// 	console.log('this is now disposed');
		// });
	}
};
