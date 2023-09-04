jQuery(document).ready(function() {
    // Массив цен на 2 месяца

    var arrCash = [
        "24 550",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "23 000",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "23 000",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "23 000",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "23 000",
        "24 550",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "24 550",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "23 000",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "23 000",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "23 000",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
        "23 000",
        "24 550",
        "27 770",
        "28 600",
        "24 000",
        "24 000",
        "22 540",
    ]

    if (jQuery('.js-date-form')) {
        jQuery('.js-date-form').each(function(index,item) {
            var dateIn = jQuery(item).find('.js-date-in');
            var dateOut = jQuery(item).find('.js-date-out');
            var start = moment();
            jQuery(item).daterangepicker(
                {
                autoApply: true,
                autoUpdateInput: false,
                "alwaysShowCalendars": true,
                "opens": "center",
                "startDate": start,
                "endDate": start,
                "locale": {
                    "format": "DD MM YYYY",
                    "separator": " - ",
                    "daysOfWeek": [
                        "Вс",
                        "Пн",
                        "Вт",
                        "Ср",
                        "Чт",
                        "Пт",
                        "Сб"
                    ],
                    "monthNames": [
                        "Январь",
                        "Февраль",
                        "Март",
                        "Апрель",
                        "Май",
                        "Июнь",
                        "Июль",
                        "Aвгуст",
                        "Сентябрь",
                        "Октябрь",
                        "Ноябрь",
                        "Декабрь"
                    ],
                    "firstDay": 1
                },
                }, function(start, end, label) {
                    var selectedStartDate = start.format('DD.MM.YYYY'); // selected start
                    var selectedEndDate = end.format('DD.MM.YYYY'); // selected end

                    dateIn.val(selectedStartDate);
                    dateOut.val(selectedEndDate);

                }
            );            

            jQuery(item).on('hide.daterangepicker', function() {
                jQuery('.date-overflow').removeClass('active');
            });

            jQuery(item).on('click', function() {
                jQuery('.date-overflow').addClass('active');
            });

             // Добавление кнопки с крестом

            jQuery('.daterangepicker').append('<button class="date-close" type="button"><img src="img/icon-close.svg" alt="close"></button>');
        })
        jQuery('.date-close').on('click' , function(){
            jQuery('.date-overflow').removeClass('active');
            jQuery('.js-date-form').each(function(index,item) {
                jQuery(item).data('daterangepicker').hide();
            });
        })

        // Установка цен
        
        var getCash2 = function(container) {
            jQuery(container).find('td:not(.off)').each(function(indexTd,itemTd){
                jQuery(itemTd).attr("data-cash",arrCash[indexTd]);
            })            
        }

        jQuery('.js-date-form').each(function(index,item) {
            jQuery(item).on('showCalendar.daterangepicker', function() {
                getCash2(jQuery(this).data('daterangepicker').container);
            });
        });

        let calendar = document.querySelectorAll('.daterangepicker');
        
        let observer = new MutationObserver(function(mutationRecords){
            getCash2(mutationRecords[0].target);    
        });

        calendar.forEach(function (elem) {
            observer.observe(elem, {
                childList: true, // наблюдать за непосредственными детьми
                subtree: true, // и более глубокими потомками
            });
        });

    }
});