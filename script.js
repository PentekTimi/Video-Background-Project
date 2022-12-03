const btns = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function() {
  preloader.classList.add("preloader-hide");
})

btns.addEventListener("click", function(){
	if (!btns.classList.contains("slide")) {
      btns.classList.add("slide")
      video.pause();
	}
	else {
		btns.classList.remove("slide")
		video.play();
	}
});