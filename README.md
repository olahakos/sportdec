# SPORTDEC homework
[![CircleCI](https://circleci.com/gh/olahakos/sportdec.svg?style=svg)](https://circleci.com/gh/olahakos/sportdec)

## Dependencies

The application has been written in REACT Native. The first step to build our code is, to install the dependencies. Now we gonna work only with the iOS version on Mac, but you can find the documentation of other configurations  [here](https://facebook.github.io/react-native/docs/getting-started.html#content).

In this case I'm using [Homebrew](http://brew.sh/). It's a really great package manager.

```
brew install node
brew install watchman
npm install -g react-native-cli
```

Let's install the npm packeges.

```
npm install
```

To run your application you gonna need Xcode too. The The easiest way to install it is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).


## Tools

These the tools what I used in this project:

- [ESlint](http://eslint.org/): Linter to
- [pre-commit](https://github.com/jish/pre-commit): You can't commit without running the unit tests, and checking the linter styles.


# Testing

I used [Mocha](https://mochajs.org/) instead of the default Jest framework. [Here](https://medium.com/@thisbejim/testing-react-native-components-with-enzyme-d46bf735540#.d0f9rnwru) you can find a really great article how to setup this testing environment.

- [Mocha](https://mochajs.org/): JS testing framework
- [Chai](http://chaijs.com/): Assertion library
- [Enzyme](https://github.com/airbnb/enzyme): React testing utility
