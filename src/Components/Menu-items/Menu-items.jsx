import React from 'react'
import './Menu-item.style.scss'
// export default function MenuItems({title,image,size}) {
//     return (
//         <div style={{backgroundImage:`url(${image})`}} className= {`${size} menu-item`}>
//     <div className="content">
//       <h1 className="title">{title.toUpperCase()}</h1>
//      <span className="subtitle">SHOP NOW</span>
//          </div>

//    </div>
//     )
// }

const MenuItems = ({ title, image, size }) => (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
  export default MenuItems;