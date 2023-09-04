'use strict';

// (function() {
//     const jsSelectBlock = document.querySelectorAll('.js-select-block');

//     jsSelectBlock.forEach((select) => {
//         let jsSelectBtn = select.querySelector('.js-select-btn');
//         let jsSelectList = select.querySelector('.js-select-list');
//         let jsSelectItem = select.querySelectorAll('.js-select-item');
//         let jsSelect = select.querySelector('.js-select');
//         let jsIcon = select.querySelector('.js-select-btn i');
//         let jsImg = select.querySelector('.js-select-btn img');

//         jsSelectBtn.addEventListener('click' , () => {
//             jsSelectBtn.classList.toggle('js-select-btn-active');
//             jsSelectList.classList.toggle('hidden');
//         })

//         jsSelectItem.forEach((item) => {
//             item.addEventListener('click' , () => {
//                 jsSelect.classList.add('js-check');
//                 jsSelectItem.forEach((item2) => {
//                     item2.classList.remove('js-select-item-active');
//                 })
//                 item.classList.add('js-select-item-active');
//                 jsSelect.textContent = item.textContent;
//                 if (item.querySelector('i')) {
//                     jsIcon.className = item.querySelector('i').className;
//                 }
//                 if (item.querySelector('img')) {
//                     jsImg.src = item.querySelector('img').src;
//                 }
//                 jsSelectBtn.classList.remove('js-select-btn-active');
//                 jsSelectList.classList.add('hidden');
//             })
//         });
//     })


// }());


$(document).ready(function() {
    $('.js-example-basic-single').select2(
        {
            minimumResultsForSearch: Infinity,
            allowClear: true,
            width: 'resolve',
        }
    );
});
