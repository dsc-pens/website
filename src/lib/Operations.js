import Firebase from './Firebase'
import Octokit from './Octokit'

export async function fetchGalleryImages(path) {
  const res = await Octokit.repos.getContents({
    owner: 'dsc-pens',
    repo: 'gallery',
    path,
  })

  return res.data
    .map(d => {
      const { download_url } = d
      return {
        name: `${download_url}`.split('/').pop(),
        url: download_url,
      }
    })
    .filter(d => /\.webp$/.test(d.name))
}

export async function fetchRef(ref) {
  const res = await Firebase.database()
    .ref(ref)
    .once('value')
  return await res.val()
}
