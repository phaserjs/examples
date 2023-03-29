class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('gem1', 'assets/normal-maps/gem1.png');
        this.load.image('gem2', 'assets/normal-maps/gem2.png');
        this.load.image('gem3', 'assets/normal-maps/gem3.png');
        this.load.image('gem4', 'assets/normal-maps/gem4.png');
        this.load.image('gem5', 'assets/normal-maps/gem5.png');
        this.load.image('boss', 'assets/sprites/wasp.png');
    }

    create ()
    {
        /*
        const timeline = this.add.timeline({
            at: 1000,
            run: () => { this.add.sprite(100, 300, 'gem1') }
        });
        */

        /*
        const timeline = this.add.timeline([
            {
                at: 1000,
                run: () => { this.add.sprite(100, 300, 'gem1') }
            },
            {
                at: 2000,
                run: () => { this.add.sprite(300, 300, 'gem2') }
            },
            {
                at: 3000,
                run: () => { this.add.sprite(500, 300, 'gem1') }
            },
        ]);

        timeline.play();
        */

        const timeline = this.add.timeline([
            {
                at: 3000,
                run: () => { this.add.sprite(100, 300, 'gem1') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(200, 300, 'gem2') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(300, 300, 'gem3') }
            },
            {
                from: -1000,
                run: () => { this.add.sprite(400, 300, 'gem4') }
            },
            {
                from: 1000,
                run: () => { this.add.sprite(500, 300, 'gem5') }
            },
        ]);

        this.input.once('pointerdown', () => {

            timeline.play();

            console.log('start', new Date().toTimeString().substring(0, 8));

        });

        /*
        timeline.add({
            at: 1000,
            run: () => { this.add.sprite(200, 300, 'gem1') }
        });

        timeline.add({
            at: 2000,
            run: () => { this.add.sprite(400, 300, 'gem2') }
        });
        */

        /*
        const sprite = this.add.sprite(400, 300, 'gem1');

        timeline.add({
            at: 2000,
            target: sprite,
            run: function () { console.log(this); this.alpha = 0.2; }
        });

        timeline.play();
        */

        /*
        const sprite = this.add.sprite(400, 300, 'gem1');

        timeline.add({
            at: 2000,
            tween: {
                targets: sprite,
                y: 600,
                duration: 1000,
                yoyo: true
            }
        });

        timeline.play();
        */

        /*
        timeline.add({
            at: 2000,
            event: 'BOSS_FIGHT_START'
        });

        timeline.on('BOSS_FIGHT_START', () => {

            this.add.sprite(400, 300, 'boss');

        });

        timeline.play();
        */

        /*
        const sprite = this.add.sprite(100, 300, 'gem1');

        timeline.add({
            at: 1000,
            target: sprite,
            set: {
                x: 200
            }
        });

        timeline.add({
            at: 2000,
            target: sprite,
            set: {
                x: 300
            }
        });

        timeline.add({
            at: 3000,
            target: sprite,
            set: {
                x: 400,
                scaleX: 2,
                scaleY: 2
            }
        });

        timeline.add({
            at: 4000,
            target: sprite,
            set: {
                y: 400
            }
        });

        timeline.play();
        */

        /*
        const sprite = this.add.sprite(400, 300, 'gem1');

        timeline.add({
            at: 2000,
            tween: {
                targets: sprite,
                y: 600,
                duration: 1000,
                yoyo: true
            }
        });

        timeline.play();
        */
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#020286',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
