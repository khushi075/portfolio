# Learning portfolio – Khushi Patel

Professional learning portfolio (August–November 2026): skills audit, four goals with evidence, projects, reflections and 2027 goals. Plain HTML, CSS and JavaScript, so there is no build step.

## Deploy on GitHub Pages

1. Create a new public repository on GitHub called `portfolio`.
2. Upload everything in this folder to the root of the repository, including `.nojekyll`.
   - Command line: `git init && git add . && git commit -m "Add portfolio" && git branch -M main && git remote add origin https://github.com/khushi075/portfolio.git && git push -u origin main`
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then branch `main` and folder `/ (root)`. Save.
4. After a minute or two the site is live at **https://khushi075.github.io/portfolio/**.

## Structure

- `index.html` – the page
- `style.css`, `main.js` – styles, SFIA meters and hours bars
- `assets/` – charts and screenshots used as evidence
- `evidence/` – the DesignR proposal and both notebooks, downloadable from the page
- `fonts/` – Archivo (SIL Open Font License, see `fonts/OFL.txt`)
