import { serverUrl } from '../misc/config'
/* global fetch */

export default async (data) => {
  try {
    const response = await fetch(serverUrl, {
      method: 'POST',
      body: JSON.stringify({
        action: 'pay',
        ...data
      })
    })
    return await response.json()
  } catch (e) {
    console.log(e)
    return { error: true }
  }
}
