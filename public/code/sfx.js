window.sound = (name = 'random') => {
	const displayList = (list, conjunction = "or") =>
		Object.keys(list)
			.slice(0, -1)
			.reverse()
			.map((item, index) => (index == 0 ? conjunction + " " + item : item))
			.reverse()
			.join(", ");

	const sounds = {
		boom: 0.7,
		buzzer: 0.6,
		cow: 0.8,
		damage: 0.8,
		drums: 1.2,
		duck: 0.8,
		error: 0.9,
		huh: 0.75,
		mario: 0.6,
		meow: 0.8,
	};

	if (name == "random")
		name = Object.keys(sounds).sort(() => Math.random() - 0.5)[0];

	if (!sounds[name])
		return alert(
			`Sound doesn't exist! Maybe try ${displayList(
				Object.keys(sounds),
			)} instead.`,
		);

	const audio = new Audio(`https://irvine.hackclub.com/code/sfx/${name}.mp3`);
	audio.volume = sounds[name] * 0.8;
	audio.play();
};
