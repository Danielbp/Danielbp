var rPG = rPG || {};

rPG.Preload = function() {};

rPG.Preload.prototype = {
    preload: function() {


        this.load.tilemap('Map1', 'json/tilemap.json', null, Phaser.Tilemap.TILED_JSON);

        this.load.image('TilesetBG', 'assets/hyptosis_tile-art-batch-1.png');
        this.load.image('TilesetBG2', 'assets/hyptosis_tile-art-batch-2.png');

        this.load.spritesheet('player', 'assets/Players.png', 32, 64, 96);

    },

    create: function() {

    },

    update: function () {
        this.state.start('Game');


    }
};