#!/usr/bin/env node
/**
 * Safe dev server startup:
 * 1. Stops every stale Next.js dev process (prevents shared .next corruption)
 * 2. Clears build caches
 * 3. Starts one fresh dev server on port 3000
 */
import { spawn } from "node:child_process";
import { execSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = process.env.PORT || "3000";
const clean = process.argv.includes("--clean");
const require = createRequire(import.meta.url);
const nextCli = require.resolve("next/dist/bin/next");

function run(command) {
  execSync(command, { cwd: root, stdio: "ignore", shell: true });
}

function stopStaleDevServers() {
  // Stop any previous `next dev` processes (any port).
  try {
    run('pkill -f "next dev" 2>/dev/null || true');
  } catch {
    // No matching processes.
  }

  // Free common local dev ports used by this project.
  for (const devPort of ["3000", "3001"]) {
    try {
      const pids = execSync(`lsof -ti :${devPort}`, { encoding: "utf8" }).trim();
      if (!pids) continue;
      for (const pid of pids.split("\n").filter(Boolean)) {
        execSync(`kill -9 ${pid}`);
      }
    } catch {
      // Port already free.
    }
  }
}

function clearCaches() {
  const targets = [
    path.join(root, ".next"),
    path.join(root, "node_modules", ".cache"),
  ];

  for (const target of targets) {
    if (existsSync(target)) {
      rmSync(target, { recursive: true, force: true });
    }
  }
}

if (!existsSync(path.join(root, "node_modules", "next"))) {
  console.error("Next.js is not installed. Run: npm install");
  process.exit(1);
}

if (!existsSync(path.join(root, "node_modules", "@supabase", "ssr"))) {
  console.log("Installing missing dependencies...");
  execSync("npm install", { cwd: root, stdio: "inherit", shell: true });
}

stopStaleDevServers();

if (clean) {
  clearCaches();
  console.log("Cleared .next and node_modules/.cache");
} else {
  console.log("Keeping .next cache (use npm run dev:reset for a full clean)");
}

console.log(`Starting Next.js dev server on http://localhost:${port}`);

const child = spawn(process.execPath, [nextCli, "dev", "-p", port], {
  cwd: root,
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
