// function initiate() {
//   databox = document.getElementById("databox");
//   var button = document.getElementById("button");
//   button.addEventListener("click", read, false);
// }

function initiate() {
  databox = document.getElementById("databox");
  var button = document.getElementById("button");
  button.addEventListener("click", send, false);
}

function read() {
  var url = "https://dummyjson.com/products/1";
  var request = new XMLHttpRequest();

  request.open("GET", url);

  request.addEventListener("readystatechange", () => {
    if (request.readyState != 4) {
      databox.innerHTML = "Loading";
    }
    if (request.readyState == 4) {
      databox.innerHTML = " Query result:  " + request.responseText.toString();
    }
  });

  request.send(true);
}

function send() {
  var url = "https://dummyjson.com/posts/add";
  var data = new FormData();
  data.append("name", "Валентин");
  data.append("lastname", "Чикунов");
  data.append("counry", "Белоруссия");

  var request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.send(data);
  request.onreadystatechange = function () {
    if (request.readyState != 4) {
      databox.innerHTML = "Не отправлено";
    }
    if (request.readyState == 4) {
      databox.innerHTML = "Отправлено на сервер";
    }
  };
}

window.addEventListener("load", initiate, false);

// window.addEventListener("load", initiate, false);
