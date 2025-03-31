import React from 'react'

function Practicefile() {
    const users=[
        {name:"Deeksha",age:23},
        {name:"Alice",age:30},
        {name:"charles",age:21},
        {name:"peter",age:24}
    ]
  return (
    <div className='main-div'>
    <h1>User list</h1>
    <ul>
        <li>{users.map((values,index)=>{
return(
<li key={index}>{values.name}-{values.age}years</li>
)
        })}</li>
    </ul>
    </div>
  )
}

export default Practicefile