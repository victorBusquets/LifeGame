function StateMachine( speed ){
	var speed = speed || 375;

	function getSpeed(){
		return speed
	};

	function setSpeed( newSpeed ){
		speed = newSpeed;

		$("#speed .show").val( newSpeed );
	};

	return {
		getSpeed: getSpeed,
		setSpeed: setSpeed
	};
};