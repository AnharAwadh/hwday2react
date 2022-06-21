import React from 'react'

const Resulit=({Resulit})=> {


  return (
    <div> 
         <input
    type="text"
    className="form-control mt-2 "
    aria-label="Server"
    value={Resulit}
    disabled
    readonly
  />
  </div>
  )
}

export default Resulit