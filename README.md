# next-strapi-static

Static-Site-Generation (SSG) using Next.js with Strapi as CMS.

# Opinionated Boilerplate

The code at `main` branch will remain unopinionated and minimal. For a more opinionated starting point, check out the `opinionated` branch.

## Getting Started

Make sure that your .env files are created in both `/backend` and `/frontend` folders based on their respective `.env.example` files.

### Start Strapi instance

```bash
cd backend
npm run build
npm run develop
```

### Start Next.js development server

```bash
cd frontend
npm run dev
```

### Build static Next.js site

```bash
cd frontend
npm run build
```

## Site Examples

Some websites built with this boilerplate:

[DJ Yang's Website](https://djyang.netlify.app)
[Meiyin Ooi's personal portfolio](https://meiyin-pf.netlify.app)
