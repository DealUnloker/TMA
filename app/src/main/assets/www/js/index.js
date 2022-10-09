document
  .getElementById("accelerometer-start")
  .addEventListener("click", startAcceleration);

document
  .getElementById("accelerometer-stop")
  .addEventListener("click", stopAcceleration);

document
  .getElementById("capture-photo__btn")
  .addEventListener("click", capturePhoto);

document
  .getElementById("capture-photo-edit__btn")
  .addEventListener("click", capturePhotoEdit);

document
  .getElementById("from-lib-photo__btn")
  .addEventListener("click", getPhotoFromLib);

document
  .getElementById("from-album-photo__btn")
  .addEventListener("click", getPhotoFromAlbum);

let watchID = null;

function startAcceleration() {
  let options = { frequency: 1000 };

  watchID = navigator.accelerometer.watchAcceleration(
    onSuccess,
    onError,
    options
  );
}

function stopAcceleration() {
  if (watchID) {
    navigator.accelerometer.clearWatch(watchID);
    watchID = null;
  }
}

function onSuccess(acceleration) {
  let element = document.getElementById("accelerometer-text");

  element.innerHTML =
    "Acceleration X: " +
    acceleration.x +
    "<br />" +
    "Acceleration Y: " +
    acceleration.y +
    "<br />" +
    "Acceleration Z: " +
    acceleration.z +
    "<br />" +
    "Timestamp: " +
    acceleration.timestamp +
    "<br />";
}

function onError() {
  alert("onError!");
}

function capturePhoto() {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
  });
}

function capturePhotoEdit() {
  navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
    quality: 20,
    allowEdit: true,
    destinationType: Camera.DestinationType.DATA_URL,
  });
}

function getPhotoFromLib() {
  navigator.camera.getPicture(onPhotoURISuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
  });
}

function getPhotoFromAlbum() {
  navigator.camera.getPicture(onPhotoURISuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI,
    sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
  });
}

function onPhotoDataSuccess(imageData) {
  let smallImage = document.getElementById("smallImage");

  smallImage.style.display = "block";

  smallImage.src = "data:image/jpeg;base64," + imageData;
}

function onPhotoURISuccess(imageURI) {
  let largeImage = document.getElementById("largeImage");

  largeImage.style.display = "block";

  largeImage.src = imageURI;
}

function onFail(message) {
  alert("Failed because: " + message);
}
