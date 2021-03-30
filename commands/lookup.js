const pornhub = require('@justalk/pornhub-api');
const baseUrl = 'https://www.pornhub.com/view_video.php?viewkey=ph56fc59c124c0c';

module.exports = {
	name: 'lookup',
	description: 'Search for videos of your favorite artist',
	async execute(message, args, client) {
		if (args.length == 0) {
			return message.reply(
				`You didn't specify any messages, please check with **'ai?broadcast help'** for more info`
			);
		}

		try {
			const video = await pornhub.page(baseUrl, [
				{
					title: 'mia khalifa'
				}
			]);

			if (video) {
				console.log(video);
			} else {
				console.log(`nothing here`);
			}
		} catch (ex) {
			console.log(ex);
		}
	}
};
