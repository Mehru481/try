(function (window) {
  var HelloGreeter={};
  HelloGreeter.Greet="Hello ";
  HelloGreeter.HelloGreet= function(name) {
    console.log(HelloGreeter.Greet + name);
  }

  window.HelloGreeter=HelloGreeter;

})
(window);
