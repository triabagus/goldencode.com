<?php
include_once "koneksi.php";

$name       = $_POST['name'];
$gender     = $_POST['gender'];

$data=[
    'name'=> $name,
    'gender'=> $gender
];

//insert data
$query  = "INSERT INTO people(name,gender) VALUES(:name, :gender)";
$create = $koneksi->prepare($query);
$create->execute($data);

//add array id with nilai id terbaru
$data['id']= $koneksi->lastInsertId();

$json = json_encode($data);

echo $json;