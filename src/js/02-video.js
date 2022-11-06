import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(onPlay, 10000));

function onPlay (evt) {
   localStorage.setItem("videoplayer-current-time", evt.seconds)
};

const getTime = localStorage.getItem("videoplayer-current-time")

player.setCurrentTime(getTime)