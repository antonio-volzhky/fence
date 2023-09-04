ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [44.564262, 38.099312],
      controls: ["zoomControl"],
      zoom:15
    }),

    myPlacemark1 = new ymaps.Placemark([44.564262, 38.099312], {
      hintContent: 'Офис',
    },
     {
      iconLayout: 'default#image',
      iconImageHref: '../img/icon-map.svg',
      iconImageSize: [53, 72],
      iconImageOffset: [-20, -67],
      balloonMaxWidth: 300,
      balloonOffset: [120,100],
      hideIconOnBalloonOpen: false
    })

    myMap.geoObjects
    .add(myPlacemark1);

    myMap.behaviors.disable('scrollZoom');
  });
