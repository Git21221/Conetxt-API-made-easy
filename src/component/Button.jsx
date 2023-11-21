import React from 'react'
import { useContext } from 'react'
import buttonContext from '../context/buttonContext'
function Button() {
  const {count, setCount} = useContext(buttonContext)
  const click = () => {
    setCount(count + 1);
  }
  return (
    <button className='p-4 m-4 text-xl bg-zinc-700 text-white' onClick={click}>Increment (+)</button>
  )
}

export default Button