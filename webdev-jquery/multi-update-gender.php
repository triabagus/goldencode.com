<?php
include_once "koneksi.php";

$gender     = $_POST['gender'];
$id         = $_POST['id'];

$data   = [
    'gender'  => $gender,
    'id'    => $id
];

$query  = "UPDATE people SET gender= :gender WHERE id= :id";
$update = $koneksi->prepare($query);
$update->execute($data);

$json   = json_encode($data);
echo $json; 