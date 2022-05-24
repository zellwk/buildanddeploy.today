import path from 'path'

export function ContentMap (array) {
  const obj = {}
  for (const item of array) {
    const basename = path.basename(item.file)
    const ext = path.extname(item.file)
    const filename = basename.replace(ext, '')
    obj[filename] = item.Content
  }
  return obj
}
