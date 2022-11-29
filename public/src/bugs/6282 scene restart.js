class ButtonComponent extends Phaser.GameObjects.Container {
    constructor(config) {
        super(config.scene);
        this.config = config;
        this.spawnButton();
    }
    spawnButton(){

        this.x = this.config.x;
        this.y = this.config.y;

        this.background = this.scene.add.image(0,0,this.config.background);

        this.background.setInteractive();

        this.background.on('pointerdown',this.onPush, this);
        this.background.on('pointerup', this.onPull, this);
        this.background.on('pointerout', this.onOut, this);

        this.text = this.scene.add.text(0,0,'test',{
            fontSize: 120 * this.scene.game.scaleHeight * 3,
            fontFamily: 'Tahoma',
            padding: 10,
            lineSpacing: 20,
            align: 'center',
            fill: '#ffffff',
            wordWrap: {
                width: this.background.displayWidth - 10,
            }
        });

        this.firstScale = this.background.scale;

        this.add(this.background);
        this.add(this.text);
        this.scene.add.existing(this);
    }

    destroy(fromScene){
        super.destroy(fromScene);
    }

    onPush(){
        this.tweenObject('push');
    }

    onPull() {
        if (typeof this.config.onPush === "function") {
            this.config.onPush();
            //this.scene.scene.start('Game');
        }
        this.tweenObject('pull');
    }

    onOut() {
        this.tweenObject('pull');
    }

    tweenObject(status) {
        const pressure = (status === "push" ? 0.9 : 1);
        if (typeof this.text !== "undefined") {
            this.config.scene.tweens.add({
                targets: this.text,
                scale: this.firstScale * pressure,
                ease: 'Linear',
                duration: 100,
            });
        }
        this.scene.tweens.add({
            targets: this.background,
            scale: this.firstScale * pressure,
            ease: 'Linear',
            duration: 100,
        });
    }
}

class Boot extends Phaser.Scene
{
    constructor ()
    {
        super('Boot');
    }

    create ()
    {
        console.log('Boot.create');

        this.scene.start('Preloader');
    }
}

class Preloader extends Phaser.Scene
{
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.image('bg', 'assets/skies/gradient21.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('button', 'assets/sprites/button-bg.png');
        this.load.image('blade', 'assets/sprites/blade.png');
    }

    create ()
    {
        console.log('Preloader.create');

        this.scene.start('Title');
    }
}

class Title extends Phaser.Scene
{
    constructor ()
    {
        super('Title');
    }

    create ()
    {
        console.log('Title.create');

        this.add.image(400, 300, 'bg');
        const logo = this.add.image(400, -200, 'logo');

        this.tweens.add({
            targets: logo,
            y: 200,
            ease: 'Bounce.out'
        });

        // const button = this.add.image(400, 400, 'button');

        // button.setInteractive();

        // button.once('pointerdown', () => {

        //     this.scene.start('Game');

        // });

        const button = new ButtonComponent({
            scene: this,
            x:400, y:400,
            background: 'button',
            onPush:this.goToGameScene.bind(this)
        });
    }

    goToGameScene() {
        this.scene.start('Game');
    }
}

class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');
    }

    create ()
    {
        console.log('Game.create');

        this.add.image(400, 300, 'bg');
        const blade = this.add.image(400, 300, 'blade');

        this.tweens.add({
            targets: blade,
            angle: 360,
            repeat: -1,
            ease: 'linear'
        });

        blade.setInteractive();

        blade.once('pointerdown', () => {

            this.scene.start('Title');

        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d6d',
    scene: [ Boot, Preloader, Title, Game ]
};

const game = new Phaser.Game(config);
