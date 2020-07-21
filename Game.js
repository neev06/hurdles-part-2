class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    man1 = createSprite(200,200);
    man1.addImage("BoyRun2.gif",man1_img);
    man1.scale = 0.7;
    man2 = createSprite(400,200);
    man2.addImage("BoyRun2.gif",man2_img);
    
    man2.scale = 0.7;
    man3 = createSprite(600,200);
    man3.addImage("BoyRun2.gif",man3_img);
    man3.scale = 0.7;
    man4 = createSprite(800,200);
    man4.addImage("BoyRun2.gif",man4_img); 
    man4.scale = 0.7;
    men = [man1, man2, man3, man4];
  }

  play(){
    form.hide();
    spawnObstacles()
    spawnObstacles1()
    spawnObstacles2()
    spawnObstacles3()
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));      
      image(track, 0, 0, displayWidth*4, displayHeight);
            var index = 0;

      var y = 5 ;
      var x;

      for(var plr in allPlayers){
        index = index + 1 ;

        y = y + 150;
        x = displayHeight - allPlayers[plr].distance;
        men[index-1].x = x;
        men[index-1].y = y;

        fill("yellow");
        textSize(25);
        
        text("END",2000,150)
        text("END",2000,310)
        text("END",2000,450)
        text("END",2000,610)
        textSize(20);
        fill("blue");
        textFont("Algeria");
        text(allPlayers[plr].name,x-10,y-45);


        if (index === player.index){
          men[index - 1].shapeColor = "red";
          camera.position.x =  men[index-1].x;
          camera.position.y =  displayHeight/2;
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
        }
    
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance -=10
      player.update();
    }
    if(player.distance > 200){
      gameState = 2;
    }
    if(player.distance <= -1300){
      gameState = 2;
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
  }
}
function spawnObstacles() {
  var i = 0;
  if (frameCount % 90 === 0) {
      i = i + 1000
      var obstacle = createSprite(1700, 150);

      obstacle.velocityX = -2;
      obstacle.addImage(hurdle);

      obstacle.scale = 0.30;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = true;
  }
}

function spawnObstacles1() {
  if (frameCount % 90 === 0) {

      var obstacle = createSprite(1700, 300);

      obstacle.velocityX = -2;
      obstacle.addImage(hurdle);
      obstacle.scale = 0.30;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = true;

  }
}
function spawnObstacles2() {
  if (frameCount % 90 === 0) {

      var obstacle = createSprite(1700, 480);

      obstacle.velocityX = -2;
      obstacle.addImage(hurdle);
      obstacle.scale = 0.30;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = true;

  }
}
function spawnObstacles3() {
  if (frameCount % 90 === 0) {

      var obstacle = createSprite(1700, 620);

      obstacle.velocityX = -2;
      obstacle.addImage(hurdle);
      obstacle.scale = 0.30;
      obstacle.lifetime = 800;
      obstacle.setCollider("rectangle", -10, 0, 90, 150);
      obstacle.debug = true;

  }
}