import React from 'react'

function FormGroup({...props}) {
  return (
    <div className='flex flex-col'>
      <h3>{props.label}</h3>
      <input
        type={props.type}
        name={props.name}
        className="rounded-md mb-4"
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default FormGroup