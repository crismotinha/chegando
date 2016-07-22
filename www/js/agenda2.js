for (var i = 0; i < eventos.length; i++){
	var dataHorario = eventos[i].data;
	var arrumarData = function(datacomhorario){ //inverter a data e separar o horario
                    var horario = datacomhorario.substring(11,16);
                    var data1 = datacomhorario.substring(0,10);
                    console.log(horario, data1);
                    var dataArray = data1.split("-");
                    var dataFinal = dataArray[2] +"/"+ dataArray[1] + "/" + dataArray[0];
                    console.log(dataFinal);
               }
    arrumarData(dataHorario);
	for (var a = 0; a < local.length; a++) {
		if (eventos[i].idlocal == local[a].idlocal){
			localEvento = local[a].nome;
		};
	};
	for (var u = 0; u < eventoEsporte.length; u++) {
		if (eventos[i].idevento == eventoEsporte[u].idevento){
			var idesporte = eventoEsporte[u].idesporte;
			console.log(idesporte);
		};
	};

	var idevento = eventos[i].idevento;
	var link = "evento.html?id="+ idevento; 
	var listaEventos = document.getElementById("listaEventos");
	for (var e = 0; e < esp.length; e++) {
		if (esp[e].idesporte == idesporte) {
			console.log("chegouaqui");
			if (esp[e].icon_end == "Olimpico") {
				var img = esp[e].nome.toLowerCase(); //cria a url da img nome_do_esporte
				
			} //coloca em letra minuscula
			else {
				var icone = esp[e].nome.toLowerCase();
				var img = icone+"(P)"; //diz que é paralimpico
			};
			var linkimg = img.replace(/\s/g,""); //cria a url da img nome_do_esporte tirando os espaços do nome do esporte
			var linkimg2 = removerAcentos(linkimg);
			nomeEsporte = esp[e].nome;
			};
		};	
	var inserirInfos = '<div class="linha" id="event"><a href="'+link+'"><div class="pc30"><a href="evento.html">\
	<img id="icon" src="images/' + linkimg2 +
	'.png"/> </a></div><div class="pc70" ><a href="notificacao.html"><img id="bell" align="right"\
	src="images/bell.png"/></a><h2 class="fonth2">'+ nomeEsporte +
	'</h2><p class="tamfont">'+ dataFinal +'-' + horario + 
	'</p><p class="tamfont">'+ localEvento + '</p></div></a></div>'; //html
	listaEventos.innerHTML += inserirInfos;
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
}
