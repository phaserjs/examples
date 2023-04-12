class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser3-logo-x2.png');
    }

    create ()
    {
        const video = document.createElement('video');

        video.playsinline = true;
        video.src = 'assets/video/skull.mp4';
        video.width = 800;
        video.height = 450;
        video.autoplay = true;

        const element = this.add.dom(400, 300, video);

        video.addEventListener('ended', (event) =>
        {

            element.setVisible(false);

            this.add.image(400, 300, 'logo');

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    dom: {
        createContainer: true
    },
    scene: Example
};

const game = new Phaser.Game(config);
