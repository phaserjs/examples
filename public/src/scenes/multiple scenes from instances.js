var demo = new Phaser.Scene('Demo');

demo.preload = function () {

    this.load.image('face', 'assets/pics/bw-face.png');

};

demo.create = function () {

    console.log(this.settings.key, 'is alive');

    this.add.image(0, 0, 'face');

    this.game.scene.start('Test');

};

var test = new Phaser.Scene('Test');

test.preload = function () {

    this.load.image('barbarian', 'assets/pics/barbarian-loading.png');

};

test.create = function () {

    console.log(this.settings.key, 'is alive');

    var bob = this.add.image(0, 0, 'barbarian');

    bob.scale = 0.5;

}

var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ demo, test ]
};

var game = new Phaser.Game(config);
