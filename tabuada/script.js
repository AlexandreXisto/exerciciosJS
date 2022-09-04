function calcular() {
  var n1 = window.document.getElementById("n1");
  n1 = Number(n1.value);
  var c = 1;
  var res = window.document.getElementById("res");
  var total;

  for (c = 1; c <= 10; c++) {
    total = Number(n1 * c);
    res.innerHTML += `${n1} X ${c} = ${total} \n`;
  }
}
