var video = $(".video")[0];

function toggleVideo() {
  video[video.paused ? "play" : "pause"]();
  $("#play-pause")
    .removeClass(video.paused ? "play" : "pause")
    .addClass(!video.paused ? "play" : "pause");
}

video.addEventListener("timeupdate", function() {
  var fillPos = video.currentTime / video.duration;
  $(".fill")[0].style.width = fillPos * 100 + "%";
  if (video.ended) {
    btn.className = "play";
  }
});

$(".playbar").click(function(event) {
  const timeChange =
    (event.offsetX / $(".playbar")[0].offsetWidth) * video.duration;
  video.currentTime = timeChange;
});

$(".sound").click(function(event) {
  const volumePercent = event.offsetX / $(".sound")[0].offsetWidth;
  video.volume = volumePercent;
  $(".volume")[0].style.width = volumePercent * 100 + "%";
});

$(".video").click(toggleVideo);
$("#play-pause").click(toggleVideo);
