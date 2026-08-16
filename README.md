# VRTANS (TechSensi) - Full-Stack Enterprise Platform

Welcome to the **VRTANS** project repository. This is a robust, decoupled full-stack web application designed for high performance, excellent SEO, and enterprise-grade security.

## 🏗️ Architecture Overview

The platform uses a separated frontend and backend architecture:
- **/frontend**: A Next.js 15 (App Router) client application running on port `3001`.
- **/backend**: A custom Node.js + Express.js REST API running on port `5000`.

*Note: They are hosted in the same repository for convenience but operate independently. The root `package.json` uses `concurrently` to run both simultaneously during development.*

## ✨ Core Features

* **Dynamic Service Engine**: Service listings and prices are synced in real-time from the database to the frontend.
* **Secure Admin Dashboard**: JWT-protected command center to manage leads, view platform orders, and edit services.
* **Data Exporting**: 1-click CSV generation for all lead pipeline data.
* **Hardened Security**: Includes `helmet` (security headers), `express-rate-limit` (DDoS protection), and `zod` (strict input validation).
* **Production Logging**: Winston and Morgan write automated crash and request logs to `.log` files.
* **SEO Optimized**: Dynamically generated `sitemap.xml` and `robots.txt`.
* **Automated Cleanup**: Background cron-style jobs that purge archived leads every 7 days.

## 🚀 Getting Started (Local Development)

1. Ensure you have Node.js and MongoDB installed locally.
2. Install dependencies in all directories:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Set up your `.env` files (see backend and frontend READMEs for exact variables).
4. From the **root** folder, boot both servers simultaneously:
   ```bash
   npm run dev
   ```

## 🌐 Production Deployment (VPS)

This project is pre-configured for **PM2** deployment on a Linux VPS. 
An `ecosystem.config.js` file is located at the root of the project.

To deploy on a VPS:
```bash
npm install -g pm2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```
This will automatically launch the Next.js frontend in cluster mode (utilizing all CPU cores) and keep the Express backend alive, automatically restarting them on server reboot.
