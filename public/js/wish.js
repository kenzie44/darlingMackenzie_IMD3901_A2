'use strict';

AFRAME.registerComponent('wish', {
    schema: {    },
    multiple: false,
    init: function() {
        const AF_WISH = this;
        AF_WISH.well = document.querySelector('#well');
        AF_WISH.music = document.querySelector('#music');
        AF_WISH.coin = document.querySelector('.coin');
        AF_WISH.text = document.querySelector('#UIText');
        console.log(AF_WISH.coin.getAttribute('visible'));

        AF_WISH.el.addEventListener('click', function() {
            if (AF_WISH.coin.getAttribute('visible') === false) {
                console.log('wish!')
                AF_WISH.text.setAttribute('text', {value: "Your wish is granted!"});
                AF_WISH.music.components.sound.playSound();
            }
        });
    },
});