function Canvas( domId, gameSize ){
	var canvas   = document.getElementById( domId ),
		context  = canvas.getContext("2d"),
		cellSize = 0;
		
	function setColor(color){
		context.fillStyle = color;
	};
	function clearCanvas(){
		context.clearRect(0, 0, canvas.width, canvas.height);
	};
	function clearCell( startX, startY ){
		context.clearRect( getProportionalSize(startX)-0.5, getProportionalSize(startY)-0.5, cellSize+1, cellSize+1 );
	};
	function fillCell( startX, startY, color ){
		if(color) setColor(color);
		context.fillRect( getProportionalSize(startX), getProportionalSize(startY), cellSize, cellSize );
	};
	function getHeight(){
		return canvas.height;
	};
	function getWidth(){
		return canvas.width;
	};
	function setWidth(width){
		canvas.width = width;
	};
	function setHeight(height){
		canvas.height = height;
	};
	
	function setFullSize(){
		const MARGIN_TOP = 30,
			  MARGIN_BOTTOM = 10;
		
		var width = $(window).width(),
			height = $(window).height() - MARGIN_TOP -MARGIN_BOTTOM,
			cellSize = height / gameSize.y,
			finalWidth = cellSize * gameSize.x,
			finalHeight = cellSize * gameSize.y;
			
		setCellSize( cellSize );
		setWidth( finalWidth );
		setHeight( finalHeight );
		centerCanvas( width - finalWidth, height - finalHeight+MARGIN_TOP*2);
	};
	
	function centerCanvas(widthDiff, heightDiff){
		$("#"+domId).css(
			{
				'position': 'absolute',
				'left': widthDiff/2, 
				'top': heightDiff/2
			}
		);
	};
	function drawImage( img, startX, startY, width, height ){
		context.drawImage( img, startX,	startY, width, height );
	};
	
	function drawRotatedImage( config ){
		var degrees = config.rotate * 90;
			rotateX = getProportionalSize(config.startX) + ( config.width/2 ),
			rotateY = getProportionalSize(config.startY) + ( config.height/2 );
						
		rotateContext(  rotateX, rotateY, degrees );		
		drawImage( config.img, -( config.width/2 ), -( config.height/2 ), config.width, config.height );
		restoreContext();
	};
		
	function translateContext(x, y ){
		context.save();
		context.translate( x, y );
	};
	
	function rotateContext( x, y, degrees ){
	    translateContext( x, y );
		context.rotate( degrees * Math.PI/180 );
	};
	
	function restoreContext(){
		context.restore();
	};	
	
	function getProportionalSize( size ){
		return size * cellSize;
	}
	
	function setCellSize( calculatedSize ){
		cellSize = calculatedSize;
	};
	
	function getSellSize(){
		return cellSize;
	};
	
	function getCenterX(){
		return getWidth() / 2;
	};
	
	function getCenterY(){
		return getHeight() / 2;
	};
	
	function fillText( value, x, y, size, color, align){
		context.font = size || "25px Arial"; 
		context.fillStyle = color || "rgba(255, 255, 255, 0.75)";
		context.textAlign = align || "center"; 
		context.fillText( value, x, y ); 
	};
	
	function setAlpha( alpha ){
		context.save();
		context.globalAlpha = alpha;
	};
	
	function restoreAlpha(){	
		context.restore();
	};
	
	function init(){		
		setFullSize();
	};
	
	init();
		
		
	return {
		fillCell: fillCell,
		clearCell: clearCell,
		clearCanvas: clearCanvas,
		fillText: fillText,
		drawImage: drawImage,
		getSellSize: getSellSize,
		getCenterX: getCenterX,
		getCenterY: getCenterY,
		setAlpha: setAlpha,
		restoreAlpha: restoreAlpha,
		drawRotatedImage: drawRotatedImage
	}
};