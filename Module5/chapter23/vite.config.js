import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		outDir: "dist",
		assetsDir: "assets",
	},
	base: "/SEC_Officer_Training/Module5/chapter23/",
});
