
import Player from '@vimeo/player';
import { duration } from 'moment';
// var _ = require('lodash');
var throttle = require('lodash.throttle')

const iframe = document.querySelector('iframe');
// const document = document.querySelector('document')
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
    // console.log(localStorage.getItem("videoplayer-current-time"))
});
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
 
            break;

        default:

            break;
    }
});
player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
player.on('timeupdate' , throttle(() => {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", Math.round(seconds));
        console.log(localStorage.getItem("videoplayer-current-time"))
    }).catch(function(error) {});
  }, 1000));
// "videoplayer-current-time"
