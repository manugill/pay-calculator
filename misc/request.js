/* global fetch */

export default async (action, data) => {
  try {
    const response = await fetch(`/api/${action}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    return await response.json()
  } catch (e) {
    console.log(e)
    return { error: true }
  }
}
