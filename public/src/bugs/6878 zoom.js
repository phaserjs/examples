class Example extends Phaser.Scene {
    preload() {
        this.load.image('bg', 'assets/pics/uv-grid-diag.png');
        this.load.image('ship', 'assets/sprites/phaser-ship.png');
    }

    create() {
        this.cameras.main.setBounds(0, 0, 1024 * 4, 1024 * 4);
        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                this.add.image(1024 * x, 1024 * y, 'bg').setOrigin(0);
            }
        }
        this.player = this.add.image(1000, 1024, 'ship');
        
        this.cameras.main.startFollow(this.player, false);
        this.cameras.main.setDeadzone(5, 5);
        this.cameras.main.setZoom(5);
        this.tweens.add({
            targets: this.player,
            x: 1300,
            yoyo: true,
            duration: 300 * 200
        });
    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    pixelArt: true,
    scene: Example
};

const game = new Phaser.Game(config);