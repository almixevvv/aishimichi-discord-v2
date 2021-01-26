const axios = require('axios').default;
const Discord = require('discord.js');
const greetMessage = require('../library/greetings');

module.exports = {
	name: 'moodbooster',
	description: 'Generate random image',
	execute(message, args) {
		/* RANDOM GIF SEARCH */
		const embed = new Discord.MessageEmbed();
		let url = `https://api.tenor.com/v1/search`;

		let curMessage = greetMessage.getGreetingMessage();
		let curAuthor = greetMessage.getGreetingText(curMessage.name);
		let curGif = greetMessage.getGreetingImage(curMessage.name);

		embed
			.setColor(curMessage.color)
			// .setTitle('Have a nice day!')
			.setTitle(curAuthor)
			.setImage(curGif)
			.setTimestamp();

		// message
		// 	.reply(embed)
		// 	.then((dt) => {
		// 		dt.delete({ timeout: 10000 });
		// 	})
		// 	.catch(console.error);

		message.reply(embed);

		// axios
		// 	.get(url, {
		// 		params: {
		// 			q: args,
		// 			key: '9OYZOVY0ZZMI'
		// 		}
		// 	})
		// 	.then(function(resp) {
		// 		let index = Math.floor(Math.random() * resp.data.results.length);

		// 		message.delete();

		// 		// message
		// 		// 	.reply(embed)
		// 		// 	.then((dt) => {
		// 		// 		dt.delete({ timeout: 10000 });
		// 		// 	})
		// 		// 	.catch(console.error);

		// 		// message.channel.send(
		// 		// `I can give you ${resp.data.results
		// 		// 		.length} for ${args} result my good sir.\nBut I choose to only give you number ${index}`
		// 		// );
		// 		// message.channel.send(resp.data.results[index].url);

		// 		// message.edit(resp.data.results[index].url);
		// 		embed
		// 			.setColor('#fefefe')
		// 			.setTitle('Have a nice day!')
		// 			.setImage(resp.data.results[index].url)
		// 			.setTimestamp();
		// 		return message.channel.send(embed);
		// 	})
		// 	.catch(function(err) {
		// 		console.log(err);
		// 	})
		// 	.then(function() {
		// 		console.log('query done');
		// 	});
		/* END OF RANDOM GIF SEARCH */
		/* RANDOM IMAGE SEARCH */
		// let options = {
		// 	url: 'https://www.dogpile.com/serp?q=cute+anime+girls&sc=SkYz57NDHqpb20',
		// 	method: 'GET',
		// 	headers: {
		// 		Accept: 'text/html',
		// 		'User-Agent': 'Chrome'
		// 	}
		// };
		// request(options, function(err, resp, respBody) {
		// 	if (err) {
		// 		//Handle the error
		// 		return message.reply('There was an error fetching your messages');
		// 	}
		// 	/* Extract the image */
		// 	$ = cheerio.load(respBody);
		// 	let links = $('.image a.link');
		// 	let urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr('href'));
		// 	let pick = urls[Math.floor(Math.random() * urls.length)];
		// 	if (!urls.length) {
		// 		//Handle no result
		// 		return message.reply('There was no images found, try again with another query');
		// 	}
		// 	//Send the final result
		// 	message.channel.send(pick);
		// });
		/* END OF RANDOM IMAGE SEARCH */
	}
};
