class Test extends Phaser.Scene
{
    create ()
    {
        var redPoly = this.add.polygon(100,100, [[-20,-20], [20, -20], [20, 20], [-20,20]]).setStrokeStyle(1, 0xff0000);

        var greenPoly = this.add.polygon(100,100, [[0,0], [40, 0], [40, 40], [0,40]]).setStrokeStyle(1, 0x00ff00);

            // console.log("Red:", redPoly)
            // console.log("Green:", greenPoly)

        console.log("Red Polygon bounds:", redPoly.getBounds());
        console.log("Green Polygon bounds:", greenPoly.getBounds());

        var p1 = new Phaser.Geom.Polygon([[-20,-20], [20, -20], [20, 20], [-20,20]]);
        var b1 = Phaser.Geom.Polygon.GetAABB(p1);

        console.log(b1);

    }
}

var game = new Phaser.Game({
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    parent: 'phaser-example',
    backgroundColor: "#242424",
    scene: Test
});
