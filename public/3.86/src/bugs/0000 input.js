new Phaser.Game({
    type: Phaser.AUTO,
    width: 300,
    height: 300,
    backgroundColor: 0x2d2d88,
    scene: {
      create () {
        let count = 0
        const text = this.add.text(0, 0, 'Click blue')
        const phaserRedRectangle = this.add.rectangle(50, 50, 150, 150, 0xFF4444).setOrigin(0).setAlpha(0.5)
        phaserRedRectangle.setInteractive()
        phaserRedRectangle.on('pointerdown', () => {
          count++;
          text.setText(`Clicked ${count} times`)
          console.log('clicked', count)
        })

        const element = this.add.dom(100, 100, 'div', 'width: 150px; height: 150px; background: #0099FF; opacity: 0.5;');
      }
    },
    dom: {
        createContainer: true
    },
    parent: 'phaser-example',
    // input: { windowEvents: false, touch: { capture: true } }
  })
