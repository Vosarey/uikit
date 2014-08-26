# UIkit

UIkit是一个轻量级、模块化的前端框架，可快速构建强大的web前端界面。

* [UIkit中文网](http://getuikit.net) - 进一步了解 UIkit
* [@getuikit](http://weibo.com/getuikit) - 关注新浪微博
* [Issues](http://github.com/uikit/uikit/issues) - 问题反馈
* [Google+](https://plus.google.com/communities/114238665434626719878) - 分享资讯及最新作品

## Getting started

Download the [latest release](https://github.com/uikit/uikit/zipball/master) or clone the repo, `git clone git://github.com/uikit/uikit.git`.

## Bug tracker

Report bugs on [UIkit Issues](https://github.com/uikit/uikit/issues?state=open).

## Developers

First of all, install [Node](http://nodejs.org/). We use [Grunt](http://gruntjs.com) to build UIkit. If you haven't used Grunt before, you need to install the `grunt-cli` package as a global install.

```
npm install -g grunt-cli
```

If you haven't done so already, clone the UIkit git repo.

```
git clone git://github.com/uikit/uikit.git
```
Install the Node dependencies.

```
cd uikit
npm install
```

Run `grunt` to lint, build and minify the release.

```
grunt
```

The built version of UIkit will be put in the `/dist` subdirectory.

Enter the following, so Grunt will watch your working directory and compile LESS files automatically everytime you hit save.

```
grunt watch
```

## Versioning

UIkit is maintained by using the [Semantic Versioning Specification (SemVer)](http://semver.org).

## Credits

We built UIkit using popular open source projects.

* jQuery ([MIT License](http://opensource.org/licenses/MIT))
* normalize.css ([MIT License](http://opensource.org/licenses/MIT))
* FontAwesome ([CC BY 3.0 License](http://creativecommons.org/licenses/by/3.0/))

## Copyright and license

Copyright 2013 [YOOtheme](http://www.yootheme.com) GmbH under the [MIT license](LICENSE.md).
