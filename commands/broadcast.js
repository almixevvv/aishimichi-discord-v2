const Models = require('../db/config/dbObjects');

module.exports = {
	name: 'broadcast',
	description: 'Broadcast message through all channels',
	async execute(message, args, client) {
		if (args.length == 0) {
			return message.reply(
				`You didn't specify any messages, please check with **'ai?broadcast help'** for more info`
			);
		}

		const serverList = await Models.Servers.findAll();

		try {
			serverList.forEach((guilds) => {
				return client.channels.cache.get(guilds.CHANNEL_ID).send(args.join(' '));
			});
		} catch (e) {
			return message.channel.send(`Could not send message\n Error Code: ${e}`);
		}
	}
};
