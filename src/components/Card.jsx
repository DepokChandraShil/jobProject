import React from 'react'

const Card = ({data,index}) => {
  return (
    <div className='w-full bg-orange-200 flex-row'>
     
        <div key={index} className=' bg-orange-500'>       
          <img src={data.src} className='border border-transparent rounded-lg w-full h-[300px]'/>        
          <h1>{data.para}</h1>
        </div>
      </div>
    
  )
}

export default Card;