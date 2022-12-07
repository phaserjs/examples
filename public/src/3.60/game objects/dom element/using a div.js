class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        const div = document.createElement('div');
        div.style = 'background-color: rgba(0,255,0,0.2); width: 250px; height: 100px; font: 48px Arial; font-weight: bold';
        div.innerText = 'Phaser 3';

        const container = this.add.container(400, 300);
        const element = this.add.dom(0, 0, div);
        const rect = this.add.rectangle(0, 0, 16, 16, 0xff00ff);

        // var element = this.add.dom(400, 300, div).setOrigin(0);
        // var rect = this.add.rectangle(400, 300, 16, 16, 0xff00ff);

        container.add([ element, rect ]);

        this.tweens.add({
            targets: container,
            angle: 360,
            duration: 12000,
            loop: -1
        });

        this.tweens.add({
            targets: element,
            duration: 3000,
            _angle: 360,
            scaleX: 2,
            scaleY: 2,
            ease: 'Sine.easeInOut',
            loop: -1,
            yoyo: true
        });
    }
}

const config = {
    type: Phaser.AUTO,
    scale: {
        _mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        parent: 'phaser-example',
        width: 800,
        height: 600
    },
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    dom: {
        createContainer: true
    },
    scene: Example
};

const game = new Phaser.Game(config);
