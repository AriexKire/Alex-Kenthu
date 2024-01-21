document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.querySelector('.video-container');
    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = false;

    const source = document.createElement('source');
    source.src = 'Jhon.mp4';
    source.type = 'video/mp4';

    video.appendChild(source);
    videoContainer.appendChild(video);
});
