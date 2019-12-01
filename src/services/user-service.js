export default class UserService {

  data = [
    {
      id: 1,
      name: 'John',
      hobbies: [
        {
          id: 1,
          title: 'Stamp\'s Collecting',
        }
      ],
    },
    {
      id: 2,
      name: 'Peter',
      hobbies: [
        {
          id: 1,
          title: 'Reading Books',
        }
      ],
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