export default class UserService {

  data = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Peter',
    },
  ]

  getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 700)
    })
  }

}