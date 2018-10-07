// https://stackoverflow.com/a/21648161/712005
export default (string: string) => {
  let j: number
  const hexes: Array<string> = string.match(/.{1,4}/g) || []
  let back: string = ''
  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16))
  }

  return back
}
