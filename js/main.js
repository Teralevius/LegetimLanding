$(document).ready(function() {
  console.log($("#owl-demo"));
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

});