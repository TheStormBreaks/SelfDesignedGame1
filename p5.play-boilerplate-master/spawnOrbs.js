function spawnOrbs() {
    if (frameCount % 300 === 0) {
      var orbs = createSprite(1500, random(165, 516), 5, 40);
      orbs.velocityX = -(12);
      orbs.setCollider("circle", 0, 0, 35);
      orbs.debug = true;
      orbs.scale = 0.3;
      orbs.velocityX = -(6 + 3 * score / 100);
      
  
      //generate random obstacles;
      var rand = Math.round(random(1, 4));
      switch (rand) {
        case 1:
          orbs.addImage(power_orb_image);
          break;
        case 2:
          orbs.addImage(power_orb_image);
          break;
        case 3:
         orbs.addImage(power_orb_image);
          break;
        case 4:
         orbs.addImage(power_orb_image);
          break;
          default:
          break;
        }
  
        orbsGroup.add(orbs);
        
    }
  }
  