class Demo extends Phaser.Scene {

    preload() {

        this.load.image('mushroom', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/mushroom.png');
        this.load.image('classroom', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/images/backgrounds/classroom.png');
    }

    create() {

        this.add.image(400, 300, 'classroom')

        var gameObject = this.add.image(400, 200, 'mushroom')

        this.gameObject = gameObject;
    }

    update() {

      if (this.effect) {
        this.gameObject.postFX.remove(this.effect);
        this.effect = undefined;
      } else {
        this.effect = this.gameObject.postFX.addShadow(10, -10, 0.006, 1, 0xff0000, 10)
      }
    }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        // mode: Phaser.Scale.FIT,
        // autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo
};

var game = new Phaser.Game(config);
