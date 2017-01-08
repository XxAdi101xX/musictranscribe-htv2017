VF = Vex.Flow;

// Create an SVG renderer and attach it to the Div element named "boo".
var div = document.getElementById("boo");
var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(500, 500);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 400 at position 10, 40 on the canvas.
var stave = new VF.Stave(10, 40, 400);

// Add a clef and time signature.
stave.addClef("treble").addTimeSignature("4/4");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();

var notes = [
    /*
  // A quarter-note C.
  new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),

  // A quarter-note D.
  new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),

  // A quarter-note rest. Note that the key (b/4) specifies the vertical
  // position of the rest.
  new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),

  // A C-Major chord.
  new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
*/];

$(document).keypress(function(event) {
for (i = 0; i < array.length; ++i) { 
    var convertedNote="b";
    switch (keyKeyboard) {
		case "a":
			convertedNote="c"
			break;
		case "s":
			convertedNote="d"
			break;
		case "d":
			convertedNote="e"
			break;
		case "f":
			convertedNote="f"
			break;
		case "g":
			convertedNote="g"
			break;
		case "h":
			convertedNote="a"
			break;
		case "j":
			convertedNote="b"
			break;
		case "k":
			convertedNote="g"
			break;
		case "w":
			convertedNote="c#"
			voice.draw(context, stave);break;
		case "e":
			convertedNote="d#"
			break;
		case "t":
			convertedNote="f#"
			break;
		case "y":
			convertedNote="g#"
			break;
		case "u":
			convertedNote="a#"
			break;
		default:
			convertedNote="b"
			break;}
    notes.push(new VF.StaveNote({clef: "treble", keys: [convertedNote.concat("/4")], duration: "q" }));
    var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
voice.addTickables(notes);

// Format and justify the notes to 400 pixels.
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

    voice.draw(context, stave);
}});

// Create a voice in 4/4 and add above notes

// Render voice
//if (array.length>0)


