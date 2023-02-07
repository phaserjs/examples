const SlidingPuzzle = {
    ALLOW_CLICK: 0,
    TWEENING: 1
};

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
        this.slideSpeed = 250;
        this.slideEase = 'Sine.in';

        //  The number of iterations the puzzle walker will go through when
        //  scrambling up the puzzle. 10 is a nice and easy puzzle, but
        //  push it higher for much harder ones.
        this.iterations = 10;

        //  The speed at which the pieces are shuffled at the start. This allows
        //  the player to see the puzzle before trying to solve it. However if
        //  you don't want this, just set the speed to zero and it'll appear
        //  instantly 'scrambled'.
        this.shuffleSpeed = 250;
        this.shuffleEase = 'Linear';

        this.lastMove = null;

        //  The image in the Cache to be used for the puzzle.
        //  Set in the startPuzzle function.
        this.photo = '';

        this.action = SlidingPuzzle.ALLOW_CLICK;
    }

    create ()
    {
        this.add.image(512, 384, 'background');
        this.add.image(512, 384, 'box-inside');

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
        const pieceWidth = Math.floor(photoWidth / rows);
        const pieceHeight = Math.floor(photoHeight / columns);

        this.pieceWidth = pieceWidth;
        this.pieceHeight = pieceHeight;

        //  A Container to put the pieces in
        if (this.pieces)
        {
            this.pieces.removeAll(true);
        }
        else
        {
            this.pieces = this.add.container();
        }

        //  Center the Container
        this.pieces.x = Math.floor((this.scale.width - photoWidth) / 2);
        this.pieces.y = Math.floor((this.scale.height - photoHeight) / 2);

        console.log('pwh', pieceWidth, pieceHeight);

        let i = 0;

        //  Loop through the image and create a new Sprite for each piece of the puzzle.
        for (let y = 0; y < this.columns; y++)
        {
            for (let x = 0; x < this.rows; x++)
            {
                //  remove old textures

                const slice = this.textures.addDynamicTexture(`slice${i}`, pieceWidth, pieceHeight);

                const fx = x * pieceWidth;
                const fy = y * pieceHeight;

                slice.stamp(key, null, fx, fy, { originX: 0, originY: 0 });

                const piece = this.add.image(x * pieceWidth, y * pieceHeight, `slice${i}`).setOrigin(0, 0);

                //  The current row and column of the piece
                //  Store the row and column the piece _should_ be in, when the puzzle is solved
                piece.setData({
                    row: x,
                    column: y,
                    correctRow: x,
                    correctColumn: y
                });

                // piece.data.row = x;
                // piece.data.column = y;

                // piece.data.correctRow = x;
                // piece.data.correctColumn = y;

                //  Here is how we handle creating each piece. Rather than do something like create
                //  a BitmapData, and all kinds of extra textures, we just set each Sprite to have
                //  the same texture as the source image - and then we crop it to be the correct
                //  portion of the image. This ensures that we've still only got one texture
                //  bound to the GPU.
                // piece.setCrop(x * this.pieceWidth, y * this.pieceHeight, this.pieceWidth, this.pieceHeight);

                // console.log('piece', piece.x, piece.y, piece._crop);

                piece.setInteractive();

                piece.on('pointerdown', this.checkPiece, this);

                this.pieces.add(piece);

                i++;
            }
        }

        //  The last piece will be our 'spacer' to slide in to
        this.spacer = this.pieces.getAt(this.pieces.length - 1);
        this.spacer.alpha = 0;

        this.lastMove = null;

        // this.shufflePieces();
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

            // var tween = this.add.tween(piece).to({ x: x, y: y }, this.shuffleSpeed, this.shuffleEase, true);

            if (this.iterations > 0)
            {
                //  Any more iterations left? If so, shuffle, otherwise start play
                this.iterations--;

                tween.on('complete', this.shufflePieces, this);

                // tween.onComplete.add(this.shufflePieces, this);
            }
            else
            {
                tween.on('complete', this.startPlay, this);

                // tween.onComplete.add(this.startPlay, this);
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

        this.tweens.add({
            targets: piece,
            x,
            y,
            duration: this.slideSpeed,
            ease: this.slideEase,
            onComplete: () => this.tweenOver()
        });

        // var tween = this.add.tween(piece).to({ x: x, y: y }, this.slideSpeed, this.slideEase, true);

        // tween.onComplete.addOnce(this.tweenOver, this);
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

            if (piece.data.values.correctRow !== piece.data.values.row || piece.data.values.correctColumn !== piece.data.value.column)
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

            this.tweens.add({
                targets: this.spacer,
                alpha: 1,
                duration: this.slideSpeed * 2,
                ease: 'linear',
                onComplete: () => {
                    this.input.once('pointerdown', this.nextRound, this);
                }
            });

            // var tween = this.add.tween(this.spacer).to({ alpha: 1 }, this.slideSpeed * 2, 'Linear', true);


            // var _this = this;

            // tween.onComplete.addOnce(function() {
            //     _this.input.onDown.addOnce(_this.nextRound, _this);
            // });
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
        if (this.photo === 'photo1')
        {
            this.photo = 'photo2';
            this.iterations = 20;
            this.startPuzzle(this.photo, 4, 4);
        }
        else if (this.photo === 'photo2')
        {
            this.photo = 'photo3';
            this.iterations = 30;
            this.startPuzzle(this.photo, 5, 5);
        }
        else
        {
            //  Back to the start again
            this.photo = 'photo1';
            this.iterations = 10;
            this.startPuzzle(this.photo, 3, 3);
        }
    }
}
