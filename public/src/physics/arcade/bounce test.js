var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  }
};

var game = new Phaser.Game(config);

var logo = null;

var prevY = 0;
var prevDirection = null;

function preload() {
  this.load.image("logo", "assets/sprites/phaser3-logo.png");
  this.load.image("marker", "assets/sprites/longarrow.png");
}

function create() {
  logo = this.physics.add.image(400, 100, "logo");
  logo.setOrigin(0, 0);
  logo.setVelocity(100, 100);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);
  logo.setFriction(0);
  logo.setDrag(0);
}

function update() {
  var y = logo.y;
  var direction;
  if (y > prevY)
    direction = 'down';
  else 
    direction = 'up';
  
  if (prevDirection !== direction && prevDirection === 'up') {    
    let marker = this.add.sprite(0, y + 18, 'marker');
    marker.setOrigin(0, 1);
  }
  
  prevY = y;
  prevDirection = direction;
}
