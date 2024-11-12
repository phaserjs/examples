class Scene extends Phaser.Scene {
    create() {
        this.dynamicTextures = [];

        const add_button = this.add.text(100, 100, 'add').setInteractive();
        const clear_button = this.add.text(200, 100, 'destroy').setInteractive()

        add_button.on('pointerdown', this.addRenderTextures, this);
        clear_button.on('pointerdown', this.removeRenderTextures, this)
    }

    addRenderTextures() {
        console.log("Adding render textures");

        for (let i = 0; i < 20; i++) {
            const dt = this.textures.addDynamicTexture(`key${i}`, 1000, 1000);
            this.dynamicTextures.push(dt);
        }
    }

    removeRenderTextures() {
        console.log("Removing render textures", this.dynamicTextures.length);

        while (this.dynamicTextures.length > 0) {
            const dt = this.dynamicTextures.pop();
            dt.destroy();
        }
    }
}

const config = {
    type: Phaser.WEBGL,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#000000',
    scene: Scene
};

const game = new Phaser.Game(config);
