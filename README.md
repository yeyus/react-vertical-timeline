[![build status](https://secure.travis-ci.org/yeyus/react-vertical-timeline.png)](http://travis-ci.org/yeyus/react-vertical-timeline) [![bitHound Score](https://www.bithound.io/github/yeyus/react-vertical-timeline/badges/score.svg)](https://www.bithound.io/github/yeyus/react-vertical-timeline) [![Dependency Status](https://david-dm.org/yeyus/react-vertical-timeline.svg)](https://david-dm.org/yeyus/react-vertical-timeline)
# react-vertical-timeline - Vertical progress bar with bookmarks support

## Basic Usage

* Linting - **npm run lint** - Runs ESLint.
* Testing - **npm test** and **npm run tdd** - Runs Karma/Mocha/Chai/Phantom. Code coverage report is generated through istanbul/isparta to `build/`.
* Developing - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).
* Creating a version - **npm version <x.y.z>** - Updates */dist* and *package.json* with the new version and create a version tag to Git.
* Publishing a version - **npm publish** - Pushes a new version to npm and updates the project site.

If you don't want to use universal rendering for the React portion, set `RENDER_UNIVERSAL` to `false` at *webpack.config.babel.js*.

## Highlighting Demo

```html
<Timeline height={300} progress={50} onSelect={fn..}>
  <Bookmark progress={20} onSelect={fn..}>
    Hi there 20%
  </Bookmark>
  <Bookmark progress={55} onSelect={fn..}>
    Hi there 55%
  </Bookmark>
  <Bookmark progress={75} onSelect={fn..}>
    Hi there 75%
  </Bookmark>
</Timeline>
```

## License

*react-vertical-timeline* is available under MIT. See LICENSE for more details. Based on *react-component-boilerplate*

