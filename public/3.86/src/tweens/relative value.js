class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.image('block', 'assets/sprites/block.png');
    }
    
    create ()
    {
        var image = this.add.image(100, 100, 'block');
    
        var tween = this.tweens.add({
            targets: image,
            props: {
                x: { value: '+=500', duration: 3000, ease: 'Power2' },
                y: { value: '+=300', duration: 1500, ease: 'Bounce.easeOut' }
            },
            delay: 1000
        });
    
        console.log(tween);
    
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);