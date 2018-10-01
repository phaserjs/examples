class BaseScene extends Phaser.Scene {

    constructor ()
    {
        super('base');
    }

    preload ()
    {
        this.load.image('bunny', 'assets/sprites/bunny.png');
    }

    create ()
    {
        this.add.graphics().fillStyle(0xff00ff, 0.5).fillRect(200, 200, 400, 200);

        this.add.image(400, 300, 'bunny');

        var text = this.add.text(10, 10, 'click it', { font: '16px Courier', fill: '#00ff00' });

        this.input.once('pointerdown', function ()
        {
            var combat = this.scene.get('combat');
            var _this = this;

            $.ajax({
                url: "https://reqres.in/api/users",
                type: "POST",
                data: {
                    name: "arnie",
                    movies: ["Terminator 2"]
                },
                success: function (response)
                {
                    console.log('loaded', response);

                    _this.add.graphics().fillStyle(0xffff00, 0.5).fillRect(0, 400, 800, 50);

                    combat.makeIt = true;
                }
            });

        }, this);
    }

}

class CombatScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'combat', active: true });

        this.makeIt = false;
    }

    update ()
    {
        if (this.makeIt)
        {
            this.makeIt = false;

            let veil = this.add.graphics({ x: 0, y: 0 });

            veil.fillStyle(0xff0000, 1);
            veil.fillRect(0, 0, 320, 200);
            veil.setDepth(100);
        }
    }

}

var config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ BaseScene, CombatScene ]
};

var game = new Phaser.Game(config);
