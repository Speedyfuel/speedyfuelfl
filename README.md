# Speedy Fuel Supplies website

Static website for `speedyfuelfl.com`, intended for GitHub-connected Cloudflare deployment.

## Edit content

Open `content.js` in GitHub and click the pencil icon. Change the quoted values and commit to `main`.

- Company, email, phone, and general text are at the top.
- `services` contains the four service cards.
- `benefits` contains the safety/reliability cards.
- About and leadership sections are near the bottom.
- For photos, upload image files to the `assets/` folder and set the corresponding image value in `content.js`, for example `heroImage: 'assets/truck.jpg'`.
- Keep quotation marks, commas, and brackets intact.

## Deployment

Upload all files to the **root** of the GitHub repository, not inside an extra `speedyfuelfl-site` folder. If Cloudflare is connected to the `main` branch, each commit should trigger a new deployment. Cloudflare Workers static asset projects may require a configured asset directory of `./` and appropriate Git deployment settings.

## Inquiry form

The quote form uses `mailto:` and does **not** send information through a backend. It opens the visitor's email program, which may not work for visitors without one configured. For reliable website submissions, add a Cloudflare Worker endpoint and anti-spam protection later.

## Important

The copy is draft placeholder marketing language. Verify services, regulatory credentials, claims, and contact details before publication. Images are placeholders until you supply licensed/owned photos. The design follows a similar section structure to the supplied reference but does not reproduce its copyrighted photos or text.
