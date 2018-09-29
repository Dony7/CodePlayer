$(function(){
    // Click for section toggle

    $('.html_button').on('click', function(){

        $('.html_code_section').toggle(100);
        $(this).toggleClass("active");
    });

    $('.css_button').on('click', function(){

        $('.css_code_section').toggle(100);
        $(this).toggleClass("active");
    });

    $('.js_button').on('click', function(){

        $('.js_code_section').toggle(100);
        $(this).toggleClass("active");
    });

    $('.output_button').on('click', function(){

        $('.output_code_section').toggle(100);
        $(this).toggleClass("active");
    });


    // Adding content to the iframe

    $(".output").contents().find("html").html("<html><head><style type='text/css'>" + $(".css").val() + "</style></head><body>" + $(".html").val() + "</body></html>");

    document.querySelector(".output").contentWindow.eval($(".js").val())


    $("textarea").on("change keyup paste", function(){

    $(".output").contents().find("html").html("<html><head><style type='text/css'>" + $(".css").val() + "</style></head><body>" + $(".html").val() + "</body></html>");

    document.getElementById("output").contentWindow.eval($(".js").val());

});


});