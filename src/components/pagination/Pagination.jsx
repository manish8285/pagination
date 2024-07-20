import React from 'react'
import { SelectPage } from '../select-page'
import { Separator } from './separator'
import { ButtonDefault } from '../buttons/button-default/ButtonDefault'

export const Pagination = () => {
  return (
    <div className='card pagination-card'>
      <SelectPage >All Pages</SelectPage>
      <div className='comp-container'>
      <Separator />
      </div>
      <div >
        <SelectPage>Page 1</SelectPage>
        <SelectPage>Page 2</SelectPage>
        <SelectPage>Page 3</SelectPage>
        <SelectPage>Page 4</SelectPage>
      </div>
      <div className='comp-container'>
      <Separator />
      </div>
      <div className='comp-container'>
      <ButtonDefault >Done</ButtonDefault>
      </div>
      
      
    </div>
  )
}

