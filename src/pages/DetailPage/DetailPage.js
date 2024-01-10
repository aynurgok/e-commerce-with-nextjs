import React from 'react'
import Header from '@/components/Header/Headercomponents'
import Navigation from '@/components/Navigation/Navigationcomponents'

const DetailPage = () => {
  return (
    <div>
      <Header />
        <Navigation />
        <div className=' mt-5'>
          <div className='flex justify-center items-center'>
            <div className='lg:w-2/12 md:w-2/12 sm:w-2/12 p-3 border text-dark hidden md:block'>
              {/* <SideBar/> */}
            </div>
            <div className='lg:w-10/12 md:w-10/12 sm:w-10/12 md:pl-4'>
             {/* {} */}
            </div>
          </div>
       </div>
    </div>
  )
}

export default DetailPage