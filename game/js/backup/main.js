var rPG = rPG|| {};

rPG.game = new Phaser.Game(800, 600, Phaser.AUTO, '');


rPG.game.state.add('Preload', rPG.Preload);
//rPG.game.state.add('MainMenu', rPG.MainMenu);
rPG.game.state.add('Game', rPG.Game);


rPG.game.state.start('Preload');