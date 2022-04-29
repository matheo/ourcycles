# OurCycles

App built with Angular and Three.js

## Installation

This project uses `yarn` as dependency manager.  
After run `yarn` you can execute the available scripts of `package.json`

## Usage

First ensure that the project has been built `nx build mobile` and copy the build output
to the native platforms with `nx run mobile:copy:android` or `nx run mobile:copy:ios`.

To sync the output and the native dependencies use `nx run mobile:sync:android`.
Finally open the native platform in its respective IDE with `nx run mobile:open:android`.

Running capacitor commands with `nx run mobile:cap --cmd="add ios"`
and `firebase-tools` (installed globally) with `nx run $project:firebase --cmd $command`.

## Thanks

* Sander Blue with his [scaled solar system][1]
* Philipp John with his [angular-three.js template][2]

## ToDo

* Setup Github Actions with cached dependencies
* Publish beta app on Google Play Store
* Publish website on Firebase(?)

[1]: https://github.com/sanderblue/solar-system-threejs
[2]: https://github.com/JohnnyDevNull/ng-three-template
