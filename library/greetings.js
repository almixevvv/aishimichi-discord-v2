function getGreetingMessage() {
	let greetings = [
		{ name: 'servant', color: '#8e2b4e' },
		{ name: 'tsundere', color: '#acd0ff' },
		{ name: 'oneechan', color: '#acd0ff' },
		{ name: 'imouto', color: '#acd0ff', url: `https://api.tenor.com/v1/search?q=anime%20little%20sister&key=LIVDSRZULELA` },
		{ name: 'idol', color: '#acd0ff', url: `love life`},
		{ name: 'trap', color: '#acd0ff', url: `https://api.tenor.com/v1/search?q=anime%20trap&key=LIVDSRZULELA`},
		{ name: 'yandere', color: '#acd0ff' },
		{ name: 'loli', color: '#acd0ff', url: `https://api.tenor.com/v1/search?q=anime%20loli&key=LIVDSRZULELA`},
		{ name: 'shoujo', color: '#acd0ff' },
		// { name: 'temptress', color: '#00dbff' },
		// { name: 'kouhai', color: '#912857' },
		// { name: 'mistress', color: '#699de0' },
		// { name: 'step-daughter', color: '#cc00b9' }
		/* MAN */
		{ name: 'ikemen', color: '#acd0ff' },
		{ name: 'shota', color: '#acd0ff' },
		{ name: 'jojo', color: '#acd0ff' },
		{ name: 'yankee', color: '#acd0ff' },
		{ name: 'yakuza-franchise', color: '#acd0ff' },
		{ name: 'shonen', color: '#acd0ff' },
		{ name: 'onichan', color: '#acd0ff' },
	];

	let index = Math.floor(Math.random() * greetings.length);

	return greetings[index];
}

function getGreetingText(index) {
	let tsundere = [
		'Do I really have to do this? Well, if you insist',
		`Fine. I'll do it, but not because it's you`,
		`Keep asking me to do stuff! It's not like I'm your girlfriend or anything`,
		`I'll do it, but what do I get in return?`,
		`Stop asking me to do this or I might ended up liking you`
	];

	let servant = [
		`Your wish is my command master`,
		`Anything for you my master`,
		`You know I'm capable of doing much more than this right?`,
		`I wish you would stop asking me to do this master. But, oh well`,
		`Is there anything else?`,
		`Do you also need the blood of your enemies as well master?`
	];

	if (index == 'tsundere') {
		let index = Math.floor(Math.random() * tsundere.length);

		return tsundere[index];
	} else if (index == 'servant') {
		let index = Math.floor(Math.random() * servant.length);

		return servant[index];
	}
}

function getGreetingImage(index) {
	let tsundere = [
		'https://media.tenor.com/images/de923a47efabbadf803493064a504498/tenor.gif',
		'https://media.tenor.com/images/141dc2dc4f07fff2794210ed371c29b9/tenor.gif',
		'https://media.tenor.com/images/d945eff3d42ecb1782955a5658cb763d/tenor.gif',
		'https://media.tenor.com/images/88766fb21e605174be743742a41ab11d/tenor.gif',
		'https://media.tenor.com/images/b28e7296cb06db887be45f93f466c3de/tenor.gif',
		'https://media.tenor.com/images/b1baf4fa90ac2f01eb6b2281cc8aba5d/tenor.gif',
		'https://media.tenor.com/images/88819a7e457c5dc3f124b9d6bb720edc/tenor.gif',
		'https://media.tenor.com/images/6d150940970d5da13e7ba86cc64feb09/tenor.gif',
		'https://media.tenor.com/images/6ca2b52ad158bef35241791a3e409da3/tenor.gif',
		'https://media.tenor.com/images/2bf011d7ff0241f78db5b6cbeaf708b3/tenor.gif',
		'https://media.tenor.com/images/db53e14593f94560e9d48a6b6d3ef8c7/tenor.gif',
		'https://media.tenor.com/images/ac30280aa25be98fedf3f4b9be635bc3/tenor.gif',
		'https://media.tenor.com/images/e72a77c16355eb6af90653bd73473934/tenor.gif'
	];

	let servant = [
		'https://media.tenor.com/images/d6118d607c6af7e0e1106b8da4dcfd1a/tenor.gif',
		'https://media.tenor.com/images/567f474423e45230a3252ece8417b972/tenor.gif',
		'https://media.tenor.com/images/fe048e0074530a5487be10f7ce7b40b6/tenor.gif',
		'https://media.tenor.com/images/3990310d26f69b66210820bcedbb6434/tenor.gif',
		'https://media.tenor.com/images/7bc672ae93bc39d239efcba3648cf359/tenor.gif',
		'https://media.tenor.com/images/060f5a507f504aff5a134453234277bf/tenor.gif'
	];

	if (index == 'tsundere') {
		let index = Math.floor(Math.random() * tsundere.length);

		return tsundere[index];
	} else if (index == 'servant') {
		let index = Math.floor(Math.random() * servant.length);

		return servant[index];
	}
}

module.exports = { getGreetingMessage, getGreetingImage, getGreetingText };
