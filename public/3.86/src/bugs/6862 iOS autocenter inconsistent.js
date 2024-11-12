var gameContainerSizeDebug;

class MainScene extends Phaser.Scene {

    constructor() {
        super({ key: "MainScene" });
    }

    create() {
        
        gameContainerSizeDebug = this.add.graphics({ 
            lineStyle: { width: 1, color: 0xffffff, alpha: 1 }, 
            fillStyle: { color: 0xff0000, alpha: 0 } 
        }).strokeRect(0, 0, 144, 256).strokeCircle(144 / 2, 256 / 2, 42).beginPath().moveTo(0, 0).lineTo(144, 256).strokePath().beginPath().moveTo(144, 0).lineTo(0, 256).strokePath().beginPath().moveTo(-1024, 256/2).lineTo(1024,256/2).strokePath().beginPath().moveTo(144/2, -1024).lineTo(144/2,1024).strokePath();

    }
}

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 144,
    height: 256,
    backgroundColor: '#333',
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        zoom: 1,
    },
    scene: [ MainScene ]
})