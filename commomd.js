console.clear();

$(".stlye-list>.stlye-list__1st> .stlye-list__right").click(function () {
  $(".stlye-list__2nd").addClass("activei")
  $(".stlye-list__1st").addClass("activeii")
});

$(".stlye-list>.stlye-list__2nd>.stlye-list__left").click(function () {
  $(".stlye-list__1st").removeClass("activeii")
  $(".stlye-list__2nd").removeClass("activei")
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('.slideinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px','opacity':'1'},1000);
            }
            
        }); 
    });
});