/*busca o id na url*/
function queryString(parameter) {  
              var loc = location.search.substring(1, location.search.length);   
              var param_value = false;   
              var params = loc.split("&");   
              for (i=0; i<params.length;i++) {   
                  param_name = params[i].substring(0,params[i].indexOf('='));   
                  if (param_name == parameter) {                                          
                      param_value = params[i].substring(params[i].indexOf('=')+1)   
                  }   
              }   
              if (param_value) {   
                  return param_value;   
              }   
              else {   
                  return false;   
              }   
        }

var idPagina = queryString("id");
console.log(idPagina);
/*fim da busca ao id na url*/
for (var i = 0; i < eventos.length; i++){
	var data = eventos[i].data;
	var horario = eventos[i].horario;
	var local = eventos[i].local;
	var idevento = eventos[i].idevento;
	var idesporte = eventos[i].idesporte;
	if (idevento == idPagina) {	
		var eventoUnico = document.getElementById("eventoUnico");
		for (var e = 0; e < esp.length; e++) {
			if (esp[e].idesporte == idesporte) {
				nomeEsporte = esp[e].nome;
				};
			}
		var inserirInfos = '<div id="content"><h2 id="titulo">' + nomeEsporte +
		'</h2><a href="descricao.html"><button class="myButton">Regras</button></a>\
		<div class="linhaEvento"><h3 class="tituloEvento">Data:</h3><p>'+ data +
		'</p></div><div class="linhaEvento"><h3 class="tituloEvento">Times:</h3><p>'+ /*times*/"nao tem" +
		'</div><div class="linhaEvento"><h3 class="tituloEvento">Horário:</h3><p>' + horario + 
		'</p></div><div class="linhaEvento"><h3 class="tituloEvento">Local:</h3><p>'+ local +
		'</p></div><a href="confirmacao.html"><button class="myButton">Como chegar</button></a>'; //html
		eventoUnico.innerHTML += inserirInfos;
	}
};
