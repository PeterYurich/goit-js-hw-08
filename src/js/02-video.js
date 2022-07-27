import Player from '@vimeo/player'

import _ from 'lodash';

const iframe  = document.querySelector("#vimeo-player");
const player = new Player(iframe);

const savedTime = localStorage.getItem("videoplayer-current-time")

if (savedTime)  {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
} 

const onPlay = function(data) {
    const time = data.seconds;
    localStorage.setItem("videoplayer-current-time", time);
};

player.on('timeupdate', _.throttle(onPlay, 1000));

