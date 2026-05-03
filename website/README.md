# My CV Website

This is a personal CV website built with Next.js and TypeScript, designed to be hosted on GitHub Pages.

## 🚀 How to Run Locally

To preview your changes locally before pushing them to the live site:

1.  **Navigate to the website directory:**
    ```bash
    cd website
    ```
2.  **Install dependencies (first time only):**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
4.  **Open your browser:** Go to [http://localhost:3000](http://localhost:3000)

## 📝 How to Update Content

Most of your website content is stored in a single file for easy editing.

- **File Path:** `website/src/data/cvData.ts`
- **What you can change:**
    - Personal info (Name, Email, Tagline)
    - Values and descriptions
    - Job roles, organizations, and dates
    - Keywords (these show up under the titles)
    - Detailed descriptions (shown when clicking "Learn more")

## 🌐 How to Deploy Updates

Since GitHub Actions is configured, updating your live website is as simple as pushing your changes to GitHub:

1.  **Save your changes.**
2.  **Commit and push:**
    ```bash
    git add .
    git commit -m "Description of your changes"
    git push origin main
    ```
3.  **Wait for the Action:** GitHub will automatically detect the push, build your site, and deploy it to GitHub Pages. You can monitor progress in the **Actions** tab of your GitHub repository.

## 🔒 Private Repository Note

- You **can** make this repository private.
- **Note for Free Accounts:** GitHub Pages is usually only available for public repositories on the Free plan. To host a private repository on GitHub Pages, you typically need a GitHub Pro or higher plan.

## 🛠 Project Structure

- `src/app/`: Contains the main layout and styling.
- `src/components/`: Reusable UI components like `CVEntry`.
- `src/data/`: Where all your CV text/data lives.
- `public/`: Place static assets like icons here.
- `pictures/`: Currently contains your project images.
