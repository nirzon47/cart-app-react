import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import { useState } from 'react'

const ProductItem = ({ id, name, src, price, updateObject }) => {
	const [quantity, setQuantity] = useState(1)

	const increaseQuantity = () => {
		const updatedQuantity = Number(quantity) + 1
		setQuantity(updatedQuantity)
		updateObject(id, updatedQuantity)
	}

	const decreaseQuantity = () => {
		const updatedQuantity = Number(quantity) - 1
		setQuantity(updatedQuantity)
		updateObject(id, updatedQuantity)
	}

	const removeItem = () => {
		updateObject(id, 'remove')
	}

	return (
		<div className='flex justify-between md:w-[30rem]'>
			<div className='flex items-center gap-8'>
				<img src={src} alt={name} className='h-20 md:h-auto md:w-28' />
				<div>
					<h3 className='text-lg font-semibold'>{name}</h3>
					<p className='font-medium text-zinc-500'>{price}</p>
					<button
						className='mt-2 text-red-500 duration-150 hover:text-red-700'
						onClick={removeItem}
					>
						Remove
					</button>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center gap-1'>
				<button onClick={increaseQuantity}>
					<MdKeyboardArrowUp className='text-2xl text-blue-600 cursor-pointer hover:text-blue-800' />
				</button>
				<span className='text-xl font-medium text-zinc-800'>{quantity}</span>
				<button onClick={decreaseQuantity}>
					<MdKeyboardArrowDown className='text-2xl text-blue-600 cursor-pointer hover:text-blue-800' />
				</button>
			</div>
		</div>
	)
}

export default ProductItem
