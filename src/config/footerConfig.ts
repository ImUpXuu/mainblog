import type { FooterConfig } from "../types/config";

export const footerConfig: FooterConfig = {
	enable: true,
	customHtml: `<div class="flex flex-wrap justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-2">
		<span>Powered by <a href="https://astro.build" class="hover:text-blue-500 transition-colors">Astro</a></span>
		<span>·</span>
		<span>Theme by <a href="https://github.com/moeyua/firefly" class="hover:text-blue-500 transition-colors">Firefly</a></span>
	</div>`,
};
