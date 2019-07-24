<?php

include_once "koneksi.php";
$data['id']= isset($_GET['id'])? $_GET['id']:false;

$people = $koneksi->prepare("SELECT * FROM people WHERE id=:id");
$people->execute($data);
$row=$people->fetch(PDO::FETCH_ASSOC);

$json= json_encode($row);

echo $json;