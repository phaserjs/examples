class Example extends Phaser.Scene
{
    create ()
    {
        const text = this.make.text({
            add: false,
            x: 0,
            y: 0,
            text: 'Phaser',
            style: {
                fontSize: '64px',
                fontFamily: 'Arial',
                color: '#ffffff',
                align: 'center',
                backgroundColor: '#ff00ff'
            }
        });

        this.textures.addCanvas('text', text.canvas);

        this.add.particles(400, 300, 'text', {
            alpha: { start: 1, end: 0 },
            speed: { min: 60, max: 260 },
            lifespan: { min: 2000, max: 3000 }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example,
    width: 800,
    height: 600
};

const game = new Phaser.Game(config);
