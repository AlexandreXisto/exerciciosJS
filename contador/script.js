function contar() {
  let ini = document.getElementById("txti"); //Capiturando todos os elementos pra trabalhar com eles
  let fim = document.getElementById("txtf");
  let passo = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length == 0 || //verificação simples, se o usuario não digitar nada
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    window.alert("[ERRO] Faltam dados!");
  } else {
    res.innerHTML = "Contando...<br>"; //mensagem substituindo a div "preparando a contagem"
    let i = Number(ini.value); //tratando todos os dados de "String" para "number"
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      // Se o usuário digitar o numero "0" na area de "passo"
      window.alert("Passo Inválido! Considerando passo 1");
      p = 1;
    }
    if (i < f) {
      //Contador é igual a Inicio, se o inicio não for menor que o fim, acrescenta mais um no Passo
      // lembrando de colocar "+=" para acrescentar um abaixo do outro
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} 😉`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} 😂`;
      }
    }
    res.innerHTML += `🤠`;
  }
}
