import { Boot } from "./Boot.js";
import { ClickerGame } from "./ClickerGame.js";
import { GameOver } from "./GameOver.js";
import { MainMenu } from "./MainMenu.js";
import { Preloader } from "./Preloader.js";

//  Find out more information about the Game Config at: https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: "phaser-container",
    backgroundColor: "#028af8",
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 400 }
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        ClickerGame,
        GameOver
    ]
};

export default new Phaser.Game(config);
