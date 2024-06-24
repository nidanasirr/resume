var i = 0;
var txt = 'Programming, Travelling the World and Staying Active!';
var speed = 50;

;(function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
})()