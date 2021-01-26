function youtubeDisconnectedReply() {
	let greetings = [
		{
			message: `How can you ask me to play when you're not even on a voice chat? How despicable`,
			color: '#8e2b4e',
			gif: `https://media.tenor.com/images/d945eff3d42ecb1782955a5658cb763d/tenor.gif`
		},
		{
			message: `Baka! Join a channel first, then come talk to me again`,
			color: '#8e2b4e',
			gif: `https://media.tenor.com/images/060f5a507f504aff5a134453234277bf/tenor.gif`
		},
		{
			message: `You asked me to sing, yet you don't want to hear me?`,
			color: '#8e2b4e',
			gif: `https://media.tenor.com/images/88766fb21e605174be743742a41ab11d/tenor.gif`
		},
		{
			message: `B-b-bu-bu-buu-buuttt where should I go? You're not on any voice channel`,
			color: '#8e2b4e',
			gif: `https://media.tenor.com/images/060f5a507f504aff5a134453234277bf/tenor.gif`
		},
		{
			message: `That's not how the command goes. Join a channel first, then talk to me again`,
			color: '#8e2b4e',
			gif: `https://media.tenor.com/images/88766fb21e605174be743742a41ab11d/tenor.gif`
		}
	];

	let index = Math.floor(Math.random() * greetings.length);

	return greetings[index];
}

module.exports = { youtubeDisconnectedReply };
