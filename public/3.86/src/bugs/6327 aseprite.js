class Demo extends Phaser.Scene {
	constructor() {
		super({})
	}

	preload() {
		this.load.aseprite("player", "assets/tests/player.png", "assets/tests/player.json")
		this.load.image("player-sheet", "assets/tests/player.png")
	}

	create() {
		// Animated sprite from Aseprite
		this.anims.createFromAseprite("player")
		const player = new Phaser.GameObjects.Container(this)
		const sprite = this.add.sprite(20, 20, "player")
		player.add(sprite)
		this.add.existing(player)
		sprite.play({ key: "PLAYER_IDLE_D", repeat: -1 })

		// Basic sprite for comparison
		const spritesheet = new Phaser.GameObjects.Sprite(this, 80, 10, "player-sheet").setOrigin(0, 0)
		this.add.existing(spritesheet)
	}

	update() {}
}

const zoom = 3

var config = {
	type: Phaser.AUTO,
	parent: "game",
	backgroundColor: "#000000",
	width: 960 / zoom,
	height: 540 / zoom,
	pixelArt: true,
	scale: {
		parent: "phaser-example",
		zoom: zoom,
	},
	scene: Demo,
}

new Phaser.Game(config)
