$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var historicalfigure1 = $("input#historicalfigure1").val();
    var historicalfigure2 = $("input#historicalfigure2").val();
    var verb1 = $("input#verb1").val();
    var animal = $("input#animal").val();
    var exclamation = $("input#exclamation").val();
    var verb2 = $("input#verb2").val();
    var emotion = $("input#emotion").val();

    $(".historicalfigure1").text(historicalfigure1);
    $(".historicalfigure2").text(historicalfigure2);
    $(".animal").text(animal);
    $(".exclamation").text(exclamation);
    $(".verb1").text(verb1);
    $(".verb2").text(verb2);
    $(".emotion").text(emotion);
    $("#story").show();

  });
});
