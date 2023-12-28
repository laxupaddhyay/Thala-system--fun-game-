var defaultVideoSource = 'thala.mp4';

function checkString() {
    var inputString = document.getElementById('inputString').value;

    if (inputString.length % 7 === 0) {
        document.getElementById('result').innerText = 'Thala for a reason';
        playThalaVideo();
    } else {
        document.getElementById('result').innerText = 'Illa';
        playRandomVideo();
    }
}

function playThalaVideo() {
    document.getElementById('video-container').style.display = 'block';
    document.getElementById('thalaVideo').src = defaultVideoSource;
    document.getElementById('thalaVideo').play();
}

function playRandomVideo() {
    // You can add more video filenames to the array as needed
    var videos = ['video1.mp4', 'video2.mp4'];
    var randomIndex = Math.floor(Math.random() * videos.length);
    var randomVideo = videos[randomIndex];

    document.getElementById('video-container').style.display = 'block';
    document.getElementById('thalaVideo').src = randomVideo;
    document.getElementById('thalaVideo').play();
}
