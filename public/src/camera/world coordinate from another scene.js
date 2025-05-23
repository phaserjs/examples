class UIScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'ui' });
    }

    create ()
    {
        const text = this.add.text(10, 10).setText('Click to move');

        text.setShadow(1, 1, '#000000', 2);

        const worldCamera = this.scene.get('world').cameras.main;
        this.input.on('pointermove', function (pointer) {

            const pos = worldCamera.getWorldPoint(pointer.x, pointer.y);
            text.setText([
                'World: ' + pos.x + ' x ' + pos.y,
                'Camera: ' + worldCamera.midPoint.x + ' x ' + worldCamera.midPoint.y
            ]);

        });
    }
}

class WorldScene extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'world' });
    }

    preload ()
    {
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('map', 'assets/tests/camera/earthbound-scarab.png');
    }

    create ()
    {
        this.cameras.main.setBounds(0, 0, 1024, 2048);

        this.add.image(0, 0, 'map').setOrigin(0);

        this.cameras.main.setZoom(1);
        this.cameras.main.centerOn(0, 0);

        let pos = 0;

        this.input.on('pointerdown', function () {

            var cam = this.cameras.main;

            if (pos === 0)
            {
                cam.pan(767, 1096, 2000, 'Power2');
                cam.zoomTo(4, 3000);
                pos++;
            }
            else if (pos === 1)
            {
                cam.pan(703, 1621, 2000, 'Elastic');
                cam.zoomTo(2, 3000);
                pos++;
            }
            else if (pos === 2)
            {
                cam.pan(256, 623, 2000, 'Sine.easeInOut');
                cam.zoomTo(1, 3000);
                pos++;
            }
            else if (pos === 3)
            {
                cam.pan(166, 304, 2000);
                cam.zoomTo(4, 1500);
                pos++;
            }
            else if (pos === 4)
            {
                cam.pan(624, 158, 2000);
                cam.zoomTo(0.8, 3000);
                pos++;
            }
            else if (pos === 5)
            {
                cam.pan(600, 330, 2000);
                pos++;
            }
            else if (pos === 6)
            {
                cam.pan(748, 488, 2000);
                cam.zoomTo(1, 1000);
                pos++;
            }
            else if (pos === 7)
            {
                cam.pan(1003, 1719, 2000);
                pos++;
            }
            else if (pos === 8)
            {
                cam.pan(0, 0, 500);
                pos = 0;
            }
        }, this);

        this.scene.launch('ui');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    physics: {
        default: 'arcade',
    },
    scene: [ WorldScene, UIScene ]
};

const game = new Phaser.Game(config);
