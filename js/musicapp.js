

$(document).ready(function(){
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

});
