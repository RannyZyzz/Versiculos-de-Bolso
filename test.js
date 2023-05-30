var capitulo = 29
var versiculo = 30

fetch(`https://bible-api.com/1 cronicas ${capitulo}:${versiculo}?translation=almeida`)
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