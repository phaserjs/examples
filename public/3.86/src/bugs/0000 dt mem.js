class TestScene extends Phaser.Scene {

    create ()
    {
        this.run = 0;


        this.left = this.add.text(0, 0).setLineSpacing(16);
        this.right = this.add.text(500, 0).setLineSpacing(16);
        this.current = this.add.text(0, 300, '', { fill: 'yellow' });
        this.resources = this.add.text(0, 420, '', { fill: 'lime' });
        this.runCounter = this.add.text(500, 300, 'Click to Run', { fill: 'orange' });

        this.initial = this.getMemoryInfo();

        this.input.on('pointerdown', () => this.destroyTest());

        // this.resizeTest();
    }


    resizeTest() {
        const initial = this.getMemoryInfo();

        this.add.text(500, 0, "Resize&Reuse Texture Test");

        this.add.text(500, 60, "Initial buffer: " + this.getMemoryInfo() + " MB");

        // Create the initial texture
        this.textures.addDynamicTexture("test1", 2048, 2048);

        this.add.text(500, 120, "After adding texture: " + this.getMemoryInfo() + " MB");

        // Resize the texture to 0x0 (internally destroys and creates a new texture)
        this.textures.get('test1').setSize(0, 0);

        this.add.text(500, 180, "After resizing texture to 0x0: " + this.getMemoryInfo() + " MB");

        // Resize the texture to 2048x2048 (internally destroys and creates a new texture)
        this.textures.get('test1').setSize(2048, 2048);

        this.add.text(500, 240, "After resizing texture to 2048x2048: " + this.getMemoryInfo() + " MB");

        const final = this.getMemoryInfo() - initial;

        this.add.text(500, 300, "Difference: " + final + " MB");
    }

    destroyTest ()
    {
        this.run++;
        this.runCounter.setText('Run: ' + this.run);

        this.textures.addDynamicTexture("test2", 2047, 2047);

        const before = this.getMemoryInfo();

        this.textures.remove("test2");

        const after = this.getMemoryInfo();

        const final = after - this.initial;

        this.left.setText([
            'Destroy & Create Texture Test',
            'Initial buffer: ' + this.initial + ' MB',
            'After adding texture: ' + before + ' MB',
            'After destroy texture: ' + after + ' MB',
            'Difference: ' + final + ' MB'
        ]);
    }

    getMemoryInfo() {
        const totalMemoryInfo = this.game.renderer.gl.getExtension('GMAN_webgl_memory').getMemoryInfo();
        return Math.round(totalMemoryInfo.memory.texture / 1024 / 1024);
    }

    update ()
    {
        const info = this.renderer.gl.getExtension('GMAN_webgl_memory').getMemoryInfo();

        this.current.setText([
            'Initial buffer: ' + this.initial + ' MB',
            'Current buffer: ' + Math.round(info.memory.buffer / 1024 / 1024) + ' MB',
            'Current texture: ' + Math.round(info.memory.texture / 1024 / 1024) + ' MB',
            'Current renderbuffer: ' + Math.round(info.memory.renderbuffer / 1024 / 1024) + ' MB',
            'Current drawingbuffer: ' + Math.round(info.memory.drawingbuffer / 1024 / 1024) + ' MB',
            'Current total: ' + Math.round(info.memory.total / 1024 / 1024) + ' MB',
            'Total minus Initial: ' + (Math.round(info.memory.total / 1024 / 1024) - this.initial) + ' MB'
        ]);

        this.resources.setText([
            'Resources buffer: ' + info.resources.buffer,
            'Resources renderbuffer: ' + info.resources.renderbuffer,
            'Resources program: ' + info.resources.program,
            'Resources shader: ' + info.resources.shader,
            'Resources texture: ' + info.resources.texture,
            'Resources vertexArray: ' + info.resources.vertexArray
        ]);
    }

}

const game = new Phaser.Game({
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    scene: TestScene,
    parent: 'phaser-example'
});
