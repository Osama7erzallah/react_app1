import React from 'react'
import Product from './Product.jsx'

export default function Products() {
  const products = [
        {id:1,title:'product one',desc:'this is product one'},
        {id:2,title:'product two',desc:'this is product two'},
        {id:3,title:'product three',desc:'this is product three'},
        {id:3,title:'product four',desc:'this is product four'},

    ];


  return (

     <div className="container bb">
        <div className='row mt-5 row-gap-2 '>
          
          {

          products.map((product)=>
          {
   return <Product {...product} Key={products.id}/>
           } )
           
           }
   


        </div></div>
  )
}
