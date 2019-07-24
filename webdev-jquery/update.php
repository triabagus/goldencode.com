<?php

include_once "koneksi.php";
//nilai dari form
$name   = $_POST['name'];
$gender = $_POST['gender'];
$id     = $_POST['id'];

//nilai untuk mengisi kolom table people melalui PDO
$data = [
    'name'      => $name,
    'gender'    => $gender,
    'id'        => $id
];

//update data
$query ="UPDATE people SET name=:name,gender=:gender WHERE id=:id";
$update = $koneksi->prepare($query);
$update->execute($data);

$json = json_encode($data);
echo $json;