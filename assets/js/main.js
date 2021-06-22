let urlPesquisa = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';let urlAleatoria = 'https://www.themealdb.com/api/json/v1/1/random.php';
let urlClasses = 'https://www.themealdb.com/api/json/v1/1/categories.php';
let urlId = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

let botao = document.getElementById('botao');
let pesquisa = document.getElementById('pesquisa');
let pratos = document.getElementById('pratos');
let Recentes = document.querySelector('Recentes'); 
let hamburger = document.querySelector('.hamburger ion-icon');
let nav = document.querySelector('.top-container nav');


hamburger.addEventListener('click', function() { 
	nav.classList.toggle('show-nav');
  })


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
	        let tamanho = (dados.meals);
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
 



/*pratos.addEventListener('click', function(){
/*	ingredientes.classList.toggle('show-div')
	let Subcard = `
	<div class="Subcard">
		<li class="list-group-item">site:<p id="strYoutube" class="d-flex justify-content-end"></p></li>
				  
		</div>
			<button class="cookie">Fechar</button>
		</div>
		</div> 
		</a>
		</div>`;
	Subcard.innerHTML += Subcard;


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
		
	let Informaçoes = `
	<div class="menufechar">
	<p href="javascript: fechar();"> <ion-icon name="arrow-undo-outline"></ion-icon> </p>
	</div>
	<div class="subcard">
		<a class= "a"  > 
		<div class="card-body">
		 
		<p>Ingredietes:</p>
		<p class="card-title">${dados.meals[0].strIngredient }</p>
		<p>Site com o modo de preparo do prato:</p>
		<p>${dados.meals[0].strSource}</p>
	
		<p>Video sobre o modo de preparo:</p>
		<p>${dados.meals[0].strYoutube}</p>
		</div> 
		</a>
		 
	</div>`;
	    Subcard.innerHTML += Informaçoes;

    });
};



 
 



/*let Informaçoes = `
	<div class="subcard">
		<a class= "a" id="${dados.meals[0].idMeal} > 
		<div class="card-body">
		 
		<p>Ingredietes:</p>
		<h5 class="card-title">${dados.meals[0].strIngredient }</h5>
		<p>Modo de Preparo:</p>
		<p>${dados.meals[0].strInstructions}</p>
	
		<p>Video sobre o modo de preparo:</p>
		<p>${dados.meals[0].strYoutube}</p>
		</div> 
		</a>
		<div>
		<button class="cookie">Fechar</button>
		</div>
	</div>`;
	    Subcard.innerHTML += Informaçoes;*/