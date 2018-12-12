import Octokit from '@octokit/rest'

const octo = new Octokit()
octo.authenticate({
  type: 'token',
  token: process.env.GITHUB_TOKEN,
})

export default octo
