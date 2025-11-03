# Innovation Repository Template

This repository serves as a template for creating new repositories within the New Jersey State
Office of Innovation. It provides a standardized structure and guidelines to follow when developing
software or documents.

To get started with this repository, have an Innovation GitHub admin clone this template repository
for you. We'll need the following information from you:

- the intended name for the GitHub repository
- the visibility of the repository (public, private, internal)
- the permissions for the repository, either:
  - explicit permissions for the new repository
  - another repository from which we can mirror the permissions

## Table of Contents

1. [Using](#using)
2. [Contributing](#contributing)
3. [License](#license)
4. [Acknowledgements](#acknowledgements)

## Using

Once this template is mirrored to the new repository, you'll need to perform the following steps:

- Delete this `README.md` file, then rename the `README.template.md` file to take its place.
- Pin the major versions of the packages in `package.json`.
  - `npm`: `npm update --save`
  - `yarn` doesn't do this. Reinstall each of the packages.
  - `pnpm`: `pnpm up -L`
- Modify the `package.json` file to set the appropriate version and repository information.
- Update the supported versions in `SECURITY.md`.

## Contributing

Contributions are welcome!

1. Clone the repository (`gh repo clone newjersey/innovation-repo-template`)
2. Create your feature branch (`git checkout -b your_gh_username/NewConfig`)
3. Commit your changes (`git commit -S -m 'Change some config'`)
4. Push to the Branch (`git push origin your_gh_username/NewConfig`)
5. Open a pull request
6. Post to `#engineering-all` for feedback

## License

This repository is provided with no license. Adapt as you see fit for your project.

## Acknowledgements

Credit goes to [Sanni](https://github.com/sannidhishukla) for kicking off the conversation that led
to this template repository.
