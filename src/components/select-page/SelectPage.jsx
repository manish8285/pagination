import React, { useState } from 'react'
import { Desktop } from '../desktop/Desktop'

export const SelectPage = ({ children }) =>
{
  const [ checked, setChecked ] = useState(false);
  const checkDesktop = () => setChecked(!checked);
  return (
      <div onClick={checkDesktop} onMouseOver={()=>"hover1"} className='all-pages-container'>
          <div className='all-pages-text'>
              <p>{children}</p>
          </div>
          <div>
              <Desktop checked={checked} checkDesktop={checkDesktop}  />
          </div>
      
    </div>
  )
}

