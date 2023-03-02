$(function(){
    var mixer = mixitup('.header__inner',{
        load:{
            filter:'.tracking'
        }
    }); 
    $('.ship__slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:true,
        arrows:true,
        prevArrow: '<img class="ship__sliderprev-img" src="images/icons/chevron-left.png">',
        nextArrow: '<img class="ship__slidernext-img" src="images/icons/chevron-right.png">',
    });
})