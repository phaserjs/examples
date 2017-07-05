var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    backgroundColor: '#1a1a1a',
    state: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sonic', 'assets/sprites/sonic.png');
    this.load.image('pixel', 'assets/sprites/16x16.png');
}

function create ()
{
    var source = this.textures.get('sonic').source[0].image;
    var canvas = this.textures.createCanvas('pad', 38, 42).source[0].image;
    var ctx = canvas.getContext('2d');

    ctx.drawImage(source, 0, 0);

    var imageData = ctx.getImageData(0, 0, 38, 42);

    var x = 0;
    var y = 0;
    var color = new Phaser.Graphics.Color();

    for (var i = 0; i < imageData.data.length; i += 4)
    {
        var r = imageData.data[i];
        var g = imageData.data[i + 1];
        var b = imageData.data[i + 2];
        var a = imageData.data[i + 3];

        if (a > 0)
        {
            var dx = 200 + x * 16;
            var dy = 64 + y * 16;

            var image = this.add.image(Phaser.Math.Between(0, 1024), Phaser.Math.Between(0, 768), 'pixel').setScale(0);

            color.setTo(r, g, b, a);

            image.setTint(color.color);

            // TweenMax.to(image, 0.5, {

            //     scaleX: 1,
            //     scaleY: 1,
            //     yoyo: true,
            //     repeat: -1,
            //     delay: i / 2500,
            //     repeatDelay: 2

            // });

            TweenMax.to(image, 2, {

                x: dx,
                y: dy,
                scaleX: 1,
                scaleY: 1,
                angle: 360,
                delay: i / 1500,
                yoyo: true,
                repeat: -1,
                repeatDelay: 6

            });
        }

        x++;

        if (x === 38)
        {
            x = 0;
            y++;
        }
    }

}
