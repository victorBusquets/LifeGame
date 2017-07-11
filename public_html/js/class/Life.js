function Life( gameSize ){
	var cells = "";		

	function inColumnLimits( columnIndex, value ){
		var columnsLimit = getColumnLimits( columnIndex );

		return value < columnsLimit.init ? columnsLimit.init : value > columnsLimit.end ? columnsLimit.end : value;
	};

	function getColumnLimits( columnIndex ){
		var init = columnIndex * gameSize.x,
			end	 = (columnIndex+1) * gameSize.x -1;

		return { init: init, end: end };
	};

	function validValue( columnIndex, value ){
		var columnsLimit = getColumnLimits( columnIndex );

		return value>=0 && value<cells.length && columnIndex === getColumnIndexByValue(value);
	};

	function getColumnIndexByValue( value ){
		return Math.ceil((value+1)/gameSize.x) - 1;
	}

	function getNeighbors(i){
		var columnIndex = Math.ceil( (i+1) / gameSize.x )-1,

			firstColumnInit =  i - gameSize.x -1,
			firstColumnEnd = firstColumnInit + 3,
			thirdColumnInit = i + gameSize.x -1,
			thirdColumnEnd = thirdColumnInit + 3,

			firstColumn = cells.substring( inColumnLimits( columnIndex-1, firstColumnInit ), inColumnLimits( columnIndex-1, firstColumnEnd ) ),
			prev = validValue( columnIndex, i-1 ) ? cells[i-1] : "",
			next = validValue( columnIndex, i+1 ) ? cells[i+1] : "",
			thirdColumn = cells.substring( inColumnLimits( columnIndex+1, thirdColumnInit ), inColumnLimits( columnIndex+1, thirdColumnEnd ) );

		return firstColumn + prev + next + thirdColumn;
	};

	function countLifesArround(i){
		return (getNeighbors(i).match(/1/g) || []).length;
	};

	function createInitialCells(){
		cells = CELLS_MAP;
	};

	function render( canvas ){
		var rows = cells.match( new RegExp(".{1,"+gameSize.x+"}", "g") );

		rows.map(function( row, y ){
			row.split("").map(function( cell, x ) {
				if(cell==="1"){
					canvas.fillCell( x, y, "red" );
				}
			});
		});
	};

	function cellShouldDie( count ){
		return ( count === 2 || count ===3 ) ? 1 : 0;
	};

	function cellShouldLive( count ){
		return count ===3  ? 1 : 0;
	};

	function update(){
		var nextRoundCells = "";

		for( var i=0; i<cells.length; i++ ){
			var lifeArround = countLifesArround( i );
			nextRoundCells += cells[ i ] === "1" ? cellShouldDie( lifeArround ) : cellShouldLive( lifeArround );
		}

		cells = nextRoundCells;
	};

	function init(){
		createInitialCells();
	};

	init();


	return {
		update: update,
		render: render
	};
};