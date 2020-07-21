var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var men, man1, man2, man3, man4;

var  man1_img, man2_img, man3_img, man4_img;

function preload(){
  man1_img = loadImage("BoyRun2.gif");
  man2_img = loadImage("BoyRun2.gif");
  
  man3_img = loadImage("BoyRun2.gif");
  man4_img = loadImage("BoyRun2.gif");

  track = loadImage("images/pla.jpg");
  hurdle=loadImage("hurdle.png")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){ 

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
   
  }
  if(gameState === 2){
    game.end();
  }

}
