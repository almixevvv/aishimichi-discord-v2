const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'event',
	description: 'Broadcast message through all channels',
	async execute(message, args, client) {
		const channel = `796577716001308682`;

		const kyranRole = client.emojis.cache.find((emoji) => emoji.name === 'hooehh');
		const rapliRole = client.emojis.cache.find((emoji) => emoji.name === 'HAH');
		const nadiaRole = client.emojis.cache.find((emoji) => emoji.name === 'huaaaa');
		const hansRole = client.emojis.cache.find((emoji) => emoji.name === 'iyeelucungecorkapan');

		let embedMessage = new MessageEmbed().setColor('RANDOM').setTitle(`Nadeko terkutuk`)
			.setDescription(`Silahkan pilih siapa yang menurut kalian bisa menang?\n
            1. **Kyran**  -  ${kyranRole}
            2. **Rapli**  -  ${rapliRole}
            3. **Nadia**  -  ${nadiaRole}
            4. **Hans**  -  ${hansRole}
            Silahkan React sesuai dengan siapa yang bakal memang`);

		let msgEmbed = await message.channel.send(embedMessage);

		msgEmbed.react(kyranRole);
		msgEmbed.react(rapliRole);
		msgEmbed.react(nadiaRole);
		msgEmbed.react(hansRole);

		client.on('messageReactionAdd', async (reaction, user) => {
			if (reaction.message.partial) await reaction.message.fetch();
			if (reaction.partial) await reaction.fetch();
			if (user.bot) return;
			if (!reaction.message.guild) return;

			if (reaction.message.channel.id == channel) {
				message.channel.send(`Iya bener, ngevote disini kok mz.\nDan kamu ngevote ${reaction.emoji.name} kan?`);
			}

			// const guild = reaction.message.guild;
			// 	const roleName = reaction.emoji.name.toLowerCase();
			// 	console.log(roleName);
			// 	const role = guild.roles.cache.find(r => r.name.toLowerCase() === roleName);

			// 	if (role) {
			// 		const member = guild.members.cache.find(m => m.id === user.id);

			// 		//check if they already have a color role
			// 		if (alreadyColorRole) {
			// 			//either make it so he cant react until he unreacts to the role
			// 			//or automatically remove the other reaction.
			// 			reaction.remove();
			// 		} else {
			// 			member.addRole(role.id);
			// 			console.log("Success");
			// 		}
			// 	}
		});
	}
};
