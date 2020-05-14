var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

new Phaser.Game(config);

function preload ()
{
    this.load.spritesheet('glyphs', 'assets/fonts/retro/knighthawks-font-filled.png', { frameWidth: 32, frameHeight: 25 });
}

function create ()
{
    var codeRain = {
        width: 50,
        height: 40,
        cellWidth: 16,
        cellHeight: 16,
        getPoints: function (quantity)
        {
            var cols = Array(codeRain.width).fill(0);
            var xMax = codeRain.width - 1;
            var Between = Phaser.Math.Between;
            var FloatBetween = Phaser.Math.FloatBetween;
            var points = [];

            for (var i = 0; i < quantity; i++)
            {
                var x = Between(0, xMax);
                var y = (cols[x] += 1);

                if (FloatBetween(0, 1) < 0.01)
                {
                    y *= FloatBetween(0, 1);
                    y |= 0;
                }

                y %= codeRain.height;

                points[i] = new Phaser.Math.Vector2(x * codeRain.cellWidth, y * codeRain.cellHeight);
            }

            return points;
        }
    };

    this.add.particles('glyphs')
        .createEmitter({
            alpha: { start: 1, end: 0.25, ease: 'Expo.easeOut' },
            angle: 0,
            blendMode: 'ADD',
            emitZone: { source: codeRain, type: 'edge', quantity: 2000 },
            frame: Phaser.Utils.Array.NumberArray(8, 58),
            frequency: 100,
            lifespan: 6000,
            quantity: 25,
            scale: -0.5,
            tint: 0x0066ff00
        });
}
