import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

import { useState } from 'react'

const ProductItem = ({ name, src, price }) => {
	const [quantity, setQuantity] = useState(1)

	const increaseQuantity = () => {
		setQuantity(quantity + 1)
	}

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		} else {
		}
	}

	const removeItem = () => {}

	return (
		<div className='flex justify-between w-[30rem]'>
			<div className='flex gap-8'>
				<img src={src} alt={name} className='w-28' />
				<div>
					<h3 className='text-lg font-semibold'>{name}</h3>
					<p className='font-medium text-zinc-500'>{price}</p>
					<button className='mt-2 text-red-500 duration-150 hover:text-red-700'>
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
