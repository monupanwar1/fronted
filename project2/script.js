
    var progress = document.querySelector("#progress");
    var song = document.querySelector("#song");

    var controlicon = document.querySelector("#controlicon");
    controlicon.textContent="play";

    controlicon.addEventListener("click", ()=> {
        if (song.paused) {
            song.play();
            controlicon.textContent="pause";
            controlicon.classList.remove("fa-circle-play");
            controlicon.classList.add("fa-pause");
        } else {
            song.pause();
            controlicon.textContent="play";
            controlicon.classList.remove("fa-pause");
            controlicon.classList.add("fa-circle-play");
        }
    });

    song.addEventListener("timeupdate", ()=> {
        var currentTime = song.currentTime;
        var duration = song.duration;
        var progressWidth = (currentTime / duration) * 100;
        progress.style.width = progressWidth + "%";
    });
