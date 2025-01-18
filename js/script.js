const fullscreenButton = document.getElementById("fullscreenButton");

fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
      fullscreenButton.style.visibility = "hidden";
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
      fullscreenButton.style.visibility = "hidden";
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
      fullscreenButton.style.visibility = "hidden";
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
      fullscreenButton.style.visibility = "hidden";
    }
    // Change button text to 'Exit Fullscreen'
    fullscreenButton.textContent = "Exit Fullscreen";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      fullscreenButton.style.visibility = "visible";
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        fullscreenButton.style.visibility = "visible";
    } else if (document.webkitExitFullscreen) {
        fullscreenButton.style.visibility = "visible";
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        fullscreenButton.style.visibility = "visible";
    }
    // Change button text to 'Enter Fullscreen'
    fullscreenButton.textContent = "Enter Fullscreen";
  }
}
