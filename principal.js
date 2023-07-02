


var url = 'https://restcountries.com/v3.1/all';


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    var limitedData = data.slice();
    limitedData.sort(function(a, b) {
        var nameA = a.name.common.toUpperCase();
        var nameB = b.name.common.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
        
        let teste = document.querySelector('#teste');
     
        for (let i = 0; i < limitedData.length; i++) {
            var pais = limitedData[i]
            var cont = document.createElement('div');
            cont.classList.add('cont');
            cont.setAttribute('data-continente', pais.region);

            let nome = document.createElement('h2')
            nome.classList.add('nomeDoPais')
            // <br> ${pais.altSpellings}<br>
            nome.innerHTML += ` 
            ${pais.name.common}
            
            `
            cont.appendChild(nome)
            var img = document.createElement('img');
            img.src = pais.flags.png
            
            cont.appendChild(img);
            teste.appendChild(cont);
            let fechar = document.createElement('div')
            fechar.classList.add('fechar')
            fechar.classList.add('escondeInform')
            cont.appendChild(fechar)
            fechar.innerText = 'X'
            let informacao = document.createElement('div')
            informacao.classList.add('inform')
            if(pais.capital !== undefined){
              informacao.innerHTML += `
                <br>Capital: ${pais.capital}<br>
                `
            }
            informacao.innerHTML += `
                <br>Continente: ${pais.continents}<br>
                <br>População: ${pais.population}<br>
                <br><a href="${pais.maps.googleMaps}">Localização</a><br>
                `
            informacao.classList.add('escondeInform')

            cont.appendChild(informacao)
            if(pais.languages !== undefined){
              var lingua = pais.languages;

            Object.keys(lingua).forEach(function(languageKey) {
              
              let languageCode = languageKey;
              let languageName = lingua[languageKey];

         
              informacao.innerHTML += `${languageCode}: ${languageName}, `;
            });
            }
            
        

                
            


            var america = document.querySelector('#america')
            america.addEventListener('click',function(){
              if(pais.continents.Europe){
                cont.innerHTML = 'feito'
              }
              console.log('cshuajd')
            })
          }

          let menuFiltro = document.querySelector('.menu-filtro');
let filtrosContinente = menuFiltro.querySelectorAll('.filtro-continente');

filtrosContinente.forEach(function(filtro) {
  filtro.addEventListener('click', function() {
   
    filtrosContinente.forEach(function(f) {
      f.classList.remove('ativo');
    });

    
    filtro.classList.add('ativo');

   
    const continenteSelecionado = filtro.getAttribute('data-continente');

    
    let paises = document.querySelectorAll('.cont');

    paises.forEach(function(pais) {
      const continentePais = pais.getAttribute('data-continente');

      if (continenteSelecionado === 'todos' || continenteSelecionado === continentePais) {
        pais.style.display = 'block';
      } else {
        pais.style.display = 'none';
      }
    });
  });
});

          

        let clicarNoPais = document.querySelectorAll('.cont')
        for(var i = 0; i < clicarNoPais.length; i++){
          let evento = clicarNoPais[i]
          let fechar = evento.querySelector('.fechar')
          let bandeira = evento.querySelector('img');
          let inform = evento.querySelector('.inform');
          evento.addEventListener('click',function(){

            if(!evento.classList.contains('aumenta')){

              evento.classList.add('aumenta')
              bandeira.classList.add('resBandeira')
              inform.classList.remove('escondeInform')
              fechar.classList.remove('escondeInform')
              // console.log(evento)
            }
           
          })

          
            evento.addEventListener('click',function(e){
              var close = e.target
              if(close.classList.contains('fechar')){
                console.log('teste')
                fechar.parentNode.classList.remove('aumenta')
                bandeira.classList.remove('resBandeira')
                inform.classList.add('escondeInform')
                fechar.classList.add('escondeInform')
               
              }
              
            })
                 
        }
        
        console.log(teste)
        
       

        // console.log(tt.name)
        console.log(limitedData[29])






})

.catch(function(error) {
console.log(error);
});


var link = document.querySelector('a[href="#footer"]');

link.addEventListener('click', function(event) {
  event.preventDefault(); // Evita o comportamento padrão do link
  
  var divAlvo = document.querySelector('#footer');
  divAlvo.scrollIntoView({ behavior: 'smooth' });
});




