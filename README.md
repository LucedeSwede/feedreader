# Feed Reader + Jasmine Test Suites

Web app that reads RSS feeds! By default, it includes the following feeds:

1. [Udacity Blog](http://blog.udacity.com/feed)
2. [CSS Tricks](http://feeds.feedburner.com/CssTricks)
3. [HTML5 Rocks](http://feeds.feedburner.com/html5rocks)
4. [Linear Digressions](http://feeds.feedburner.com/udacity-linear-digressions)

## How to Run the Feed Reader

1. Clone this repository to your computer.
2. In the feedreader folder, open index.html.

## How to Add Your Own RSS Feeds

1. In the feedreader folder, go to the js folder, then open app.js.
2. You will see the following code:

```
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
    }, {
        name: 'CSS Tricks',
        url: 'http://feeds.feedburner.com/CssTricks'
    }, {
        name: 'HTML5 Rocks',
        url: 'http://feeds.feedburner.com/html5rocks'
    }, {
        name: 'Linear Digressions',
        url: 'http://feeds.feedburner.com/udacity-linear-digressions'
    }
];
```

3. Add a new object to the `allFeeds` array, for example:

```
var allFeeds = [
    {
        name: 'Udacity Blog',
        url: 'http://blog.udacity.com/feed'
    }, {
        name: 'CSS Tricks',
        url: 'http://feeds.feedburner.com/CssTricks'
    }, {
        name: 'HTML5 Rocks',
        url: 'http://feeds.feedburner.com/html5rocks'
    }, {
        name: 'Linear Digressions',
        url: 'http://feeds.feedburner.com/udacity-linear-digressions'
    }, {
        name: 'Give your own favorite RSS feed a name!',
        url: 'Your own favorite RSS feed URL goes here!'
    }
];
```

4. Save changes to feedreader/js/app.js and refresh feedreader/index.html. Enjoy! :)

## Jasmine Test Suites Included

Various test suites using [Jasmine](http://jasmine.github.io/) are also included in index.html. These tests check the various functionalities of the feed reader if they function as intended.

This project is done under the [Front-End Web Developer Nanodegree Program](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) of [Udacity](https://www.udacity.com/). Starter code available [here](https://github.com/udacity/frontend-nanodegree-feedreader).
