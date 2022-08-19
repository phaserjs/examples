class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/space4.png');
        this.load.image('star', 'assets/sprites/star.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');

        this.stars = this.add.group({
            key: 'star',
            quantity: 10000,
            visible: false,
            active: false
        });

        this.text = this.add.text(16, 16).setFontSize(16).setColor('#ffffff');

        //  Create hundreds of short-lived tweens
        this.time.addEvent({ delay: 50, callback: this.createTweens, callbackScope: this, loop: true });

        this.input.on('pointerdown', () => {
            this.tweens.paused = (this.tweens.paused) ? false : true;
        });

        console.log(this.tweens);
    }

    update ()
    {
        if (Phaser.VERSION === '3.55.2')
        {
            this.text.setText([
                'Active tweens: ' + this.tweens._active.length,
                'Pending tweens: ' + this.tweens._pending.length
            ]);
        }
        else
        {
            const stats = this.tweens.getTotal();

            this.text.setText([
                'Active tweens: ' + stats.active
            ]);
        }
    }

    createTweens ()
    {
        if (!this.tweens.paused)
        {
            for (let i = 0; i < 500; i++)
            {
                this.createTween();
            }
        }
    }

    createTween ()
    {
        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(70, 600);
        const duration = Phaser.Math.Between(100, 200);

        const star = this.stars.get(x, y);

        star.setScale(0.1, 0.1);
        star.setActive(true);
        star.setVisible(true);

        this.add.tween({
            targets: star,
            scale: 0.5,
            duration,
            yoyo: true,
            onComplete: () => {
                star.active = false
                star.visible = false
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
