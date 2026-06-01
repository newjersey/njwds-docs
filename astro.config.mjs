// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			logo: {
        	src: './src/assets/GroveLogo.png', 
			},
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
					label: 'Content',
					autogenerate: { directory: 'content' },
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
					label: 'Templates',
					autogenerate: { directory: 'templates' },
				},
			],
		}),
	],
});
