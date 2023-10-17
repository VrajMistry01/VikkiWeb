var targetDateTime = new Date(2023, 9, 17, 19, 0, 0); // October 17, 2023 19:00:00
var modalShown = false;

function updateVisibility() {
  var currentDate = new Date();
  var videoPlayer = document.getElementById("videoPlayer");
  console.log(videoPlayer);

  if (currentDate >= targetDateTime && !modalShown) {
    document.getElementById("content").style.display = "block";
    document.getElementById("countdown").innerHTML = "";
    openModal();
    modalShown = true;
  } else if (currentDate < targetDateTime) {
    var timeDiff = targetDateTime.getTime() - currentDate.getTime();
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      "Time remaining: " +
      days +
      "d " +
      hours +
      "h " +
      minutes +
      "m " +
      seconds +
      "s ";
  }
}

function openModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

updateVisibility();
