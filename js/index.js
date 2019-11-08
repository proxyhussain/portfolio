
function initSkills() {
    $(window).scroll(function() {
        $(".skill-progress span").each(function() {
            let myVal = $(this).attr("data-value");

            $(this).css({
                width: myVal
            });
        });
    });
}

let waypoint = new Waypoint({
    element: document.getElementById("about-me"),
    handler: function() {
        initSkills();
    },
    offset: "50%"
});


$(window).scroll(function() {
    console.log("scrolling");
    if ($(window).scrollTop() > 50) {
        $(".navbar").addClass("fixed");
    } else {
        $(".navbar").removeClass("fixed");
    }
});


let $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
});
