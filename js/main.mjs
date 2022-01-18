import Game from "./Game.mjs";
import GameView from "./GameView.mjs";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = function(i){
    console.log(`Tile Clicked:${i}`)
};

gameView.onRestartClick = function(){
    console.log("Game is restarted.")
};