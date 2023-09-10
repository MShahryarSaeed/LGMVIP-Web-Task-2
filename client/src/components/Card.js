import React from 'react'

const Card = ({data}) => {
  return (
    <section className="dataSection">
    {data.map((item) => (
      <div key={item.id} className="data">
        <img className="img" src={item.avatar} alt="" />
        <div className="text">
          <p className="name text-md">
            {item.first_name} {item.last_name}
          </p>
          <p className="email">{item.email}</p>
        </div>
      </div>
    ))}
  </section>
  )
}

export default Card