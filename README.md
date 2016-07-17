# SPORTDEC - News application
[![CircleCI](https://circleci.com/gh/olahakos/sportdec.svg?style=svg)](https://circleci.com/gh/olahakos/sportdec)

The aim of the application, to grab some dummy JSON files, and make a little mobile page. The page shows you a list of articles based on the source files.

I chose React Native for this assignment, because I think this is the best solution for the case. React Native creates real native components, and drives them from your JS code. Thats why you have the real native feeling when you playing with the application. That makes it much faster and native-like than other cross platform JS solutions. Although you gonna need to write 2 separate codes for iOS and Android devices, but you can use common components, models of course. I concentrated now only the iOS part, but mutate the Android from that code is just a few steps.

**Search**

I placed a search bar hidden at the top of the listing page. You can reach it, if you scroll down a bit, or with tapping the "Search" button at the top. Here you can search in the articles headline.
With the sorting button you can select specific order to show the list of articles.

**UX changes**

- For the better navigation I created a **native iOS Navigation header** at the top of the screen. It's gonna shows you where you are and you can go back to the previous page. Of course it's just for iOS. On Android the users have different gestures, and habits, so there it would looks a little bit different.
- I placed the **tab panel to the bottom** of the screen, because I think it's already too crowded on the top, and it's not the best if the two navbars are below each others. It's confusing. But it looks great at the bottom of the page.
- Thanks to React Native the users can use there usual gestures in the app. Just like if you want to go back from the article page to the news page, you just have to swipe back from the left edge of the screen.

---

## Start the app

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

After installing the dependencies we can start our test environment with the following command:
```
react-native run-ios
```

To run your application you gonna need Xcode too. The The easiest way to install it is via the [Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12).
If you have an iOS Developer account you can try the app on your phone too. Open the `/ios/sportdec.xcodeproj` file with Xcode, select you developer team, select your device from the list, and start the application.


---

## Tools

These the tools what I used in this project:

- [ESlint](http://eslint.org/): Linter to
- [pre-commit](https://github.com/jish/pre-commit): You can't commit without running the unit tests, and checking the linter styles.
- [Redux](http://redux.js.org/index.html): It makes the communication easy between two components.
- [Git Flow](https://github.com/nvie/gitflow): Makes you git repository clean, and readable.
- [RNPM](https://github.com/rnpm/rnpm): React Native Package Manager - Really useful tool to keep our dependencies linked.

---

## Data loading

I made 2 dummy files with the initial datas here:
```
/mock/news-mock.json
/mock/article-mock.json
```

You can override these files, or add new ones in the `src/config.js` file.

---

## Testing

I used [Mocha](https://mochajs.org/) instead of the default Jest framework. [Here](https://medium.com/@thisbejim/testing-react-native-components-with-enzyme-d46bf735540#.d0f9rnwru) you can find a really great article how to setup this testing environment.

- [Mocha](https://mochajs.org/): JS testing framework
- [Chai](http://chaijs.com/): Assertion library
- [Enzyme](https://github.com/airbnb/enzyme): React testing utility
