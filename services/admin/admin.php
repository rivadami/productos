<?php
	include "../config.php";	

	$sql = "select * from productos";

	try{
		$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
		$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$prueba = $dbh->prepare($sql);
		$prueba->execute();
		$resultado = $prueba->fetchObject();
	}catch(PDOException $e){
		echo "error: " . $e->getMessage();
	}
?>