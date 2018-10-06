// in development should return local path

const hostnameWithoutWww: string = window.location.hostname.replace('www.', '')
const isLocalhost: boolean = hostnameWithoutWww === 'localhost'
const hostname = isLocalhost ? 'localhost' : window.location.hostname
const couchUrl: string = isLocalhost
  ? `http://${hostname}:5984/erfassen`
  : `https://erfassen.ch:5984/erfassen`

export default couchUrl
