function Game ( gameSize, speed ){
	var idName = "game",
		canvas 	= Canvas( idName, gameSize, false ),
		stateMachine = StateMachine( speed ),
		life	= Life( gameSize );
		
	function init(){		
		addEventListener();
		render();
		loop();
	};
	
	function loop(){
		setTimeout(function(){ 
			loopTime();
			loop();
		}, stateMachine.getSpeed() );
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
		life.render( canvas );
	};

	/*function clickEvent(){
		console.log( "ClickEvent" );
		loopTime();
	};*/


	function speedChangeEvent(){
		var value = parseInt( this.value);
		stateMachine.setSpeed( value ) ;
	};

	function addEventListener(){
		//$( "#" + idName ).click( clickEvent );Ç
		$("#speed .launcher").change( speedChangeEvent );
	};
	
	init();
};