const { error, log } = console
const { exec } = require('child_process')
const fs = require('fs')

const loadDevDeps = () =>
  JSON.parse(fs.readFileSync('./package.json')).devDependencies

const args = ['add', ...Object.keys(loadDevDeps()), '--dev', '--silent']
const { stderr, stdout } = exec(['yarn', ...args].join(' '))

stdout.on('data', data => log(data))
stderr.on('data', err => error(err))

stdout.on('close', () => {
  log('Dependencies has been updated:\n')
  const deps = loadDevDeps()
  Object.keys(deps).forEach(dep => {
    log(`- ${dep}: ${deps[dep]}`)
  })
  log()
})
