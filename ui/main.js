var button = document.getElementlyId('counter');
var counter = 0;

button.onclick = function () {

  counter= counter+1;
  var span = document.getElementlyId('count');
  span.interHTML = counter.tostring();
};
