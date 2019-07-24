<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax Jquery</title>
    <style>
        body{
            background-color:#4d9286;
        }

        #loader , #showData{ 
            display:none; 
            width:200px; 
            height:auto; 
            margin:10px 0px;
        }

        #frame, table{ 
            width:700px;          
            margin: auto;
        }
        #frame, .action{
            text-align:center;
        }

        #btnTambah, input{
            margin-bottom:10px;
        }

        #frame-form{
            padding:10px;
            display:none;
            margin:auto;
            text-align:center;
        }

        #btnHapusSemua{
            display:none;
            margin:auto;
            font-weight:bold;
            cursor:pointer;
        }
        
    </style>
</head>
<body>
    <a href="../">Back</a>
    <div id="frame">
        <button id="btnTambah" onClick="formTambah()">+ Tambah People</button>
        <table border="1" cellpading="0" cellspacing="0">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Gender</th>
                    <th class="action">Action</th>
                    <th>Pilih</th>
                </tr>
            </thead>
            <tbody id="showData">
                <!-- list data people --> 
            </tbody>
        </table>
        <img src="../asset/img/Coming-Soon.png" alt="Coming Soon" id="loader">
        
        <br>
        <button id="btnHapusSemua" onclick="hapusYangDipilih()">Hapus <span class="counter">0</span> User Terpilih</button>
    </div>
    
    <div id="frame-form">
        # Isikan data berikut dengan sebenarnya
        <form id="form-people">
            <input type="hidden" name="id" value="">
            <input type="text" name="name" placeholder="Nama Lengkap" required><br>
            <input type="radio" name="gender" value="laki-laki" required>Laki-laki
            <input type="radio" name="gender" value="perempuan">Perempuan<br>
            <input type="submit" name="submit" value="Simpan">
            <button type="reset" onclick="batal()">Batal</button>
        </form>
    </div>

    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="script-webdev.js"></script>
</body>
</html>