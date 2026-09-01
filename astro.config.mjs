// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import remarkGfm from "remark-gfm";
import AutoImport from "astro-auto-import";
import mdx from "@astrojs/mdx";

const googleAnalyticsId = "G-Z04BPLB04T";

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  integrations: [
    AutoImport({
      imports: [
        "./src/components/FigmaStorybookButtonGroup.astro",
        "./src/components/GroveColorBlock.astro",
        "./src/components/PageHeader.astro",
        "./src/components/Icon.astro",
        "./src/components/IconList.astro",
        "./src/components/IconListItem.astro",
        "./src/components/ViewExternalResource.astro",
      ],
    }),
    starlight({
      title: "Grove",
      head: [
        {
          tag: "script",
          attrs: {
            src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
          }
        },
        {
          tag: "script",
          attrs: {},
          content: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${googleAnalyticsId}');
          `
        }
      ],
      logo: {
        src: "./src/assets/leaves.svg",
        alt: "Grove logo: four green leaves arranged in a square pattern (2 by 2)",
      },
      components: {
        Head: "./src/components/Head.astro",
        Header: "./src/components/Header.astro",
        PageTitle: "./src/components/PageTitle.astro",
        Search: "./src/components/Search.astro",
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        Sidebar: "./src/components/Sidebar.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        PageFrame: "./src/components/PageFrame.astro",
        Footer: "./src/components/Footer.astro",
      },
      customCss: ["@newjersey/njwds/dist/css/styles.css", "./src/styles/custom.css"],
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/newjersey/njwds-docs" },
      ],
      sidebar: [
        {
          label: "Overview",
          collapsed: true,
          items: [{ autogenerate: { directory: "guides" } }],
        },
        {
          label: "Content",
          collapsed: true,
          items: [{ autogenerate: { directory: "content" } }],
        },
        {
          label: "Styles",
          collapsed: true,
          items: [{ autogenerate: { directory: "styles" } }],
        },
        {
          label: "Components",
          collapsed: true,
          items: [{ autogenerate: { directory: "reference" } }],
        },
        {
          label: "Patterns",
          collapsed: true,
          items: [{ autogenerate: { directory: "patterns" } }],
        },
        {
          label: "Templates",
          collapsed: true,
          items: [{ autogenerate: { directory: "templates" } }],
        },
      ],
    }),
    mdx(),
  ],
});
