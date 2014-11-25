$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getProduct.php?id='+id, displayProduct);
	console.log("aca estoy");
});

function displayProduct(data) {
	var product = data.item;
	
	$('#fotoProducto').attr('src', 'pics/' + product.img);
	$('#nombreCompleto').text(product.tipo);
	$('#tituloProducto').text(product.marca);	
	$('#descripcionProducto').text(product.receta);
	/*
	if (employee.managerId>0) {
		$('#actionList').append('<li><a href="employeedetails.html?id=' + employee.managerId + '"><h3>View Manager</h3>' +
				'<p>' + employee.managerFirstName + ' ' + employee.managerLastName + '</p></a></li>');
	}
	if (employee.reportCount>0) {
		$('#actionList').append('<li><a href="reportlist.html?id=' + employee.id + '"><h3>View Direct Reports</h3>' +
				'<p>' + employee.reportCount + '</p></a></li>');
	}
	
	if (product.receta) {
		$('#actionList').append("<li><h3>Descripcion</h3><p>" + product.receta + "</p></li>");
	}
	
	if (product.ciudad) {
		$('#actionList').append("<li><h3>Ciudad</h3><p>" + product.ciudad + "</p></a></li>");
	}
	if (product.codigoproducto) {
		$('#actionList').append("<li><h3>Codigo Producto</h3><p>" + product.codigoproducto + "</p></li>");
	}
	*/
	$('#actionList').listview('refresh');
	
}

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
