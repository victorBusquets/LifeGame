function Game ( gameSize, speed ){
	var canvas 	= Canvas( "game", gameSize, false ),
		speed 	= speed || 150,
		life	= Life( gameSize );
		
	function init(){		
		console.log("Init the GAME");
		render();
	};
	
	function loop(){
		setTimeout(function(){ 
			loopTime();
		}, speed);
	};

	function update(){
		life.update( );

	};

	function loopTime(){
		update();
		render();
	}


	function render(){
		life.render( canvas );
	};
	
	init();
};