class GameScene extends Phaser.Scene {

    preload() {
        this.load.spritesheet('fullscreen', 'https://labs.phaser.io/assets/ui/fullscreen.png', { frameWidth: 64, frameHeight: 64 });
    }

    create() {
        const button = this.add.image(100, 100, 'fullscreen', 0).setInteractive();
        button.on('pointerup', () => {
            if (this.scale.isFullscreen) {
                button.setFrame(0);
            } else {
                button.setFrame(1);
            }
            this.scale.toggleFullscreen();
        });

        this.scale.on(Phaser.Scale.Events.ENTER_FULLSCREEN, () => console.log('enter fullscreen'));
        this.scale.on(Phaser.Scale.Events.LEAVE_FULLSCREEN, () => console.log('leave fullscreen'));
    }

}
const game = new Phaser.Game({
    type: Phaser.AUTO,
    backgroundColor: 0xaaaaaa,
    scene: [GameScene]
});