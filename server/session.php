<?php
session_start();

if (!isset($_SESSION) || !isset($_SESSION['LoggedIn']) || $_SESSION['LoggedIn']===0) {
    header('HTTP/1.1 401 Unauthorized');
    header('Content-Type: application/json; charset=UTF-8');
    $result=array();
    $result['loggedIn'] = false;
    die(json_encode($result));
} else {
    $result=[];
    header('Content-Type: application/json; charset=UTF-8');

    $result['status'] = true;
    $result['session']['email'] = $_SESSION['email'];
    $result['session']['user_id'] = $_SESSION['user_id'];
    $result['session']['LoggedIn'] = 1;
    $result['loggedIn'] = true;

    echo json_encode($result);
}