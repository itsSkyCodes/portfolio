import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/**
 * Resolves the port from environment variables or .env files.
 * Priority:
 * 1. process.env.PORT (if already passed via CLI or shell)
 * 2. PORT variable in .env.local, .env, or .env-local
 * 3. Port extracted from NEXT_PUBLIC_SITE_URL (e.g. http://localhost:3001)
 * 4. Default: 3000
 */
function resolvePort() {
  if (process.env.PORT && process.env.PORT.trim()) {
    return process.env.PORT.trim();
  }

  const envFiles = [
    ".env.local",
    ".env-local",
    ".env.development.local",
    ".env.development",
    ".env",
  ];

  for (const file of envFiles) {
    const fullPath = path.resolve(process.cwd(), file);
    if (!fs.existsSync(fullPath)) continue;

    try {
      const content = fs.readFileSync(fullPath, "utf-8");

      // Check for explicit PORT=xxxx
      const portMatch = content.match(/^\s*PORT\s*=\s*(\d+)/m);
      if (portMatch && portMatch[1]) {
        return portMatch[1];
      }

      // Check if NEXT_PUBLIC_SITE_URL specifies a port (e.g., http://localhost:3001)
      const urlMatch = content.match(/^\s*NEXT_PUBLIC_SITE_URL\s*=\s*https?:\/\/[^:\/\s]+:(\d+)/m);
      if (urlMatch && urlMatch[1]) {
        return urlMatch[1];
      }
    } catch {
      // Ignore read errors and continue to next file
    }
  }

  return "3000";
}

const action = process.argv[2] || "dev";
const forwardedArgs = process.argv.slice(3);

// If user already specified -p or --port in extra args, don't override
const hasPortArg = forwardedArgs.some((arg) => {
  if (arg === "-p" || arg === "--port") return true;
  if (arg.startsWith("-p=") || arg.startsWith("--port=")) return true;
  return false;
});

const port = resolvePort();
const args = ["next", action];

if (!hasPortArg && (action === "dev" || action === "start")) {
  args.push("-p", port);
}

args.push(...forwardedArgs);

const isWindows = process.platform === "win32";
const child = spawn(isWindows ? "npx.cmd" : "npx", args, {
  stdio: "inherit",
  shell: true,
  env: {
    ...process.env,
    PORT: port,
  },
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
