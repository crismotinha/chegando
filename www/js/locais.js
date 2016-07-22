//Gerar locais
for (var i = 0; i < local.length; i++){
	var locais = document.getElementById("locaisaqui");
	/*console.log(local[i]);*/
	var link = "local.html?idlocal=" + local[i].idlocal;
	var inserirInfos = '<a href="' + link + '"><div class="linha"><div class="pc30 icon"><img src="images/' + local[i].tipo +'.png"></div><div class="pc70"><h2 class="locaish2"> ' + local[i].nome +'</h2></div></div></a>'; //html
	locais.innerHTML += inserirInfos;
};


function removerAcentos(stringcomacento){
	var string = stringcomacento;
	var mapaAcentosHex ={
		a : /[\xE0-\xE6]/g,
		A : /[\xC0-\xC6]/g,
		e : /[\xE8-\xEB]/g,
		E : /[\xC8-\xCB]/g,
		i : /[\xEC-\xEF]/g,
		I : /[\xCC-\xCF]/g,
		o : /[\xF2-\xF6]/g,
		O : /[\xD2-\xD6]/g,
		u : /[\xF9-\xFC]/g,
		U : /[\xD9-\xDC]/g,
		c : /\xE7/g,
		C : /\xC7/g,
		n : /\xF1/g,
		N : /\xD1/g,
	};

	for (var letra in mapaAcentosHex){
		var expressaoRegular = mapaAcentosHex[letra];
		string = string.replace(expressaoRegular, letra);
	}
	return string;
};


function buscarLocais(localBuscado) {
	localBuscado = document.querySelector('#busca').value;
	console.log(localBuscado);
	localBuscadoTrat = (removerAcentos(localBuscado)).toLowerCase();
	console.log(localBuscadoTrat);
	for (var i = 0; i < local.length; i++){
		localPossivel = local[i].nome;
		localPossivelTrat = (removerAcentos(localPossivel)).toLowerCase();
		console.log(localPossivelTrat);
		if (localBuscadoTrat == localPossivelTrat){
			var locais = document.getElementById("locaisaqui");
			var link = "local.html?idlocal=" + local[i].idlocal;
			var inserirInfos = '<a href="' + link + '"><div class="linha"><div class="pc30 icon"><img src="images/' + local[i].tipo +'.png"></div><div class="pc70"><h2 class="locaish2"> ' + local[i].nome +'</h2></div></div></a>'; //html
			locais.innerHTML = inserirInfos;
		};
	};
};