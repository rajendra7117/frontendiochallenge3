import React from 'react'
import './Menu.css'
const Menu = ({list, isFeatures}) => {

  return (
    <div className='menu-card'>
            {list?.map((item) => <span key={item.name}>{isFeatures && <img src={item.icon} />}<h4>{item.name}</h4></span>)}
    </div>
  )
}

export default Menu