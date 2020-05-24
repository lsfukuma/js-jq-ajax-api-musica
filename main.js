$(document).ready(function() {
	//handlebars
	var source   = document.getElementById("cd-template").innerHTML;
	var template = Handlebars.compile(source);
    // Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
	$.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data){
        console.log(data);
        var disco = data.response
        // console.log(disco);
        // Ciclare quindi i dischi e ottenuti
        for (var i = 0; i < disco.length; i++) {
            var discoCorrente = disco[i]
            console.log(discoCorrente);
            var immagine = discoCorrente.poster;
			var titolo = discoCorrente.title;
			var cantante = discoCorrente.author;
			var genero = discoCorrente.genere;
			var anno = discoCorrente.year;
			console.log(titolo);
			console.log(immagine);
			console.log(cantante);
			console.log(anno);
        // e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
        } // ciclo for
        },
        'error': function(data){
            alert('error')
        }
    });//ajax
	var context = {
  	'cd-titolo': "titolo",
  	author: {
    id: 47,
    name: "Yehuda Katz"
	}//handlebars
};
});//document

//BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal")
