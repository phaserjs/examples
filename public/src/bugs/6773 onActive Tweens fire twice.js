class Example extends Phaser.Scene
{
	constructor()
	{
		super();
	}

	preload ()
	{
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
		this.load.atlas('assets', 'assets/atlas/tweenparts.png', 'assets/atlas/tweenparts.json');
	}

	create ()
	{
		const onActive = function (tween, targets)
		{
			console.count(`onActive ${targets[ 0 ].name}`);
		};

		this.tweens.chain({
			loop: 1,
			onActive: function () { console.log('🔗 onActive Chain 🔗') },
			onLoop: function () { console.log('🔗 onLoop Chain 🔗') },
			tweens: [
				{ targets: { name: 'A', value: 0 }, value: 1, onActive },
				{ targets: { name: 'B', value: 0 }, value: 1, onActive },
				{ targets: { name: 'C', value: 0 }, value: 1, onActive },
			]
		});
	}
}

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	backgroundColor: '#2d2d2d',
	parent: 'phaser-example',
	scene: Example
};

const game = new Phaser.Game(config);
