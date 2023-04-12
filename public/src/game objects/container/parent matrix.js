class Example extends Phaser.Scene
{
    graphics;
    tempParentMatrix;
    tempMatrix;
    container2;
    container1;
    text2;
    text1;
    image;

    preload ()
    {
        this.load.image('lemming', 'assets/sprites/lemming.png');
        this.load.image('topleft', 'assets/sprites/topleft.png');
    }

    create ()
    {
        this.image = this.add.image(0, 0, 'lemming').setName('lemming');

        this.container1 = this.add.container(100, 100).setName('root');
        this.container2 = this.add.container(200, 200).setName('sub');

        this.container1.add(this.container2);

        this.container2.add(this.image);

        //  Visual Container x/y markers
        // this.add.image(container1.x, container1.y, 'topleft').setOrigin(0);
        // this.add.image(container2.x, container2.y, 'topleft').setOrigin(0);

        this.tweens.add({
            targets: this.container1,
            x: 400,
            duration: 6000,
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: this.container2,
            x: 400,
            duration: 6000,
            yoyo: true,
            repeat: -1
        });

        this.tweens.add({
            targets: this.image,
            scaleX: 2,
            scaleY: 2,
            duration: 6000,
            yoyo: true,
            repeat: -1
        });

        this.graphics = this.add.graphics();

        this.text1 = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
        this.text2 = this.add.text(500, 10, '', { font: '16px Courier', fill: '#00ff00' });

        this.tempMatrix = new Phaser.GameObjects.Components.TransformMatrix();
        this.tempParentMatrix = new Phaser.GameObjects.Components.TransformMatrix();
    }

    update ()
    {
        this.image.getWorldTransformMatrix(this.tempMatrix, this.tempParentMatrix);

        const d = this.tempMatrix.decomposeMatrix();

        this.text1.setText([
            'local',
            `x: ${this.image.x}`,
            `y: ${this.image.y}`,
            `sx: ${this.image.scaleX}`,
            `sy: ${this.image.scaleY}`,
            `r: ${this.image.angle}`
        ]);

        this.text2.setText([
            'world',
            `x: ${d.translateX}`,
            `y: ${d.translateY}`,
            `sx: ${d.scaleX}`,
            `sy: ${d.scaleY}`,
            `r: ${Phaser.Math.RadToDeg(d.rotation)}`
        ]);

        const bounds = this.image.getBounds();

        this.graphics.clear();

        this.graphics.lineStyle(1, 0x00ff00, 1);

        this.graphics.strokeRect(d.translateX, d.translateY, bounds.width, bounds.height);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#010101',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
