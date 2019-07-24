<?php
include_once "koneksi.php";

$name   = $_POST['name'];
$id     = $_POST['id'];

$data   = [
    'name'  => $name,
    'id'    => $id
];

$query  = "UPDATE people SET name= :name WHERE id= :id";
$update = $koneksi->prepare($query);
$update->execute($data);

$json   = json_encode($data);
echo $json; 