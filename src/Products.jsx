import ProductItem from './ProductItem'
import Total from './Total'
import productsList from './productsList.json'
import EmptyMessage from './EmptyMessage'

import { useState } from 'react'

const Products = () => {
	const [flag, setFlag] = useState(false)
	let empty = false

	let totalPrice = 0.0

	const getCartCount = () => {
		let count = 0

		productsList.forEach((product) => {
			if (product.quantity > 0) {
				count++
			}
		})

		return count
	}

	const getPrice = () => {
		productsList.forEach((product) => {
			if (product.quantity > 0) {
				totalPrice += Number(product.price_number) * Number(product.quantity)
			}
		})

		if (totalPrice === 0.0) {
			empty = true
		}
	}

	getPrice()

	const updateObject = (id, quantity) => {
		if (quantity === 'remove') {
			productsList[id].quantity = 0
			getPrice()
			setFlag(!flag)
			document.getElementById('cart-count').textContent = getCartCount()

			return
		}

		productsList[id].quantity = quantity
		document.getElementById('cart-count').textContent = getCartCount()
		setFlag(!flag)
	}

	return empty ? (
		<EmptyMessage />
	) : (
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
