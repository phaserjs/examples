class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    create() {
        this.add
            .text(100, 300, 'Text with stroke', {
                fontFamily: 'Arial',
                fontSize: '64px',
                color: '#ffffff',
                stroke: '#000000',
                strokeThickness: 7,
            })
            .setLetterSpacing(10);
    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#898989',
    scene: MainScene,
});
