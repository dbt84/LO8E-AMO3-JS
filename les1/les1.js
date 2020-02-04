function doeHet() {
  var el = document.getElementById("content");
  var moved = 0;
  var interval = setInterval(loop, 5);
  function loop() {
    if (moved == 200) {
      clearInterval(interval);
    } else {
      moved++;
      el.style.marginLeft = moved + "px";
    }
  }
}
