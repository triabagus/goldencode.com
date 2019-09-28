// Scroll to top button appear
function openNav() {
    var x = document.getElementById("myNav");
    if (x.style.width === "0%") {
        x.style.width = "100%";
    } else {
        x.style.width = "0%";
    }
}

function closeNav() {
    var x = document.getElementById("myNav");
    if (x.style.width === "100%") {
        x.style.width = "0%";
    }
}

$(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
        $('#top').fadeIn();
        $(".nav").addClass("nav--full");
    } else {
        $('#top').fadeOut();
        $(".nav").removeClass("nav--full");
    }
});

$(document).ready(function () {

    $("#top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2500);
        return false;
    });
});

function functionSearch() {
    var input, filter, ul, li, a, i;

    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("navigator");
    li = ul.getElementsByTagName("li");

    // Loop all list items
    for (i = 0; i < li.length; i++) {

        a = li[i].getElementsByTagName("a")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }

    }

}