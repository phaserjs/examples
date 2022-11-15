class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    create ()
    {
        console.log('Boot.create');

        this.scene.start('Preloader');
    }
}

class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient21.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('button', 'assets/sprites/button-bg.png');
        this.load.image('blade', 'assets/sprites/blade.png');
    }

    create ()
    {
        console.log('Preloader.create');

        this.scene.start('Title');
    }
}

class Title extends Phaser.Scene
{
    constructor ()
    {
        super('Title');
    }

    create ()
    {
        console.log('Title.create');

        this.add.image(400, 300, 'bg');
        const logo = this.add.image(400, -200, 'logo');

        this.tweens.add({
            targets: logo,
            y: 200,
            ease: 'Bounce.out'
        });

        const button = this.add.image(400, 400, 'button');

        button.setInteractive();

        button.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}

class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        console.log('Game.create');

        this.add.image(400, 300, 'bg');
        const blade = this.add.image(400, 300, 'blade');

        this.tweens.add({
            targets: blade,
            angle: 360,
            repeat: -1,
            ease: 'linear'
        });

        blade.setInteractive();

        blade.once('pointerdown', () => {

            this.scene.start('Title');

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: [ Boot, Preloader, Title, Game ]
};

const game = new Phaser.Game(config);
