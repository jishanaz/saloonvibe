// ====== PASTE YOUR SPOTIFY LINK HERE ======
// Spotify -> playlist -> ⋯ -> Share -> Copy link to playlist
// Example: "https://open.spotify.com/playlist/37i9dQZF1DXXXXXXXXXXXX?si=abc"
// Albums, tracks and artists also work.
const SPOTIFY_LINK = "https://open.spotify.com/playlist/6R1vsvgGKke5UYpiTTBxnh?si=3PP6g5RXR96EbNvvuDEMsw";
// ==========================================

document.getElementById("year").textContent = new Date().getFullYear();

(function renderSpotify() {
  const box = document.getElementById("spotifyBox");
  const match = SPOTIFY_LINK.match(/open\.spotify\.com\/(?:embed\/)?(?:intl-[a-z]+\/)?(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]+)/);

  if (!match) {
    box.innerHTML = '<p class="note">Spotify playlist not set yet. Paste your link in <code>SPOTIFY_LINK</code> inside script.js.</p>';
    return;
  }

  const [, type, id] = match;
  const height = type === "track" || type === "episode" ? 152 : 352;

  const iframe = document.createElement("iframe");
  iframe.src = `https://open.spotify.com/embed/${type}/${id}`;
  iframe.width = "100%";
  iframe.height = height;
  iframe.loading = "lazy";
  iframe.title = "Salon music on Spotify";
  iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
  iframe.style.border = "0";
  iframe.style.borderRadius = "12px";
  box.appendChild(iframe);
})();
