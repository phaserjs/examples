var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        create: create
    }
};

var game = new Phaser.Game(config);

function create ()
{
  // Create a test container
  var parentContainer = this.add.container(0,0);

  // Create a nested container
  var nestedContainer = this.add.container(0,0);

  // Create a child object
  var testObject = this.add.rectangle(0, 0, 20, 20).setOrigin(0);

  // Add object to nested container and this to the parent
  nestedContainer.add(testObject);
  parentContainer.add(nestedContainer);

  // At this point the containter is at 0x0 with a height and width of 20.
  console.log(parentContainer.getBounds());

  parentContainer.setX(100);
  parentContainer.setY(100);

  // Ths container should have moved, but not changed in size.
  console.log(parentContainer.getBounds());
}
