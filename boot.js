const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting VRTANS Unified Production Server...\n');

// 1. Start Frontend (Next.js Standalone)
const frontend = spawn('node', ['frontend/.next/standalone/server.js'], {
  stdio: 'pipe',
  env: { ...process.env, PORT: 3001, NODE_ENV: 'production' }
});

frontend.stdout.on('data', (data) => {
  process.stdout.write(`\x1b[36m[FRONTEND]\x1b[0m ${data}`);
});

frontend.stderr.on('data', (data) => {
  process.stderr.write(`\x1b[31m[FRONTEND ERROR]\x1b[0m ${data}`);
});

// 2. Start Backend (Express API)
const backend = spawn('node', ['backend/server.js'], {
  stdio: 'pipe',
  env: { ...process.env, PORT: 5000, NODE_ENV: 'production' }
});

backend.stdout.on('data', (data) => {
  process.stdout.write(`\x1b[33m[BACKEND]\x1b[0m ${data}`);
});

backend.stderr.on('data', (data) => {
  process.stderr.write(`\x1b[31m[BACKEND ERROR]\x1b[0m ${data}`);
});

// 3. Graceful Shutdown & Crash Handling
const shutdown = () => {
  console.log('\n🛑 Shutting down VRTANS servers...');
  frontend.kill('SIGTERM');
  backend.kill('SIGTERM');
  process.exit();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

frontend.on('close', (code) => {
  console.log(`❌ Frontend process exited with code ${code}`);
  shutdown();
});

backend.on('close', (code) => {
  console.log(`❌ Backend process exited with code ${code}`);
  shutdown();
});
