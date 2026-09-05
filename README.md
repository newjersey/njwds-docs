# Grove Design System Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains the documentation website for
[Grove](https://grove.nj.gov), the design system for the State of New Jersey. The site provides
guidance for using Grove's styles, components, patterns, and templates to build consistent,
accessible digital services.

## Table of Contents

1. [Architecture](#architecture)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)
6. [Contact](#contact)
7. [Acknowledgements](#acknowledgements)
8. [Disclaimer](#disclaimer)

## Architecture

The documentation site is a statically generated [Astro](https://astro.build) application using
[Starlight](https://starlight.astro.build) for documentation structure and navigation. Documentation
pages are written in Markdown and MDX in `src/content/docs/`. Custom Astro components in
`src/components/` extend Starlight, and styles from the Grove npm package are supplemented by
site-specific styles in `src/styles/custom.css`.

AWS Amplify builds the site with the configuration in `amplify.yml` and publishes the generated
`dist/` directory.

### Built With

- [Astro](https://astro.build)
- [Starlight](https://starlight.astro.build)
- [Grove (`@newjersey/njwds`)](https://github.com/newjersey/njwds)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [AWS Amplify Hosting](https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html)

## Installation

This project requires [Node.js 24](https://nodejs.org). If you use a Node version manager, the
required version is defined in `.nvmrc`.

```bash
# Clone this repository
git clone https://github.com/newjersey/njwds-docs.git

# Go into the repository
cd njwds-docs

# Use the project's Node.js version
nvm use

# Install dependencies
npm ci
```

## Usage

Run all commands from the repository root.

| Command                    | Action                                                |
| :------------------------- | :-----------------------------------------------------|
| `npm run dev`              | Start the local development server                    |
| `npm run build`            | Build the production site in `dist/`                  |
| `npm run preview`          | Preview the production build locally                  |
| `npm run astro -- --help`  | Display help for the Astro command-line tool          |
| `npm run test:a11y`        | Run the accessibility scan against the built site     |
| `npm run test:a11y:report` | Open the HTML report from the last accessibility scan |

After running `npm run dev`, open the local URL shown in the terminal. Astro uses
`http://localhost:4321` by default.

## Contributing

Contributions that improve Grove's documentation are welcome. For questions, feature requests, or
ideas related to the design system itself, use the
[Grove GitHub Discussions](https://github.com/newjersey/njwds/discussions).

To propose a documentation change:

1. Create a branch from `main`.
2. Add or update content in `src/content/docs/`.
3. Run `npm run dev` to review the change locally.
4. Run `npm run build` to confirm the production site builds successfully.
5. Commit and push the branch, then open a pull request.

Keep changes focused, follow the structure and tone of nearby documentation, and include screenshots
when a change affects the rendered interface.

To report a security vulnerability, follow the instructions in [SECURITY.md](SECURITY.md) instead of
opening a public issue.

### Accessibility testing

The [Accessibility Scan](.github/workflows/accessibility-scan.yml) workflow runs axe-core against
every page of the built site. It runs on pushes to `main` or PRs labeled `accessibility-scan`. Only `critical` violations fail the check (see `SEVERITY_THRESHOLD` in [tests/a11y/axe-test.ts](tests/a11y/axe-test.ts)), but all violations are still recorded. Each run uploads an `accessibility-report` artifact that can be found within the CI output, as a comment on failing PRs, or locally with `npm run test:a11y:report` after running ``npm run test:a11y`.

## License

This project is licensed under the MIT License. For more information, see [LICENSE](LICENSE).

## Contact

If you want to get in touch with the New Jersey Innovation Authority team, email
[team@innovation.nj.gov](mailto:team@innovation.nj.gov).

### Join the New Jersey Innovation Authority

If you are excited to design and deliver modern policies and services to improve the lives of all
New Jerseyans, [join the New Jersey Innovation Authority](https://innovation.nj.gov/join.html).

## Acknowledgements

Grove builds on the work of the
[United States Web Design System](https://designsystem.digital.gov/) and its community. This
documentation site also relies on the open-source Astro and Starlight projects.

## Disclaimer

This project uses certain tools and technologies for development purposes. Their inclusion does not
imply endorsement or recommendation. Users should evaluate whether these tools are suitable for
their own use.
