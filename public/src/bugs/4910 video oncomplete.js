var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var vid1, vid2, vid3, vid4;
var debug1, debug2, debug3, debug4;

var game = new Phaser.Game(config);

function preload ()
{
    // this.load.video('wormhole', 'assets/video/wormhole.mp4');
    // this.load.video('skull', 'assets/video/skull.mp4');
    // this.load.video('underwater', 'assets/video/underwater.mp4');
    // this.load.video('pumpkins', 'assets/video/pumpkins.mp4');
    // this.load.video('mountains', 'assets/video/mountains.mp4');
    // this.load.video('fireworks', 'assets/video/fireworks.mp4');

    this.load.setCORS('anonymous');
    this.load.setBaseURL('https://labs.phaser.io');

    this.load.video('wormhole', 'assets/video/wormhole.mp4', 'canplaythrough', false);
    this.load.video('skull', 'assets/video/skull.mp4', 'canplaythrough', false);
    this.load.video('underwater', 'assets/video/underwater.mp4', 'canplaythrough', false);
    this.load.video('pumpkins', 'assets/video/pumpkins.mp4', 'canplaythrough', false);
    this.load.video('mountains', 'assets/video/mountains.mp4', 'canplaythrough', false);
    this.load.video('fireworks', 'assets/video/fireworks.mp4', 'canplaythrough', false);
    this.load.video('fireworks2', 'assets/video/fireworks.mp4', 'canplaythrough', false);
    this.load.video('fireworks3', 'assets/video/fireworks.mp4', 'canplaythrough', false);
    this.load.video('fireworks4', 'assets/video/fireworks.mp4', 'canplaythrough', false);

}

function create ()
{
    vid1 = this.add.video(0, 0, 'wormhole').setScale(0.5).setOrigin(0).setAlpha(0.1);
    vid2 = this.add.video(400, 0, 'skull').setScale(0.5).setOrigin(0).setAlpha(0.1);
    vid3 = this.add.video(0, 300, 'mountains').setScale(0.5).setOrigin(0).setAlpha(0.1);
    vid4 = this.add.video(400, 300, 'pumpkins').setScale(0.5).setOrigin(0).setAlpha(0.1);

    vid1.play(true);
    vid2.play(true);
    vid3.play(true);
    vid4.play(true);

    window.v1 = vid1;
    window.v2 = vid2;
    window.v3 = vid3;
    window.v4 = vid4;

    debug1 = this.add.text(10, 10);
    debug2 = this.add.text(10, 100);
    debug3 = this.add.text(10, 200);
    debug4 = this.add.text(10, 300);
}

function update ()
{
    debug1.setText([
        vid1.video.paused
    ]);

    debug2.setText([
        vid2.video.paused
    ]);

    debug3.setText([
        vid3.video.paused
    ]);

    debug4.setText([
        vid4.video.paused
    ]);


}

