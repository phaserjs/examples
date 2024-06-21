class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    }

    create ()
    {
        this.input.topOnly = false;
        
        for (var i = 0; i < 2; i++)
        {
            const sprite = this.add.sprite(400, 300, 'eye')
                .setInteractive({ draggable: true })
                .on('dragend', function ()
                {
                    console.log('sprite', sprite.id);
                    // this.disableInteractive();
                });
            sprite.id = i;
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);