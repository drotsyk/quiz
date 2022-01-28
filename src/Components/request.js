export const request = (id) => {
  return fetch(`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=easy&type=boolean`)
  .then(res => {
      if(!res.ok){
          throw new Error(`${res.status} - ${res.statusText}`)
      }
      return res.json()
  })
}
