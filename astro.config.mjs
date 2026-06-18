// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Grove',
			logo: {
        	src: './src/assets/grove-logo-leaves.png',
			},
			components: {
				Head: './src/components/Head.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				SiteTitle: './src/components/SiteTitle.astro',
			},
			customCss: [
				'@newjersey/njwds/dist/css/styles.css',
				'./src/styles/custom.css',
			],
			components: {
				Sidebar: './src/components/overrides/Sidebar.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				
				{
					label: 'Overview',
					items: [{ autogenerate: { directory: 'guides' } }]
				},
				{
					label: 'Content',
					items: [{ autogenerate: { "directory": "content" } }]
				},
				{
					label: 'Styles',
					items: [{ autogenerate: { directory: 'styles' } }]
				},
				{
					label: 'Components',
					items: [{ autogenerate: { directory: 'reference' } }]
				},
				{
					label: 'Patterns',
					items: [{ autogenerate: { directory: 'patterns' } }]
				},
				{
					label: 'Templates',
					items: [{ autogenerate: { directory: 'templates' } }],
				},
			],
		}),
	],
});
