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
					label: 'Overview',
					autogenerate: { directory: 'guides' },
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
				{
					label: 'Content',
					autogenerate: { directory: 'content' },
				},
			],
		}),
	],
});
