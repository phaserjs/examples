var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x666666,
  parent: 'phaser-example',
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var sprite;
var group;

var game = new Phaser.Game(config);

function preload() {
  this.load.image('mushroom', 'assets/sprites/50x50-white.png');
  this.load.image('ball', 'assets/sprites/50x50-black.png');
}

function create() {
  group = this.physics.add.staticGroup({
    key: 'ball',
    frameQuantity: 1,
    setXY: { x: 400, y: 350 }
  });
  
  sprite = this.physics.add.image(400, 200, 'mushroom');
  
  sprite.setGravityY(300);
  // or:
  // sprite.setVelocityY(300);
  
  // Works as expected:
  // this.physics.add.collider(sprite, group);
  
  gfx = this.add.graphics();
}

function update() {    
  this.physics.world.collide(sprite, group);
  
  // console.log(Math.round(sprite.y - sprite.body.y - 32));
  
  this.physics.world.wrap(sprite);
}


