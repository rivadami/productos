//var serviceURL = "http://localhost/prog3/jquerymobile/prueba_app/services/";
var serviceURL = "http://ps.manjaresfiestas.com.ar/productos/services/";

var products;

$('#productsListPage').bind('pageinit', function(event) { 
	getProductsList();
});

// .bind() -> page init, cuando arranca la página, ejecuta la función getEmployeeList()
// #employeeListPage -> id div index.html
//The bind() method attaches one or more event handlers for selected elements, and specifies a function to run when the event occurs.


function getProductsList() {
	$.getJSON(serviceURL + 'getProducts.php', function(data) {
		$('#productList li').remove();
		products = data.items;
		$.each(products, function(index, product) { 
			/*
				productS (todo lo que viene de json) por cada uno, un product
				Con product accedo a sus propiedades o datos internos
			*/
			$('#productsList').append('<li><a href="index2.html?id=' + product.id + '">' +
					'<img src="pics/tipo/' + product.img + '"/>' +
					'<h4>' /*+ product.tipo + ' ' */+ product.categoria + '</h4>' +
					'<p>' + product.descripcion + '</p>' +
					'</a></li>');
		});
		$('#productsList').listview('refresh');	//toma la lista del index.html y listview tiene el método refrsh.
	});
}

// function(data) -> función anónima, sin nombre, no se reutiliza, no la puedo llamar.
//data, argumento con nombre cualquiera. Ahí se cargan los datos que trae
// de getemployeeS.php