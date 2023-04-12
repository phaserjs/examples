export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('assets/games/sliding-puzzle/');
        this.load.image('background', 'background.png');
        this.load.image('logo', 'logo.png');
        this.load.image('box', 'box.png');
        this.load.image('box-inside', 'box-inside.png');
        this.load.image('pic1', 'pic1.png');
        this.load.image('pic2', 'pic2.png');
        this.load.image('pic3', 'pic3.png');

        this.load.setPath('assets/games/sliding-puzzle/audio');

        this.load.audio('move', [ 'move.m4a', 'move.wav', 'move.ogg' ]);
        this.load.audio('win', [ 'win.m4a', 'win.wav', 'win.ogg' ]);
    }

    create ()
    {
        this.scene.start('MainMenu');
    }
}
