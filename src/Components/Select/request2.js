export const request2 = () => {
  return fetch(`https://opentdb.com/api_category.php`)
  .then(res => {
      if(!res.ok){
          throw new Error(`${res.status} - ${res.statusText}`)
      }
      
      return res.json()
  })
}
