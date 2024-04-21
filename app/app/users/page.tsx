import React from 'react'

  interface User {
    id: number;
    name: string;
    username: string;
  }

const UserPage = async () => {
  const res = await fetch('https://drive.google.com/file/d/1opSBDuvQqK46X4zeMBYR_ezAe0odbzsU/view?usp=drive_link')
  console.log(res)
  const users = res.json()
  return (
    <div>{users}</div>
  )
}

export default UserPage