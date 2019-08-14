$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var historicalfigure1 = $("input#historicalfigure1").val();
    var historicalfigure2 = $("input#historicalfigure2").val();
    var verb1 = $("input#verb1").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verb2Input = $("input#verb2").val();
    var emotionInput = $("input#emotion").val();

    $(".historicalfigure1").text(historicalfigure1Input);
    $(".historicalfigure2").text(historicalfigure2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb1").text(verb1Input);
    $(".verb2").text(verb2Input);
    $(".emotion").text(emotionInput);

    $("#story").show();

    event.preventDefault();
  });
});
