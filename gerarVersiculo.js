// function gerarNumerosAleatorios(quantidade, min, max) {
//     var numeros = [];

//     for (var i = 0; i < quantidade; i++) {
//       var numero = Math.floor(Math.random() * (max - min + 1)) + min;
//       numeros.push(numero);
//     }

//     return numeros;
//   }

//   var capitulo = gerarNumerosAleatorios(1, 1, 21);
//   var versiculo = gerarNumerosAleatorios(1, 1, 25);

//   fetch(`https://bible-api.com/john ${capitulo}:${versiculo}?translation=almeida`)
//       .then(response => response.json())
//       .then(data => {
//         var versiculoElement = document.getElementById('versiculo');
//         versiculoElement.textContent = data.text;

//         var versiculoReference = document.getElementById('reference');
//         versiculoReference.textContent = data.reference;
//       })
//       .catch(error => {
//         console.error('Ocorreu um erro: ' + error.message);
//       });