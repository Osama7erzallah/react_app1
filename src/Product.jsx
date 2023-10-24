import React from 'react'

export default function Product(props) {
  return (
  
<div className="col-lg-4 ">
    <div className="card text-bg-secondary " style={{maxWidth: '18rem'}}>
    <div className="card-header">Osama Herzallah</div>
    <div className="card-body">
      <h5 className="card-title"> {props.title}</h5>
      <p className="card-text">{props.desc}</p>
    </div>
  </div>
</div>

  )
}
