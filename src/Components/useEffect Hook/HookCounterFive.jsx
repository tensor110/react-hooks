// useEffect with
import React, { useEffect, useState } from 'react'

function HookCounterFive() {
    const[count,setCount]= useState(0)
    const tick = () =>{
        setCount(count+1)
    }
    useEffect(()=>{
        const interval= setInterval(tick,1000)
        return () =>{
            clearInterval(interval)
        }
    })
  return (
    <div>
      {count}
    </div>
  )
}

export default HookCounterFive
