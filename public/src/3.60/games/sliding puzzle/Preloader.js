export default class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('assets/games/sliding-puzzle/');
        this.load.image('photo1', 'photo1.png');
        this.load.image('photo2', 'photo2.png');
        this.load.image('photo3', 'photo3.png');
    }

    create ()
    {
        // if (this.sound.locked)
        // {
        //     this.input.once('pointerdown', () => {
        //         this.scene.start('Game');
        //     });
        // }
        // else
        // {
            this.scene.start('Game');
        // }
    }
}
