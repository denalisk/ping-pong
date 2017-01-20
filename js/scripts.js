var numberChecker = function(number) {
  if (/[^\d]/.test(number) === true) {
    return "Please input a whole integer, no decimals";
  } else {
    return number;
  }
};




$(function(){
  $(".count-form").submit(function(event) {
    event.preventDefault();
    var number = $("#number-input").val();
    $(".results").text(numberChecker(number));
  });
});
