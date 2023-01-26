import { execSync } from 'child_process'
import { resolve } from 'path'
import { getArgv } from './utils'

async function run() {
  const { name } = getArgv()
  const pkgPath = resolve(__dirname, `../packages/${name}`)
  const cmds = [
    `cd ${pkgPath}`,
    `conventional-changelog -p angular -i CHANGELOG.md -s`,
  ]
  const cmd = cmds.join(' && ')
  execSync(cmd)
}
run().catch((e) => {
  console.log(e)
})