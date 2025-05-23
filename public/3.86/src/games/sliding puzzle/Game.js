const SlidingPuzzle = {
    ALLOW_CLICK: 0,
    TWEENING: 1
};

/**
 * Sliding Puzzle Game Template
 * ----------------------------
 *
 * This is the classic Sliding Puzzle game. Unlike lots of implementations out there,
 * we don't use a 'random' starting layout, as otherwise the puzzle will be unsolvable
 * 50% of the time. Instead we use a puzzle walker function. This allows you to see
 * the puzzle before-hand, and then it gets all manged up, ready for you to solve.
 *
 * You can control the number of iterations, or steps, that the walker goes through.
 * You can of course provide any image you like to the puzzle, and it'll adapt and resize
 * without changing much.
 *
 * In this example template there are 3 pictures, and as you solve them, the walker
 * increases in complexity each time, making it harder to solve.
 *
 * This web site has some creative tips on solving Sliding Puzzles:
 * http://www.nordinho.net/vbull/blogs/lunanik/6131-slider-puzzles-solved-once-all.html
 */

export default class Game extends Phaser.Scene
{
    constructor ()
    {
        super('Game');

        //  These are all set in the startPuzzle function
        this.rows = 0;
        this.columns = 0;

        //  The width and height of each piece in the puzzle.
        //  Again, this is set automatically in startPuzzle.
        this.pieceWidth = 0;
        this.pieceHeight = 0;

        this.pieces = null;
        this.spacer = null;

        //  The speed at which the pieces slide, and the tween they use
        this.slideSpeed = 300;
        this.slideEase = 'power3';

        //  The number of iterations the puzzle walker will go through when
        //  scrambling up the puzzle. 10 is a nice and easy puzzle, but
        //  push it higher for much harder ones.
        this.iterations = 6;

        //  The speed at which the pieces are shuffled at the start. This allows
        //  the player to see the puzzle before trying to solve it. However if
        //  you don't want this, just set the speed to zero and it'll appear
        //  instantly 'scrambled'.
        this.shuffleSpeed = 200;
        this.shuffleEase = 'power1';

        this.lastMove = null;

        //  The image in the Cache to be used for the puzzle.
        //  Set in the startPuzzle function.
        this.photo = '';

        this.slices = [];

        this.action = SlidingPuzzle.ALLOW_CLICK;
    }

    create ()
    {
        this.add.image(512, 384, 'background');
        this.add.image(512, 384, 'box-inside');

        window.solve = () => {
            this.nextRound();
        };

        this.startPuzzle('pic1', 3, 3);
    }

    /**
     * This function is responsible for building the puzzle.
     * It takes an Image key and a width and height of the puzzle (in pieces, not pixels).
     * Read the comments within this function to find out what happens.
     */
    startPuzzle (key, rows, columns)
    {
        this.photo = key;

        //  The size if the puzzle, in pieces (not pixels)
        this.rows = rows;
        this.columns = columns;

        //  The size of the source image
        const texture = this.textures.getFrame(key);

        const photoWidth = texture.width;
        const photoHeight = texture.height;

        //  Create our sliding pieces

        //  Each piece will be this size:
        const pieceWidth = photoWidth / rows;
        const pieceHeight = photoHeight / columns;

        this.pieceWidth = pieceWidth;
        this.pieceHeight = pieceHeight;

        //  A Container to put the pieces in
        if (this.pieces)
        {
            this.pieces.removeAll(true);
        }
        else
        {
            //  The position sets the top-left of the container for the pieces to expand down from
            this.pieces = this.add.container(194, 66);
        }

        //  An array to put the texture slices in
        if (this.slices)
        {
            this.slices.forEach(slice => slice.destroy());

            this.slices = [];
        }

        let i = 0;

        //  Loop through the image and create a new Sprite for each piece of the puzzle.
        for (let y = 0; y < this.columns; y++)
        {
            for (let x = 0; x < this.rows; x++)
            {
                //  remove old textures

                const slice = this.textures.addDynamicTexture(`slice${i}`, pieceWidth, pieceHeight);

                const ox = 0 + (x / this.rows);
                const oy = 0 + (y / this.columns);

                slice.stamp(key, null, 0, 0, { originX: ox, originY: oy });

                this.slices.push(slice);

                const piece = this.add.image(x * pieceWidth, y * pieceHeight, `slice${i}`);

                piece.setOrigin(0, 0);

                //  The current row and column of the piece
                //  Store the row and column the piece _should_ be in, when the puzzle is solved
                piece.setData({
                    row: x,
                    column: y,
                    correctRow: x,
                    correctColumn: y
                });

                piece.setInteractive();

                piece.on('pointerdown', () => this.checkPiece(piece));

                this.pieces.add(piece);

                i++;
            }
        }

        //  The last piece will be our 'spacer' to slide in to
        this.spacer = this.pieces.getAt(this.pieces.length - 1);
        this.spacer.alpha = 0;

        this.lastMove = null;

        this.shufflePieces();
    }

    /**
     * This shuffles up our puzzle.
     *
     * We can't just 'randomize' the tiles, or 50% of the time we'll get an
     * unsolvable puzzle. So instead lets walk it, making non-repeating random moves.
     */
    shufflePieces ()
    {
        //  Push all available moves into this array
        const moves = [];

        const spacerCol = this.spacer.data.get('column');
        const spacerRow = this.spacer.data.get('row');

        if (spacerCol > 0 && this.lastMove !== Phaser.DOWN)
        {
            moves.push(Phaser.UP);
        }

        if (spacerCol < this.columns - 1 && this.lastMove !== Phaser.UP)
        {
            moves.push(Phaser.DOWN);
        }

        if (spacerRow > 0 && this.lastMove !== Phaser.RIGHT)
        {
            moves.push(Phaser.LEFT);
        }

        if (spacerRow < this.rows - 1 && this.lastMove !== Phaser.LEFT)
        {
            moves.push(Phaser.RIGHT);
        }

        //  Pick a move at random from the array
        this.lastMove = Phaser.Utils.Array.GetRandom(moves);

        //  Then move the spacer into the new position
        switch (this.lastMove)
        {
            case Phaser.UP:
                this.swapPiece(spacerRow, spacerCol - 1);
                break;

            case Phaser.DOWN:
                this.swapPiece(spacerRow, spacerCol + 1);
                break;

            case Phaser.LEFT:
                this.swapPiece(spacerRow - 1, spacerCol);
                break;

            case Phaser.RIGHT:
                this.swapPiece(spacerRow + 1, spacerCol);
                break;
        }
    }

    /**
     * Swaps the spacer with the piece in the given row and column.
     */
    swapPiece (row, column)
    {
        //  row and column is the new destination of the spacer

        const piece = this.getPiece(row, column);

        const spacer = this.spacer;
        const x = spacer.x;
        const y = spacer.y;

        // piece.data.set({
        //     row: spacer.data.get('row'),
        //     column: spacer.data.get('column')
        // });

        piece.data.values.row = spacer.data.values.row;
        piece.data.values.column = spacer.data.values.column;

        spacer.data.values.row = row;
        spacer.data.values.column = column;

        // spacer.data.set({
        //     row,
        //     column
        // });

        // this.spacer.data.row = row;
        // this.spacer.data.column = column;

        spacer.setPosition(piece.x, piece.y);

        //  If we don't want them to watch the puzzle get shuffled, then just
        //  set the piece to the new position immediately.
        if (this.shuffleSpeed === 0)
        {
            piece.setPosition(x, y);

            if (this.iterations > 0)
            {
                //  Any more iterations left? If so, shuffle, otherwise start play
                this.iterations--;

                this.shufflePieces();
            }
            else
            {
                this.startPlay();
            }
        }
        else
        {
            //  Otherwise, tween it into place
            const tween = this.tweens.add({
                targets: piece,
                x,
                y,
                duration: this.shuffleSpeed,
                ease: this.shuffleEase
            });

            if (this.iterations > 0)
            {
                //  Any more iterations left? If so, shuffle, otherwise start play
                this.iterations--;

                tween.on('complete', this.shufflePieces, this);
            }
            else
            {
                tween.on('complete', this.startPlay, this);
            }
        }
    }

    /**
     * Gets the piece at row and column.
     */
    getPiece (row, column)
    {
        for (let i = 0; i < this.pieces.length; i++)
        {
            const piece = this.pieces.getAt(i);

            if (piece.data.get('row') === row && piece.data.get('column') === column)
            {
                return piece;
            }
        }

        return null;
    }

    /**
     * Sets the game state to allow the user to click.
     */
    startPlay ()
    {
        this.action = SlidingPuzzle.ALLOW_CLICK;
    }

    /**
     * Called when the user clicks on any of the puzzle pieces.
     * It first checks to see if the piece is adjacent to the 'spacer', and if not, bails out.
     * If it is, the two pieces are swapped by calling `this.slidePiece`.
     */
    checkPiece (piece)
    {
        if (this.action !== SlidingPuzzle.ALLOW_CLICK)
        {
            return;
        }

        //  Only allowed if adjacent to the 'spacer'
        //
        //  Remember:
        //
        //  Columns = vertical (y) axis
        //  Rows = horizontal (x) axis

        const spacer = this.spacer;

        if (piece.data.values.row === spacer.data.values.row)
        {
            if (spacer.data.values.column === piece.data.values.column - 1)
            {
                //  Space above the piece?
                piece.data.values.column--;

                spacer.data.values.column++;
                spacer.y += this.pieceHeight;

                this.slidePiece(piece, piece.x, piece.y - this.pieceHeight);
            }
            else if (spacer.data.values.column === piece.data.values.column + 1)
            {
                //  Space below the piece?
                piece.data.values.column++;

                spacer.data.values.column--;
                spacer.y -= this.pieceHeight;

                this.slidePiece(piece, piece.x, piece.y + this.pieceHeight);
            }
        }
        else if (piece.data.values.column === spacer.data.values.column)
        {
            if (spacer.data.values.row === piece.data.values.row - 1)
            {
                //  Space to the left of the piece?
                piece.data.values.row--;

                spacer.data.values.row++;
                spacer.x += this.pieceWidth;

                this.slidePiece(piece, piece.x - this.pieceWidth, piece.y);
            }
            else if (spacer.data.values.row === piece.data.values.row + 1)
            {
                //  Space to the right of the piece?
                piece.data.values.row++;

                spacer.data.values.row--;
                spacer.x -= this.pieceWidth;

                this.slidePiece(piece, piece.x + this.pieceWidth, piece.y);
            }
        }
    }

    /**
     * Slides the piece into the position previously occupied by the spacer.
     * Uses a tween (see slideSpeed and slideEase for controls).
     * When complete, calls tweenOver.
     */
    slidePiece (piece, x, y)
    {
        this.action = SlidingPuzzle.TWEENING;

        this.sound.play('move');

        this.tweens.add({
            targets: piece,
            x,
            y,
            duration: this.slideSpeed,
            ease: this.slideEase,
            onComplete: () => this.tweenOver()
        });
    }

    /**
     * Called when a piece finishes sliding into place.
     * First checks if the puzzle is solved. If not, allows the player to carry on.
     */
    tweenOver ()
    {
        //  Are all the pieces in the right place?

        let outOfSequence = false;

        this.pieces.each(piece => {

            if (piece.data.values.correctRow !== piece.data.values.row || piece.data.values.correctColumn !== piece.data.values.column)
            {
                outOfSequence = true;
            }

        });

        if (outOfSequence)
        {
            //  Not correct, so let the player carry on.
            this.action = SlidingPuzzle.ALLOW_CLICK;
        }
        else
        {
            //  If we get this far then the sequence is correct and the puzzle is solved.
            //  Fade the missing piece back in ...
            //  When the tween finishes we'll let them click to start the next round

            this.sound.play('win');

            this.tweens.add({
                targets: this.spacer,
                alpha: 1,
                duration: this.slideSpeed * 2,
                ease: 'linear',
                onComplete: () => {
                    this.input.once('pointerdown', this.nextRound, this);
                }
            });

            this.pieces.each(piece => {
                piece.setPostPipeline('ShinePostFX');
            });
        }
    }

    /**
     * Starts the next round of the game.
     *
     * In this template it cycles between the 3 pictures, increasing the iterations and complexity
     * as it progresses. But you can replace this with whatever you need - perhaps returning to
     * a main menu to select a new puzzle?
     */
    nextRound ()
    {
        let size;
        let iterations;
        let nextPhoto;

        if (this.photo === 'pic1')
        {
            nextPhoto = 'pic2';
            iterations = 20;
            size = 4;
        }
        else if (this.photo === 'pic2')
        {
            nextPhoto = 'pic3';
            iterations = 30;
            size = 5;
        }
        else
        {
            //  Back to the start again
            nextPhoto = 'pic1';
            iterations = 10;
            size = 3;
        }

        this.reveal = this.add.image(this.pieces.x, this.pieces.y, nextPhoto).setOrigin(0, 0);

        this.reveal.setPostPipeline('WipePostFX');

        const pipeline = this.reveal.getPostPipeline('WipePostFX');

        pipeline.setTopToBottom();
        pipeline.setRevealEffect();

        this.tweens.add({
            targets: pipeline,
            progress: 1,
            duration: 2000,
            onComplete: () => {

                this.photo = nextPhoto;
                this.iterations = iterations;
                this.reveal.destroy();

                this.startPuzzle(nextPhoto, size, size);

            }
        });
    }
}
