import React, { Component } from 'react'
import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';
import ShopData from './Shopdata';

export default class ShopComponent extends Component {
    constructor(){
        super();
        this.state={
            collections:ShopData
        }
    }
    render() {
        const {collections} =this.state
        return (
            <div className="shop-page">

                {
                    collections.map(({id,...otherCollection})=>(
                        <CollectionPreview key={id} {...otherCollection}/>
                    ))
                }
                
            </div>
        )
    }
}
