# VRTANS - Backend REST API

This directory contains the highly-optimized Node.js & Express server that powers the database queries, admin authentication, and secure data processing.

## ⚙️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (using the official, lightweight `mongodb` native driver)
- **Validation**: Zod
- **Security**: Helmet, Express-Rate-Limit
- **Logging**: Winston, Morgan
- **Performance**: Compression (Gzip)

## 🛡️ Security Features
- **Strict Zod Parsing**: All incoming lead and service data is run through strict `zod` schemas to prevent NoSQL injection and malformed data.
- **Rate Limiting**: Limits IP addresses to 100 requests per 15 minutes to prevent automated bot spam.
- **JWT Authentication**: Admin routes require a signed Bearer token (or query token for CSV downloads).

## 📂 Structure
- **/controllers**: The core logic (creating leads, generating CSVs, fetching orders).
- **/models**: Direct MongoDB connections and query abstractions.
- **/routes**: Express router endpoints linking URLs to Controllers.
- **/middlewares**: Auth guards and custom middleware.
- **/utils**: Winston logger configurations.

## 🔑 Environment Variables
Create a `.env` file in this `/backend` directory (or at the root):
```env
PORT=5015
MONGODB_URI=mongodb://localhost:27017
JWT_SECRET=supersecretjwtkey_vrtans_change_me_in_production
FRONTEND_URL=http://localhost:5016
```

## 🏃‍♂️ Running Independently
If you only want to boot the Express backend:
```bash
node server.js
```
*(Server listens on http://localhost:5015 by default)*
