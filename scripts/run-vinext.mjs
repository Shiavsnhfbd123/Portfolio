import { spawn } from "node:child_process";

const task = process.argv[2];
const supportedTasks = new Set(["dev", "build", "start"]);

if (!supportedTasks.has(task)) {
  throw new Error(`Unsupported vinext task: ${task ?? "(none)"}`);
}

const isWindows = process.platform === "win32";
const command = isWindows ? process.env.ComSpec ?? "cmd.exe" : "vinext";
const args = isWindows
  ? ["/d", "/s", "/c", `vinext ${task}`]
  : [task];

const child = spawn(command, args, {
  cwd: process.cwd(),
  env: {
    ...process.env,
    WRANGLER_LOG_PATH: ".wrangler/wrangler.log",
  },
  stdio: "inherit",
});

child.on("error", (error) => {
  console.error(`Unable to start vinext: ${error.message}`);
  process.exitCode = 1;
});

child.on("exit", (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
