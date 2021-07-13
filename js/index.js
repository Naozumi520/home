document.addEventListener('click', musicPlay);
function musicPlay() {
    var audio = document.getElementById('audioID');
    audio.play();
    audio.volume = 0.5;
    document.removeEventListener('click', musicPlay);
}