const { spawn } = require('child_process');

console.log('🚀 Starting VRTANS Unified Production Server with Fault Isolation...\n');

function startProcess(name, command, args, envOptions, colorStr) {
  let p;

  function spawnChild() {
    console.log(`${colorStr}[${name}] Starting process...\x1b[0m`);
    p = spawn(command, args, {
      stdio: 'pipe',
      env: { ...process.env, ...envOptions }
    });

    p.stdout.on('data', (data) => {
      process.stdout.write(`${colorStr}[${name}]\x1b[0m ${data}`);
    });

    p.stderr.on('data', (data) => {
      process.stderr.write(`\x1b[31m[${name} ERROR]\x1b[0m ${data}`);
    });

    p.on('close', (code) => {
      console.log(`\x1b[31m❌ [${name}] exited with code ${code}. Restarting in 3 seconds...\x1b[0m`);
      // Auto-restart isolated process after a 3 second delay
      setTimeout(spawnChild, 3000);
    });
  }

  spawnChild();

  // Return a function to cleanly kill the process if the master script shuts down
  return () => {
    if (p) {
      p.removeAllListeners('close');
      p.kill('SIGTERM');
    }
  };
}

// 1. Start Frontend (Next.js Standalone)
const killFrontend = startProcess(
  'FRONTEND', 
  'node', 
  ['frontend/.next/standalone/server.js'], 
  { PORT: 3001, NODE_ENV: 'production' }, 
  '\x1b[36m' // Cyan color
);

// 2. Start Backend (Express API)
const killBackend = startProcess(
  'BACKEND', 
  'node', 
  ['backend/server.js'], 
  { PORT: 5000, NODE_ENV: 'production' }, 
  '\x1b[33m' // Yellow color
);

// 3. Graceful Master Shutdown
const shutdownMaster = () => {
  console.log('\n🛑 Master process shutting down. Terminating all services...');
  killFrontend();
  killBackend();
  process.exit();
};

// Catch termination signals to close everything down cleanly
process.on('SIGINT', shutdownMaster);
process.on('SIGTERM', shutdownMaster);
