var firstCount = true;

var makeElement = function(aString, element, parentId, elementId) {
  var newElement = document.createElement(element);
  newElement.id = elementId;
  newElement.innerHTML = aString;
  document.getElementById(parentId).appendChild(newElement);
};

var countUp = function(number) {
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
  if (firstCount != true) {
    var oldList = document.getElementById("results");
    oldList.parentNode.removeChild(oldList);
    makeElement("", "ul", "list-holder", "results")
  };
};

var pingPong = function(number) {
  if (/[^\d]/.test(number) === true) {
    return "Please input a whole integer, no decimals";
  } else {
    resetCount();
    countUp(number);

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
