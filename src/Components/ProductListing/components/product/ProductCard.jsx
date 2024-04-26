import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    const { name, price, pid } = props
    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <Link to={`/product/${pid}`}>view</Link>
        </div>
    )
}

export default memo(ProductCard)