$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        autoPlay: 3000, //Set AutoPlay to 3 seconds

        responsiveClass: true,
        responsive : {
            0:{
                items : 1
            },

            767:{
                items : 2
            },

            1024:{
                items : 3
            }
        }

    });
    $('.buttonHeader').on('click',function () {
        $('.formFon').css("display","flex");
    });
    $('.close').on('click',function () {
        $('.formFon').css("display","none");
    });
    $('#mobileSkype').on('click',function () {
        if($('#contactText').text()==$('#skype').text()){
            $('.contactPanel').css("display", "none");
            $('#contactText').html("");
        }else{$('.contactPanel').css("display", "none");
        $('#contactText').html($('#skype').text());
        $('.contactPanel').css("display", "flex");}
    });
    $('#mobilePhone').on('click',function () {
        if($('#contactText').text()== $('#phone').text()){
            $('.contactPanel').css("display", "none");
            $('#contactText').html("");
        }else{
        $('.contactPanel').css("display", "none");
        $('#contactText').html($('#phone').text());
        $('.contactPanel').css("display", "flex");
        }
    });
    $('#mobileClock').on('click',function () {
        if($('#contactText').text()== $('#time').text()){
            $('.contactPanel').css("display", "none");
            $('#contactText').html("");
        }else{
            $('.contactPanel').css("display", "none");
            $('#contactText').html($('#time').text());
            $('.contactPanel').css("display", "flex");
        }
    });
    $('#mobileEnvelope').on('click',function () {
        if($('#contactText').text()== $('#mail').text()){
            $('.contactPanel').css("display", "none");
            $('#contactText').html("");
        }else{
            $('.contactPanel').css("display", "none");
            $('#contactText').html($('#mail').text());
            $('.contactPanel').css("display", "flex");
        }
    });
    $('#mobileHome').on('click',function () {
        if($('#contactText').text()== $('#homephone').text()){
            $('.contactPanel').css("display", "none");
            $('#contactText').html("");
        }else{
            $('.contactPanel').css("display", "none");
            $('#contactText').html($('#homephone').text());
            $('.contactPanel').css("display", "flex");
        }
    });
    $('#mobileMarker').on('click',function () {
        if($('#contactText').text()== $('#adress').text()){
            $('.contactPanel').css("display", "none");
            $('#contactText').html("");
        }else{
            $('.contactPanel').css("display", "none");
            $('#contactText').html($('#adress').text());
            $('.contactPanel').css("display", "flex");
        }
    });
});