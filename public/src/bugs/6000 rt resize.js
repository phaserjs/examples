const parent = 'parent';
const config = {
  canvasStyle: 'width: 100%; height: 100%',
  scale: {
    mode: Phaser.Scale.RESIZE,
    parent,
    resizeInterval: 50,
  },
  parent,
  type: Phaser.WEBGL,
  scene: {
    create,
    update,
  },
};
const game = new Phaser.Game(config);

const CANVAS_WIDTH = 1024;
const CANVAS_HEIGHT = CANVAS_WIDTH;
function create() {
  // Zoom into the top-left corner which has our canvas.
  this.cameras.main.setOrigin(0, 0);
  const rt = this.add.renderTexture(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  rt.fill(0x000000);
  const brush = this.add.circle(-1_000, -1_000, 10, 0x00ffff).setOrigin(0.5, 0.5);
  const gridBrush = this.add.circle(-1_000, -1_000, 20, 0xffffff).setOrigin(0.5, 0.5);

  // Draw a grid to show the bounds of the original texture.
  for (let x = 0; x < CANVAS_WIDTH; x += 100) {
    for (let y = 0; y < CANVAS_HEIGHT; y += 100) {
      rt.draw(gridBrush, x, y);
    }
  }

  // Events
  this.input.on('pointermove', (pointer) => {
    // console.log(pointer);
    if (pointer.isDown) {
      const {x, y} = normalizePoint(pointer, this.scale.canvasBounds);
      rt.draw(brush, x, y);
    }
  }, this);
  this.input.on('pointerdown', (pointer) => {
    // console.log(pointer);
    const {x, y} = normalizePoint(pointer, this.scale.canvasBounds);
    rt.draw(brush, x, y);
  }, this);
}

function update(time, delta) {
  const {width, height} = this.scale.canvasBounds;
  // Zoom the camera so that rt spans the full width and height.
  // This would zoom the width and height separately, but that feature
  // was only added in 3.50, so in order to make this example work in 3.24.1,
  // we keep the canvas width and height identical.
  this.cameras.main.setZoom(
    width / CANVAS_WIDTH
  );
}

/** Given a pointer event, returns an x/y coord normalized to CANVAS_WIDTH x CANVAS_HEIGHT. */
function normalizePoint(pointer, canvasBounds) {
  const {width, height} = canvasBounds;
  return {x: pointer.x / width * CANVAS_WIDTH, y: pointer.y / height * CANVAS_HEIGHT};
}
