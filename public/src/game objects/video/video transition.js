class Example extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.effect1;
        this.effect2;

        this.transition;
        this.transitionIn = false;
    }

    preload ()
    {
        this.load.video('fireworks', 'assets/video/fireworks.mp4', true);
        this.load.video('transition', 'assets/video/colorful-smoke-transition.webm', true);
        this.load.glsl('bundle', 'assets/shaders/bundle4.glsl.js');
    }

    create ()
    {
        //  Our two effects - a shader and a video

        this.effect1 = this.add.shader('Ghosts', 512, 300, 1024, 600);
        this.effect2 = this.add.video(512, 300, 'fireworks').play(true).setVisible(false);

        //  The transition video, it's a transparent WebM, so will only work in browsers that support this

        this.transition = this.add.video(512, 300, 'transition');

        let startTransition = () => {

            this.time.addEvent({
                delay: 3000,
                callback: () => {
                    this.transitionIn = true;
                    this.transition.play();
                }
            });

        };

        this.transition.on('complete', startTransition);

        startTransition();
    }

    update ()
    {
        //  In the video the transition is fully covering the screen at 50% through,
        //  so at that point, we swap the two effects over:

        if (this.transitionIn && this.transition.getProgress() >= 0.5)
        {
            if (!this.effect1.visible)
            {
                this.effect1.setVisible(true);
                this.effect2.setVisible(false);
            }
            else
            {
                this.effect1.setVisible(false);
                this.effect2.setVisible(true);
            }

            this.transitionIn = false;
        }
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

let game = new Phaser.Game(config);
