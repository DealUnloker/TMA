function initiate() {
  var button = document.getElementById("button");
  button.addEventListener("click", newitem, false);
  show();
}
function newitem() {
  var keyword = document.getElementById("keyword").value;
  var value = document.getElementById("text").value;
  sessionStorage.setItem(keyword, value);
  show();
  document.getElementById("keyword").value = "";
  document.getElementById("text").value = "";
}
function show() {
  var databox = document.getElementById("databox");
  databox.innerHTML = "";
  for (var f = 0; f < sessionStorage.length; f++) {
    var keyword = sessionStorage.key(f);
    var value = sessionStorage.getItem(keyword);
    databox.innerHTML += "<div>" + keyword + " - " + value + "</div>";
  }
}

window.addEventListener("load", initiate, false);
