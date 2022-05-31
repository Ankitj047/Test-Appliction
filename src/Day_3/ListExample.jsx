import React from 'react'
import StudentDetails from './StudentDetails'

const ListExample = () => {
    // let studentNames = ['Mustafa', 'Ankit', 'Ram', 'Sham']
    let studentList = [
        {
            "id": 1,
            "name": "Mustafa",
            "username": "Bret",
            "email": "Sincere@april.biz"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
        }
    ]
    let StudentList = studentList.map((user) => <StudentDetails user={user} />)

  return (
      <div>
          ListExample
          {
              StudentList
          }
    </div>
  )
}

export default ListExample