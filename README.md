# Shyam Kumar Yadav — Portfolio

Production portfolio for a Full-Stack Software Engineer. Dark, restrained, and built as a single Next.js page with a server-side contact form.

## Stack

- Next.js 16 (App Router) and React 19
- TypeScript
- Tailwind CSS 4
- Form primitives in the shadcn/ui pattern (`class-variance-authority`, Radix Slot)
- Motion for metric counters and the AI pipeline pulse
- Lucide icons
- Brevo for contact email delivery

## Requirements

- Node.js 20.9 or newer (see `.nvmrc`)
- npm

If `node -v` is older than 20, switch before installing or running the app:

```bash
nvm use
```

## Setup

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, Open Graph, sitemap, and robots. Absolute, no trailing slash. |
| `BREVO_API_KEY` | Brevo API key. Server-only. |
| `BREVO_SENDER_EMAIL` | Verified Brevo sender address. |
| `BREVO_SENDER_NAME` | Name shown as the sender. |
| `BREVO_RECIPIENT_EMAIL` | Inbox that receives contact messages. |

The sender address must be verified in Brevo before messages will deliver. Keys are read only in server modules and are never sent to the browser.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Editing content

- Identity, email, phone, and social URLs: `data/site.ts`
- Metrics, experience, projects, skills, and copy: `data/portfolio.ts`

Confirm the GitHub URL in `data/site.ts` before launch. The LinkedIn URL matches the public Luminoguru profile.

Do not add companies, metrics, titles, or technologies that are not part of the provided history. The official title used on the site is **Software Engineer**.

## Contact form

```
Contact form
  → POST /api/contact
  → validation, honeypot, rate limit
  → Brevo API
  → email to Shyam
```

The form includes:

- client and server validation
- loading, success, and error states without a page reload
- a honeypot field and a minimum submit time
- in-memory rate limiting (5 requests / 15 minutes per IP, 3 / hour per email)

Rate limiting is per server instance. It is appropriate for a portfolio. Use a shared store if you run many instances and need a hard global limit.

A successful submission shows: **Message sent successfully. Thanks for reaching out!**

## SEO

- Title, description, Open Graph, Twitter, and robots metadata in `app/layout.tsx`
- Canonical URL from `NEXT_PUBLIC_SITE_URL` (placeholder: `http://localhost:3000`)
- `app/sitemap.ts` and `app/robots.ts`
- Generated Open Graph image
- JSON-LD `Person` markup

Set `NEXT_PUBLIC_SITE_URL` to the production domain before deploy so canonical, sitemap, and social previews resolve correctly.

## Deploy on Vercel

The app is a standard Next.js build. Do not commit `.env.local`.

### 1. Push the project

Create a Git repository and push it to GitHub, GitLab, or Bitbucket if it is not already there.

```bash
git add .
git commit -m "Add portfolio site"
git push -u origin main
```

### 2. Import the project

1. Sign in at [vercel.com](https://vercel.com) and choose **Add New… → Project**.
2. Import the repository.
3. Leave the framework preset as **Next.js**. Build settings can stay on the defaults:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output: Next.js default (do not set a custom output directory)
4. Set the Node.js version to **22.x** in **Settings → General → Node.js Version** if Vercel does not pick it up from `.nvmrc`. The app requires Node 20.9 or newer.

### 3. Add environment variables

In the import screen, or later under **Settings → Environment Variables**, add every variable from `.env.example` for **Production** (and Preview, if you want the form to work on preview deployments):

| Variable | Production value |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The live site URL, for example `https://shyam.example.com`. Absolute, no trailing slash. |
| `BREVO_API_KEY` | Brevo API key |
| `BREVO_SENDER_EMAIL` | A sender address verified in Brevo |
| `BREVO_SENDER_NAME` | `Shyam Kumar Yadav` |
| `BREVO_RECIPIENT_EMAIL` | `shyamsky1914@gmail.com` |

`NEXT_PUBLIC_SITE_URL` is read at build time for the canonical URL, sitemap, robots, and social previews. If you change it, redeploy so the new value is baked in.

`BREVO_API_KEY` and the other Brevo variables are server-only. Vercel does not expose them to the browser unless the name starts with `NEXT_PUBLIC_`. Do not rename the API key with that prefix.

The Brevo sender address must be verified before the contact form can deliver mail.

### 4. Deploy

Click **Deploy**. Vercel builds the app and gives you a `*.vercel.app` URL.

### 5. Attach a custom domain

1. Open **Settings → Domains**.
2. Add the domain and follow the DNS instructions.
3. Set `NEXT_PUBLIC_SITE_URL` to that exact `https` URL, with no trailing slash.
4. Redeploy so canonical, Open Graph, sitemap, and robots use the custom domain.

### Deploy from the CLI

```bash
npm install -g vercel
vercel login
vercel
```

The first `vercel` command creates a preview deployment. For production:

```bash
vercel --prod
```

Add the same environment variables with `vercel env add`, or in the project dashboard, before the production deploy.

### After it is live

- Open `/` and confirm the page, navigation, and metadata title.
- Open `/sitemap.xml` and `/robots.txt` and confirm they use the production domain.
- Submit the contact form and confirm the email arrives in the recipient inbox.
- If the form returns “not configured,” a Brevo variable is missing. Add it and redeploy.

On Vercel, each function instance has its own memory, so contact-form rate limiting is per instance rather than global. That is enough for a portfolio. It is not a hard limit across all regions.
