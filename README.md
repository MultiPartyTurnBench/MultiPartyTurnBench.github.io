# MultiPartyTurnBench — Project Website

A complete static website for **MultiPartyTurnBench: Benchmarking Floor Control in Multi-Party Spoken Dialogue**, by Puneet Mathur and Dinesh Manocha (University of Maryland, College Park).

**Intended project URL:** https://multiparty-turnbench.github.io/

## Publish on GitHub Pages

1. Create a GitHub repository named `multiparty-turnbench.github.io` under the `multiparty-turnbench` GitHub organization or account (or use any repository name if you plan to deploy as a project site).
2. Upload **the contents of this folder** to the repository root. `index.html` must be at the root, not inside an extra subfolder.
3. In **Settings → Pages**, choose **Deploy from a branch** and select `main` / `(root)`.
4. Wait for GitHub Pages to finish publishing, then open your Pages URL.

This is a static vanilla HTML / CSS / JavaScript site. No build step or npm dependencies are necessary.

## Files

- `index.html` — complete single-page website, copy, figure captions, resources, and citation.
- `style.css` — responsive styling inspired by Frames2LoRA's restrained academic project-page design.
- `script.js` — agent-results chart and BibTeX copy interaction.
- `assets/*.png` — high-resolution raster previews of the uploaded figures for reliable browser display.
- `assets/*.pdf` — original vector figure files, plus a local copy of the manuscript.
- `assets/favicon.svg` — project icon.
- `.nojekyll` — avoids Jekyll processing when hosted on GitHub Pages.

## Linked resources

- Paper: https://arxiv.org/abs/2610.20172
- Dataset: https://huggingface.co/datasets/puneetUMD/MultiPartyTurnBench

## Notes

- No code repository was supplied, so no Code button/link was invented. Add one to the `resource-links` section in `index.html` when it is available.
- The name and affiliation come from the supplied paper. The author links are public discovery / profile destinations and can be replaced with preferred personal webpages.
- The key result values and model names come from Tables 3 and 4 of the supplied manuscript.
- The website follows the reference page's overall visual language and information architecture; it does not copy its code or unique assets.
- Google Fonts are optional; the CSS provides system fallback fonts if they are blocked.
- Open `index.html` in a browser for a quick local preview; alternatively run `python -m http.server 8000` inside the folder.
