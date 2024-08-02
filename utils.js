function sumAndCheck(num1, num2) {
  if ((num1 < 0) | (num2 < 0))
    throw new Error('los números tienen que ser positivos');

  const result = num1 + num2;
  if (result > 10) {
    return true;
  } else {
    return false;
  }
}

function ordenar(lista) {
  let i = 1; //S1
  while (i < lista.length) {
    //C1
    let j = i - 1; //S2
    while (j >= 0 && lista[j] > lista[j + 1]) {
      //C2, C3
      let temp = lista[j]; //S3
      lista[j] = lista[j + 1]; //S4
      lista[j + 1] = temp; //S5
      j = j - 1; //S6
    }
    i = i + 1; //S7
  }
  return lista;
}

module.exports = {
  sumAndCheck,
  ordenar,
};
