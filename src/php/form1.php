<?php
include_once 'config.php';

$name = trim($_POST['name']);
$tel = trim($_POST['tel']);

if($name == "" || $tel ==""){
    echo "Заполните поля";
}
$sql = mysqli_query($connect,"INSERT into form(form1_id,form1_name,form1_tel) VALUES(NULL,'".$name."','".$tel."')");
if($sql){
    echo "Заявка отправлена";
}else{
    echo "Error";
}
mysqli_close($connect);
?>