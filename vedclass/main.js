/** sticky navigation */

let navbar= $(document.ready(".navbar");

$(window).scroll(function(){
let oTop = $(".section-2").offset().top - window.innerHeight;
if($(window).scrollTop()> oTop){
    navbar.addClass("sticky");
}else{
    navbar.removeClass("Sticky");
}
});