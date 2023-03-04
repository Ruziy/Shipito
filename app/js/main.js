$(function(){
    var mixer = mixitup('.header__inner',{
        load:{
            filter:'.tracking'
        }
    }); 
    $('.ship__slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:false,
        arrows:true,
        prevArrow: '<img class="ship__sliderprev-img" src="images/icons/chevron-left.png">',
        nextArrow: '<img class="ship__slidernext-img" src="images/icons/chevron-right.png">',
    });
    $('.about-us__slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        dots:false,
        arrows:true,
        prevArrow: '<img class="about-us__arrow about-us__arrow-left" src="images/icons/about-us__arrow-left.png">',
        nextArrow: '<img class="about-us__arrow about-us__arrow-right" src="images/icons/about-us__arrow-right.png">',
    });
})