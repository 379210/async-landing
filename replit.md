# async-landing

A modern landing page for the "async" product — a platform for teams that move fast.

## Tech Stack

- **Frontend:** React 19 + TypeScript, Vite 6
- **Styling:** Plain CSS (custom properties, dark theme)
- **Package manager:** npm

## Project Structure

```
/
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration (port 5000, allowedHosts: true)
├── package.json
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Main landing page component
│   ├── App.css         # Component styles
│   └── index.css       # Global styles / CSS variables
└── public/             # Static assets
```

## Development

The app runs on port 5000 via the "Start application" workflow (`npm run dev`).

- Host: `0.0.0.0` (required for Replit preview proxy)
- `allowedHosts: true` set in vite.config.ts for the Replit iframe proxy

## Deployment

Configured as a **static** deployment:
- Build: `npm run build` → outputs to `dist/`
- Deployment target: static
