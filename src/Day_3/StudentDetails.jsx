import React from 'react'

function StudentDetails({user}) {
    // let {user} = props
  return (
      <h1> My ID is {user.id} and My Name is {user.name}. Contact Me on {user.email}. My Geo Location is { user }</h1>
  )
}

export default StudentDetails