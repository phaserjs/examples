var Demo = new Phaser.Class({

    Extends: Phaser.State,

    initialize:

    function Demo ()
    {
        Phaser.State.call(this);
    },

    preload: function ()
    {
        this.load.image('eye', 'assets/pics/lance-overdose-loader-eye.png');
    },

    create: function ()
    {
        this.eye = this.add.image(Phaser.Math.Between(0, 800), Phaser.Math.Between(0, 600), 'eye');
    },

    update: function ()
    {
        this.eye.rotation += 0.02;
    }

});
