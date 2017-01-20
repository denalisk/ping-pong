var firstCount = true;

var numberChecker = function(number) {
  if (/[^\d]/.test(number) === true) {
    return "Please input a whole integer, no decimals";
  } else {
    return number;
  }
};

var makeElement = function(aString, element, parentId) {
  var newElement = document.createElement(element);
  newElement.innerHTML = aString;
  document.getElementById(parentId).appendChild(newElement);
};

var countUp = function(counter) {
  makeElement("", "ul", "list-holder")
  for (index = 1; index <= counter; index++) {
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
  var oldList = document.getElementById("results");
  oldList.parentNode.removeChild(oldList);
}




$(function(){
  $(".count-form").submit(function(event) {
    event.preventDefault();
    var number = $("#number-input").val();
    if (firstCount != true) {
      resetCount();
      countUp(number);
    } else {
      countUp(number);
    }
  });
});
