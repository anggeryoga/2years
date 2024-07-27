// Mendapatkan tahun target
const targetYear = 2026;
// Mendapatkan tanggal 25 Juli 2026 jam 23:00 dalam milidetik, disesuaikan dengan timezone Jakarta (GMT+7)
const targetDate = new Date(targetYear, 6, 25, 23, 0, 0).getTime() - (7 * 60 * 60 * 1000);

// countdown
let timer = setInterval(function() {
  // Mendapatkan tanggal hari ini dalam milidetik
  const now = new Date();
  const today = now.getTime() - (now.getTimezoneOffset() * 60 * 1000) + (7 * 60 * 60 * 1000);

  // Menghitung selisih waktu antara hari ini dan tanggal target
  let diff = targetDate - today;

  // Jika countdown sudah selesai
  if (diff < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Event has started!";
    return;
  }

  // Menghitung jumlah hari, jam, menit, dan detik dari selisih waktu
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Menampilkan hasil countdown di elemen HTML dengan id "timer"
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
      <div class=\"numbers\">" + days + "</div>days</div> \
    <div class=\"hours\"> \
      <div class=\"numbers\">" + hours + "</div>hours</div> \
    <div class=\"minutes\"> \
      <div class=\"numbers\">" + minutes + "</div>minutes</div> \
    <div class=\"seconds\"> \
      <div class=\"numbers\">" + seconds + "</div>seconds</div> \
    </div>";
}, 1000);
