/*
**File name : index.js
**Date Created : 6th October 2017
**Author : Pavitra Behre(me@pbehre.in)
*/
//The following functions are to fix the "active" focus and fade in effect on the carousel div
function slide1() {
    console.log('slide1() triggered');
    var s1 = $(".slide1");
    var s2 = $(".slide2");
    var s3 = $(".slide3");
    s1.removeClass("active"); //remove the class if already applied
    s2.removeClass("active"); //remove from others
    s3.removeClass("active");
    s1.addClass("active"); //add the class
}
function slide2() {
    console.log('slide2() triggered');
    var s1 = $(".slide1");
    var s2 = $(".slide2");
    var s3 = $(".slide3");
    var h2 = $(".hidden2");
    s1.removeClass("active");
    s2.removeClass("active"); //remove the class if already applied
    s3.removeClass("active");
    s2.addClass("active");
    h2.fadeIn(1000).removeClass("hidden2");
}
function slide3() {
    console.log('slide3() triggered');
    var s1 = $(".slide1");
    var s2 = $(".slide2");
    var s3 = $(".slide3");
    var h3 = $(".hidden3");
    s1.removeClass("active");
    s2.removeClass("active");
    s3.removeClass("active"); //remove the class if already applied
    s3.addClass("active");
    h3.fadeIn(1000).removeClass("hidden3");
}

//Document ready code goes here
$(document).ready(function () {
    $('.hidden1').fadeIn(1500).removeClass('hidden1'); //1500 cause first run, this line causes the fade in effect of the content when the user first navigates through the site
});