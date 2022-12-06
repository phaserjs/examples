class Example extends Phaser.Scene
{
    element;

    preload ()
    {
        this.load.image('einstein', 'assets/pics/ra-einstein.png');
    }

    create ()
    {
        const div = document.createElement('div');
        div.style = 'background-color: lime; width: 220px; height: 100px; font: 48px Arial; font-weight: bold';
        div.innerText = 'Phaser 3';

        this.element = this.add.dom(400, 300, div);
        this.element.setPerspective(800);

        // element.rotate3d.set(1, 0, 0, 0);
        this.element.rotate3d.set(0, 1, 0, 0);

        this.tweens.add({
            targets: this.element.rotate3d,
            w: 80,
            duration: 3000,
            ease: 'Sine.easeInOut',
            loop: -1,
            yoyo: true
        });

        this.add.image(400, 300, 'einstein');
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    dom: {
        createContainer: true
    },
    scene: Example
};

const game = new Phaser.Game(config);
