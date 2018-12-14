var config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var graphics;
var vectors;
var angle = 0;

function create ()
{
    graphics = this.add.graphics({ fillStyle: { color: 0x2266aa } });

    vectors = [];

    for(var i = 0; i <= 800 / 5; i++)
    {
        vectors.push(new Phaser.Math.Vector2(i * 5));
    }
}

function update ()
{
    graphics.clear();

    angle += 0.05;

    var subtractVec = new Phaser.Math.Vector2(5);

    for(var i = 0; i < vectors.length; i++)
    {
        subtractVec.y = Math.sin(angle + vectors[i].x / 400 * Math.PI) * 3;

        if(vectors[i].x > 0)
        {
            vectors[i].subtract(subtractVec);
        }
        else
        {
            vectors[i].set(800, Math.sin(angle) * 150 + 300);
        }

        graphics.fillPointShape(vectors[i], 7);
    }
}
