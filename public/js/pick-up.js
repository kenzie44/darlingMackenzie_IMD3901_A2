'use strict';

AFRAME.registerComponent('pick-up', {
    schema: {  
        isPickedUp: {type: 'boolean', default: false},  
    },
    multiple: false,
    init: function() {
        const AF_COIN = this;
        AF_COIN.coin = document.querySelector('.coin');
        AF_COIN.text = document.querySelector('#UIText')
        AF_COIN.isPickedUp = false;

        AF_COIN.el.addEventListener('click', function() {
            if (AF_COIN.isPickedUp === false) {
                console.log('picked up coin')
                AF_COIN.text.setAttribute('visible', "true");
                AF_COIN.isPickedUp = true;
                AF_COIN.coin.setAttribute('visible', "false");
            }
        });
    },
});