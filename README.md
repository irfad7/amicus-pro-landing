# Amicus Pro Marketing Site

Amicus Pro is a marketing experience built with React, TypeScript, and Vite for personal injury law firms. The project powers the Amicus Pro funnel, capturing qualified leads, tracking marketing performance, and rendering long-form case studies.

## 🚀 Features

- High-converting landing funnel with interactive sections and testimonials
- UTM-aware form handling with session-based funnel tracking
- Analytics utilities for Google Analytics 4 event tracking
- Serverless email submission endpoint ready for Zapier/webhook integrations
- Tailwind CSS + shadcn/ui component primitives for consistent styling

## 🧰 Tech Stack

- **UI**: React 18, TypeScript, Vite 6
- **Styling**: Tailwind CSS, shadcn/ui, Lucide icons
- **Tooling**: ESLint (via TypeScript compiler checks), Prettier-ready
- **Deployment**: Vercel (static + Serverless Functions)

## 🔧 Development

```bash
# Clone the repository
git clone <repository-url>
cd amicus-pro

# Install dependencies
npm install

# Start the Vite dev server
npm run dev

# Optional: run the local API server
npm run server
```

Build artifacts are emitted to `dist/`:

```bash
npm run build
npm run preview   # serve the production build locally
```

## 🌐 Deployment (Vercel)

The project is configured for Vercel. A typical setup uses:

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Serverless Functions**: `api/submit-email.js`, `api/health.js`

Required environment variables:

```
NODE_ENV=production
ZAPIER_WEBHOOK_URL=<your-webhook-url>
```

Deploy manually with the Vercel CLI if desired:

```bash
npm install -g vercel
vercel --prod
```

## 📁 Project Layout

```
├── api/
│   ├── health.js           # Serverless health check
│   └── submit-email.js     # Lead submission handler
├── src/
│   ├── components/         # Shared UI components
│   ├── screens/            # Page-level React screens
│   ├── services/           # Domain logic (email service, etc.)
│   └── utils/              # Analytics + helpers
├── public/                 # Static assets served as-is (if added)
├── index.html
├── package.json
├── tailwind.config.js
├── vercel.json
└── vite.config.ts
```

## 🔌 API Endpoints

### `POST /api/submit-email`

Accepts JSON payloads containing email and optional UTM metadata, forwarding them to Zapier or another webhook provider.

Example request:

```json
{
  "email": "user@example.com",
  "source": "hero-form",
  "utm_source": "google"
}
```

Example response:

```json
{
  "success": true,
  "message": "Email submitted successfully",
  "data": { "email": "user@example.com" }
}
```

### `GET /api/health`

Lightweight health endpoint for uptime checks.

## 🧪 Quality

- `npm run type-check` ensures the project compiles with strict TypeScript settings.
- Tailwind and shadcn/ui enforce consistent styling tokens.
- The repo is Prettier-friendly; run your formatter of choice before committing.

## 📈 Analytics

`src/utils/analytics.ts` centralises GA4 events:

- Page views
- Email submissions / funnel progress
- Form interactions

UTM parameters are read from the URL and persisted in `sessionStorage` to measure time-to-conversion between landing and application steps.

## 📄 License

Private, all rights reserved. Contact the Amicus Pro team for usage questions.
