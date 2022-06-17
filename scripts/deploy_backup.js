#!/usr/bin/env zx
// 发布包 shell.js

// 把相关的文件发包package， 然后deploy
const { fsyncSync } = require('fs-extra');
const shell = require('shelljs');
const projectPackage = require('../package.json');
const  componentPackage= require('../packages/package.json');
const peerDependencies = ['tailwindcss'];
let peerJson = {}
peerDependencies.forEach((item, index) => {
    peerJson["tailwindcss"] = projectPackage.dependencies.tailwindcss
})
componentPackage.peerDependencies = peerJson


//再把这些白名单的内容写进去到一个package/package.json
shell.cp('-R', 'src/components/', 'packages');
shell.cp('-R', 'plugin/', 'packages');
shell.cd('packages');




// if (shell.exec('npm publish"').code !== 0) {
//   shell.echo('Error: Git commit failed');
//   shell.exit(1);
// } else {
//   console.log('🍺 solv-custom-tailwind-plugin发布成功 🍺');
// }
