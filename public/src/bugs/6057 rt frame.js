// const USE_WEBGL = false; // Change to `true` to see bugs
const USE_WEBGL = true; // Change to `true` to see bugs

class Example extends Phaser.Scene
{
    preload ()
    {
        this.load.image('mario', 'assets/bugs/mario4x4.png');
        this.load.spritesheet('marioss', 'assets/bugs/mario4x4.png', { frameWidth: 128, frameHeight: 128 });
    }

    create ()
    {
        console.log(this.textures.get('marioss'));

        //  UVs for the sprite sheet frames:
        //  -------- u0 - u1 - v0 - v1
        //  Frame 1   0   .5    0   .5
        //  Frame 2  .5    1    0   .5
        //  Frame 3   0   .5   .5    1
        //  Frame 4  .5    1   .5    1

        const origin = this.add.renderTexture(0, 0, 256, 256);

        origin.draw('mario', 0, 0);

        origin.saveTexture('test-texture');

        const sqSize = 128;

        // origin.texture.add('square-1', 0, 0, 0, sqSize, sqSize);
        // origin.texture.add('square-2', 0, sqSize, 0, sqSize, sqSize);
        // origin.texture.add('square-3', 0, 0, sqSize, sqSize, sqSize);
        // origin.texture.add('square-4', 0, sqSize, sqSize, sqSize, sqSize);

        const f1 = origin.texture.add('square-1', 0, 0, 0, sqSize, sqSize);
        const f2 = origin.texture.add('square-2', 0, sqSize, 0, sqSize, sqSize);
        const f3 = origin.texture.add('square-3', 0, 0, sqSize, sqSize, sqSize);
        const f4 = origin.texture.add('square-4', 0, sqSize, sqSize, sqSize, sqSize);

        console.log(this.textures.get('test-texture'));

        //  UVs for the CanvasTexture frames:
        //  -------- u0 - u1 - v0 - v1
        //  Frame 1   0   .5    0   .5
        //  Frame 2  .5    1    0   .5
        //  Frame 3   0   .5   .5    1
        //  Frame 4  .5    1   .5    1

        // f1.updateUVsInverted();
        // f2.updateUVsInverted();
        // f3.updateUVsInverted();
        // f4.updateUVsInverted();

        this.add.text(0, sqSize * 2, 'Original (RT)', {color: '#000', fontSize: 24}).setOrigin(0,0);

        // ----------- Test cases ------------------

        let offset = 256 + 10;
        // `Image`
        this.add.text(offset, sqSize * 2, 'Image', {color: '#000', fontSize: 24}).setOrigin(0,0);
        [
          ['square-1', 0, 0],
          ['square-2', sqSize+1, 0],
          ['square-3', 0, sqSize+1],
          ['square-4', sqSize+1, sqSize+1]
        ].forEach(([frame, x, y])=>{
          this.add.image(offset + x, y, 'test-texture', frame).setOrigin(0,0);
        });

        offset = (256 * 2) + (10 * 2);

        // `Sprite`
        this.add.text(offset, sqSize * 2, 'Sprite', {color: '#000', fontSize: 24}).setOrigin(0,0);
        [
          ['square-1', 0, 0],
          ['square-2', sqSize+1, 0],
          ['square-3', 0, sqSize+1],
          ['square-4', sqSize+1, sqSize+1]
        ].forEach(([frame, x, y])=>{
          this.add.sprite(offset + x, y, 'test-texture', frame).setOrigin(0,0);
        });

        offset = (256 * 3) + (10 * 3);

        // `Blitter`
        this.add.text(offset, sqSize * 2, 'Blitter', {color: '#000', fontSize: 24}).setOrigin(0,0);
        const blitter = this.add.blitter(0, 0, 'test-texture');
        [
          ['square-1', 0, 0],
          ['square-2', sqSize+1, 0],
          ['square-3', 0, sqSize+1],
          ['square-4', sqSize+1, sqSize+1]
        ].forEach(([frame, x, y])=>{
          blitter.create(offset + x, y, frame);
        });

        offset = (256 * 4) + (10 * 4);

        // `RenderTexture`
        this.add.text(offset, sqSize * 2, 'RT.drawFrame',  {color: '#000', fontSize: 24}).setOrigin(0,0);
        const target = this.add.renderTexture(offset, 0, 512, 512);
        [
            ['square-1', 0, 0],
            ['square-2', sqSize+1, 0],
            ['square-3', 0, sqSize+1],
            ['square-4', sqSize+1, sqSize+1]
        ].forEach(([frame, x, y])=>{
          target.drawFrame('test-texture', frame, x, y);
        });
    }
}

new Phaser.Game({
  width: 1350,
  height: 524,
  type: USE_WEBGL ? Phaser.WEBGL : Phaser.CANVAS,
  backgroundColor: 0xFFFFFF,
  parent: 'phaser-example',
  scene: Example
});
