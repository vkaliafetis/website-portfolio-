# Vangelis (Van) Kaliafetis – Personal Portfolio

This is the source for **Van's** minimalist yet cinematic single‑page portfolio built with **Next.js (App Router)** and **TypeScript**. It showcases a handful of sections (Hero, About, Experience, Interests, Contact) with a parallax hero, motion, and an optional **Code‑Reveal Mode** that exposes component snippets when hovering the UI.

## ✨ Features

* **Ultra‑minimal aesthetic** with glassy cards, airy spacing and subtle motion powered by Framer Motion.
* **Dual themes** – light and dark – toggleable via the control in the footer.
* **Industrial blueprint mode (Code‑Reveal)** toggled via the `</>` button in the header or the `Ctrl/Cmd + \` keyboard shortcut. When enabled the site switches to a monospace grid style and hovering elements reveals how they were built.
* **Server actions & Resend integration**: the contact form uses a server action. If `RESEND_API_KEY` and `CONTACT_EMAIL` are provided the message is delivered via Resend. Otherwise a `mailto:` fallback is used.
* **Accessible** and keyboard navigable with semantic landmarks and prefers‑reduced‑motion respected.
* **SEO‑ready** with metadata, Open Graph tags, Twitter cards, sitemap and robots (generated automatically by Next.js).

## 🧑‍💻 Local development

1. Ensure you have **Node.js ≥ 18** installed. Yarn or pnpm is recommended; the project was bootstrapped with pnpm but works with npm too.
2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Copy `.env.example` to `.env.local` and fill in your [Resend](https://resend.com) API key and a destination email address if you want the contact form to send emails via Resend. Otherwise leave the file as‑is and the form will fall back to opening your mail client.

4. Start the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Visit [http://localhost:3000](http://localhost:3000) in your browser to preview the site. Make changes in the `app/` or `components/` directories and the page will automatically reload.

## 🚀 Deploying to Vercel

Deploying this portfolio is straightforward thanks to Vercel’s drag‑and‑drop flow. Follow these steps after obtaining the zipped project:

1. Create a free account on [Vercel](https://vercel.com) if you don’t already have one.
2. Log in, click **“Add New Project”** and then **“Import Project”**.
3. Drag‑and‑drop the `van‑portfolio.zip` archive into the upload area. Vercel will unpack it and detect the Next.js project.
4. Leave build settings at their defaults (framework: **Next.js**). If you require the contact form to send email, add `RESEND_API_KEY` and `CONTACT_EMAIL` environment variables under the **Environment Variables** section.
5. Click **“Deploy”**. The build should complete in about a minute. Once finished you’ll be given a live URL like `https://van-portfolio.vercel.app` which you can share immediately.
6. Optionally, connect your own domain (e.g. `vankaliafetis.com`) from Vercel’s dashboard.

## 🛠️ Code‑Reveal Mode

The signature feature of this portfolio is the **Code‑Reveal Mode**. When enabled via the `</>` button or the `Ctrl/Cmd + \` shortcut, the entire site adopts an industrial, blueprint‑style theme. A faint grid appears, typography switches to monospace and elements gain subtle outlines. Hovering any component with a `data‑code‑id` attribute triggers a floating tooltip showing:

* The file where the component lives (e.g. `Hero.tsx`).
* A syntax‑highlighted snippet (~10–12 lines) illustrating how the component was implemented. The snippet comes from `lib/codeMap.ts` which maps IDs to code samples.
* A **Copy** button that copies the entire snippet to your clipboard.

When Code‑Reveal is off, there is zero impact on layout or performance – the inspector simply detaches its listeners.

## 🧪 Tests

Basic unit tests for the theme and code mode toggles are provided using Jest and React Testing Library. Run them with:

```bash
npm test
```

## 📁 Project structure

```
van-portfolio/
├── app/               # App Router pages
│   ├── layout.tsx     # Root layout with global providers and metadata
│   └── page.tsx       # Single page that composes the portfolio sections
├── components/        # Reusable UI components
├── lib/               # Context and helper files
├── styles/            # Design tokens
├── public/            # Static assets (social preview image)
├── .env.example       # Example environment variables
├── globals.css        # Global resets and inspector styling
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

Feel free to explore and adapt the code. The comments inline explain how each part works. If you build upon this, please attribute the original author.

---

Created by **Vangelis (Van) Kaliafetis** with the assistance of ChatGPT.