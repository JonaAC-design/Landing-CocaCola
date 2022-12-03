$(document).ready(listo);

function listo(){
    jQuery(".hamb").click(function(e){
        e.preventDefault();

        jQuery("header .container nav").toggleClass("open");
        jQuery(".hamb i").toggleClass("fa-times");
     
    });

    jQuery("header .container nav a").click(function(){

        jQuery("header .container nav").removeClass("open");
        jQuery(".hamb i").removeClass("fa-times");
        var dev = jQuery(this).attr("href");
        
        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top() -76
        })

    });

    jQuery(".boton.boton-rojo").click(function(){

        //jQuery("header .container nav").removeClass("open");
       // jQuery(".hamb i").removeClass("fa-times");
        var dev1 = jQuery(this).attr("boton");
        
        jQuery("html,body").animate({
            "scrollTop": jQuery(dev1).offset().top() -76
        })

    });

     jQuery(".boton.boton-negro").click(function(){

        //jQuery("header .container nav").removeClass("open");
       // jQuery(".hamb i").removeClass("fa-times");
        var dev2 = jQuery(this).attr("boton");
        
        jQuery("html,body").animate({
            "scrollTop": jQuery(dev2).offset().top() -76
        })

    });
}