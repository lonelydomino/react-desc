import React, { Component } from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
    domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
    storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
  });

export class ShopProvider extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default ShopProvider
