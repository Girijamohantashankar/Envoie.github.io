$(document).ready(function(){
    $('.button').click(function(){
        console.log("click on pop");
        $('#popup').addClass('open');
    });
    $('.active').click(function(){
        console.log("click on pop");
        $('#popup').addClass('open');
    });
    $('#close').click(function(){
        $('#popup').removeClass('open');
    });
});



// =======================================================>
function onclickMenu(){
    document.getElementById("menu").classList.toggle("icon")
    document.getElementById("nav").classList.toggle("change")

}