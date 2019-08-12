<?php
$host = 'localhost';
$db = 'verstka';
$pass = '';
$user = 'root';

$connect = mysqli_connect($host,$user,$pass,$db);

if($connect){
    echo "Connect";
}else{
    die(mysqli_errno($connect));
}
?>