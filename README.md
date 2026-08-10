# Enterprise Technology Consulting Website

A configurable enterprise technology consulting website with dynamic client name support.

## Key Features

- **Fully Configurable Client Name**: All client references are controlled via environment variables
- **Modern Technology Stack**: Built with Next.js 15, React 19, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive navigation
- **Dynamic SEO**: Metadata updates automatically based on client configuration
- **Clean Architecture**: Modular components and reusable patterns

## Client Configuration

This website is designed to be easily rebranded for different clients. All client-specific content is controlled through environment variables.

### Quick Setup

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your client's information:
   ```env
   NEXT_PUBLIC_CLIENT_NAME="Your Client Name Technologies"
   NEXT_PUBLIC_CLIENT_SHORT_NAME="YourClient"
   NEXT_PUBLIC_CLIENT_URL="https://yourclient.example.com"
   ```

3. Restart the development server:
   ```bash
   npm run dev
   ```

For detailed instructions, see [CLIENT_NAME_SETUP.md](./CLIENT_NAME_SETUP.md).

## Technology Stack

- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS & Custom Design System
- **Animations:** Framer Motion & Lucide Icons

## Local Development

1. Install project dependencies:
```bash
npm install
```

2. Start the local development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) (or the designated localhost port) in your browser to view the application.
