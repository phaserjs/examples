class Example extends Phaser.Scene
{
    create ()
    {
        // var a = [ 'a', 'b', 'c' ];
        // var a = [ 'a' ];
        const a = [ 'a', 'b' ];
        const b = [ 1, 2 ];

        // var b = [ 1, 2, 3 ];
        // var b = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

        // var out = Phaser.Utils.Array.Range(a, b);

        // var out = Phaser.Utils.Array.Range(a, b, { repeat: 1 });
     
        // var out = Phaser.Utils.Array.Range(a, b, { yoyo: true, repeat: 1 });

        // var out = Phaser.Utils.Array.Range(a, b, { qty: 3, yoyo: true });

        // var out = Phaser.Utils.Array.Range(a, b, { random: true });

        // var out = Phaser.Utils.Array.Range(a, b, { randomB: true });

        const out = Phaser.Utils.Array.Range(a, b, { repeat: -1, max: 10 });

        const text = [ '{' ];
        out.forEach(e =>
        {
            text.push(` ${JSON.stringify(e)}`);
        });
        text.push('}');

        this.add.text(100, 100, text, { font: '32px Courier', fill: '#00ff00' });
    }
}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
