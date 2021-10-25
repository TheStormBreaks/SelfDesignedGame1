function invincible(){
    gameState = POWER
    topCliff.visible = true;
    bottomCliff.visible = true;
    spaceship.visible = true;
    welcomebg.visible = false;
    enterButton.visible = false;
    
  }
  
  function timeOut(ms){
    return new Promise(invincible=> setTimeout(invincible,ms))
  
  
  }
  
  async function normal(){
    await timeOut(5000)
    gameState = PLAY
  }
  