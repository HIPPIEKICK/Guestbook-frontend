

export const PostData = (type, userData) => {
  let url = 'http://localhost:8080/'
  let stringifyedJSON = JSON.stringify(userData)
  return new Promise((resolve, reject) => {
    fetch(url + type, {
      method: 'POST',
      body: stringifyedJSON,
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })

  })
}