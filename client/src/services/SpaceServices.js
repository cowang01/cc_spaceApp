const baseURL = 'http://localhost:3000/api/space/'


export default {
  getSpace(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  getSpaceBody(id){
    return fetch(baseURL + id)
    .then(res => res.json())
  }

}
