var config = {
  type: Phaser.AUTO,
  width: 1500,
  height: 500,
  parent: 'phaser-example',
  physics: {
    default: "arcade",
    arcade: {
        fixedStep: false,
        useTree: false,
      //debug: true,
      debugShowBody: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

var speed = 250;
var ship;
const W = 10000;
const H = 1000;

function preload() {
  this.load.image('ship', 'assets/sprites/thrust_ship.png');
}

function create() {
  this.cameras.main.setBounds( 0, 0, W, H );
  bg = this.add.tileSprite( W/2, H/2, W, H, 'ship' );
  bg.alpha = 0.3;
  ship = this.physics.add.image(200, 120, 'ship');
  ship.scale = 5;
  ship.setVelocity( speed * 2, 0 );

	ship2 = this.add.sprite(200, 300, 'ship');
  ship2.scale = 5;
}

let lastX = 0;
function update( timeMS, dt ) {
  //const dX = Math.abs( ship.x - lastX );
  //console.log( `dX = ${ dX.toFixed( 2 ) }, FPS = ${ this.game.loop.actualFps.toFixed( 4 ) }` );
  //lastX = ship.x;

  const speedAccel = 2.0;
  //const dir = this.input.activePointer.x > config.width/2 ? 1 : -1;
  //ship.setVelocity( speed * speedAccel, 0 );
  if ( ship.x > config.width ) ship.x = 0;

  ship2.x += 0.25025 * speedAccel * dt;
  if ( ship2.x > config.width ) ship2.x = 0;

  //this.cameras.main.centerOn( ship.x, ship.y );
}
