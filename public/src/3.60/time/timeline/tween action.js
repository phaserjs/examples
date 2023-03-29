class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.atlas('timeline', 'assets/atlas/timeline.png', 'assets/atlas/timeline.json');
        this.load.image('bg', 'assets/skies/spookysky.jpg');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.thread = this.add.graphics();

        this.spider = this.add.sprite(400, -100, 'timeline', 'spider');

        const timeline = this.add.timeline([
            {
                at: 2000,
                tween: {
                    targets: this.spider,
                    y: 400,
                    ease: 'bounce.out',
                    duration: 1500
                }
            },
            {
                at: 4000,
                tween: {
                    targets: this.spider,
                    x: 200,
                    angle: 30,
                    ease: 'sine.out',
                    duration: 1000,
                    yoyo: true,
                    repeat: -1,
                    repeatDelay: 2000
                }
            },
            {
                at: 6000,
                tween: {
                    targets: this.spider,
                    x: 600,
                    angle: -30,
                    ease: 'sine.out',
                    duration: 1000,
                    yoyo: true,
                    repeat: -1,
                    repeatDelay: 2000
                }
            }
        ]);

        timeline.play();
    }

    update ()
    {
        this.thread.clear();
        this.thread.lineStyle(1, 0xffffff, 0.7);
        this.thread.lineBetween(400, 0, this.spider.x, this.spider.y);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
