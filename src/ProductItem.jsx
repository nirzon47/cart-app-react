import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

const ProductItem = () => {
	return (
		<div className='flex justify-between w-[30rem]'>
			<div className='flex gap-8'>
				<img
					src='https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg'
					alt='Samsung Galaxy S23 Ultra'
					className='w-28'
				/>
				<div>
					<h3 className='text-lg font-semibold'>Samsung Galaxy S23 Ultra</h3>
					<p className='font-medium text-zinc-500'>$1,299</p>
					<button className='mt-2 text-red-500 duration-150 hover:text-red-700'>
						Remove
					</button>
				</div>
			</div>
			<div className='flex flex-col items-center justify-center gap-1'>
				<MdKeyboardArrowUp className='text-2xl text-blue-600 cursor-pointer hover:text-blue-800' />
				<span className='text-xl font-medium text-zinc-800'>1</span>
				<MdKeyboardArrowDown className='text-2xl text-blue-600 cursor-pointer hover:text-blue-800' />
			</div>
		</div>
	)
}

export default ProductItem
