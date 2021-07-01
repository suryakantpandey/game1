var level =1;
var color = ["yellow" , "blue" , "green" , "red"];
var gamePattern = [];
var userPattern = [];
var start = false;
var count =0;
$(document).keypress(function(){
  $("h1").text("level " + level);
  newPattern();
  start =true;
});
function newPattern()
{
  if(count ===4)
  {
    level++;
    $("h1").text("level " + level);
    count =0;
  }
  var randomColor = Math.floor(Math.random()*4);
  var audio1 = new Audio("sounds/" + color[randomColor]+".mp3");
  audio1.play();
  $("#"+color[randomColor]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  gamePattern.push(color[randomColor]);
}
$(".btn").click(function(){
    var clr = $(this).attr('id');
    $("#"+clr).addClass("pressed");
    var audio1 = new Audio("sounds/" + clr+".mp3");
    audio1.play();
    setTimeout(function(){$("#"+clr).removeClass("pressed"); },250 );
    console.log(clr);
    userPattern.push((clr))
    console.log(gamePattern[userPattern.length-1]);
    check(userPattern.length-1)
  });
function check(checklevel)
{
    if(gamePattern[checklevel] === userPattern[checklevel])
    {
      if(gamePattern.length === userPattern.length)
      {
        setTimeout(function () {
          newPattern();
        }, 1000);
        count++;
      }
      else
      {
        fail();setTimeout(300);
        var audio1 = new Audio("sounds/wrong.mp3");
        audio1.play();
        setTimeout(100);

      }
    }
    else
    {
      fail();
      var audio1 = new Audio("sounds/wrong.mp3");
      audio1.play();
      setTimeout(100);
    }
}
function fail()
{
  $("h1").text("game over press any key to restart");
  gamePattern.length =0;
  userPattern.length = 0;
  level=1;
  start =false;
  count =0;
}
