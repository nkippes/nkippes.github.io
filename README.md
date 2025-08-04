# Personal Website

A minimalistic personal website built with Hugo and the PaperMod theme.

## Features

- **Home**: Welcome page with profile information
- **Experience**: Professional experience and skills
- **CV**: Complete curriculum vitae
- **Contact**: Contact form and social media links

## Setup Instructions

1. **Create a new repository on GitHub:**
   - Repository name **MUST BE**: `nkippes.github.io` (for personal GitHub Pages)
   - Make sure the repository is public

2. **Upload these files:**
   - Upload all the files from this directory to your GitHub repository
   - You can use GitHub Desktop, git command line, or the GitHub web interface

3. **Configure GitHub Pages:**
   - Go to your repository settings
   - Navigate to `Settings` → `Actions` → `General` → `Workflow permissions`
   - Select `Read and write permissions` for GitHub Actions
   - Go to `Settings` → `Pages` → `Build and deployment`
   - Set `Source` to `Deploy from a branch`
   - Set the branch to `gh-pages` (this will be created automatically after the first deployment)

4. **Customize your content:**
   - Edit `config.yml` to update your personal information
   - Update the content files in the `content/` directory:
     - `_index.md` (Home page)
     - `experience.md` (Experience page)
     - `cv.md` (CV page)
     - `contact.md` (Contact page)

5. **Set up the contact form (optional):**
   - The contact form uses Formspree (free service)
   - Sign up at https://formspree.io/
   - Replace `your-form-id` in `contact.md` with your actual Formspree form ID

## Local Development

To run the site locally:

1. Install Hugo: https://gohugo.io/getting-started/installing/
2. Clone your repository
3. Run `hugo server` in the project directory
4. Open http://localhost:1313 in your browser

## Deployment

The site will automatically deploy to GitHub Pages when you push changes to the `main` branch. The GitHub Action will:

1. Build the Hugo site
2. Deploy it to the `gh-pages` branch
3. GitHub Pages will serve the site from the `gh-pages` branch

Your website will be available at: https://nkippes.github.io

## Customization

- **Theme**: This site uses the PaperMod theme. You can customize it by editing the `config.yml` file
- **Colors**: The theme supports light/dark mode toggle
- **Content**: All content is in Markdown format in the `content/` directory
- **Styling**: Additional CSS can be added to customize the appearance

## Support

If you encounter any issues:

1. Check the GitHub Actions tab for build errors
2. Ensure GitHub Pages is configured correctly
3. Verify that the repository name is exactly `nkippes.github.io`
4. Make sure the repository is public

## License

This project is open source and available under the MIT License.

