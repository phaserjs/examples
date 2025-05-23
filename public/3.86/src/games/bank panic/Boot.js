export default class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        this.load.image('loading', 'assets/games/bank-panic/loading.png');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
