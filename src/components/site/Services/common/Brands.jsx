import React from 'react'

function Brands() {

    const brands=[
        {id:1,path:"/Services/Salesforce/Brands/lava.png"},
        {id:2,path:"/Services/Salesforce/Brands/microsoft.png"},
        {id:3,path:"/Services/Salesforce/Brands/Alta.png"},
        {id:4,path:"/Services/Salesforce/Brands/JLL.png"},
        {id:5,path:"/Services/Salesforce/Brands/blood.png"},
    ]
  return (
    <section className=' pb-10 bg-[#00091A]'>
        <div className=' flex  gap-20 justify-center max-w-7xl w-[86%] mx-auto'>
  {brands.map((item,i)=>
  <img key={i} src={item?.path} alt={item} className=" w-[110px] max-h-[100px]   " />
) }
        </div>
    </section>
  )
}

export default Brands