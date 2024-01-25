import { Scene } from "phaser";

export class Preloader extends Scene
{
    constructor ()
    {
        super("Preloader");
    }

    init ()
    {
        //  We loaded this image in our Boot Scene, so we can display it here
        this.add.image(512, 384, "preloader");

        //  A simple progress bar. This is the outline of the bar.
        this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);

        //  This is the progress bar itself. It will increase in size from the left based on the % of progress.
        const bar = this.add.rectangle(512-230, 384, 4, 28, 0xffffff);

        //  Use the 'progress' event emitted by the LoaderPlugin to update the loading bar
        this.load.on("progress", (progress) => {

            //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
            bar.width = 4 + (460 * progress);

        });
    }

    preload ()
    {
        //  Load the assets for the game - Replace with the path to your own assets
        this.load.setPath("assets");

        this.load.image("background", "background.png");
        this.load.image("logo", "cc-logo.png");
        this.load.atlas('coin', 'coin.png', 'coin.json');
    }

    create ()
    {
        //  When all the assets have loaded, it's often worth creating global objects here that the rest of the game can use.
        //  For example, we will define our 'coin' animation here, so we can use it in other scenes:

        this.anims.create({
            key: "rotate",
            frames: this.anims.generateFrameNames("coin", { prefix: "coin_", start: 1, end: 7, zeroPad: 2 }),
            frameRate: 16,
            repeat: -1
        });

        this.anims.create({
            key: "vanish",
            frames: this.anims.generateFrameNames("coin", { prefix: "vanish_", start: 1, end: 4 }),
            frameRate: 10
        });

        //  When all the assets are loaded go to the next scene.
        //  We can go there immediately via: this.scene.start("MainMenu");
        //  Or we could use a Scene transition to fade between the two scenes:

        this.scene.transition({
            target: 'MainMenu',
            duration: 1000,
            moveBelow: true,
            onUpdate: (progress) => {
                this.cameras.main.setAlpha(1 - progress);
            }
        });

        //  When the transition completes, it will move automatically to the MainMenu scene
    }
}
