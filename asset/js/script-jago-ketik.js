function pembukaan() {
    $('#jago-ketik').append('<div id="frame-pembukaan">');

    let framePembukaan = $('#frame-pembukaan');
    framePembukaan.append('<h1 class="title">Test Ketik</h1>')
        .append('<button id="play">Mulai</button>');

    let tinggiFrame = framePembukaan.height();
    let y = (tinggiBrowser - tinggiFrame) / 2;

    framePembukaan.css({
        'marginTop': y,
        'text-align': 'center'
    });
}

function play() {
    $('#play').click(function () {
        $(this).fadeOut('fast', function () {
            $('#frame-pembukaan').append('<div id="text-score">Score <span id="score">0</span></div>');
            randomCharacter();
            ketik();
        });
    });
}

function randomCharacter() {
    let karakter = Math.random().toString(36).slice(-1);
    $('#jago-ketik').append('<span class="alfabet ' + hitungKarakter + '" id="' + karakter + '">' + karakter + '</span>');

    let batasHilangDibawah = tinggiBrowser + 100;
    let posisiX = Math.floor(Math.random() * (lebarBrowser - $('.alfabet').outerWidth())) + 1;

    $('.' + hitungKarakter).css({
        'left': posisiX
    });
    $('.alfabet').animate({
        top: '+=' + batasHilangDibawah
    }, kecepatan, function () {
        $(this).remove();
    });
    hitungKarakter++;

    setTimeout(function () {
        randomCharacter();
    }, 1500);

}

function ketik() {
    $('body').on('keyup', function (e) {
        let tombolDiKetik = '#' + e.key;
        let scroreSaatIni = parseInt($('#score').text());

        if ($('.alfabet').is(tombolDiKetik)) {
            $(tombolDiKetik).addClass('benar').removeAttr('id');
            $('#score').text(scroreSaatIni + 1);
        }
    });
}

function init() {
    pembukaan();
    play();
}

let hitungKarakter = 1;
let kecepatan = 7000;
let lebarBrowser = $(window).width();
let tinggiBrowser = $(window).height();

$(document).ready(function () {
    init();
});