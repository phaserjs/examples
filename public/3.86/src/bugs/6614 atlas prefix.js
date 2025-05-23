class Example extends Phaser.Scene {
    FilePackObject = {
        test1: {
            prefix: "superCoolPrefix-",
            files: [
                {
                    type: "image",
                    key: "taikodrummaster",
                    url: "assets/pics/taikodrummaster.jpg",
                },
                {
                    type: "multiatlas",
                    key: "megaset",
                    url: "assets/atlas/tp3-multi-atlas.json",
                    path: "assets/atlas",
                },
            ],
        },
    };

    preload() {
        // this.load.setPrefix("superCoolPrefix-");
        // this.load.image("taikodrummaster", 'assets/pics/taikodrummaster.jpg');
        // this.load.multiatlas("megaset", 'assets/atlas/tp3-multi-atlas.json', 'assets/atlas');
        // this.load.atlas("megaset", 'assets/atlas/megaset-0.png', 'assets/atlas/megaset-0.json');
        this.load.pack("pack1", this.FilePackObject);
    }

    create() {
        console.log(this.textures.list);

        this.add.image(400, 300, "superCoolPrefix-taikodrummaster");

        this.add.image(0, 0, "superCoolPrefix-megaset", "contra1").setOrigin(0);

        // this.add.image(0, 0, "megaset", "contra1").setOrigin(0);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: Example,
    parent: "phaser-example",
};

const game = new Phaser.Game(config);
