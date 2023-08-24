import React from 'react'

export default function Card() {
  return (
    <div>
      <div><div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuW70mvoWw125KmIAHZcleOziCIl2yGvFQ2lg9EhXZoA" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title ">Chicken Thali</h5>
          <p className="card-text text-danger">20% off </p>
          <div className='container w-100'></div>
          <select className='m-2 h-100  bg-success rounded'>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              )
            })}
          </select>
          <select className='m-2 h-100  bg-success rounded'>
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className='d-inline h-100 fs-5'>
            Total Price 750rs
          </div>
        </div>
      </div></div>
    </div>
  )
}
