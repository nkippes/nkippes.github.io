# al-folio GitHub Pages Deployment Instructions

This document outlines the steps to deploy your al-folio Jekyll theme to GitHub Pages.

## Recommended Approach

1.  **Create a new repository from the al-folio template:**
    *   Go to the [al-folio GitHub repository](https://github.com/alshedivat/al-folio).
    *   Click on the "Use this template" button and then "Create a new repository."
    *   **Important:** If you are creating a personal GitHub Page, the repository name **MUST BE** `<your-github-username>.github.io`. For an organization page, it should be `<your-github-orgname>.github.io`.

2.  **Configure GitHub Actions Workflow Permissions:**
    *   In your newly created repository, navigate to `Settings` -> `Actions` -> `General` -> `Workflow permissions`.
    *   Select `Read and write permissions` for GitHub Actions.

3.  **Edit `_config.yml`:**
    *   Open the `_config.yml` file in your repository.
    *   Set the `url` parameter to your GitHub Pages URL (e.g., `https://<your-github-username>.github.io`).
    *   Leave the `baseurl` parameter **empty** (i.e., `baseurl:`).
    *   For project pages, set `url` to `https://<your-github-username>.github.io` and `baseurl` to `/<your-repository-name>/`.

4.  **Wait for GitHub Action to Deploy:**
    *   After committing the changes to `_config.yml`, a GitHub Action with the subtitle `Deploy site` will automatically start.
    *   Monitor its progress in your repository's `Actions` tab. This typically takes around 4 minutes.
    *   Upon successful completion, a new `gh-pages` branch will be created in your repository. **Do NOT modify this branch manually.**

5.  **Configure GitHub Pages Source:**
    *   Go to your repository's `Settings` -> `Pages` -> `Build and deployment`.
    *   Ensure that `Source` is set to `Deploy from a branch`.
    *   Set the branch to `gh-pages` (NOT `main`).

6.  **Access Your Website:**
    *   Another GitHub Action, `pages-build-deployment`, will run, taking about 45 seconds.
    *   Once completed, your website will be live at `https://<your-github-username>.github.io` (or `https://<your-github-username>.github.io/<your-repository-name>/` for project pages).

## Local Setup (Optional)

If you wish to run al-folio locally for development and testing, the recommended method is using Docker:

1.  **Install Docker and Docker Compose:**
    *   Follow the official instructions to install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) on your system.

2.  **Run al-folio with Docker:**
    *   Navigate to the root directory of your cloned al-folio repository.
    *   Run the following commands:
        ```bash
        docker compose pull
        docker compose up
        ```

3.  **View Locally:**
    *   Open your web browser and go to `http://localhost:8080` to see your al-folio website running locally.

## Customization

After your site is successfully deployed, you can download the repository to your local machine and start customizing the content. Your changes will be automatically re-deployed each time you push to your `main` branch.

