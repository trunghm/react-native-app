# ReactNative App with Redux, React-Navigation, ESlint (StandardJS)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## How to Setup

- Before setup, NodeJS and React Native CLI required
You can visit [HERE](https://facebook.github.io/react-native/docs/getting-started.html) and follows steps to install React Native CLI
- Project sourcecode using the [StandardJS](https://standardjs.com/) with [Eslint](https://eslint.org/) code quality control


**Step 1:** git clone this repo:

```
git clone https://github.com/trunghm/react-native-app.git
```

**Step 2:** cd to the cloned repo:

```
cd react-native-app
```

**Step 3:** Install the Application with

```
npm install
```

**Step 4:** Link the library

```
react-native link
```

## How to Run App

1.  cd to the repo
2.  Run Build for either OS

* for iOS, run:

  ```
  react-native run-ios
  ```

  or

  ```
  npm run i
  ```

  if running stuck on `Check dependencies`, try to run by xCode

* for Android
  * Run Genymotion then run
  ```
  react-native run-android
  ```
  or
  ```
  npm run a
  ```


## How to Build App

1.  cd to the repo
2.  Run Build for either OS

* for iOS
  ```
  Open XCode > build normal.
  ```
* for Android

  ```
  cd android
  ./gradlew assembleStagingRelease
  ```

  or

  ```
  npm run build
  ```

## License

[NexleSoft](https://www.nexlesoft.com/)
