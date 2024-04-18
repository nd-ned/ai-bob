export const parseQuery = (search: string) => {
  const query = new URLSearchParams(search)

  const obj: Record<string, string> = {}

  query.forEach((value, key) => {
    obj[key] = value
  })

  return obj
}

export const stringifyQuery = (obj: Record<string, string>) => {
  const searchParams = new URLSearchParams()

  Object.entries(obj).forEach(([key, value]) => {
    searchParams.append(key, value)
  })

  return searchParams.toString()
}
