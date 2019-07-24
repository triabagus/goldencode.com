<?php
$server = "localhost";
$username="toor";
$password="1";
$database="webdev";

$koneksi=new PDO("mysql:host=$server;dbname=$database",$username,$password);