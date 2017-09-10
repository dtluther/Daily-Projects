const GameView = require('./game_view.js');

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById('game-canvas');
  const ctx = canvasEl.getContext("2d");

  const asteroids = new GameView(ctx);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 500, 500);
  ctx.fill(asteroids.start());
});


// document.addEventListener("DOMContentLoaded", function(){
//   const canvasEl = document.getElementById("game-canvas");
//   canvasEl.width = 500;
//   canvasEl.height = 500;
//
//   const ctx = canvasEl.getContext("2d");
//   ctx.fillStyle = "purple";
//   ctx.fillRect(0, 0, 500, 500);
//
//   ctx.beginPath();
//   ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
//   ctx.strokeStyle = 'yellow';
//   ctx.lineWidth = 5;
//   ctx.stroke();
//   ctx.fillStyle = 'white';
//   ctx.fill();
//
//   const asteroids = new GameView(ctx);
//   asteroids.start();
// });
