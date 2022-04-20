const shell = require('shelljs');
// const package = require('./package.json');
// const peerDependencies = [''];
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
