const Total = ({ totalPrice }) => {
	return (
		<div>
			<div className='bg-black h-[1px] md:w-[30rem] mt-4'></div>
			<div className='flex justify-between items-center md:w-[30rem] mt-4'>
				<p className='text-xl font-bold text-zinc-700'>Total</p>
				<p className='text-xl font-bold text-primary'>${totalPrice}</p>
			</div>
		</div>
	)
}
export default Total
