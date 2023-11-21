import {React, useContext} from 'react'
import buttonContext from '../context/buttonContext'
function Result() {
  const {count} = useContext(buttonContext);
  return (
    <span className='p-4 text-xl bg-zinc-700 text-white'>{count}</span>
  )
}

export default Result