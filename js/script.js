// event pada link navbar saat di tekan
$('.page-scroll').on('click', function(e){
   
    // ambil isi tujuan
    var tujuan = $(this).attr('href');
    // tangkap elemen yg bersangkutan
    var elemenTujuan = $(tujuan);


    //pindah scroll
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1500, 'easeOutCirc');

    e.preventDefault();
});


//parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll +'%)'
    });

    //about
    $('.kiri').addClass('pmuncul');
    $('.kanan').addClass('pmuncul');

    //gambar
    if(wScroll > $('.gambar').offset().top - 250 ) {
        $('.gambar .thumbnail').each(function(i){
            setTimeout(function() {
                $('.gambar .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });        
    }
});

