import React from 'react'

const Validation = (props) => {
  return (
    <div className="validation" role="alert">
      {props.children}
    </div>
  )
}

export default Validation;
