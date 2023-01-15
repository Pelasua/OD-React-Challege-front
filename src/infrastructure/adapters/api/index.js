import { http } from '../../../domain/repositories/http'

const get = async (url) => {
  const result = await fetch(url, {
    method: http.get.method,
    ...http.get.headers
  })

  return result.json()
}

export const api = {
  get
}
