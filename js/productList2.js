//var serviceURL = "http://localhost/prog3/jquerymobile/prueba_app/services/";
var serviceURL = "http://ps.manjaresfiestas.com.ar/productos/services/";

var products2;
/*
$('#productsListPage2').bind('pageinit', function(event) { 
	getProductsList2();
});*/

$('#productsListPage2').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getProducts2.php?id='+id, getProductsList2);
	console.log("aca estoy");
});

// .bind() -> page init, cuando arranca la página, ejecuta la función getEmployeeList()
// #employeeListPage -> id div index.html
//The bind() method attaches one or more event handlers for selected elements, and specifies a function to run when the event occurs.


function getProductsList2(data) {
	//$.getJSON(serviceURL + 'getProducts2.php', function(data) {
	//	$('#productList2 li').remove();
		products2 = data.items;
		$.each(products2, function(index2, product2) { 
			/*
				productS (todo lo que viene de json) por cada uno, un product
				Con product accedo a sus propiedades o datos internos
			*/
			$('#productsList2').append('<li><a href="productDetails.html?id=' + product2.id + '">' +
					'<img src="pics/' + product2.img + '"/>' +
					'<h4>' /*+ product.tipo + ' ' */+ product2.marca + '</h4>' +
					'<p>' + product2.descripcion + '</p>' +
					'</a></li>');
		});
		$('#productsList2').listview('refresh');	//toma la lista del index.html y listview tiene el método refrsh.
//	});
}

// function(data) -> función anónima, sin nombre, no se reutiliza, no la puedo llamar.
//data, argumento con nombre cualquiera. Ahí se cargan los datos que trae
// de getemployeeS.php

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    console.log("hashes " + hashes);
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}