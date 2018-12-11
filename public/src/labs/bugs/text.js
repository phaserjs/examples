var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    backgroundColor: '#111111',
    parent: 'phaser-example',
    scene: {
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function create ()
{
    this.fpsText = this.add.text(10, 10, "FPS : 0", {fontSize: 30, color: '#ffffff', align: 'left'})
    this.lastUpdateTime = 0;
    this.counter = 0;

    // Note: Mobile experiences fps dips on Phaser 3.12+ with as few as 15-20 text objects
    // Mobile Phaser 3.11 on the same device can handle nearly 3000 text objects before fps dips
    for (let i = 0; i < 4000; i++) {
        this.add.text(i*0.01, 100, "1", { fontSize: 24, color: '#F6F616'});
    }
}

function update() {
    let currTime = Date.now();
    this.counter++;
    if (currTime > this.lastUpdateTime + 1000) {
        this.lastUpdateTime = currTime;
        this.fpsText.setText("FPS : "+ this.counter + ' ' + this.sys.game.renderer.nativeTextures.length);
        this.counter = 0;
    }
}
