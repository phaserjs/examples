var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var bullets1;
var bullets2;
var ship;
var speed;
var stats;
var lastFired = 0;
var isDown = false;
var mouseX = 0;
var mouseY = 0;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('ship', 'assets/sprites/ship.png');
    this.load.image('bullet1', 'assets/sprites/bullets/bullet11.png');
}

function create ()
{
    var Bullet = new Phaser.Class({

        Extends: Phaser.GameObjects.Image,

        initialize:

        function Bullet (scene)
        {
            Phaser.GameObjects.Image.call(this, scene, 0, 0, 'bullet1');

            this.incX = 0;
            this.incY = 0;
            this.lifespan = 0;

            this.speed = Phaser.Math.GetSpeed(600, 1);
        },

        fire: function (x, y)
        {
            //  Bullets fire from the middle of the screen to the given x/y
            this.setPosition(400, 300);

            var angle = Phaser.Math.Angle.Between(x, y, 400, 300);

            this.setRotation(angle);

            this.incX = Math.cos(angle);
            this.incY = Math.sin(angle);

            this.lifespan = 1000;
        },

        update: function (time, delta)
        {
            this.lifespan -= delta;

            this.x -= this.incX * (this.speed * delta);
            this.y -= this.incY * (this.speed * delta);

            if (this.lifespan <= 0)
            {
                this.setActive(false);
                this.setVisible(false);
            }
        }

    });

    bullets = this.pool.createObjectPool(Bullet, 50);

    this.input.on('MOUSE_DOWN_EVENT', function (event) {

        isDown = true;
        mouseX = event.x;
        mouseY = event.y;

    });

    this.input.on('MOUSE_MOVE_EVENT', function (event) {

        mouseX = event.x;
        mouseY = event.y;

    });

    this.input.on('MOUSE_UP_EVENT', function (event) {

        isDown = false;

    });

}

function update (time, delta)
{
    if (isDown && time > lastFired)
    {
        var bullet = bullets.get();

        if (bullet)
        {
            bullet.fire(mouseX, mouseY);

            lastFired = time + 50;
        }
    }
}
