/** 把 from 挪到 to 的位置；两个 key 任一不存在时原样返回。 */
export function moveKey(keys: string[], from: string, to: string) {
  const fromIndex = keys.indexOf(from)
  const toIndex = keys.indexOf(to)
  if (fromIndex === -1 || toIndex === -1) return keys
  const next = [...keys]
  next.splice(toIndex, 0, next.splice(fromIndex, 1)[0])
  return next
}
