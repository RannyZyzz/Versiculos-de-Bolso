function gerarNumerosAleatorios(quantidade, min, max) {
    var numeros = [];

    for (var i = 0; i < quantidade; i++) {
      var numero = Math.floor(Math.random() * (max - min + 1)) + min;
      numeros.push(numero);
    }

    return numeros;
  }

  
function fetchVersiculo(){
    var capitulo = gerarNumerosAleatorios(1, 1, 40);
    var versiculo = gerarNumerosAleatorios(1, 1, 38);


    fetch(`https://bible-api.com/exodo ${capitulo}:${versiculo}?translation=almeida`)
        .then(response => {
          if(response.ok){
            return response.json()
          } else if(response.status === 404){
            return fetchVersiculo()
          } else {
            throw new Error('Requisiçào falhou com status:' + response.status)
          }
        })
        .then( data =>{
          var versiculoElement = document.getElementById('versiculo');
          versiculoElement.textContent= data.text;
          var versiculoReference = document.getElementById('reference')
          versiculoReference.textContent = data.reference;
        })
        .catch( error => {
          console.log('Ocorreu um erro: '+ error.message)
        })

  }

fetchVersiculo()
  