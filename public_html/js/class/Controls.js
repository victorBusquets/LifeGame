function Controls( speed ){
	var speed = speed || 375;

	function getSpeed(){
		return speed
	};

	function setSpeed( newSpeed ){
		speed = newSpeed;

		$("#speed .show").val( newSpeed );
	};

	function toggleMenu() {
		$(".controls").hasClass("open") ? $(".controls").removeClass("open") : $(".controls").addClass("open");
	}

	function addEventListener(){
		$(".controls .region .button-toggle").click( toggleMenu );
	};

	function init(){
		addEventListener();
	};

	init();

	return {
		getSpeed: getSpeed,
		setSpeed: setSpeed
	};
};