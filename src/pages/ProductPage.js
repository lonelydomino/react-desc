import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const ProductPage = () => {
    const { handle } = useParams()

    const { fetchProductsWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(()=> {
        fetchProductsWithHandle(handle)
    }, [fetchProductsWithHandle, handle])

    if(!product.title) return <div>Loading...</div>

    return (
        <div>
            <Link>{ product.title }</Link>
        </div>
    )
}

export default ProductPage
