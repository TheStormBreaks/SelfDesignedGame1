function spawnObstacles() {
    if (frameCount % 90 === 0) {
      var obstacle = createSprite(1500, random(165, 516), 10, 40);
      obstacle.velocityX = -(12);
      obstacle.setCollider("circle", 0, 0, 35);
      obstacle.debug = true;
      obstacle.velocityX = -(6 + 3 * score / 100);
      
  
      //generate random obstacles;
      var rand = Math.round(random(1, 4));
      switch (rand) {
        case 1:
          obstacle.addImage(obstacle1);
          break;
        case 2:
          obstacle.addImage(obstacle2);
          break;
        case 3:
         obstacle.addImage(obstacle3);
          break;
        case 4:
         obstacle.addImage(obstacle4);
          break;
          default:
          break;
        }
  
        obstaclesGroup.add(obstacle);
        
    }
  }