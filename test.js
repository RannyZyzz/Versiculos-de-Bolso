var capitulo = 13
var versiculo = 31

fetch(`https://bible-api.com/neemias ${capitulo}:${versiculo}?translation=almeida`)
          .then(response => {
            if(response.ok){
              return response.json()
            } else if(response.status === 404){
              return fetchVersiculo2()
            } else {
              throw new Error('Requisiçào falhou com status:' + response.status)
            }
          })
          .then(data => console.log(data))