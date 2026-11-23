# DROVEUMAD — droveumad.com

The studio site: a path-traced render of the DROVEUMAD studio with live light colour, hotspots on every project, an Index, case pages, About and Lab.

Static site, no build step. `index.html` + `app.js`; three.js and lenis load from jsDelivr.

- `room/` — the two render layers (tubes off / tube light) the page relights live
- `media/` — project images and videos
- `standee/` — High Key artwork for the SOCIAL screen
- `fonts/` — General Sans (variable)

Run locally: `python3 -m http.server` in this folder, open http://localhost:8000
Deploy: import this repo in Vercel (framework preset: Other, no build command, output directory `.`).
