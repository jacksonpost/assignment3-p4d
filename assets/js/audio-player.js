// a simple audio controller - https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
// needs a mute option if using for background, or if multiple sound fx are to be used.  Mute is often a sticky/menu button

// an object used to control audio
const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector('audio');

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

// Select our play button
const playButton = document.querySelector('.button_play');

playButton.addEventListener('click', () => {
    // console.log(audioContext.state);

    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    // Play or pause track depending on state
    // also toggles controller images between play and pause using css backgrounds
    if (playButton.dataset.playing === 'false') {
        audioElement.play();
        playButton.dataset.playing = 'true';
        playButton.className = "button_pause";
    } else if (playButton.dataset.playing === 'true') {
        audioElement.pause();
        playButton.dataset.playing = 'false';
        playButton.className = "button_play";
    }
}, false);

audioElement.addEventListener('ended', () => {
    playButton.dataset.playing = 'false';
    playButton.className = "button_play";
}, false);

