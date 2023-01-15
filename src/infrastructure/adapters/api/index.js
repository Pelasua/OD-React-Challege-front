import { http } from '../../../domain/repositories/http'

const get = async (url) => {
  const response = await fetch(url, {
    method: http.get.method,
    ...http.get.headers
  })

  return await response.json()
}

export const api = {
  get
}
