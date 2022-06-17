#!/usr/bin/env zx

/**
 * 发布之前整理package.json的peerJson的依赖
 */
let { dependencies } = await fs.readJson('./package.json')
let componentPackage = await fs.readJson('./packages/package.json')

const peerDependencies = ['tailwindcss', '@mui/material'];
let peer = {}
peerDependencies.forEach((item) => {
    peer[item] = dependencies[item]
})
componentPackage.peerDependencies = peer
try {
    await fs.writeJson('./packages/package.json', componentPackage, {spaces: 2})
} catch {
    console.log('error')
}
/**
 * copy文件
 */
fs.copySync('src/components/', 'packages')
fs.copySync('plugin/', 'packages/plugin');
/**
 * 进入packages进行发布
 */
cd('packages')
try {
    await $`npm publish`
    echo(chalk.green('🍺 Dali-component发布成功 🍺'));
} catch (e) {
    echo(chalk.red('error-->发布失败'))
}



