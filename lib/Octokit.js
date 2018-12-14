import Octokit from '@octokit/rest'

const OctokitInstance = new Octokit()

OctokitInstance.authenticate({
  type: 'token',
  token: process.env.GITHUB_TOKEN,
})

export default OctokitInstance
