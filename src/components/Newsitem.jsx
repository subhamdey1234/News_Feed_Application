import React from 'react'
import img from '../news.jpg';
function Newsitem({title,description,src,url}) {
  return (
    <div style={{
boxShadow:"0 0 20px wheat"      
    }} className="card bg-white mt-3 w-96 rounded-md border-2 border-white">
  <figure>
    <img className='h-[300px] w-[300px]'
      src={src?src:img}
     />
  </figure>
  <div className="card-body bg-slate-800 rounded-md mb-[3px]">
    <h2 className="card-title underline text-green-400">{title}</h2>
    <p className=' text-white font-semibold'>{description}</p>
    <div className="card-actions justify-end">
     <a href={url}><button className="btn btn-primary" >Read More</button></a>
    </div>
  </div>
</div>
  )
}

export default Newsitem
