document.getElementById("draw")?.addEventListener("click", draw);
document.getElementById("swap-btn")?.addEventListener("click", swap);


function draw() {
  CanvasMaster = new Object();
  CanvasMaster.showCanvas = function () {
    canvasNow = document.getElementById("sunset");
    contextNow = canvasNow.getContext("2d");
    sunsetGradient = contextNow.createLinearGradient(0, 0, 0, 379);
    sunsetGradient.addColorStop(0, "yellow");
    sunsetGradient.addColorStop(1, "#cc0000");
    contextNow.fillStyle = sunsetGradient;
    contextNow.beginPath();
    contextNow.arc(100, 100, 75, 0, Math.PI * 2, false);
    contextNow.closePath();
    contextNow.fill();
  };
  CanvasMaster.showCanvas();
}


function swap() {
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');

    [img1.src, img2.src] = [img2.src, img1.src]

    let cap1 = document.getElementById('cap1');
    let cap2 = document.getElementById('cap2');

    [cap1.innerHTML, cap2.innerHTML] = [cap2.innerHTML, cap1.innerHTML]
}