var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    state: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var imageA;
var imageB;

var Engine;
var Render;
var World;
var Bodies;

var engine;

var boxA;
var boxB;
var ground;

function preload ()
{
    this.load.image('block', 'assets/sprites/block.png');
}

function create ()
{
    imageA = this.add.image(400, 300, 'block');
    imageB = this.add.image(400, 300, 'block');

    Engine = Phaser.Physics.MatterJS.Engine;
    World = Phaser.Physics.MatterJS.World;
    Bodies = Phaser.Physics.MatterJS.Bodies;

    engine = Engine.create();

    // create two boxes and a ground
    boxA = Bodies.rectangle(400, 200, 95, 95);
    boxB = Bodies.rectangle(450, 50, 95, 95);
    ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    World.add(engine.world, [boxA, boxB, ground]);

    // run the engine
    Engine.run(engine);
}

function update ()
{
    imageA.x = boxA.position.x;
    imageA.y = boxA.position.y;
    imageA.rotation = boxA.angle;

    imageB.x = boxB.position.x;
    imageB.y = boxB.position.y;
    imageB.rotation = boxB.angle;
}


