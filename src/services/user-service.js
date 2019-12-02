export default class UserService {

  data = [
    {
      id: 1,
      name: 'John',
      hobbies: [
        {
          id: 1,
          title: 'Stamp\'s Collecting',
          passion: 'High',
          year: '1999',
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
          passion: 'Low',
          year: '2007',
        },
        {
          id: 2,
          title: 'Puzzle',
          passion: 'Very-High',
          year: '2007',
        },
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