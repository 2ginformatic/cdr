$("body").addClass("prel");
    setInterval(function(){ $( "#preloader" ).css('opacity', 0); $("body").removeClass("prel"); }, 1);
    setInterval(function(){ $( "#preloader" ).remove() }, 1);