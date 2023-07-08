import React from 'react'
import ClassCounter from './Components/useState Hook/ClassCounter'
import HookCounter from './Components/useState Hook/HookCounter'
import ClassCounterTwo from './Components/useState Hook/ClassCounterTwo'
import HookCounterTwo from './Components/useState Hook/HookCounterTwo'
import HookCounterThree from './Components/useState Hook/HookCounterThree'
import HookCounterFour from './Components/useState Hook/HookCounterFour'

function UseStateHook() {

  return (
    <>
      <ClassCounter />
      <HookCounter />
      <ClassCounterTwo />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
    </>
  )
}

export default UseStateHook