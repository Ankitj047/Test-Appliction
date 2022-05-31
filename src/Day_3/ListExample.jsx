import React from 'react'
import StudentDetails from './StudentDetails'

const ListExample = () => {
    // let studentNames = ['Mustafa', 'Ankit', 'Ram', 'Sham']
    let studentList = [
        {
            "id": 1,
            "name": "Mustafa",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            }
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
    // let StudentList = studentList.map((user) => <StudentDetails user={user} />)
    let StudentLists =  studentList.map((name1)=> <h1>{name1.username}</h1>)
  return (
      <div>     
ListExample 
{StudentLists}
    </div>
  )
}

export default ListExample