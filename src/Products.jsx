import ProductItem from './ProductItem'
import Total from './Total'
import productsList from './productsList.json'

import { useState } from 'react'

const Products = () => {
	const [flag, setFlag] = useState(false)

	let totalPrice = 0.0

	const getPrice = () => {
		productsList.forEach((product) => {
			if (product.quantity > 0) {
				totalPrice += Number(product.price_number) * Number(product.quantity)
			}
		})

		if (totalPrice === 0.0) {
			totalPrice = 0.0
		}
	}

	getPrice()

	const updateObject = (id, quantity) => {
		if (quantity === 'remove') {
			productsList[id].quantity = 0
			getPrice()
			setFlag(!flag)

			return
		}

		getPrice()
		productsList[id].quantity = quantity
		setFlag(!flag)
	}

	return (
		<>
			<div className='flex flex-col gap-8'>
				{productsList.map(
					(product) =>
						product.quantity > 0 && (
							<ProductItem
								key={product.id}
								id={product.id}
								{...product}
								updateObject={updateObject}
							/>
						)
				)}
			</div>
			<Total totalPrice={totalPrice} />
		</>
	)
}
export default Products
