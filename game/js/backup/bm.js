var game = new Phaser.Game(800, 600, Phaser.AUTO, 'main');

var stateTestmap = {preload: preload,create: create, update: update};

game.state.add('stateTestmap', stateTestmap);
game.state.start('stateTestmap');

var cursors;
var map;
var player;
var shadow;
var left;
var right;
var background;
var background2;
var backgroundOL;
var foreground;

function preload() {
    game.load.tilemap('Map1', 'json/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
   /*
    game.load.image('TilesetBG', 'assets/TilesetRiver.jpg');
    game.load.image('TilesetTree', 'assets/TilesTree.png');
    */

    game.load.image('TilesetBG', 'assets/hyptosis_tile-art-batch-1.png');
    game.load.image('TilesetBG2', 'assets/hyptosis_tile-art-batch-2.png');
    game.load.spritesheet('player', 'assets/Players.png', 32, 64, 96);
}

function create() {
    map = game.add.tilemap('Map1');
    map.addTilesetImage('hyptosis_tile-art-batch-1','TilesetBG');
    map.addTilesetImage('hyptosis_tile-art-batch-2','TilesetBG2');
    background = map.createLayer('Tile Layer 1');
    background2 = map.createLayer('Tile Layer 2');
    backgroundOL = map.createLayer('BackgroundOverlay');


    player = game.add.sprite(100,100, 'player', 1);
    left = player.animations.add('left', [12,13,14], 10, false);
    right = player.animations.add('right', [24,25,26], 10, false);
    player.animations.add('up', [36,37,38], 10, false);
    player.animations.add('down', [0,1,2], 10, false);
    left.enableUpdate = true;
    right.enableUpdate = true;
    //scale make bigger or smaller of original size
    player.scale.set(1);
    player.smoothed = true;


    foreground = map.createLayer('Foreground');
    background.resizeWorld();
    background2.resizeWorld();


    //Physics
    game.physics.startSystem(Phaser.Physics.P2JS);
    //First we choose which tiles will collide
    map.setCollision(3, true, "Collision");
    //Then the physics engine creates collision bodies from the tiles:
    game.physics.p2.convertTilemap(map, "Collision");
    game.physics.p2.enable(player);


    player.body.fixedRotation = true; // no rotation
    //Remove default collision box
    player.body.clearShapes();
    //Only the lower part of the player collides
    player.body.addRectangle(22, 28, 0, 25);
    //Controls
    cursors = game.input.keyboard.createCursorKeys();
    //Make the bounding box visible
    player.body.debug = true;
    game.camera.follow(player);

}

function update() {

    var speed=200;
    if (cursors.left.isDown){
        player.body.velocity.x = -speed;
        player.play('left');
    } else if (cursors.right.isDown){
        player.body.velocity.x = speed;
        player.play('right');
    } else {
        player.body.velocity.x = 0;
    }
    if (cursors.up.isDown){
        player.body.velocity.y = -speed;
        player.play('up');
    } else if (cursors.down.isDown){
        player.body.velocity.y = speed;
        player.play('down');
    } else {
        player.body.velocity.y = 0;
    }

}