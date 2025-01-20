class Example extends Phaser.Scene
{
    create ()
    {
        const array = [
            { name: 'Alice', visible: true },
            { name: 'Bob', visible: false },
            { name: 'Charlie', visible: true },
            { name: 'Dave', visible: false },
            { name: 'Eve', visible: true }
        ];
        const property = 'visible';
        const value = false;
        const startIndex = 0;
        const endIndex = 5;

        const getFirst = Phaser.Utils.Array.GetFirst(array, property, value, startIndex, endIndex);
        console.log(getFirst);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    backgroundColor: '#2d2d88',
    scene: Example
};

const game = new Phaser.Game(config);
