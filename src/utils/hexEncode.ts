// https://stackoverflow.com/a/21648161/712005
export default (string: string) => {
  let i: number
  let result: string = ''
  for (i = 0; i < string.length; i++) {
    const hex = string.charCodeAt(i).toString(16)
    result += ('000' + hex).slice(-4)
  }

  return result
}
