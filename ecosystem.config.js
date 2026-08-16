module.exports = {
  apps: [
    {
      name: "techsensi-backend",
      script: "backend/server.js",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "techsensi-frontend",
      script: "npm",
      args: "run start",
      instances: "max", // Utilizes all CPU cores
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 5016
      }
    }
  ]
};
