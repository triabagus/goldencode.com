<?php
include_once "koneksi.php";

$id = $_POST['id'];

//sambung array jadi string menggunakan koma, contoh : 1,2,3,4
$strId  = implode(',', $id);

$delete = $koneksi->prepare("DELETE FROM people WHERE id IN ($strId)");
$delete->execute();

$json = json_encode($id);
echo $json;