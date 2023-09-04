$(document).ready(function() {

    var $card = $('.js-fancy-min a');
    var $cardBig = $('.js-fancy-big');

    var $cardJson = [];

    $card.each(function(i,value){
        $cardJson[i] = {
            src: value.getAttribute('href'),
            opts: {
                thumb: value.getAttribute('href')
            }
        }
    });

    $cardBig.on('click', function() {
        $.fancybox.open($cardJson,{
            loop : true,
            imageScale : true,
            index: $(this).attr('data-index') + '',
            thumbs : {
                autoStart : true
            },
            buttons: [
                "slideShow",
                "fullScreen",
                "thumbs",
                "close"
            ]
        });
    });
});
