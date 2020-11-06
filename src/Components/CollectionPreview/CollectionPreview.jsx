import React from 'react'
import './style.scss';
import CollectionItem from '../collectionItem/CollectionItem'

export default function CollectionPreview({title,items}) {
    return (
        <div className="collection-preview">
            <h1 className="title"> {title.toUpperCase()}</h1>
            
            <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
            
        </div>
    )
}
