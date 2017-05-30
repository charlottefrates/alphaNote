/* ================================== DRAWING BOARD================================== */

// code from http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/
var clickX = [];
var clickY = [];
var clickDrag = [];
var paint;
context = document.getElementById('doodleCanvas').getContext("2d");

var savedDrawing;

$('#doodleCanvas').mousedown(function(e){
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});
$('#doodleCanvas').mousemove(function(e){
      if(paint){
              addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
              redraw();
            }
});
$('#doodleCanvas').mouseup(function(){
      paint = false;
});
$('#doodleCanvas').mouseleave(function(){
      paint = false;
});

function addClick(x, y, dragging)
{
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}
function redraw() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 3;

    for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.stroke();
    }

}

function clearCanvas() {
    console.log('clearing canvas');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    clickX = [];
    clickY = [];
    clickDrag = [];
}

function saveCanvas(type, id) {
    console.log('Drawing captured');
    var image = ($('#doodleCanvas')[0]).toDataURL('image/png',1.0);
    console.log('doodle image captured and save to savedDrawing');
    savedDrawing = image;
    console.log(savedDrawing);
    $("#data-container-2").html(savedDrawing);


}

$('#reRenderD').on('click',function(){
  console.log('redrawing savedDrawing');
  var canvas = $('#doodleCanvas')[0];
  var context = canvas.getContext('2d');
  var img = new Image();

  img.onload = function() {
  context.drawImage(img, 0, 0);
  }

  img.src = savedDrawing;

});
