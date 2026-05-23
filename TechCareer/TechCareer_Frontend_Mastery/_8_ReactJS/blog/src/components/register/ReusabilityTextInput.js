import React from 'react'

const ReusabilityTextInput=({label,type,className,name,value,onChange,error}) => {
  return (
    <div className="form-group mb-4">
          <label>{label}</label>
          <input type={type}
          name={name} 
          
          className={className}
          onChange={onChange}
          value={value}/>
          {error && <p style={{color:'red'}}>{error}</p>}
        </div>
  )
}

// Export
export default ReusabilityTextInput