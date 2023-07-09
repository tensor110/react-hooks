import React from 'react'
import ClassCounterOne from './Components/useEffect Hook/ClassCounterOne'
import HookCounterOne from './Components/useEffect Hook/HookCounterOne'
import ClassCounterTwo from './Components/useEffect Hook/ClassCounterTwo'
import HookCounterTwo from './Components/useEffect Hook/HookCounterTwo'
import ClassCounterThree from './Components/useEffect Hook/ClassCounterThree'
import HookCounterThree from './Components/useEffect Hook/HookCounterThree'
import HookCounterFour from './Components/useEffect Hook/HookCounterFour'
import ClassCounterFive from './Components/useEffect Hook/ClassCounterFive'
import HookCounterFive from './Components/useEffect Hook/HookCounterFive'
import FetchingOne from './Components/useEffect Hook/FetchingOne'
import FetchingTwo from './Components/useEffect Hook/FetchingTwo'

function UseEffectHook() {
  return (
    <div>
      <ClassCounterOne />
      <HookCounterOne />
      <ClassCounterTwo />
      <HookCounterTwo />
      <ClassCounterThree />
      <HookCounterThree />
      <HookCounterFour />
      <ClassCounterFive />
      <HookCounterFive />
      <FetchingOne />
      <FetchingTwo />
    </div>
  )
}

export default UseEffectHook
