import Player from '@vimeo/player'

const iframe  = document.querySelector("#vimeo-player");
const player = new Player(iframe);

console.log(player)