let urlPesquisa = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';let urlAleatoria = 'https://www.themealdb.com/api/json/v1/1/random.php';
let urlClasses = 'https://www.themealdb.com/api/json/v1/1/categories.php';
let urlId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

let botao = document.getElementById('botao');
let pesquisa = document.getElementById('pesquisa');
let pratos = document.getElementById('pratos');
let Recentes = document.querySelector('Recentes'); 
let hamburger = document.querySelector('.hamburger ion-icon');
let nav = document.querySelector('.top-container nav');
let nav2 = document.querySelector('.top-container .nav2');
aleatorio();
 
function aleatorio(){
	for(let i = 0; i < 6; i++){
		fetch(urlAleatoria).then(function(resposta){
		    resposta.json().then(function(dados){
		        console.log(dados);
          

	        	let card = `
		            <div class="card">
		            <a id="${dados.meals[0].idMeal}" onclick="fetchChar(${dados.meals[0].idMeal})">
	                <img class="card-img-top" src="${dados.meals[0].strMealThumb}" alt="Card image cap">
	                <div class="card-body">
	                <h5 class="card-title">${dados.meals[0].strMeal}</h5>
					<p>${dados.meals[0].strArea}</p>
			 
	                </div> 
	            	</a>
					   </div>`;
            	pratos.innerHTML += card;
		    });
		});
	}	
}

/*<ion-icon name="bookmark-outline"></ion-icon>*/ //icone de favoritos

botao.addEventListener("click", function p(){ 	
let urlBuscar = urlPesquisa + pesquisa.value;
fetch(urlBuscar).then(function(resposta){
	    resposta.json().then(function(dados){
	        console.log(dados);
	        let tamanho = (dados.meals );
			pratos.innerHTML = '';
			 
			if(dados.meals === null){
				alert("[ERRO 520] No momento não temos esse prato cadastrado")
				pesquisa.value = "";
			}
			else{
        	for (let i = 0;i < tamanho.length; i++){
            	let card = `
	            <div class="card">
	            <a id="${dados.meals[i].idMeal}">
	                <img class="card-img-top" src="${dados.meals[i].strMealThumb}" alt="Card image cap">
	                <div class="card-body">
	                <h5 class="card-title">${dados.meals[i].strMeal}</h5>
					<p>${dados.meals[i].strArea}</p>
	                </div> 
	            </a>
	            </div>`;
            	pratos.innerHTML += card;
            	pesquisa.value = "";
		
			}		
		}
	});
		
  });
});

pesquisa.addEventListener('keydown', function(event) { // também pode usar keyup
    if(event.keyCode === 13) {
		let urlBuscar = urlPesquisa + pesquisa.value;
		fetch(urlBuscar).then(function(resposta){
				resposta.json().then(function(dados){
					console.log(dados);
					let tamanho = (dados.meals );
					pratos.innerHTML = '';
					 
					if(dados.meals === null){
						alert("[ERRO 520] No momento não temos esse prato cadastrado")
						pesquisa.value = "";
					}
					else{
					for (let i = 0;i < tamanho.length; i++){
						let card = `
						<div class="card">
						<a id="${dados.meals[i].idMeal}">
							<img class="card-img-top" src="${dados.meals[i].strMealThumb}" alt="Card image cap">
							<div class="card-body">
							<h5 class="card-title">${dados.meals[i].strMeal}</h5>
							<p>${dados.meals[i].strArea}</p>
							</div> 
						</a>
						</div>`;
						pratos.innerHTML += card;
						pesquisa.value = "";
				
					}		
				}
			});
				
		  });
		 
    }
});  
 



pratos.addEventListener('click', function(){
	pratos.classList.toggle('show-div')
	alert('O card foi clicado!')

});

function fetchChar(id) {
   let urlBuscar = urlId + id;
   console.log(urlBuscar);
    fetch(urlBuscar)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(dados){
        console.log(dados)
    });
};
 

hamburger.addEventListener('click', function() {
	nav.classList.toggle('show-nav');
/*	nav2.classList.toggle('show-nav');*/
  })
