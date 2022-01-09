import { MainScene } from './scenes/main-scene';
import { MenuScene } from "./scenes/menu-scene";
import { BootScene } from "./scenes/boot-scene";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Webpack-Boilerplate',
  version: '1.0',
  width: '100vw',
  height: '100vh',
  // scale: {
  //   mode: Phaser.Scale.FIT,
  //   autoCenter: Phaser.Scale.CENTER_BOTH
  // },
  backgroundColor: '#98d687',
  type: Phaser.AUTO,
  parent: 'game',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  render: {
    pixelArt: true,
    antialias: false
  },
  scene: [BootScene, MenuScene, MainScene]
};
