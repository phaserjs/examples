
var config = {
  type: Phaser.WEBGL,
  parent: 'content',
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
};

var game = new Phaser.Game(config);

var entity1;
var entity2;

function preload() {


}

function create() {
  entity1 = this.add.sprite(0, 100);
  this.physics.add.existing(entity1);
  entity1.body.setCircle(36);
  
  
  
  entity2 = this.add.sprite(100, 100);
  this.physics.add.existing(entity2);
  entity2.body.setCircle(36);
  
  this.physics.add.collider(entity1,entity2);
  this.physics.add.collider(entity2,entity1);
  
}
function update(){
  entity1.body.setVelocity(160,0);
  if(entity1.x>200)entity1.x=0;
}