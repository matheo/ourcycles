# OurCycles
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

App built with Angular and Three.js to track and gain understanding of our Cycles.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Gratitude](#gratitude)
- [Contributors](#contributors)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Installation

This project uses `yarn` as dependency manager.  
After run `yarn` you can execute the available scripts of `package.json`

## Development

First ensure that the project has been built `nx build mobile` and copy the build output
to the native platforms with `nx run mobile:copy:android` or `nx run mobile:copy:ios`.

To sync the output and the native dependencies use `nx run mobile:sync:android`.
Finally open the native platform in its respective IDE with `nx run mobile:open:android`.

Running capacitor commands with `nx run mobile:cap --cmd="add ios"`
and `firebase-tools` (installed globally) with `nx run $project:firebase --cmd $command`.

## Contributing

- Star this GitHub repo :star:
- Share ideas and experience in the [Discussions](https://github.com/matheo/ourcycles/discussions)
- Create pull requests to add or extend the existing features
- Report any existing issues that you find

## Gratitude

- Sander Blue for his [scaled solar system][1]
- Philipp John with his [angular-three.js template][2]

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

## Troubleshooting

- DO NOT update the Android Graddle version even if Android Studio insists. Capacitor takes care of the working version.
- Android Studio complaining about non-Gradle modules next to Android-Gradle modules:  
  Close the IDE, delete the `.idea` directory, delete the all `.iml` files, run `<app>:mobile:cap open android` again.  
  <https://stackoverflow.com/a/53920901/885259>

## License

[MIT](LICENSE)

[1]: https://github.com/sanderblue/solar-system-threejs
[2]: https://github.com/JohnnyDevNull/ng-three-template

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://matheo.co"><img src="https://avatars.githubusercontent.com/u/260185?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mateo Tibaquirá</b></sub></a><br /><a href="#projectManagement-matheo" title="Project Management">📆</a> <a href="#tool-matheo" title="Tools">🔧</a> <a href="#ideas-matheo" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!