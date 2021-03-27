// Event pada saat link di klik 
// jQuery, carikan element html dengan nama class page-scroll.
// Jika ketemu, pada saat di klik jalankan fungsinya ::
 
// $('.page-scroll').on('click', function(e) {

    //  console.log('Oke'); Digunakan untuk debug , apakah javascript sudah jalan atau belum.

    // Didalam fungsi ini akan melakukan sesuatu, yang akan saya lakukan adalah jika saya klik link ABOUT, saya akan mengambil string #about dan lainnya, untuk melakukan itu saya akan mengambil isi hrefnya dengan cara sebagai berikut ::

    // jQuery cari element yang bersangkutan | didalam kurung saya isi dengan this, untuk menyatakan hal yang bersangkutan yaitu tag <a> , jika saya isi didalam kurungnya dengan ('.page-scroll') maka ini akan menentukan 4 element yang bersangkutan yaitu tag <a>.
    // Dan saya ingin mengambil isi dari atribut yaitu href .

    // var tujuan = $(this).attr('href');
    // console.log(href);

    // Selanjutnya adalah menangkap element yang bersangkutan atau element tujuan ::

    // var elemenTujuan = $(tujuan);
    // console.log(elementHref);

    // Setelah element tujuan tertangkap, selanjutnya cari jarak awal halaman atas browser ketujuan yang dicari sebagai berikut :: 

    // console.log(elementHref.offset().top);

    // Atau bisa juga dengan cara menggunakan fungsi scrolltop sebagai berikut namun untuk menjalankan ini saya harus mematikan terlebih dahulu tag a dengan cara memberikan parameter e / event berikut contohnya ::

    // untuk mengetahui jarak pada saat web browser discroll kebawah , maka hal ini akan menghasilkan nilai::
    // console.log($('html,body').scrollTop());
    // Pindahkan scroll ::
    // $('html, body').animate({
    //     scrollTop: elemenTujuan.offset().top - 40
    // }, 1300, 'swing');
    // e.preventDefault();
// });

$('.page-scroll').on('click', function(e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 40
    }, 1300, 'linear');
    e.preventDefault();
});

/*
Parallax ::
jQuery tolong carikan element window, jalankan fungsinya pada saat discroll
$(window).scroll(function(){
    Jika element bersangkutan sudah ditangkap, simpan element tersebut ke dalam var wScroll.
    var wScroll = $(this).scrollTop();

    jQuery ubah style element img yang ada didalam element jumbotron dibagian cssnya dengan transformasi translate 0, dibagi jumlah isi variable wScroll dengan 6
    $('.jumbotron img').css({'transform' : 'translate(0, '+wScroll/6+'%)'});
})
*/
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+wScroll/6+'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+wScroll/4+'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+wScroll/2+'%)'
    });

    /*
    Portfolio :: 
    Jika isi variable wScroll lebih besar dari tinggi element porfolio maka kurangi dengan nilai 150(berapapun).
    
    jQuery tolong carikan saya element .thumbnail di dalam .portfolio dan jalankan fungsi berdasarkan nilai indexnya : Jika ada element yang dicari, maka atur waktu untuk menjalankan fungsi (setTimeout(function(){ dari element yang dicari tampilkan berurut dengan menambahkan class 'opamuncul'} dari perhitungan 300*(i+1));)
    */

if (wScroll > $('.portfolio').offset().top - 150) {
    $('.portfolio .thumbnail').each(function(i) {
        setTimeout(function () {
            $('.portfolio .thumbnail').eq(i).addClass('opamuncul');
        }, 300 * (i + 1));
    });
}
}) ;

$(window).on('load',function () {
    $('.p1').addClass('pmuncul');
    $('.p2').addClass('pmuncul');
})