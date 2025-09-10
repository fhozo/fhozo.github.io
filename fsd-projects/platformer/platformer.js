$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1000, 0, 20, 520);

createPlatform(50, 600, 160, 10, "red");
createPlatform(400, 490, 50, 10, "red");
createPlatform(560, 490, 50, 10, "red");
createPlatform(760, 390, 20, 10, "red");
createPlatform(500, 0, 20, 350);
createPlatform(1200, 0, 20, 750);
createPlatform(995, 650, 20, 10, "red");
createPlatform(1180, 550, 20, 10, "red");
createPlatform(1020, 430, 20, 10, "red");
createPlatform(1180, 300, 20, 10, "red");
createPlatform(1020, 200, 20, 10, "red");
createPlatform(520, 300, 60, 10, "red");
    // TODO 3 - Create Collectables
createCollectable("steve", 1150, 30);
createCollectable("diamond", 520, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons 500, 2000, 3500, 0.0001
createCannon("top", 200, 500);
createCannon("right", 300, 2000);
createCannon("right", 600, 3500);
createCannon("right", 800, 0.0001);
createCannon("bottom", 1040, 1500);
createCannon("bottom", 480, 2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
