import React from 'react'
import './Menu-item.style.scss'
import {withRouter} from 'react-router-dom';
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

const MenuItems = ({ title, imageUrl, size,history,match,linkUrl }) => (
    <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
  export default withRouter(MenuItems);


  // Here we used the withRouter for passing the props otherwise the props drilling will occur
  // also we customize the directory component with the spread operator
  