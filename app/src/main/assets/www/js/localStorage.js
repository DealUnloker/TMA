document
  .getElementById("resolveButton")
  ?.addEventListener("click", resolveForm);
document.getElementById("showButton")?.addEventListener("click", show);

function resolveForm() {
  this.countVal = "";
  this.topCount = document.checkRadio.length;

  for (var count = 0; count < this.topCount; count++)
    if (document.checkRadio.elements[count].checked) {
      this.countVal = document.checkRadio.elements[count].value;
      var k = localStorage.getItem(this.countVal);
      localStorage.setItem(this.countVal, k);
    }

  document.checkRadio.outNow.value = this.countVal;
}

function show() {
  var databox = document.getElementById("databox");
  databox.innerHTML =
    '<div><input type=button id="button" name=delAll value="Очистить" onClick="removeAll()"></button></div>';
  databox.innerHTML +=
    '<div><input type=button id="button" name=del value="Удалить товары" onClick="remove()"></button></div>';
  for (var f = 0; f < localStorage.length; f++) {
    var keyword = localStorage.key(f);
    databox.innerHTML +=
      '<div><br><input type="checkbox" id="checkbox"  value="' +
      keyword +
      '">' +
      keyword +
      "</button></div>";
  }
}

function remove() {
  this.countVal = "";
  this.topCount = document.checkRadio.length;

  for (var count = 0; count < this.topCount; count++)
    if (document.checkRadio.elements[count].checked) {
      this.countVal = document.checkRadio.elements[count].value;
      localStorage.removeItem(this.countVal);
    }
  show();
}
function removeAll() {
  if (confirm("Вы уверены?")) {
    localStorage.clear();
    show();
  }
}
