var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    loader: {
      baseURL: "https://labs.phaser.io",
      crossOrigin: "anonymous"
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 }
      }
    },
    scene: {
      preload: preload,
      create: create
    }
  };
  
  var game = new Phaser.Game(config);
  
  function preload() {
      this.load.image('bunny', 'assets/sprites/bunny.png');
      this.load.image('checker', 'assets/pics/checker.png');
  }
  
  function create() {
      var checker = this.add.tileSprite(0, 0, 800, 600, 'checker');
      checker.setOrigin(0);
    
      var bunny = this.add.sprite(320, 240, 'bunny');
    
      var graphics = this.add.graphics();
    
      var scene = this;
  
      var timer = this.time.addEvent({
          delay: 500,
          loop: true,
          callback: function () {
              flash(scene, graphics, bunny);
          }
      });
  
  }
  
  function flash(scene, graphics, bunny) {
      graphics.fillStyle(0xFF0000);
      graphics.fillRect(0, 0, 800, 600);
      graphics.mask = new Phaser.Display.Masks.BitmapMask(scene, bunny);
      graphics.alpha = 0;
  
      scene.tweens.add({
          targets: graphics,
          alpha: 1,
          duration: 100,
          yoyo: true,
          ease: 'Quad.easeInOut',
          onComplete: function () {
              graphics.mask.destroy();
              graphics.clearMask(true);
              graphics.clear();
          }
      })
  }