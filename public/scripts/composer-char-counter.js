$(document).ready(function() {

  const $textArea = $("#tweet-text");

  $textArea.on('keyup', function() {
    const remainingChar = 140 - this.value.length;
    $("#counter").text(remainingChar);

    if (remainingChar < 0) { 
      $("#counter").css({'color': 'red'});
    } else {
      $("#counter").css({'color': "#545149"});
    }
    
  });
}); 

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-full-width",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

module.exports = toastr.options;