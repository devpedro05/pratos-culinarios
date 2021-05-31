let urlPesquisa = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
let urlAleatoria = 'https://www.themealdb.com/api/json/v1/1/random.php';
let urlClasses = 'https://www.themealdb.com/api/json/v1/1/categories.php';
let urlId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

let botao = document.getElementById('botao');
let pesquisa = document.getElementById('pesquisa');
let pratos = document.getElementById('pratos');
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


botao.addEventListener("click", function(){
let urlBuscar = urlPesquisa + pesquisa.value;
fetch(urlBuscar).then(function(resposta){
	    resposta.json().then(function(dados){
	        console.log(dados);
	        let tamanho = (dados.meals.length);
			pratos.innerHTML = '';
			 
        	for (let i = 0;i < tamanho; i++){
            	let card = `
	            <div class="card">
	            <a id="${dados.meals[i].idMeal}">
	                <img class="card-img-top" src="${dados.meals[i].strMealThumb}" alt="Card image cap">
	                <div class="card-body">
	                <h5 class="card-title">${dados.meals[i].strMeal}</h5>
					<p>${dados.meals[i].strArea}</p>
					<ion-icon id="favoritos" name="heart-outline"></ion-icon>
	                </div> 
	            </a>
	            </div>`;
            	pratos.innerHTML += card;
            	pesquisa.value = "";
			}
		});
	});
});

 /*
card.addEventListener("click", function(){
	informacoes.innerHTML = dados.meals[i].strIngredient[i];
});*/


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