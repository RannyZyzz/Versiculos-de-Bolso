function gerarNumerosAleatorios(quantidade, min, max) {
    var numeros = [];

    for (var i = 0; i < quantidade; i++) {
      var numero = Math.floor(Math.random() * (max - min + 1)) + min;
      numeros.push(numero);
    }

    return numeros;
  }

  var page = gerarNumerosAleatorios(1, 1, 25)

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

  }
