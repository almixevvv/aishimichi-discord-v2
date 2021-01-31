module.exports = {
	name: 'setup',
	description: 'Initial Server Setup',
	execute(message, args) {
		// console.log();

		if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You're not Allowed!!!!!!`);
		// if (!message.member.guild.me.hasPermission('ADMINISTRATOR'))
		// return message.channel.send(`You're not authorized for this!`);
	}
};
