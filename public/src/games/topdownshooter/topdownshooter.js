var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    physics: {
        default: 'impact',
        impact: {
            setBounds: {
                x: 0,
                y: 0,
                width: 800,
                height: 600,
                thickness: 32
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
        extend: {
                    player: null,
                    moveKeys: null,
                    bullets: null,
                    lastFired: 0,
                    time: 0
                }
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    //Load in player image
    this.load.image('ship', 'assets/sprites/shmup-ship2.png');

    //Load in bullet
    this.load.image('bullet', 'assets/sprites/bullets/bullet6.png');

    //Load in enemy spritesheet
    this.load.spritesheet('face', 'assets/sprites/metalface78x92.png', 
        { frameWidth: 78, frameHeight: 92 });
}

//Bullet class
var Bullet = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    //Set the image file for the bullet and initial variables
    function Bullet (scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet');

        this.speed = 1;
        this.born = 0;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
    },

    //Define the fire function which will be called on left mouse click
    fire: function (player, pointer)
    {
        //Initial position of bullet is player's position
        this.setPosition(player.x, player.y);

        //Calculate trajectory of bullet so that it moves from player towards pointer
        this.direction = Math.atan( (pointer.x-this.x) / (pointer.y-this.y));

        if (pointer.y > this.y)
        {
            this.xSpeed = this.speed*Math.sin(this.direction);
            this.ySpeed = this.speed*Math.cos(this.direction);
        }
        else
        {
          this.xSpeed = -this.speed*Math.sin(this.direction);
          this.ySpeed = -this.speed*Math.cos(this.direction);
        }

        //Offset so bullet appears to leave the end of the gun
        //NOT IMPLEMENTED CURRENTLY

        //Take angling of the bullet from rotation of player
        this.rotation = player.rotation;

        //Time since new bullet spawned
        this.born = 0;
    },

    //Updates the position of the bullet each cycle
    update: function (time, delta)
    {
        this.x += this.xSpeed * delta;
        this.y += this.ySpeed * delta;

        this.born += delta;

        if (this.born > 1000)
        {
            this.setActive(false);
            this.setVisible(false);
        }

    }

});


//Enemies
var Enemy = new Phaser.Class( {

    Extends: Phaser.GameObjects.Image,

    initialize: 

    function Enemy(scene)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'face');

        this.speed = 0.5;
        this.direction = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }
});

//Moves player on downpress of W key
this.input.keyboard.on('keydown_W', function (event) {
    player.setAccelerationY(-800);
});

this.input.keyboard.on('keydown_S', function (event) {
    player.setAccelerationY(800);
});

this.input.keyboard.on('keydown_A', function (event) {
    player.setAccelerationX(-800);
});

this.input.keyboard.on('keydown_D', function (event) {
    player.setAccelerationX(800);
});

//Stops player acceleration on uppress of WASD keys
this.input.keyboard.on('keyup_W', function (event) {
    if (moveKeys['down'].isUp) {
        player.setAccelerationY(0);
    }
});

this.input.keyboard.on('keyup_S', function (event) {
    if (moveKeys['up'].isUp) {
        player.setAccelerationY(0);
    }
});

this.input.keyboard.on('keyup_A', function (event) {
    if (moveKeys['right'].isUp) {
        player.setAccelerationX(0);
    }
});

this.input.keyboard.on('keyup_D', function (event) {
    if (moveKeys['left'].isUp) {
        player.setAccelerationX(0);
    }
});

//Creates object for input with WASD kets
moveKeys = this.input.keyboard.addKeys({

  'up': Phaser.Input.Keyboard.KeyCodes.W,
  'down': Phaser.Input.Keyboard.KeyCodes.S,
  'left': Phaser.Input.Keyboard.KeyCodes.A,
  'right': Phaser.Input.Keyboard.KeyCodes.D

});

//Creates a bullet upon left click of mouse
this.input.on('pointerdown', function (pointer) {

  var bullet = this.bullets.get();
  bullet.setActive(true);
  bullet.setVisible(true);

  if (bullet)
  {
      bullet.fire(player, pointer);

      //Sets maximum rate of fire of bullet
      this.lastFired = this.time + 10000;
  }

}, this);

function create ()
{

    //Does this group automatically handle recycling of Bullet objects?
    this.bullets = this.add.group({ classType: Bullet, runChildUpdate: true });
    this.enemies = this.add.group({ classType: Enemy, runChildUpdate: true });

    //Create player sprite
    player = this.impact.add.sprite(400, 300, 'ship').setDepth(1);

    //Sets point where sprite is drawn to the XYcenter of the sprite
    player.setOrigin(0.5, 0.5);

    //Sets the max velocity, friction, and ?
    player.setMaxVelocity(500).setFriction(2200, 2200).setPassive();

    //Sets size of player sprite
    // player.setDisplaySize(132, 120);

    //Create animations for player
    // this.anims.create({
    //     key: 'idle',
    //     frames: this.anims.generateFrameNumbers('skele', { start: 0, end: 10 }),
    //     frameRate: 10,
    //     repeat: -1
    // });
    // player.anims.play('idle', true);

    //Sets the bound for the camera to 800 x 600
    this.cameras.main.setBounds(0, 0, 800, 600);

}



function update (time, delta)
{
    //Rotates player to face towards activePointer
    player.rotation = Phaser.Math.Angle.Between(player.x, player.y, this.input.activePointer.x, this.input.activePointer.y);

    //  Position the center of the camera on the player
    //  We -400 because the camera width is 800px and
    //  we want the center of the camera on the player, not the left-hand side of it
    // this.cameras.main.scrollX = this.player.x - 400;

}
