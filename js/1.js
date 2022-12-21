$(document).on('mousemove', function(e) {
  var xPos = e.pageX;
  var yPos = e.pageY;
  // console.log(xPos, yPos);
  $('.circle-out').css({
    'top': yPos,
    'left': xPos
  });
});