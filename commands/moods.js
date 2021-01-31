module.exports = {
	name: 'ping',
	description: 'Check for server pings',
	execute(message, args) {
		message.channel.send('pong!');
	}
};
