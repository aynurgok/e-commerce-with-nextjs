import React from 'react'
import Input from '../../Input/Input'

const Price = () => {
  return (
    <div className='price-area'>
        <div className='flex items-center  gap-3 mb-3'>
        <Input />
        <p>All</p>
      </div>
      <div className='flex items-center  gap-3 mb-3'>
        <Input />
        <p>$0-$100</p>
      </div>
      <div className='flex items-center  gap-3 mb-3'>
        <Input />
        <p>$100-$500</p>
      </div>
      <div className='flex items-center  gap-3 mb-3'>
        <Input />
        <p>$500-$1000</p>
      </div>
      <div className='flex items-center  gap-3 mb-3'>
        <Input />
        <p>Over $1000</p>
      </div>
    </div>
  )
}

export default Price