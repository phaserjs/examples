class GameScene extends Phaser.Scene {

	preload() {
  	this.load.image('bomb', 'assets/sprites/bombcolor.png');
  }

  create() {
    const bomb = this.add.image(200, 200, 'bomb')
    bomb.postFX.addBloom(0xffffff, 2, 2, 2, 2);


    this.input.on('wheel', (pointer, gameobjects, dx, dy, dz) => {
      this.scale.resize(this.scale.gameSize.width + dy, this.scale.gameSize.height + dy);
    });
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [GameScene],
  parent: 'phaser-example'
});
