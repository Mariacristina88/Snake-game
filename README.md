# Snake game
**Name:** Maria Cristina Di Termine

**Category:** Canvas HTML5 and Javascript

**Date:** February 2015
----------------------------------------------------------------------

**This is a simple classic 8 bit snake game created using the canvases of HTML5 and javascript.**

The important thing to know before start is that our snake is formed by a chain of elements (squares) and that the movement is allowed by moving the last square of the snake body to the front of it. 
This project is also builded using the module patterns for code structure.

### Istructions:
1. Create the canvas element in our html.
2. Draw the body of the snake and the food using canvases.
3. Create the structure of the snake and of the food.
4. Create a _checkCollision_ function to detect if the snake has touched itself.
5. Create the main function which has to run everything we need to play.
6. Use the _keyCode_ event to move the snake using the keyboard.

```bash
<pre lang="js">
var bodySnake = function(x, y) {
        //This is the single square
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        //This is the border of the square
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }
</pre>
```
![Snake](https://raw.githubusercontent.com/Mariacristina88/Snake-game/master/img/snake.png)
