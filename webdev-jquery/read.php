<?php
include_once "koneksi.php";

$people= $koneksi->prepare("SELECT * FROM people");
$people->execute();
$rows = $people->fetchAll(PDO::FETCH_ASSOC);

//array json
$json= json_encode($rows);
//kembalikan data
echo $json;