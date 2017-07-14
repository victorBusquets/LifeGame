function Controls( speed ){
	var speed = speed || 375;

	function getSpeed(){
		return speed
	};

	function setSpeed( newSpeed ){
		speed = newSpeed;
	};

	function toggleMenu() {
		var $controls = $(".controls");

		$controls .hasClass("open") ? $controls.removeClass("open") : $controls.addClass("open");
	};

	function addEventListener(){
		$(".controls .region .button-toggle").click( toggleMenu );
	};

	function getSizeWithoutPX( size ){
		return parseFloat( size.split("px")[0] );
	};

	function setSize(){
		var $game = $("#game"),
			borderSize = 2,
			overSize = 8;

		$(".controls .menu").css(
			{
				"border": 	"solid black "+borderSize+"px",
				"width": 	getSizeWithoutPX( $game.css("width") ) + overSize,
				"height": 	getSizeWithoutPX( $game.css("height") ) + overSize,
				"bottom": 	getSizeWithoutPX( $game.css("top") ) - ( overSize/2 + borderSize ),
				"left": 	getSizeWithoutPX( $game.css("left") ) - ( overSize/2 + borderSize )
			}
		);
	};

	function init(){
		addEventListener();
		setSize();
	};

	init();

	return {
		getSpeed: getSpeed,
		setSpeed: setSpeed
	};
};