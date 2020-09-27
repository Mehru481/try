(function (window) {
  var ByeGreeter={};
  ByeGreeter.Greet="Goodbye ";
  ByeGreeter.ByeGreet= function(name) {
    console.log(ByeGreeter.Greet + name);
  }

  window.ByeGreeter=ByeGreeter;

})
(window);