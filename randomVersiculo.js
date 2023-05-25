function gerarNumerosAleatorios(quantidade, min, max) {
    var numeros = [];

    for (var i = 0; i < quantidade; i++) {
      var numero = Math.floor(Math.random() * (max - min + 1)) + min;
      numeros.push(numero);
    }

    return numeros;
  }

  var page = gerarNumerosAleatorios(1, 1, 6)

  if(page == 1){
   
    function fetchVersiculo1(){
      var capitulo = gerarNumerosAleatorios(1, 1, 50);
      var versiculo = gerarNumerosAleatorios(1, 1, 26);
    
    
      fetch(`https://bible-api.com/geneses${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo1()
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
    
    fetchVersiculo1()

  } else if( page == 2){

    function fetchVersiculo2(){
      var capitulo = gerarNumerosAleatorios(1, 1, 40);
      var versiculo = gerarNumerosAleatorios(1, 1, 38);
  
  
      fetch(`https://bible-api.com/exodo ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo2()
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
  
  fetchVersiculo2()

  } else if (page == 3){

    function fetchVersiculo3(){
      var capitulo = gerarNumerosAleatorios(1, 1, 27);
      var versiculo = gerarNumerosAleatorios(1, 1, 34);
  
  
      fetch(`https://bible-api.com/levitico ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo3()
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
  
  fetchVersiculo3()

  } else if (page == 4){

    function fetchVersiculo4(){
      var capitulo = gerarNumerosAleatorios(1, 1, 36);
      var versiculo = gerarNumerosAleatorios(1, 1, 35);
  
  
      fetch(`https://bible-api.com/numero ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo4()
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
  
  fetchVersiculo4()

  }else if (page == 5){

    function fetchVersiculo5(){
      var capitulo = gerarNumerosAleatorios(1, 1, 34);
      var versiculo = gerarNumerosAleatorios(1, 1, 28);
  
  
      fetch(`https://bible-api.com/deuteronomio ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo5()
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
  
  fetchVersiculo5()

  }else if (page == 6){

    function fetchVersiculo6(){
      var capitulo = gerarNumerosAleatorios(1, 1, 24);
      var versiculo = gerarNumerosAleatorios(1, 1, 30);
  
  
      fetch(`https://bible-api.com/josue ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo6()
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
  
  fetchVersiculo6()

  }
