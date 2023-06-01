import React from 'react'

export const MiniCards = (props) => {
  return (
    <>
      <div className="minicard">

        <div className="minicard-number">
          <p> {props.numero} </p>
        </div>

        <div className='minicard-image'>
          <img src="/Images/Icons/Silhouette.png" alt="" />
        </div>

        <div className="minicard-name">
          <p>{props.nombre}</p>
        </div>
      </div>
    </>
  )
}
