[![build status](https://secure.travis-ci.org/yeyus/react-vertical-timeline.png)](http://travis-ci.org/yeyus/react-vertical-timeline) [![Dependency Status](https://david-dm.org/yeyus/react-vertical-timeline.svg)](https://david-dm.org/yeyus/react-vertical-timeline)
# react-vertical-timeline - Vertical progress bar with bookmarks support

## Basic Usage

Include the following package in your package.json : `npm install --save react-vertical-timeline'`.

Import the UI components into your App:

```js
import { Timeline, Bookmark } from 'react-vertical-timeline';

...
```

See [demo](#demo) section
## Development

Clone the repo : `git clone https://github.com/yeyus/react-vertical-timeline`.

To get started with fresh history, do this:

1. `cd react-vertical-timeline`
4. `npm install` - Install all dependencies
5. `npm start` - Start demo site

### Common Tasks

* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>**.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

### Testing

The test setup is based on Jest. Code coverage report is generated to `coverage/`. The coverage information is also uploaded to codecov.io after a successful Travis build.

* Running tests once - **npm test**
* Running tests continuously - **npm run test:watch**
* Running individual tests - **npm test -- <pattern>** - Works with `test:watch` too.
* Linting - **npm run test:lint** - Runs ESLint.

### Documentation Site

The boilerplate includes a [GitHub Pages](https://pages.github.com/) specific portion for setting up a documentation site for the component. The main commands handle with the details for you. Sometimes you might want to generate and deploy it by hand, or just investigate the generated bundle.

* Building - **npm run gh-pages** - Builds the documentation into `./gh-pages` directory.
* Deploying - **npm run deploy-gh-pages** - Deploys the contents of `./gh-pages` to the `gh-pages` branch. GitHub will pick this up automatically. Your site will be available through *<user name>.github.io/<project name>`.
* Generating stats - **npm run stats** - Generates stats that can be passed to [webpack analyse tool](https://webpack.github.io/analyse/). This is useful for investigating what the build consists of.

## Demo

```jsx
state: { progress: 50 }
---
<Timeline height={300} progress={ state.progress } onSelect={p => setState({ progress: p })}>
  <Bookmark progress={20} onSelect={p => setState({ progress: p})}>
    Hi there 20%
  </Bookmark>
  <Marker progress={33}/>
  <Bookmark progress={55} onSelect={p => setState({ progress: p})}>
    Hi there 55%
  </Bookmark>
  <Bookmark progress={75} onSelect={p => setState({ progress: p})}>
    Hi there 75%
  </Bookmark>
</Timeline>
```

## License

*react-vertical-timeline* is available under MIT. See LICENSE for more details. Based on *react-component-boilerplate*

