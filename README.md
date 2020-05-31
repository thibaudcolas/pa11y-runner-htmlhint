# [pa11y-runner-htmlhint](https://www.npmjs.com/package/pa11y-runner-htmlhint) [![npm](https://img.shields.io/npm/v/pa11y-runner-htmlhint.svg)](https://www.npmjs.com/package/pa11y-runner-htmlhint) [![Build Status](https://travis-ci.com/thibaudcolas/pa11y-runner-htmlhint.svg?branch=master)](https://travis-ci.com/thibaudcolas/pa11y-runner-htmlhint) [![Total alerts](https://img.shields.io/lgtm/alerts/g/thibaudcolas/pa11y-runner-htmlhint.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/thibaudcolas/pa11y-runner-htmlhint/alerts/) [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/thibaudcolas/pa11y-runner-htmlhint.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/thibaudcolas/pa11y-runner-htmlhint/context:javascript)

> Pa11y runner for HTML linting with [HTMLHint](https://github.com/htmlhint/HTMLHint).

## Usage

> 🚧 Currently the runner is only compatible with PR [#524 – Add lower-level runner API to support non-browser runners](https://github.com/pa11y/pa11y/pull/524), and on my fork [thibaudcolas/pa11y#feature/node-runners](https://github.com/thibaudcolas/pa11y#feature/node-runners).

```sh
npm install -g https://github.com/thibaudcolas/pa11y#feature/node-runners pa11y-runner-htmlhint
```

With Pa11y and the runner installed,

```sh
pa11y --runner htmlhint https://www.example.com/
```

## Why

HTMLHint isn’t an accessibility checker like other Pa11y runners – it’s a general-purpose HTML linter. Nonetheless, HTMLHint contains a lot of "code smell" linting rules which can be indicative of underlying issues – for example [duplicate attributes](https://htmlhint.com/docs/user-guide/rules/attr-no-duplication) on HTML elements.

## Contributing

See anything you like in here? Anything missing? We welcome all support, whether on bug reports, feature requests, code, design, reviews, tests, documentation, and more. Please have a look at our [contribution guidelines](docs/CONTRIBUTING.md).

## Credits

View the full list of [contributors](https://github.com/thibaudcolas/pa11y-runner-htmlhint/graphs/contributors). [MIT](LICENSE) licensed.

```

```
