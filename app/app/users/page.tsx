import React from 'react'
  interface User {
    id: number;
    name: string;
    username: string;
  }

const UserPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    //? if the data changes frequently
    // { cache: 'no-store'}
    //? if you need the datab always fresh, set the value in seconds
    // only implemented in the fetch function
    { next: { revalidate: 2 }}
  )
  
  const users: User[] = await res.json()
  return (
    <div>
      <h1>{ new Date().toLocaleString() }</h1>
      <ul>
        {users.map(user => <li key={user.id} >Name:   {user.name} ||  Username:   {user.username} </li>)}
      </ul>
    </div>
  )
}

export default UserPage