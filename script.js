window.addEventListener("scroll", (event) => {
    if(window.scrollY > document.querySelector('.home').offsetHeight){
        document.querySelector('header').classList.add('floating')
    }else {
        document.querySelector('header').classList.remove('floating')
    }
});


/*
$('nav a').click(function(e){
    e.preventDefault();
    var id =$(this).attr('href');

     targetOffset =$(id).offset().top;
     $('html, body').animate({scrollTop:targetOffset}, 500);
});*/