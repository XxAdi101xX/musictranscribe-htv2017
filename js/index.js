/*$(document).ready(function(){
  var id = a;
  var notes = [];
  $("#root").mousedown(function() {
    id.play();
  });

  $("root").click(function() {
    alert("hiii");
   });
   $(".keys").click(function() {
   id = $(this).attr("id");
   notes.push(id);
   alert(notes[0]);
  });

});*/

//circle1.style.fill="yellow";

var keyKeyboard = null;
var keyPiano = null;

$(document).keypress(function(event) {
	keyKeyboard = String.fromCharCode(event.which).toLowerCase();
	switch (keyKeyboard) {
		case 'a':
			keyPiano = 'w1';
			console.log('G');
			break;
		case 's':
			keyPiano = 'w2';
			console.log('A');
			break;
		case 'd':
			keyPiano = 'w3';
			console.log('B');
			break;
		case 'f':
			keyPiano = 'w4';
			console.log('C');
			break;
		case 'g':
			keyPiano = 'w5';
			console.log('D');
			break;
		case 'h':
			keyPiano = 'w6';
			console.log('E');
			break;
		case 'j':
			keyPiano = 'w7';
			console.log('F');
			break;
		case 'k':
			keyPiano = 'w8';
			console.log("G");
			break;
		case 'w':
			keyPiano = 'b1';
			console.log('G#');
			break;
		case 'e':
			keyPiano = 'b2';
			console.log('A#');
			break;
		case 't':
			keyPiano = 'b3';
			console.log('C#');
			break;
		case 'y':
			keyPiano = 'b4';
			console.log('D#');
			break;
		case 'u':
			keyPiano = 'b5';
			console.log('F#');
			break;
		default:
			keyPiano = null
			console.log("Not a note");
			break;
	}
	if (keyPiano != null) {
		changeColor(keyPiano);
	}
});

function changeColor(keyPiano) {
	var set = document.getElementById(keyPiano);
	var attribute = "fill:white; stroke:black";
	if (keyPiano.charAt(0) == "b") {
		attribute = "fill:black; stroke:black";
	}
	set.setAttribute("style", "fill:orange; stroke:black");
	setTimeout(function(){
		set.setAttribute("style", attribute);
	}, 100)
}

