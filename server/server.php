<?php
session_start();
//echo "IN SERVER. PHP";
//echo $_SESSION['LoggedIn'];
// get database connection
include_once 'database.php';
$database = new Database();
$db = $database->getConnection();

// instantiate student object
// get posted data
$data = json_decode(file_get_contents("php://input"));
$object_name = $data->object_name;
$fun_name = $data->fun_name;

// Skip session check for login / logout call
// TODO: Pending logout
if ((isset($_SESSION) && isset($_SESSION['LoggedIn']) && $_SESSION['LoggedIn'] != 0)
    || ($fun_name === 'login' && $object_name==='User') 
    || ($fun_name === 'logout' && $object_name==='User')
    || ($fun_name === 'register' && $object_name==='User')
    ) {
        //  if((isset($_SESSION) && isset($_SESSION['LoggedIn']) && $_SESSION['LoggedIn'] != 0)){
        //     $log = Logger::getLogger($_SESSION ['username']);
        // }else{
        //     $log = Logger::getLogger('login');
        // }
    include_once $object_name . '.php';
    $objVar = new $object_name($db);
    $result = $objVar->$fun_name($data->paramsArray);
    header('Content-Type: application/json; charset=UTF-8');

    echo json_encode($result);
} else {
    header('HTTP/1.1 401 Unauthorized');
    header('Content-Type: application/json; charset=UTF-8');
    $result=array();
    $result['loggedIn'] = false;
    die(json_encode($result));
}
