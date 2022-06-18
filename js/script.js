    // sticky navbar less paddin
    $(window).scroll(function(){

        let position = $(this).scrollTop();
        if(position>= 300){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
            $('.navbar .navbar-collapse .navbar-brand').addClass('d-none');
            $('.navbar .navbar-collapse .navbar-brand-2').removeClass('d-none');

        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');  
            $('.navbar .navbar-collapse .navbar-brand').removeClass('d-none');          
            $('.navbar .navbar-collapse .navbar-brand-2').addClass('d-none');          
        }


    })
