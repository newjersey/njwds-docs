// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			customCss: [
				'@newjersey/njwds/dist/css/styles.css',
				'./src/styles/custom.css'
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guide/example' },
					],
				},
				{
					label: 'Styles',
					autogenerate: { directory: 'styles' },
				},
				{
					label: 'Components',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Patterns',
					autogenerate: { directory: 'patterns' },
				},
			],
		}),
	],
});
