class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    }

    create ()
    {
        const button = this.add.image(400, 300, 'logo').setInteractive();

        button.on('pointerup', this.openExternalLink, this);
    }

    openExternalLink ()
    {
        const tweet = 'I am testing a button from within a Phaser example';

        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;

        const s = window.open(url, '_blank');

        if (s && s.focus)
        {
            s.focus();
        }
        else if (!s)
        {
            window.location.href = url;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: Example
};

const game = new Phaser.Game(config);
