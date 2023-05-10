import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), vue(), alpinejs()]
});