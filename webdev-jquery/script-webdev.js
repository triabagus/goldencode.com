$(document).ready(function () {
    read();

    //kalau sudah selesai edit bisa click dimana aja
    $('body').click(function (e) {
        if (e.target.id != "onEditName") {
            yangSedangDiEditName();
        }

        if (e.target.id != "onEditGender") {
            yangSedangDiEditGender();
        }
    });

});

function read() {
    $('#loader').show();
    $.ajax({
        type: 'GET',
        url: 'read.php',
        dataType: 'json',
        success: function (response) {
            let btnEdit, btnDelete, dataTable, checkbox;
            $.each(response, function (i, row) {
                checkbox = "<input onClick='hitungCheckbox()'" + "type='checkbox' name='user[]'" + "value='" + row.id + "'>";
                btnEdit = "<button onClick=\"formGanti('" + row.name + "','" + row.id + "')\">Ganti</button>";
                btnDelete = "<button onClick=\"hapus('" + row.name + "','" + row.id + "')\">Hapus</button>";
                dataTable += '<tr id="' + row.id + '">' +
                    '<td>' + eval(i + 1) + '</td>' +
                    '<td><span onDblClick="formText(this)">' + row.name + '</span></td>' +
                    '<td><span onDblClick="editSelectBox(this)">' + row.gender + '</span></td>' +
                    '<td class=\"action\">' + btnEdit + ' | ' + btnDelete + '</td>' +
                    '<td>' + checkbox + '</td>' +
                    '</tr>';
            });

            $('#loader').delay(2000).hide(function () {
                $('table tbody').append(dataTable).show();
            });
        }
    });
}

function hapus(name, id) {
    if (confirm('Anda ingin menghapus ' + name)) {
        let passData = {
            'id': id
        };
        $.ajax({
            type: 'POST',
            url: 'delete.php',
            dataType: 'json',
            data: passData,
            success: function (response) {
                $('tr#' + response).hide();
            }
        });
    }
}

function formTambah() {
    $('input[name="id"]').val(0);
    $('input[name="name"]').val('');
    $('input[name="gender"]').removeAttr("checked");
    $('input[name="submit"]').off('click').on('click', tambah);
    $("#frame-form").slideDown();
}

function batal() {
    $("#frame-form").slideUp();
}

function tambah() {
    let passData = $("#form-people").serialize();

    $.ajax({
        type: 'POST',
        url: 'create.php',
        dataType: 'json',
        data: passData,
        success: function (response) {
            let totalBaris = $('table tr').length;
            let checkbox = "<input onClick='hitungCheckbox()'" + "type='checkbox' name='user[]'" + "value='" + response.id + "'>";
            let btnEdit = "<button onClick=\"formGanti('" + response.name + "','" + response.id + "')\">Ganti</button>";
            let btnDelete = "<button onClick=\"hapus('" + response.name + "','" + response.id + "')\">Hapus</button>";
            let dataTable = '<tr id="' + response.id + '" style="display:none;">' +
                '<td>' + totalBaris + '</td>' +
                '<td><span onDblClick="formText(this)">' + response.name + '</span></td>' +
                '<td><span onDblClick="editSelectBox(this)">' + response.gender + '</span></td>' +
                '<td class=\"action\">' + btnEdit + ' | ' + btnDelete + '</td>' +
                '<td>' + checkbox + '</td>' +
                '</tr>';

            $("#frame-form").slideUp(500, function () {
                $('table tbody').append(dataTable);
                $('tr#' + response.id).delay(300).show(1500);
            });
        }
    });

    return false;
}

function formGanti(name, id) {
    $.ajax({
        type: 'GET',
        url: 'data-people.php',
        dataType: 'json',
        data: 'id=' + id,
        success: function (response) {
            $('input[name="submit"]').off('click').on('click', ganti);
            $('input[name="id"]').val(response.id);
            $('input[name="name"]').val(response.name);
            $('input[name="gender"]').removeAttr('checked');
            $('input[name="gender"][value=' + response.gender + ']').attr('checked', true);
            $("#frame-form").slideDown();
        }
    });
}

function ganti() {
    let passData = $('#form-people').serialize();

    $.ajax({
        type: 'POST',
        url: 'update.php',
        dataType: 'json',
        data: passData,
        success: function (response) {
            let checkbox = "<input onClick='hitungCheckbox()'" + "type='checkbox' name='user[]'" + "value='" + response.id + "'>";
            let nomor = $('table tr#' + response.id + ' td').html();
            let btnEdit = "<button onClick=\"formGanti('" + response.name + "','" + response.id + "')\">Ganti</button>";
            let btnDelete = "<button onClick=\"hapus('" + response.name + "','" + response.id + "')\">Hapus</button>";
            let dataTable =
                '<td>' + nomor + '</td>' +
                '<td><span onDblClick="formText(this)">' + response.name + '</span></td>' +
                '<td><span onDblClick="editSelectBox(this)">' + response.gender + '</span></td>' +
                '<td class=\"action\">' + btnEdit + ' | ' + btnDelete + '</td>' +
                '<td>' + checkbox + '</td>';

            $("#frame-form").slideUp(500, function () {
                $('tr#' + response.id).html(dataTable);
                $('tr#' + response.id + ' td').animate({
                        opacity: 0
                    }, 300)
                    .animate({
                        opacity: 1
                    }, 500);
            });
        }
    });

    return false;
}

function hitungCheckbox() {
    let jumlah = $("input[name='user[]']:checked").length;
    $(".counter").text(jumlah);

    if (jumlah > 0) {
        $('#btnHapusSemua').show();
    } else {
        $('#btnHapusSemua').hide();
    }
}

function hapusYangDipilih() {
    let id = new Array();
    $("input[name='user[]']:checked").each(function () {
        id.push($(this).val());
    });

    if (confirm('Anda Yakin ingin menghapus user yang terpilih ?')) {
        let passData = {
            'id': id
        };
        $.ajax({
            type: 'POST',
            url: 'multi-delete.php',
            dataType: 'json',
            data: passData,
            success: function (response) {
                $.each(response, function (i, row) {
                    $('tr#' + row).hide(1000);
                });

                $("input[name='user[]']").prop('checked', false);
                $('#btnHapusSemua').hide();
            }
        });
    }
}

function yangSedangDiEditName(e) {
    if ($('#onEditName').length == 0) {
        // tidak  ada yang diedit jadi distop saja
        return false;
    }

    let id = $('#onEditName').closest('tr').attr('id');
    let name = $('#onEditName').val();

    $('#onEditName').siblings('span').html(name);
    $('#onEditName').siblings('span').show();

    $('#onEditName').remove();

    multiGantiName(id, name);
}

function multiGantiName(id, name) {
    let passData = {
        'id': id,
        'name': name
    };

    $.ajax({
        type: 'POST',
        url: 'multi-update.php',
        dataType: 'json',
        data: passData,
        success: function (response) {
            alert("Data berhasil diupdate");
        }
    });

    return false;
}

function yangSedangDiEditGender(e) {
    if ($('#onEditGender').length == 0) {
        // tidak  ada yang diedit jadi distop saja
        return false;
    }

    let id = $('#onEditGender').closest('tr').attr('id');
    let gender = $('#onEditGender').val();

    $('#onEditGender').siblings('span').html(gender);
    $('#onEditGender').siblings('span').show();

    $('#onEditGender').remove();

    multiGantiGender(id, gender);
}

function multiGantiGender(id, gender) {
    let passData = {
        'id': id,
        'gender': gender
    };

    $.ajax({
        type: 'POST',
        url: 'multi-update-gender.php',
        dataType: 'json',
        data: passData,
        success: function (response) {
            alert("Data berhasil diupdate");
        }
    });

    return false;
}

function formText(e) {
    yangSedangDiEditName(e);

    let name = $(e).text();
    $(e).hide();
    $(e).parent().append('<input id="onEditName" type="text" value="' + name + '">');
}

function editSelectBox(e) {
    yangSedangDiEditGender(e);
    let strPilihan = '';
    let pilihan = ['laki-laki', 'perempuan'];

    let jenis_kelamin = $(e).html();
    $(e).hide();

    $(e).parent().append('<select id="onEditGender" class="editSelectBox">');

    for (let i = 0; i < pilihan.length; i++) {
        if (pilihan[i] == jenis_kelamin) {
            strPilihan += '<option value="' + pilihan[i] + '" selected>' + pilihan[i] + '</option>';
        } else {
            strPilihan += '<option value="' + pilihan[i] + '">' + pilihan[i] + '</option>';
        }
    }
    $('.editSelectBox').append(strPilihan);
}