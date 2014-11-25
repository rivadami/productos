<?php
$conexion = mysql_connect("localhost", "suhtnbmu_usuario", "atuel.724");
mysql_select_db("suhtnbmu_recetas", $conexion);
/* Extrae los valores enviados desde la aplicacion movil */
$nombreEnviado = $_GET['nombre'];
$usuarioEnviado = $_GET['usuario'];
$passwordEnviado = $_GET['password'];

/* revisar existencia del usuario con la contraseña en la bd */

$sqlCmd = "insert into usuarios (id,login,password,nombre) VALUES (0, '$usuarioEnviado', '$passwordEnviado', '$nombreEnviado')";

$sqlQry = mysql_query($sqlCmd,$conexion);


/*if(mysql_num_rows($sqlQry)>0)
{
$login=1;
}
else
{
$login=0;
}*/
$login=1;

/* Define los valores que seran evaluados, en este ejemplo son valores estaticos,
en una verdadera aplicacion generalmente son dinamicos a partir de una base de datos */

/* Extrae los valores enviados desde la aplicacion movil */
$nombreEnviado = $_GET['nombre'];
$usuarioEnviado = $_GET['usuario'];
$passwordEnviado = $_GET['password'];

/* crea un array con datos arbitrarios que seran enviados de vuelta a la aplicacion */
$resultados = array();
$resultados["hora"] = date("F j, Y, g:i a");
$resultados["generador"] = "Enviado desde maimo" ;

/* verifica que el usuario y password concuerden correctamente */
if( $login==1 ){
/*esta informacion se envia solo si la validacion es correcta */
$resultados["mensaje"] = "Validacion Correcta";
$resultados["validacion"] = "ok";

}else{
/*esta informacion se envia si la validacion falla */
$resultados["mensaje"] = "Usuario y password incorrectos";
$resultados["validacion"] = "error";
}

/*convierte los resultados a formato json*/
$resultadosJson = json_encode($resultados);

/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';

?>