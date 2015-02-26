(function (window, document, drawModule, canvasModule, undefined) {


	document.onkeydown = function(event) {

        keyCode = window.event.keyCode; 
        keyCode = event.keyCode;

        switch(keyCode) {
        
        case 37: 
          if (direction != 'right') {
            direction = 'left';
          }
          console.log('left'); 
          break;

        case 39:
          direction = 'right';
          console.log('right');
          break;

        case 38:
          direction = 'up';
          console.log('up');
          break;

        case 40:
          direction = 'down';
          console.log('down');
          break;
          }
      }


})(window, document, drawModule, canvasModule);
