# Your Personal Website

This is a minimalistic, stylish personal website built with pure HTML, CSS, and JavaScript. It features a clean design, cool fonts, and is ready for direct deployment to GitHub Pages.

## Pages Included

- **Home (`index.html`)**: Your main landing page.
- **Experience (`experience.html`)**: Showcase your professional experience and skills.
- **CV (`cv.html`)**: A detailed curriculum vitae.
- **Contact (`contact.html`)**: A page with contact information and a client-side contact form.

## How to Deploy to GitHub Pages

Follow these steps to get your website live on GitHub Pages:

1.  **Create a New GitHub Repository:**
    *   Go to [github.com/new](https://github.com/new).
    *   **Important:** For a personal website, the repository name **MUST BE** `your-github-username.github.io` (e.g., `nkippes.github.io`). This is crucial for GitHub Pages to automatically serve your site from the `main` branch.
    *   Ensure the repository is **Public**.

2.  **Upload the Website Files:**
    *   Download the provided `.zip` file containing all the website files.
    *   Extract the contents of the `.zip` file to a folder on your computer.
    *   **Upload all the extracted files and folders (e.g., `index.html`, `css/`, `js/`, `experience.html`, `cv.html`, `contact.html`, `README.md`) directly to the root of your newly created GitHub repository.**
        *   **Using GitHub Desktop:** Clone your empty `your-github-username.github.io` repository to your local machine. Copy all the extracted website files into this local folder. Then, commit and push these changes to GitHub.
        *   **Using the Git Command Line:**
            ```bash
            git clone https://github.com/your-github-username/your-github-username.github.io.git
            cd your-github-username.github.io
            # Copy all extracted files into this directory
            git add .
            git commit -m "Initial website deployment"
            git push origin main
            ```
        *   **Directly on GitHub (for smaller projects):** On your new empty repository page, click the "Add file" dropdown, then "Upload files...". Drag and drop all the extracted files and folders into the upload area.

3.  **Enable GitHub Pages:**
    *   Once the files are uploaded to your `main` branch, GitHub Pages should automatically detect them.
    *   Go to your repository on GitHub.
    *   Navigate to `Settings` -> `Pages`.
    *   Under "Build and deployment", ensure that "Source" is set to **`Deploy from a branch`** and the branch is set to **`main`** (or whatever branch you pushed your files to).
    *   Click "Save" if you made any changes.

4.  **Access Your Website:**
    *   After a few moments (it might take a minute or two for GitHub Pages to process), your website will be live and accessible at `https://your-github-username.github.io` (e.g., `https://nkippes.github.io`).

## Customization

-   **Content:** Edit the `.html` files directly to change the text content on each page.
-   **Styling:** Modify `css/style.css` to change colors, fonts, layout, and other visual aspects.
-   **Contact Form:** The contact form in `contact.html` uses [Formspree](https://formspree.io/) for submission. You will need to:
    1.  Go to [Formspree.io](https://formspree.io/) and sign up for a free account.
    2.  Create a new form and get your unique form endpoint ID.
    3.  Open `contact.html` and replace `https://formspree.io/f/your-form-id` with your actual Formspree endpoint URL.

## Local Development

To view and test your website locally before uploading:

1.  Simply open any of the `.html` files (e.g., `index.html`) in your web browser.
2.  For the contact form to work locally, you might need a local server. Python has a simple one: `python -m http.server` in the root directory of your website, then navigate to `http://localhost:8000`.

Enjoy your new website!

