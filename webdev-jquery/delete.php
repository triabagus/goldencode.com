<?php

include_once "koneksi.php";

$id=$_POST['id'];

$data=['id'=> $id];

$query="DELETE FROM people WHERE id=:id";
$delete= $koneksi->prepare($query);
$delete->execute($data);

echo $id;