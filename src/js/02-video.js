
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const seconds = localStorage.getItem('videoplayer-current-time');
if (seconds !== null) {
player.setCurrentTime(seconds).catch(function(error) {
  console.error(error.name);
});
}







