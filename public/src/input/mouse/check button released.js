class Example extends Phaser.Scene
{
    text2;
    text1;

    preload ()
    {
        this.load.image('logo', 'assets/sprites/phaser.png');
        this.load.image('asuna', 'assets/sprites/asuna_by_vali233.png');
        this.load.image('disk', 'assets/sprites/oz_pov_melting_disk.png');
        this.load.image('tree', 'assets/sprites/palm-tree-left.png');
    }

    create ()
    {
        this.text1 = this.add.text(10, 10, '', { fill: '#00ff00' });
        this.text2 = this.add.text(500, 10, '', { fill: '#00ff00' });

        this.input.mouse.disableContextMenu();

        this.input.on('pointerup', pointer =>
        {

            if (pointer.leftButtonReleased())
            {
                this.text2.setText('Left Button was released');
            }
            else if (pointer.rightButtonReleased())
            {
                this.text2.setText('Right Button was released');
            }
            else if (pointer.middleButtonReleased())
            {
                this.text2.setText('Middle Button was released');
            }
            else if (pointer.backButtonReleased())
            {
                this.text2.setText('Back Button was released');
            }
            else if (pointer.forwardButtonReleased())
            {
                this.text2.setText('Forward Button was released');
            }

        });
    }

    update ()
    {
        const pointer = this.input.activePointer;

        this.text1.setText([
            `x: ${pointer.worldX}`,
            `y: ${pointer.worldY}`,
            `isDown: ${pointer.isDown}`
        ]);
    }
}

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
