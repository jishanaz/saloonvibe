# Glow Salon Website (with Music Player)

A free, static salon website with a built-in music player. No backend, no cost. Hosted on GitHub Pages.

## Folder structure

```
salon-website/
├── index.html      <- page content (name, services, prices, contact)
├── style.css       <- colours and layout
├── script.js       <- music player + playlist (edit songs here)
├── music/          <- put your .mp3 files here
└── images/         <- put your salon photos here
```

## 1. Customize

- **Salon name:** search for `Glow` in `index.html` and replace it.
- **Phone / address / timings:** edit the Contact section in `index.html`.
- **WhatsApp button:** in `index.html` replace `919876543210` with your number (country code 91 + number, no + or spaces).
- **Prices:** edit the table in the Price List section.
- **Photos:** copy images to `images/` and change the `src` of the gallery images, e.g. `src="images/work1.jpg"`.
- **Colour:** change `--primary` at the top of `style.css`.

## 2. Add Hindi songs

1. Copy your `.mp3` files into the `music/` folder (use simple names like `song1.mp3`, no spaces).
2. Open `script.js` and edit the list:

```js
const songs = [
  { title: "Song Name", artist: "Artist", src: "music/song1.mp3" },
  { title: "Another Song", artist: "Artist", src: "music/song2.mp3" }
];
```

Notes:
- Browsers block autoplay with sound, so a visitor must press the play button once. After that, songs play one after another.
- GitHub limits files to 100 MB each and recommends repos under 1 GB. Keep songs around 3-5 MB each.

### Copyright warning (important)
Popular Bollywood/Hindi songs are copyrighted. Uploading them to a public website without permission can lead to takedown notices or a ban of your GitHub repo, and playing them publicly may need a licence (e.g. IPRS/PPL in India for commercial premises). Safer options:
- Royalty-free / Creative Commons Hindi or Indian-style music (e.g. from the Free Music Archive, Pixabay Music, YouTube Audio Library).
- Music you or a friend created, or music you have written permission to use.

## 3. Test on your computer

Open the folder in VS Code and use the "Live Server" extension, or run in a terminal:

```
python -m http.server 8000
```

Then open http://localhost:8000

## 4. Publish for free on GitHub Pages

### A) Create the repository
1. Create a free account at https://github.com
2. Click **+** (top right) -> **New repository**
3. Name it e.g. `salon-website`, set it to **Public**, click **Create repository**

### B) Upload the files (easiest, no git needed)
1. In the new repo click **uploading an existing file**
2. Drag in `index.html`, `style.css`, `script.js` and the `music` and `images` folders
3. Click **Commit changes**

### C) Or use git from the terminal
```
cd salon-website
git init
git add .
git commit -m "Initial salon website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/salon-website.git
git push -u origin main
```

### D) Turn on GitHub Pages
1. In the repo go to **Settings -> Pages**
2. Under **Build and deployment**, Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**, click **Save**
4. Wait 1-2 minutes. Your site will be live at:

```
https://YOUR-USERNAME.github.io/salon-website/
```

To update the site later, just upload/commit changed files; it redeploys automatically.

## 5. Optional: custom domain
Buy a domain (e.g. glowsalon.in), then in **Settings -> Pages -> Custom domain** enter it and follow the DNS instructions GitHub shows.

## Troubleshooting
- **Music does not play:** check the file path and spelling in `script.js` (names are case-sensitive on GitHub), and press the play button once.
- **Changes not showing:** wait a minute and hard refresh (Ctrl+Shift+R).
- **404 error:** make sure the file is named exactly `index.html` and is in the repo root.
