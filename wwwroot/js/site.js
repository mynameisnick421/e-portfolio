// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    $("#myCarousel").carousel({ interval: false });//turn auto scroll off

    //Navigation click events

    $("body").on("click", ".aboutMe", function () {
        $('html, body').animate({
            scrollTop: ($('#aboutMe').offset().top)
        }, 2500);
    })

    $("body").on("click", ".skills", function () {
        $('html, body').animate({
            scrollTop: ($('.skills-container').offset().top - 230)
        }, 2500);
    })

    $("body").on("click", ".contact", function () {
        $('html, body').animate({
            scrollTop: ($('footer').offset().top)
        }, 2500);
    })

    $("body").on("click", ".logo", function () {
        $('html, body').animate({
            scrollTop: ($('body').offset().top)
        }, 2500);
    })


    //var width = 120;//original background width to avoid repeating backgrounds on fast scroll
    //var blur = 0;
    //var newPos = 0;
    //var lastPos = 0;
    //var cutoffPos = 100000;// possition to stop background effects. Set high initially, then set to screen possition when second image is at 100% width. Keeps width from being less than 100%
    ////scroll listener
    //$(window).scroll(function () {
    //    let imagePost = "";
    //    if ($(window).width() <= 900) {
    //        imagePost = "-mobile"; // change to mobile image based on screen size
    //    }
    //    let scrollPos = $(this).scrollTop();
    //    if (scrollPos < cutoffPos) {
    //        newPos = scrollPos / 3;
    //        let difference = newPos - lastPos;
    //        if (scrollPos < 1400) {//less than 1400px frmo top zoom in, blur
    //            //$("#introduction").css("background-color", "black");//keeps from flashing white on image change
    //            $("#introduction").css({ "background-image": "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(images/engine-background" + imagePost + ".jpg)" });
    //            cutoffPos = 100000;
    //            width += difference;
    //            blur = width / 80;

    //            if (width < 120) { //reset values if background width reaches 120% before top of page is reached
    //                width = 120;
    //                blur = 0;
    //            }
    //        }
    //        else {//greater than 1400px from top, change background, zoom out, focus
    //            //$("#introduction").css("background-color", "black");//keeps from flashing white on image change
    //            $("#introduction").css({ "background-image": "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(images/web-background" + imagePost + ".jpg)" });
    //            width -= difference;
    //            blur = width / 80;

    //            if (width < 120) {//stop width changing and make sure background is in focus 
    //                cutoffPos = scrollPos;
    //                width = 120;
    //                //blur = 0;
    //            }
    //        }
    //        //set propertys to new values
    //        $("#introduction").css({ "background-size": width + '%' });
    //        $("#introduction .content-container").css({ "backdrop-filter": "blur(" + blur + "px)" });
    //        lastPos = newPos;//save current possition as last possition
    //    }
    //})
});

