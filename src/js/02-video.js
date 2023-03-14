import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTimeKay = 'videoplayer-current-time';
player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  localStorage.setItem(currentTimeKay, e.seconds);

};

const getCurrentTime = localStorage.getItem(currentTimeKay);
if (getCurrentTime !== null) {
player.setCurrentTime(parseFloat(getCurrentTime))
}

console.log(getCurrentTime);