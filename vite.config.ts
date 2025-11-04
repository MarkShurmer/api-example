import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    target: "esnext",
    sourcemap: true,
    outDir: "dist",
  },
  test: {
    globals: true,
    environment: "node",
    coverage: {
      enabled: true,
    },
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", "dist"],
  },
});
