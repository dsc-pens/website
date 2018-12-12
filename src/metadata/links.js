const links = [
  {
    name: 'dsc-gh',
    url: 'https://github.com/dsc-pens',
  },
  {
    name: 'firebase',
    url: 'https://firebase.google.com',
  },
  {
    name: 'flutter',
    url: 'https://flutter.io',
  },
  {
    name: 'join-refferal',
    url: 'https://bit.ly/dscpens-register',
  },
  {
    name: 'kotlin',
    url: 'https://kotlinlang.org',
  },
  {
    name: 'pwa',
    url: 'https://developers.google.com/web/progressive-web-apps',
  },
  {
    name: 'unity-ar-vr',
    url: 'https://unity3d.com/unity/features/multiplatform/vr-ar',
  },
]

export const getLink = name => links.find(l => l.name === name).url

export default links
