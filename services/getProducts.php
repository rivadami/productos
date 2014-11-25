<?php
include 'config.php';

/*$sql = "select e.id, e.firstName, e.lastName, e.title, e.picture, count(r.id) reportCount " . 
		"from employee e left join employee r on r.managerId = e.id " .
		"group by e.id order by e.lastName, e.firstName";
*/

$sql = "select id, categoria, img, descripcion " .
		"from tipo";

try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->query($sql);  
	$products = $stmt->fetchAll(PDO::FETCH_OBJ);
	$dbh = null;
	echo '{"items":'. json_encode($products) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>