$("body").addClass("prel");
    setInterval(function(){ $( "#preloader" ).css('opacity', 0); $("body").removeClass("prel"); }, 5000);
    setInterval(function(){ $( "#preloader" ).remove() }, 5800);