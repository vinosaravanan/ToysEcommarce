
import React from 'react'

function Demo({count, setCount}) {

  return (
    <div>
      <h1>This is Yours Demo{count}</h1>
      <button onClick={()=> setCount(count + 1)}>click</button>
      </div>
  )
}

export default Demo

