import React from 'react'

const Prod_details = (product) => {
  return (
    <div>
        <pre>{JSON.stringify(product)}</pre>
      <h1>Products</h1>
    </div>
  )
}

export default Prod_details
