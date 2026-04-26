# Trapti K Portfolio

A responsive React portfolio for Trapti K focused on digital marketing, community management, case studies, and client-brand highlights.

## Stack

- React 18
- Create React App
- CSS

## Project Structure

```text
src/
  components/
    CaseStudies.js
    Contact.js
    Experience.js
    Header.js
    Hero.js
    LogoShowcase.js
    Overview.js
    Skills.js
  resources/
    ADP.png
    Disney.webp
    Epam.png
    Meta.jpg
    pwc.jpg
    Snapchat.avif
    aditya.jpg
  App.js
  App.css
  data.js
  index.css
  index.js
```

## Local Development

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run

```bash
npm start
```

### Production Build

```bash
npm run build
```

The app builds into `build/`.

## Customization

Update content in `src/data.js`.

Main styling lives in:

- `src/index.css`
- `src/App.css`

## GitHub-Friendly Setup

This repo is prepared for GitHub in a few practical ways:

- `node_modules/`, `build/`, editor files, and env files are ignored
- `homepage` is set to `"."` so the production build works from subpaths and static hosting
- a GitHub Actions workflow is included for GitHub Pages deployment

## Deployment

### Option 1: GitHub Pages

1. Push this project to GitHub.
2. Make sure the default branch is `main`.
3. In GitHub:
   - open `Settings > Pages`
   - set `Source` to `GitHub Actions`
4. Save the Pages settings.
5. Push to `main` and the workflow will build and deploy automatically.

The workflow file is:

```text
.github/workflows/deploy.yml
```

### Option 2: Netlify or Vercel

Use these settings:

- Build command: `npm run build`
- Publish directory: `build`

## Notes

- If GitHub Pages deployment fails, verify `Settings > Pages > Source` is set to `GitHub Actions`.
- If a local production build fails with a Windows `EPERM` error on `build/asset-manifest.json`, close any process serving the old build and run `npm run build` again.
