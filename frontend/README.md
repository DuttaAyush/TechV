# VRTANS - Frontend Application

This directory contains the user-facing website and the Admin Dashboard interface, built on the modern Next.js App Router.

## 💻 Tech Stack
- **Framework**: Next.js 15 (React 19)
- **Styling**: Tailwind CSS & custom Vanilla CSS tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Toast Notifications**: Sonner

## 📂 Structure
- **/app**: Contains all the Next.js routes (`/page.js`, `/admin/page.js`, `/about/page.js`, etc.)
- **/components**: Reusable UI elements (Navigation, Footer, Cards, etc.)
- **/public/images**: Static visual assets (Images here have been heavily compressed to WebP/optimized JPGs via Sharp)
- **/lib**: Context providers (Auth, Cart) and configuration constants.

## 🔑 Environment Variables
Create a `.env.local` file in this `/frontend` directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5015
```
*(In production on a VPS, change this to your live backend domain if applicable, or leave it if reverse-proxying via Nginx).*

## 🏃‍♂️ Running Independently
If you only want to run the frontend server:
```bash
npm run dev
```
*(App runs on http://localhost:5016 by default)*
