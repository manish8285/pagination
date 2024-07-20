import React, { useState } from 'react'

export const Desktop = ({checked,checkDesktop}) =>
    
{
    // const [ checked, setChecked ] = useState(false);

    // const checkDesktop = () => setChecked(!checked);
    
  return (
      <div className={`desktop ${checked ? 'checkedDesktop' : 'uncheckedDesktop'}`} onClick={checkDesktop}>
          
          {/* <div className='desktop-checkbox'></div> */}
      
    </div>
  )
}

