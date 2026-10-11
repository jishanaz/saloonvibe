// ====== EDIT YOUR PLAYLIST HERE ======
// Put mp3 files inside the "music" folder and list them below.
// Only use songs you own or have a licence for (see README).
const songs = [
  { title: "Song 1", artist: "Artist Name", src: "music/song1.mp3" },
  { title: "Song 2", artist: "Artist Name", src: "music/song2.mp3" },
  { title: "Song 3", artist: "Artist Name", src: "music/song3.mp3" }
];
// =====================================

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const seek = document.getElementById("seek");
const volume = document.getElementById("volume");
const titleEl = document.getElementById("songTitle");
const artistEl = document.getElementById("songArtist");
const listBtn = document.getElementById("listBtn");
const listEl = document.getElementById("playlist");

let index = 0;

document.getElementById("year").textContent = new Date().getFullYear();

function renderList() {
  listEl.innerHTML = "";
  songs.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${s.title} - ${s.artist}`;
    li.className = i === index ? "active" : "";
    li.onclick = () => { loadSong(i); play(); };
    listEl.appendChild(li);
  });
}

function loadSong(i) {
  index = (i + songs.length) % songs.length;
  const s = songs[index];
  audio.src = s.src;
  titleEl.textContent = "🎵 " + s.title;
  artistEl.textContent = s.artist;
  renderList();
}

function play() {
  audio.play().then(() => { playBtn.textContent = "⏸"; })
    .catch(() => { artistEl.textContent = "Tap play to start (or check music file path)"; });
}
function pause() { audio.pause(); playBtn.textContent = "▶"; }

playBtn.onclick = () => (audio.paused ? play() : pause());
nextBtn.onclick = () => { loadSong(index + 1); play(); };
prevBtn.onclick = () => { loadSong(index - 1); play(); };
audio.addEventListener("ended", () => { loadSong(index + 1); play(); });

audio.addEventListener("timeupdate", () => {
  if (audio.duration) seek.value = (audio.currentTime / audio.duration) * 100;
});
seek.oninput = () => {
  if (audio.duration) audio.currentTime = (seek.value / 100) * audio.duration;
};
volume.oninput = () => { audio.volume = volume.value / 100; };
listBtn.onclick = () => listEl.classList.toggle("open");

audio.volume = 0.7;
loadSong(0);
// NOTE: browsers block auto-play with sound, so the visitor must press ▶ once.
