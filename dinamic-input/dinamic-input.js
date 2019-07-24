$(document).ready(function () {
    $('#add-input').click(function () {

        let input, str;

        input = '<input type="text" name="name" placeholder="Please your name">';
        input += '<select name"gender"><option value="laki-laki">Laki-laki</option><option value="perempuan">Perempuan</option></select>';
        str = '<div class="item">' + input + '</div>';

        $('#save').show();
        $('.inputs').append(str);
    });
});