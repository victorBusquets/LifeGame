function Game ( gameSize, speed ){
	var idName = "game",
		canvas 	= Canvas( idName, gameSize, false ),
		controls = Controls( speed ),
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
		}, controls.getSpeed() );
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
		life.render( canvas, false );
	};

	/*function clickEvent(){
		console.log( "ClickEvent" );
		loopTime();
	};*/


	function speedChangeEvent(){
		var value = parseInt( this.value);
		
		controls.setSpeed( value ) ;
	};

	function addEventListener(){
		//$( "#" + idName ).click( clickEvent );Ç
		$("#speed .launcher").change( speedChangeEvent );
	};
	
	init();
};