'use strict';

(function () {
    const tabSection = document.querySelectorAll(".js-tab-block-section");

    const getTabBlock = function (section) {
        if (section) {
            let tab = section.querySelectorAll(".js-tab");
            let tabBlock = section.querySelectorAll(".js-tab-block");

            tab.forEach(function (btnItem) {
                btnItem.addEventListener('click' , function() {
                    var t = this;
                    tab.forEach(function (item) {
                        if (!(item === t)) {
                            item.classList.remove('active');
                        }
                    });
                    btnItem.classList.add('active');
                    tabBlock.forEach(function (blockItem) {
                        if (blockItem.dataset.tab === btnItem.dataset.tab) {
                            blockItem.classList.add('active');
                            console.log(blockItem.dataset.tab);
                        } else {
                            blockItem.classList.remove('active');
                        }
                    });
                });
            });
        }
    };

    tabSection.forEach((item)=>{
        getTabBlock(item);
    })

})();
