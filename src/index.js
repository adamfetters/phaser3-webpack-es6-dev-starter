import 'phaser';

import { SimpleScene } from './scenes/simple-scene';

const gameEngineConfig = {
	width: 680,
	height: 400,
	scene: SimpleScene,
};

new Phaser.Game(gameEngineConfig);
