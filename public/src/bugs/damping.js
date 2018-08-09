var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'phaser-example',
  scene: {
    create: create
  }
};

var game = new Phaser.Game(config);

function create() {
  var b = Phaser.Math.Angle.WrapDegrees(181);
  console.log(b);
}
