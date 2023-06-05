function gerarNumerosAleatorios(quantidade, min, max) {
    var numeros = [];

    for (var i = 0; i < quantidade; i++) {
      var numero = Math.floor(Math.random() * (max - min + 1)) + min;
      numeros.push(numero);
    }

    return numeros;
  }

  var page = gerarNumerosAleatorios(1, 1, 40)

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

  } else if (page == 7){

    function fetchVersiculo7(){
      var capitulo = gerarNumerosAleatorios(1, 1, 21);
      var versiculo = gerarNumerosAleatorios(1, 1, 25);
  
  
      fetch(`https://bible-api.com/juizes ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo7()
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
  
  fetchVersiculo7()

  }else if (page == 8){

    function fetchVersiculo8(){
      var capitulo = gerarNumerosAleatorios(1, 1, 4);
      var versiculo = gerarNumerosAleatorios(1, 1, 20);
  
  
      fetch(`https://bible-api.com/rute ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo8()
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
  
  fetchVersiculo8()

  }else if (page == 9){

    function fetchVersiculo9(){
      var capitulo = gerarNumerosAleatorios(1, 1, 31);
      var versiculo = gerarNumerosAleatorios(1, 1, 26);
  
  
      fetch(`https://bible-api.com/1 samuel ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo9()
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
  
  fetchVersiculo9()

  }else if (page == 10){

    function fetchVersiculo10(){
      var capitulo = gerarNumerosAleatorios(1, 1, 24);
      var versiculo = gerarNumerosAleatorios(1, 1, 28);
  
  
      fetch(`https://bible-api.com/2 samuel ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo10()
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
  
  fetchVersiculo10()

  } else if (page == 11){

    function fetchVersiculo11(){
      var capitulo = gerarNumerosAleatorios(1, 1, 22);
      var versiculo = gerarNumerosAleatorios(1, 1, 37);
  
  
      fetch(`https://bible-api.com/1 reis ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo11()
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
  
  fetchVersiculo11()

  } else if (page == 12){

    function fetchVersiculo12(){
      var capitulo = gerarNumerosAleatorios(1, 1, 25);
      var versiculo = gerarNumerosAleatorios(1, 1, 28);
  
  
      fetch(`https://bible-api.com/2 reis ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo12()
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
  
  fetchVersiculo12()

  } else if (page == 13){

    function fetchVersiculo13(){
      var capitulo = gerarNumerosAleatorios(1, 1, 29);
      var versiculo = gerarNumerosAleatorios(1, 1, 30);
  
  
      fetch(`https://bible-api.com/1 cronicas ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo13()
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
  
  fetchVersiculo13()

  } else if (page == 14){

    function fetchVersiculo14(){
      var capitulo = gerarNumerosAleatorios(1, 1, 36);
      var versiculo = gerarNumerosAleatorios(1, 1, 30);
  
  
      fetch(`https://bible-api.com/2 cronicas ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo14()
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
  
    fetchVersiculo14()

  } else if (page == 15){

    function fetchVersiculo15(){
      var capitulo = gerarNumerosAleatorios(1, 1, 10);
      var versiculo = gerarNumerosAleatorios(1, 1, 30);
  
  
      fetch(`https://bible-api.com/esdras ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo15()
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
  
    fetchVersiculo15()

  } else if (page == 16){

    function fetchVersiculo16(){
      var capitulo = gerarNumerosAleatorios(1, 1, 13);
      var versiculo = gerarNumerosAleatorios(1, 1, 31);
  
  
      fetch(`https://bible-api.com/neemias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo16()
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
  
    fetchVersiculo16()

  } else if (page == 17){

    function fetchVersiculo17(){
      var capitulo = gerarNumerosAleatorios(1, 1, 16);
      var versiculo = gerarNumerosAleatorios(1, 1, 25);
  
  
      fetch(`https://bible-api.com/judite ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo17()
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
  
    fetchVersiculo17()

  }  else if (page == 18){

    function fetchVersiculo18(){
      var capitulo = gerarNumerosAleatorios(1, 1, 10);
      var versiculo = gerarNumerosAleatorios(1, 1, 20);
  
  
      fetch(`https://bible-api.com/ester ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo18()
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
  
    fetchVersiculo18()

  } else if (page == 19){

    function fetchVersiculo19(){
      var capitulo = gerarNumerosAleatorios(1, 1, 42);
      var versiculo = gerarNumerosAleatorios(1, 1, 30);
  
  
      fetch(`https://bible-api.com/jo ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo19()
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
  
    fetchVersiculo19()

  }  else if (page == 20){

    function fetchVersiculo20(){
      var capitulo = gerarNumerosAleatorios(1, 1, 150);
      var versiculo = gerarNumerosAleatorios(1, 1, 20);
  
  
      fetch(`https://bible-api.com/salmos ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo20()
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
  
    fetchVersiculo20()

  }   else if (page == 21){

    function fetchVersiculo21(){
      var capitulo = gerarNumerosAleatorios(1, 1, 31);
      var versiculo = gerarNumerosAleatorios(1, 1, 30);
  
  
      fetch(`https://bible-api.com/proverbios ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo21()
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
  
    fetchVersiculo21()

  }  else if (page == 22){

    function fetchVersiculo22(){
      var capitulo = gerarNumerosAleatorios(1, 1, 12);
      var versiculo = gerarNumerosAleatorios(1, 1, 20);
  
  
      fetch(`https://bible-api.com/eclesiastes ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo22()
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
  
    fetchVersiculo22()

  } else if (page == 23){

    function fetchVersiculo23(){
      var capitulo = gerarNumerosAleatorios(1, 1, 8);
      var versiculo = gerarNumerosAleatorios(1, 1, 15);
  
  
      fetch(`https://bible-api.com/canticos ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo23()
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
  
    fetchVersiculo23()

  } else if (page == 24){

    function fetchVersiculo24(){
      var capitulo = gerarNumerosAleatorios(1, 1, 66);
      var versiculo = gerarNumerosAleatorios(1, 1, 20);
  
  
      fetch(`https://bible-api.com/isaias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo24()
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
  
    fetchVersiculo24()

  } else if (page == 25){

    function fetchVersiculo25(){
      var capitulo = gerarNumerosAleatorios(1, 1, 52);
      var versiculo = gerarNumerosAleatorios(1, 1, 30);
  
  
      fetch(`https://bible-api.com/jeremias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo25()
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
  
    fetchVersiculo25()

  } else if (page == 26){

    function fetchVersiculo26(){
      var capitulo = gerarNumerosAleatorios(1, 1, 5);
      var versiculo = gerarNumerosAleatorios(1, 1, 30);
  
  
      fetch(`https://bible-api.com/lamentacoes ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo26()
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
  
    fetchVersiculo26()

  } else if (page == 27){

    function fetchVersiculo27(){
      var capitulo = gerarNumerosAleatorios(1, 1, 48);
      var versiculo = gerarNumerosAleatorios(1, 1, 26);
  
  
      fetch(`https://bible-api.com/ezequiel ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo27()
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
  
    fetchVersiculo27()

  } else if (page == 28){

    function fetchVersiculo28(){
      var capitulo = gerarNumerosAleatorios(1, 1, 14);
      var versiculo = gerarNumerosAleatorios(1, 1, 37);
  
  
      fetch(`https://bible-api.com/daniel ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo28()
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
  
    fetchVersiculo28()

  } else if (page == 29){

    function fetchVersiculo29(){
      var capitulo = gerarNumerosAleatorios(1, 1, 14);
      var versiculo = gerarNumerosAleatorios(1, 1, 14);
  
  
      fetch(`https://bible-api.com/oseias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo29()
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
  
    fetchVersiculo29()

  } else if (page == 30){

    function fetchVersiculo30(){
      var capitulo = gerarNumerosAleatorios(1, 1, 3);
      var versiculo = gerarNumerosAleatorios(1, 1, 24);
  
  
      fetch(`https://bible-api.com/joel ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo30()
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
  
    fetchVersiculo30()

  } else if (page == 31){

    function fetchVersiculo31(){
      var capitulo = gerarNumerosAleatorios(1, 1, 9);
      var versiculo = gerarNumerosAleatorios(1, 1, 16);
  
  
      fetch(`https://bible-api.com/amos ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo31()
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
  
    fetchVersiculo31()

  } else if (page == 32){

    function fetchVersiculo32(){
      var capitulo = gerarNumerosAleatorios(1, 1, 4);
      var versiculo = gerarNumerosAleatorios(1, 1, 12);
  
  
      fetch(`https://bible-api.com/jonas ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo32()
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
  
    fetchVersiculo32()

  } else if (page == 33){

    function fetchVersiculo33(){
      var capitulo = gerarNumerosAleatorios(1, 1, 7);
      var versiculo = gerarNumerosAleatorios(1, 1, 15);
  
  
      fetch(`https://bible-api.com/miqueias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo33()
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
  
    fetchVersiculo33()

  } else if (page == 34){

    function fetchVersiculo34(){
      var capitulo = gerarNumerosAleatorios(1, 1, 3);
      var versiculo = gerarNumerosAleatorios(1, 1, 15);
  
  
      fetch(`https://bible-api.com/naun ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo34()
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
  
    fetchVersiculo34()

  } else if (page == 35){

    function fetchVersiculo35(){
      var capitulo = gerarNumerosAleatorios(1, 1, 3);
      var versiculo = gerarNumerosAleatorios(1, 1, 18);
  
  
      fetch(`https://bible-api.com/habacuque ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo35()
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
  
    fetchVersiculo35()

  } else if (page == 36){

    function fetchVersiculo36(){
      var capitulo = gerarNumerosAleatorios(1, 1, 3);
      var versiculo = gerarNumerosAleatorios(1, 1, 17);
  
  
      fetch(`https://bible-api.com/sofonias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo36()
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
  
    fetchVersiculo36()

  } else if (page == 37){

    function fetchVersiculo37(){
      var capitulo = gerarNumerosAleatorios(1, 1, 2);
      var versiculo = gerarNumerosAleatorios(1, 1, 19);
  
  
      fetch(`https://bible-api.com/ageu ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo37()
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
  
    fetchVersiculo37()

  } else if (page == 38){

    function fetchVersiculo38(){
      var capitulo = gerarNumerosAleatorios(1, 1, 14);
      var versiculo = gerarNumerosAleatorios(1, 1, 15);
  
  
      fetch(`https://bible-api.com/zacarias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo38()
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
  
    fetchVersiculo38()

  } else if (page == 39){

    function fetchVersiculo39(){
      var capitulo = gerarNumerosAleatorios(1, 1, 4);
      var versiculo = gerarNumerosAleatorios(1, 1, 13);
  
  
      fetch(`https://bible-api.com/malaquias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo39()
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
  
    fetchVersiculo39()

  } else if (page == 40){

    function fetchVersiculo40(){
      var capitulo = gerarNumerosAleatorios(1, 1, 28);
      var versiculo = gerarNumerosAleatorios(1, 1, 38);
  
  
      fetch(`https://bible-api.com/mateus ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo40()
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
  
    fetchVersiculo40()

  } 
