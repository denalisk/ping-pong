var firstCount = true;

var pingPong = function(number) {
  // the overall function will count up to a number, replacing 3 with ping, 5 with pong, and 15 with ping-pong

  var makeElement = function(aString, element, parentId, elementId) {
    // this function creates new elements in the HTML document
    var newElement = document.createElement(element);
    newElement.id = elementId;
    newElement.innerHTML = aString;
    document.getElementById(parentId).appendChild(newElement);
  };

  var countUp = function(number) {
    // this function takes a numbers and creates a list element to hold the number itself or a ping/pong placeholder
    for (index = 1; index <= number; index++) {
      if (index % 15 === 0) {
        makeElement("ping-pong", "li", "results");
      } else if (index % 3 === 0) {
        makeElement("ping", "li", "results");
      } else if (index % 5 === 0) {
        makeElement("pong", "li", "results");
      } else {
        makeElement(index, "li", "results");
      };
    };
    firstCount = false;
  };

  var resetCount = function() {
    // this function resets the count if it already exists
    if (firstCount != true) {
      var oldList = document.getElementById("results");
      oldList.parentNode.removeChild(oldList);
      makeElement("", "ul", "list-holder", "results")
    };
  };

  // this is the meat of the main function
  if (/[^\d]/.test(number) === true) {
    return "Please input a whole integer, no decimals";
  } else {
    resetCount();
    countUp(number);
  };
}



$(function(){
  $(".count-form").submit(function(event) {
    event.preventDefault();
    var number = $("#number-input").val();
    if (/[^\d]/.test(number) === true) {
      $("#error").text("Please input a whole integer, no decimals");
    } else {
      $("#error").text("...");
      pingPong(number);
    }
  });
});
