$(document).ready(function () {

    $(window).scroll(function () {
        let posisiScrollDariAtas = $(window).scrollTop();

        let tinggiWindow = $(window).height();
        let tinggiDocument = $(document).height();
        let scrollPersen = posisiScrollDariAtas / (tinggiDocument - tinggiWindow);
        let persentasiBulat = Math.round(scrollPersen * 100);

        $('.progress-bar').css({
            'width': persentasiBulat + '%',
            'background-color': 'gold'
        });
    });
});