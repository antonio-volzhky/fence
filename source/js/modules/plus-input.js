jQuery(document).ready(function() {
    let num = 0;
    
    jQuery('.price-form__plus').on('click',function(){
        num++;
        if (num === 1) {
            jQuery('.price-form input.number').val('1 ребенок');
        } else {
            jQuery('.price-form input.number').val(num + ' детей');
        }
    })
});