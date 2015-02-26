
var drawModule = (function () { 

  var btn = document.getElementById('btn');
  btn.addEventListener("click", function(){ drawModule.init(); });
  
  var drawSnake = function() {
      var length = 5;
      snake = [];
      for (var i = length-1; i>=0; i--) {
          snake.push({x:i, y:0});
      }  
    }
    

  var paint = function(){

        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, w, h);

        btn.setAttribute('disabled', true);

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        if(direction == 'right') { 
          snakeX++; }
        else if(direction == 'left') { 
          snakeX--; }
        else if(direction == 'up') { 
          snakeY--; 
        }else if(direction == 'down') { 
          snakeY++; }

        if(snakeX == -1 || snakeX == w/snakeSize || snakeY == -1 || snakeY == h/snakeSize || check_collision(snakeX, snakeY, snake))
        {
            //restart game

            btn.removeAttribute('disabled', true);

            ctx.clearRect(0,0,w,h);
            gameloop = clearInterval(gameloop);
            return;          
          }
          
          if(snakeX == food.x && snakeY == food.y)
          {
            var tail = {x: snakeX, y: snakeY}; //Create a new head instead of moving the tail
            score ++;
            
            create_food(); //Create new food
          }
          else
          {
            var tail = snake.pop(); //pops out the last cell
            tail.x = snakeX; 
            tail.y = snakeY;
          }
          //The snake can now eat the food.
          snake.unshift(tail); //puts back the tail as the first cell

          for(var i = 0; i < snake.length; i++)
          {
            var c = snake[i];
            canvasModule.bodySnake(c.x, c.y);
          } 
          
          canvasModule.pizza(food.x, food.y); 
          canvasModule.scoreText();
    }

 var create_food = function() {
    food = {
      x: Math.floor((Math.random() * 30) + 1),
      y: Math.floor((Math.random() * 30) + 1)
      }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      
        if (food.x===snakeX && food.y === snakeY) {
        food.x = Math.floor((Math.random() * 30) + 1);
        food.y = Math.floor((Math.random() * 30) + 1);
        }
      }
    }

    var check_collision = function(x, y, array) {
      for(var i = 0; i < array.length; i++)
      {
        if(array[i].x === x && array[i].y === y)
         return true;
      }
      return false;
      }

     var init = function(){

      direction = 'down';
      drawSnake();
      create_food();
      gameloop = setInterval(paint, 80);
    }


    return {
      init : init,
      create_food : create_food,

    };

    
}());
