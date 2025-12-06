# Cody Cordova Website

A modern Next.js 16 website for Cody Cordova, Music Producer/DJ.

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Resend** for email form submissions
- **Google Fonts** (Roboto, Droid Serif, Luckiest Guy, Architects Daughter)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Resend API key (for form submissions)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Edit `.env.local` and add your Resend API key

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── epk/               # EPK page
│   ├── songs/             # Song pages
│   ├── sotu/              # Blog section
│   └── ...
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── Navigation.tsx     # Navigation menu
│   ├── Analytics.tsx      # Analytics scripts
│   └── PhotoGallery.tsx   # Photo gallery component
├── lib/                   # Utilities
│   ├── navigation.ts      # Navigation config
│   └── metadata.ts            # SEO metadata helpers
├── public/                 # Static assets
│   ├── images/            # Images
│   └── robots.txt         # Robots file
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── next.config.js        # Next.js configuration
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript configuration
```

## Features

- ✅ All pages migrated and functional
- ✅ Dark theme with glass morphism text bubbles
- ✅ Responsive navigation with hamburger menu
- ✅ SEO metadata and Open Graph tags
- ✅ Google Analytics integration
- ✅ Cookiebot integration
- ✅ Contact form with Resend email integration
- ✅ Book Me form with travel questions
- ✅ Photo gallery with lightbox
- ✅ Blog structure (SOTU section)
- ✅ Hero section with header image

## Email Configuration

Forms use Resend to send emails. To set up:

1. Get a Resend API key from [https://resend.com/api-keys](https://resend.com/api-keys)
2. Copy `.env.example` to `.env.local`
3. Add your Resend API key to `.env.local`
4. Verify your domain with Resend (required for production)
5. Update the `from` email address in:
   - `app/api/contact/route.ts`
   - `app/api/bookme/route.ts`
   
   Change from `noreply@codycordova.com` to your verified domain (e.g., `noreply@yourdomain.com`)

6. Update the recipient email address in both API routes to your email address

**API Routes:**
- Contact Me form → `/api/contact`
- Book Me form → `/api/bookme`

## Deployment

The site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting service**

For production:
1. Set `RESEND_API_KEY` environment variable
2. Run `npm run build`
3. Deploy the `.next` directory or use platform-specific deployment

## Notes

- E-commerce functionality will be added in a later phase
- All images are optimized with Next.js Image component
- Glass morphism effects applied to text for readability
- Forms automatically send emails via Resend API

## License

All content and assets are owned by Cody Cordova.

