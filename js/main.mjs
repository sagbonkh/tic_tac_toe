import Game from "./Game.mjs";
import GameView from "./GameView.mjs";

let game = new Game();
let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = function(i){
    game.makeMove(i);
    gameView.update(game);
};

gameView.onRestartClick = function(){
    game = new Game();
    gameView.update(game);
};

gameView.update(game);