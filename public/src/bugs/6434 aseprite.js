class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.path = 'assets/bugs/';

        this.load.aseprite('Head', 'MainChrHead.png', 'MainChrHead.json');
        this.load.aseprite('Body', 'MainChr.png', 'MainChr.json');
    }

    create ()
    {
        this.add.sprite(100, 100, 'Head', '0').setScale(4);
        this.add.sprite(300, 100, 'Body', '0').setScale(4);

        // console.log(this.cache.json.get('Head'));
        // console.log(this.cache.json.get('Body'));

        const BodyTags = this.anims.createFromAseprite("Body");
        const HeadTags = this.anims.createFromAseprite("Head");

        // console.log(BodyTags[0].frames[0], HeadTags[0].frames[0]);
        // console.log(BodyTags, HeadTags);

        // const tags = this.anims.createFromAseprite('paladin');
        // console.log(tags);

        // const step = this.anims.createFromAseprite('paladin', 'step');
        // const delay = this.anims.createFromAseprite('paladin', 'Delay');
        // const release = this.anims.createFromAseprite('paladin', 'release');

        // console.log(step);
        // console.log(delay);
        // console.log(release);

        // const sprite = this.add.sprite(500, 300).play({ key: 'step', repeat: -1 }).setScale(6);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
