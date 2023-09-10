import React from 'react'

const Textred = (error) => {
  return (
    <div className='text-red-500'>{error.children}</div>
  )
}

export default Textred;