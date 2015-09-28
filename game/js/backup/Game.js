var rPG = rPG || {};

rPG.Game = function() {

    this.backgroundOL;
    this.foreground;

};

rPG.Game.prototype = {
    create: function() {

        this.map = this.add.tilemap('Map1');
        this.map.addTilesetImage('hyptosis_tile-art-batch-1','TilesetBG');
        this.map.addTilesetImage('hyptosis_tile-art-batch-2','TilesetBG2');
        this.background = this.map.createLayer('Tile Layer 1');
        this.background2 = this.map.createLayer('Tile Layer 2');
        this.backgroundOL = this.map.createLayer('BackgroundOverlay');


        this.player = this.add.sprite(100,100, 'player', 1);
        this.left = this.player.animations.add('left', [12,13,14], 10, false);
        this.right = this.player.animations.add('right', [24,25,26], 10, false);
        this.player.animations.add('up', [36,37,38], 10, false);
        this.player.animations.add('down', [0,1,2], 10, false);
        this.left.enableUpdate = true;
        this.right.enableUpdate = true;
        //scale make bigger or smaller of original size
        this.player.scale.set(1);
        this.player.smoothed = true;


        this.foreground = this.map.createLayer('Foreground');
        this.background.resizeWorld();
        this.background2.resizeWorld();


        //Physics
        this.physics.startSystem(Phaser.Physics.P2JS);
        //First we choose which tiles will collide
        this.map.setCollision(3, true, "Collision");
        //Then the physics engine creates collision bodies from the tiles:
        this.physics.p2.convertTilemap(this.map, "Collision");
        this.physics.p2.enable(this.player);


        this.player.body.fixedRotation = true; // no rotation
        //Remove default collision box
        this.player.body.clearShapes();
        //Only the lower part of the player collides
        this.player.body.addRectangle(22, 28, 0, 25);
        //Controls
        this.cursors = this.input.keyboard.createCursorKeys();
        //Make the bounding box visible
        this.player.body.debug = true;
        this.game.camera.follow(this.player);

    },
    update: function() {
        var speed=200;
        if (this.cursors.left.isDown){
            this.player.body.velocity.x = -speed;
            this.player.play('left');
        } else if (this.cursors.right.isDown){
            this.player.body.velocity.x = speed;
            this.player.play('right');
        } else {
            this.player.body.velocity.x = 0;
        }
        if (this.cursors.up.isDown){
            this.player.body.velocity.y = -speed;
            this.player.play('up');
        } else if (this.cursors.down.isDown){
            this.player.body.velocity.y = speed;
            this.player.play('down');
        } else {
            this.player.body.velocity.y = 0;
        }
    }
};