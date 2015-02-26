var canvasModule = (function () { 
	
	var bodySnake = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

	var pizza = function(x, y) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
        ctx.strokeStyle = 'white';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

	var scoreText = function() {
		var score_text = "Score: " + score;
		ctx.fillStyle = 'blue';
		ctx.fillText(score_text, 145, h-5);
	}

	return {
		bodySnake : bodySnake,
		pizza : pizza,
		scoreText : scoreText,
		
	};

}());