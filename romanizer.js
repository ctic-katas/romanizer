function romanize(num) {
  var millares = Math.floor(num / 1000);
  var centenas = Math.floor((num % 1000) / 100);
  var decenas = Math.floor((num % 100) / 10);
  var unidades = Math.floor(num % 10)
  return convertirMillares(millares) + convertirCentenas(centenas) + convertirDecenas(decenas) + convertirUnidades(unidades);
}

function convertirMillares(digito) {
  var cadena = '';
  for (i = 0; i < digito; i++) {
    cadena += 'M';
  }
  return cadena;
}

function convertirCentenas(digito) {
  return convertirDigito(digito, 'D', 'C', 'M');
}

function convertirDecenas(digito) {
  return convertirDigito(digito, 'L', 'X', 'C');
}

function convertirUnidades(unidades) {
  return convertirDigito(unidades, 'V', 'I', 'X');
}

function convertirDigito(digito, letraMayor, letraMenor, letraSuperior) {
  var mayor = Math.floor(digito / 5);
  var menor = Math.floor(digito % 5);

  if (digito === 9) {
    return letraMenor + letraSuperior;
  }
  if (menor === 4) {
    return letraMenor + letraMayor;
  }
  var cadena = mayor === 1 ? letraMayor : '';
  for (i = 0; i < menor; i++) {
    cadena += letraMenor;
  }

  return cadena;
}
