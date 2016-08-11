var game = new Phaser.Game(800, 600, Phaser.AUTO, 'main');

var state = {preload: preload,create: create, update: update};

game.state.add('state', state);
game.state.start('state');

var cursors;
var map;
var playerS;
var crystal;
var left;
var right;
var background;
var backgroundOL;
var foreground;
var group;
var crystals;
var numOfCrystals = 10;
var ate = 0;
var cleft = 10;
var gameText = "";
var numOfEnemies = 5;
var enemies;
var monster;
var gO = "";


function preload() {
    game.load.tilemap('Map1', 'json/Newmap1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('TilesetBG', 'assets/hyptosis_tile-art-batch-1.png');
    game.load.spritesheet('player', 'assets/Players.png', 32, 64, 96);
    game.load.spritesheet('crystal', 'assets/crystal.png', 16, 16, 8);
    game.load.spritesheet('monster', 'assets/rpgcritters2.png', 48.5, 46.4, 10);
}

function create() {
    //Game world boundary
    game.world.bounds = new Phaser.Rectangle(0, 0, 1600, 1600);

    game.physics.startSystem(Phaser.Physics.P2JS);

    //THE MAP
    map = game.add.tilemap('Map1');
    map.addTilesetImage('hyptosis_tile-art-batch-1','TilesetBG');
    background = map.createLayer('Tile Layer 1');
    background.resizeWorld();
    backgroundOL = map.createLayer('BackgroundOverlay');



    //THE PLAYER
    this.x = game.world.randomX;
    this.y = game.world.randomY;

    playerS = game.add.sprite(this.x, this.y, 'player', 1);
    left = playerS.animations.add('left', [12,13,14], 10, false);
    right = playerS.animations.add('right', [24,25,26], 10, false);
    playerS.animations.add('up', [36,37,38], 10, false);
    playerS.animations.add('down', [0,1,2], 10, false);
    left.enableUpdate = true;
    right.enableUpdate = true;

    //scale make bigger or smaller of original size
    playerS.scale.set(1);
    playerS.smoothed = true;
    playerS.name = 'Player';


    //Tree foreground
    foreground = map.createLayer('Foreground');
    foreground.resizeWorld();


    //First we choose which tiles will collide
    //map.setCollision(782, true, "Collision");
    //Then the physics engine creates collision bodies from the tiles:
    game.physics.p2.convertTilemap(map, "Collision");


    //Player Physics
    game.physics.p2.enable(playerS);
    playerS.body.collideWorldBounds = true;


    playerS.body.fixedRotation = true; // no rotation
    playerS.body.setCircle(10, 0, 19);
    game.physics.p2.setBoundsToWorld(true, true, true, true, false);
    //Remove default collision box
    //playerS.body.clearShapes();
    //Only the lower part of the player collides
    //playerS.body.addRectangle(22, 28, 0, 25);
    //Make the bounding box visible for test
    game.camera.follow(playerS);

    crystals = [];
    for (var i=0; i<numOfCrystals; i++) {
        crystals.push( new Crystal() );
        playerS.body.onBeginContact.add(playerHit, this);
    }


    gameText = game.add.text(0, 0, "", { font: "18px Arial", fill: "#ffffff", align: "center" });
    gameText.fixedToCamera = true;
    gameText.cameraOffset.setTo(0, 0);
    updateText();

    enemies = [];
    for (var a=0; a<numOfEnemies; a++) {
        enemies.push( new Enemy() );
        playerS.body.onBeginContact.add(playerKill, this);

    }


}

function updateText(){
    // just writing a string
    gameText.setText("Crystals found: " + ate + " /" + " " + cleft + " left" + " " + gO);
}

function update() {



    leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

    var speed=150;
    if (leftKey.isDown){
        playerS.body.velocity.x = -speed;
        playerS.play('left');
    } else if (rightKey.isDown){
        playerS.body.velocity.x = speed;
        playerS.play('right');
    } else {
        playerS.body.velocity.x = 0;
    }
    if (upKey.isDown){
        playerS.body.velocity.y = -speed;
        playerS.play('up');
    } else if (downKey.isDown){
        playerS.body.velocity.y = speed;
        playerS.play('down');
    } else {
        playerS.body.velocity.y = 0;
    }


}

function render() {



}

Crystal = function(){
    this.x = game.world.randomX;
    this.y = game.world.randomY;

    //THE CRYSTAL
    crystal = game.add.sprite(this.x, this.y, 'crystal', 0);

    // game.physics.p2.enable([crystal], false);
    //crystal.body.clearShapes();
    //crystal.body.loadPolygon('physicsData', 'crystal');



    //Crystal Physics
    game.physics.p2.enable(crystal);
    crystal.body.collideWorldBounds = true;
    //crystal.body.debug = true;
    crystal.body.setCircle(10, 0, 0);
    //crystal.body.setRectangle(16, 16, 0, 0);

    crystal.animations.add('shine');

    crystal.animations.play('shine', 5, true);

    crystal.name = 'Crystal';

    foreground = map.createLayer('Foreground');
};



function playerHit(body, shapeA, shapeB, equation){


    /*
     // if the player hits an actual body (not a world boundary)
     if(body.sprite.name == "Crystal"){
     body.sprite.kill();
     console.log("Ate a crystal");
     playerS.body.onBeginContact.remove(playerHit, this);
     }
     */

    if(body){
        switch(body.sprite.name){
            case "Crystal":
                body.sprite.kill();
                ate++;
                cleft--;
                playerS.body.onBeginContact.remove(playerHit, this);
                break;
        }
        switch(body.sprite.name){
            case "Player":
                playerS.body.onBeginContact.remove(playerHit, this);
                break;
        }
        updateText();
        playerS.body.onBeginContact.add(playerHit, this);
    }


}

function playerKill(body, shapeA, shapeB, equation) {


    if (body) {
        switch (body.sprite.name) {
            // if it's a Crystal remove the body
            case "Monster":
                if (playerS.body) {
                    playerS.kill();
                    gO = "GAME OVER";
                    updateText();
                    console.log("You died");
                    //playerS.body.onBeginContact.remove(playerKill, this);
                    break;
                }

            //playerS.body.onBeginContact.add(playerKill, this);
        }
    }
}

Enemy = function(){
    this.x = game.world.randomX;
    this.y = game.world.randomY;

    monster = game.add.sprite(this.x,this.y, 'monster', 1);
    monster.scale.set(1);
    game.physics.p2.enable(monster);
    monster.body.collideWorldBounds = true;
    monster.body.fixedRotation = true; // no rotation
    //monster.body.debug = true;
    monster.body.setCircle(30, 0, 0);

    monster.body.immovable = true;
    monster.name = 'Monster';



    game.time.events.repeat(Phaser.Timer.SECOND * 3, 10, moveEnemy, game);

    foreground = map.createLayer('Foreground');
};


function moveEnemy() {
    //randomise the movement
    monster = game.rnd.integerInRange(1, 5);
    //simple if statement to choose if and which way the droid moves
    if (monster == 1) {
        monster.x += -100;
    } else if(monster == 2) {
        monster.x += 100;
    } else {
        monster.x = 0;
    }

    if (monster == 3) {
        monster.y += -100;
    } else if(monster == 4) {
        monster.y += 100;
    } else {
        monster.y = 0;
    }

}