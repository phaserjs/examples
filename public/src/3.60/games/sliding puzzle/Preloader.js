export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.image('spark', 'assets/particles/muzzleflash5.png');

        this.load.setPath('assets/games/sliding-puzzle/');
        this.load.image('background', 'background.png');
        this.load.image('logo', 'logo.png');
        this.load.image('box', 'box.png');
        this.load.image('box-inside', 'box-inside.png');
        this.load.image('pic1', 'pic1.png');
        this.load.image('pic2', 'pic2.png');
        this.load.image('pic3', 'pic3.png');
    }

    create ()
    {
        this.scene.start('MainMenu');
    }
}
