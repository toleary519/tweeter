$(document).ready(function() {

  const $textArea = $("#tweet-text");

  $textArea.on('keyup', function() {
    const remainingChar = 140 - this.value.length;
    $("#counter").text(remainingChar);

    // if (remainingChar < 0)

  });


}); 