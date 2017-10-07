/*
**File name : index.js
**Date Created : 6th October 2017
**Author : Pavitra Behre(me@pbehre.in)
*/
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
    s1.removeClass("active");
    s2.removeClass("active"); //remove the class if already applied
    s3.removeClass("active");
    s2.addClass("active");
}
function slide3() {
    console.log('slide3() triggered');
    var s1 = $(".slide1");
    var s2 = $(".slide2");
    var s3 = $(".slide3");
    s1.removeClass("active");
    s2.removeClass("active");
    s3.removeClass("active"); //remove the class if already applied
    s3.addClass("active");
}