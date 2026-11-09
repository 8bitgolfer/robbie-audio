# Robbie Audio — GitHub Pages website prototype

A responsive, static, multi-page plugin storefront inspired by the *structure* of commercial audio plugin websites, with original styling and copy.

## What works

- Responsive navigation and linked homepage/product/catalog/support pages
- Plugin search and category filtering on `plugins.html`
- FAQ accordions
- Source-download buttons for EQ v1.3 and DISTORT v1.0 (the ZIP files are bundled in `downloads/`)
- Pure HTML, CSS and JavaScript: no Node, database, hosting account, API keys or build step needed

## Upload to GitHub Pages

1. Create a public GitHub repository, such as `robbie-audio`.
2. Upload the **contents** of this folder to the repo root, not an extra wrapper directory.
3. Go to repository **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Choose `main` and `/ (root)`, then save.
5. Site URL will be `https://YOUR-USERNAME.github.io/robbie-audio/` (unless your repository is a user site or you configure a custom domain).

The links are relative and work from a project subpath or custom domain.

## Important: downloads are SOURCE projects, not ready-to-install plugins

The supplied ZIPs contain JUCE/C++ code and Windows build scripts. They do **not** contain compiled Windows VST3s. The website clearly labels these downloads as source, including the build requirements. **Do not represent them as ready-to-install VST3s.**

After you build and test release binaries, add their ZIPs to `downloads/` (or host them using GitHub Releases) and update the `href` paths, button labels, and release notes in `index.html`, `plugins.html`, `eq.html`, `distort.html`, and `support.html`.

## Assets

`assets/eq-actual.png` is the real EQ plugin screenshot supplied by the project owner. The DISTORT product image is abstract CSS/canvas art, **not a screenshot of DISTORT**.

## Prior to public distribution

Security-test the actual compiled binaries, validate compatibility and presets, and review the JUCE license and third-party asset rights. The included source files have not been independently audited or tested in this website project.
