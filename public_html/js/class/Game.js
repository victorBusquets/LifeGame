function Game ( gameSize, speed ){
	var idName = "game",
		canvas 	= Canvas( idName, gameSize, false ),
		speed 	= speed || 500,
		life	= Life( gameSize );
		
	function init(){		
		console.log( "Init the GAME" );
		addEventListener();
		render();
		loop();
	};
	
	function loop(){
		setTimeout(function(){ 
			loopTime();
			loop();
		}, speed);
	};

	function update(){
		life.update( );

	};

	function loopTime(){
		canvas.clearCanvas();
		update();
		render();
	}


	function render(){
		console.log( "Render LIFE" );
		life.render( canvas );
	};

	/*function clickEvent(){
		console.log( "ClickEvent" );
		loopTime();
	};*/

	function addEventListener(){
		//$( "#" + idName ).click( clickEvent );
	};
	
	init();
};