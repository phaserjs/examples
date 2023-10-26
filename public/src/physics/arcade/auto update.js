class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
        this.load.image('lemming', 'assets/sprites/lemming.png');
    }

    create ()
    {
        this.block = this.physics.add.image(200, 300, 'block');

        this.block.body.autoUpdate = true;

        this.tweens.add({
            targets: this.block,
            x: 700,
            duration: 2000,
            ease: 'Linear',
            repeat: -1,
            yoyo: true
        });

        this.debug = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });

        // this.physics.add.collider(block, lemming);
        // this.events.on('prerender', this.preRender, this);
    }

    // preRender ()
    update ()
    {
        const block = this.block;

        this.debug.setText([
            'velocity.x: ' + block.body.velocity.x,
            'velocity.y: ' + block.body.velocity.y
        ]);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: 0
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);
