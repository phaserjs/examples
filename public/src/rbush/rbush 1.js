var config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function randBox(size) {
    var x = Math.random() * (100 - size),
        y = Math.random() * (100 - size);
    return [x, y,
        x + size * Math.random(),
        y + size * Math.random()];
}

function genData(N, size) {
    var data = [];
    for (var i = 0; i < N; i++) {
        data.push(randBox(size));
    }
    return data;
};

function convert (data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        result.push({x: data[i][0], y: data[i][1], w: data[i][2] - data[i][0], h: data[i][3] - data[i][1]});
    }
    return result;
}

function preload() {

    this.load.image('phaser', 'assets/sprites/phaser.png');

}

function create() {

    var N = 10;
    // var maxFill = 16;

    var data = genData(N, 1);

    console.log(data);

    // var data2 = genData.convert(data);

    var tree = Phaser.Structs.RTree();

    for (var i = 0; i < N; i++)
    {
        tree.insert(data[i]);
    }

    console.log('done?');

    var result = tree.search({
        minX: 40,
        minY: 20,
        maxX: 80,
        maxY: 70
    });

    console.log(result);

    // var treeData = tree.toJSON();
    // console.log(treeData);



}
