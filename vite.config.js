import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [tailwindcss()],
    server: {
        host: "127.0.0.1",
        port: 5173, // or your preferred port
        watch: {
            ignored: ["**/node_modules/**", "**/.git/**"],
        },
    },
});
