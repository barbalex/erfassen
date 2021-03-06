// in development should return local path
export default () => {
  if (typeof window === 'undefined') {
    return 'https://erfassen.ch:5984'
  }
  const hostnameWithoutWww = window.location.hostname.replace('www.', '')
  const isLocalhost = hostnameWithoutWww === 'localhost'
  const hostname = isLocalhost ? 'localhost' : window.location.hostname
  const couchUrl = isLocalhost
    ? `http://${hostname}:5984`
    : `https://erfassen.ch:5984`

  return couchUrl
}
