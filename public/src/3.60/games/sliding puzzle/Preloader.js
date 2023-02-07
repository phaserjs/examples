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
    }

    create ()
    {
        // this.scene.start('MainMenu');
        this.scene.start('Game');
    }
}
