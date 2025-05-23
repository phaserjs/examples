class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    create ()
    {
        const DPR = window.devicePixelRatio;
        // const DPR = 2;
        const { width, height } = this.scale
        const overlayFade = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
        const help1Mask = this.add.graphics().fillRoundedRect(0, 0, 115*DPR, 38*DPR, 16*DPR).setVisible(false)
        const geoMask = help1Mask.createGeometryMask()
        geoMask.invertAlpha = true
        overlayFade.setMask(geoMask)
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#00ff00',
    parent: 'phaser-example',
    scene: Example
};

const game = new Phaser.Game(config);
