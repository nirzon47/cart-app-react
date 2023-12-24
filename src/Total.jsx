const Total = ({ totalPrice, productsList, updateObject }) => {
	const clearCart = () => {
		productsList.forEach((product) => {
			updateObject(product.id, 0)
		})
	}

	return (
		<div className='flex flex-col items-center'>
			<div className='bg-black h-[1px] md:w-[30rem] mt-4'></div>
			<div className='flex justify-between items-center md:w-[30rem] mt-4'>
				<p className='text-xl font-bold text-zinc-700'>Total</p>
				<p className='text-xl font-bold text-primary'>${totalPrice}</p>
			</div>
			<button className='btn btn-error btn-sm' onClick={clearCart}>
				Clear Cart
			</button>
		</div>
	)
}
export default Total
