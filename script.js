$(document).ready(function () {

    $('a').click(function () {
        $('section').hide();

        var sectionToShow = $(this).attr('href');
        $(sectionToShow).show();

        if (sectionToShow === "#sobre") {
            $('#sobre h2').addClass('green-theme');
        }

        if (sectionToShow === "#equipe") {
            $('#equipe h2').addClass('blue-theme');
            $('#equipe h3').addClass('blue-theme');
        }

        if (sectionToShow === "#agenda") {
            $('#agenda h2').addClass('red-theme');
        }

        if (sectionToShow === "#projeto") {
            $('#projeto h2').addClass('brown-theme');
            $('#projeto h3').addClass('brown-theme');
        }

        if (sectionToShow === "#contato") {
            $('#contato h2').addClass('yellow-theme');
            $('#contato span').addClass('yellow-theme');
        }
    });

    $('#active').click(function () {
        $('section').show();
    })

    $('.topnav').click(function () {
        $('.content-menu').toggleClass('active');
    });

    function animateImage() {
        $(".img").animate
        (
            { width: "300px"}, 
            1000, 
            
            function () 
            { 
                $(".img").animate
                ({ width: "200px"},  
                1000, 
                function () 
                { 
                    animateImage();
                }); 
            }
        );
    }

    animateImage();

});