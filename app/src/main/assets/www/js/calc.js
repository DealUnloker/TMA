function Calc() {
  var a, b, c, x1, x2, d;
  a = document.f.a.value;
  b = document.f.b.value;
  c = document.f.c.value;
  d = b * b - 4 * a * c;
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    document.write("x1= " + x1 + " x2= " + x2);
  } else {
    if (d == 0) {
      x1 = -b / (2 * a);
      x2 = x1;
      document.write("x1= " + x1 + " x2= " + x2);
    } else {
      if (d < 0) {
        document.write("Действительных корней нет");
      }
    }
  }
}

document.getElementById("btn").addEventListener("click", Calc);
